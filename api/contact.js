// Vercel serverless function. The Resend API key lives only in server-side
// env vars (RESEND_API_KEY) and is never bundled into the browser build.

const MAX = { name: 100, email: 254, message: 2000 }
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map() // best-effort per-instance rate limit

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

const isRateLimited = (ip) => {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 1000) {
    for (const [key, times] of hits) if (!times.some((t) => now - t < WINDOW_MS)) hits.delete(key)
  }
  return recent.length > MAX_PER_WINDOW
}

const isAllowedOrigin = (req) => {
  const origin = req.headers.origin
  if (!origin) return false
  const allowed = (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean)
  if (origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) return true
  const host = req.headers.host
  return origin === `https://${host}` || allowed.includes(origin)
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }
  if (!isAllowedOrigin(req)) return res.status(403).json({ error: 'Forbidden' })

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) return res.status(500).json({ error: 'Email service is not configured' })

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim()
  if (isRateLimited(ip)) return res.status(429).json({ error: 'Too many requests. Please try again later.' })

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body
  if (!body || typeof body !== 'object') return res.status(400).json({ error: 'Invalid request' })

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (body.website) return res.status(200).json({ ok: true })

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const message = String(body.message ?? '').trim()

  if (!name || name.length > MAX.name) return res.status(400).json({ error: 'Invalid name' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > MAX.email || /[\r\n]/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' })
  }
  if (message.length < 10 || message.length > MAX.message) return res.status(400).json({ error: 'Invalid message' })

  const from = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>'
  const safeName = name.replace(/[\r\n]+/g, ' ')

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio message from ${safeName}`.slice(0, 150),
        html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    })
    if (!r.ok) {
      console.error('Resend error', r.status, await r.text())
      return res.status(502).json({ error: 'Could not send message' })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Resend request failed', err)
    return res.status(502).json({ error: 'Could not send message' })
  }
}

function safeParse(s) {
  try {
    return JSON.parse(s)
  } catch {
    return null
  }
}
