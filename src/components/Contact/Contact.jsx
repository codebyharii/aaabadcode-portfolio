import { useState } from 'react'
import { Loader2, Plus, Send } from 'lucide-react'
import { toast } from 'react-toastify'

const faqs = [
  {
    question: 'What do you work on?',
    answer:
      'Full stack products end to end: Next.js and React interfaces, Node.js and Spring Boot APIs, database design, authentication, and deployments. Recently I have also been building LLM-powered features like chatbots and RAG.',
  },
  {
    question: 'Are you open to new opportunities?',
    answer:
      'Yes. I am currently a Full Stack Developer at Macgence and open to internships, freelance projects, and remote roles. Send a message with the details.',
  },
  {
    question: 'Can you take a single module or feature?',
    answer:
      'Yes. I can own individual pieces like authentication, an admin dashboard, API integration, an AI chatbot, or deployment setup.',
  },
  {
    question: 'How quickly do you reply?',
    answer:
      'Usually within a day. For anything urgent, reach me on LinkedIn or by email at hariom.info07@gmail.com.',
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const sendMessage = async (data) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      throw new Error(body.error || 'Request failed')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
      toast.error('Please fix the form errors.')
      return
    }

    setIsSubmitting(true)

    try {
      await sendMessage(formData)
      toast.success('Message sent successfully.')
      setFormData({ name: '', email: '', message: '', website: '' })
    } catch (error) {
      toast.error(error?.message || 'Failed to send message. Please try again.')
        } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="page-pad grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12">
        <div>
          <div className="kicker mb-4">
            <span className="kicker-dot"></span>
            Support
          </div>
          <h2 className="headline-lg">FAQs</h2>
          <p className="body-muted mt-4 max-w-md">
            Not sure yet? Here are the most common questions. For custom requirements, send a
            direct message with your project details.
          </p>

          <form onSubmit={handleSubmit} className="panel mt-8 p-6 space-y-4">
            {/* Honeypot field: hidden from users, filled only by bots */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <input
              type="text"
              name="name"
              maxLength={100}
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-black border border-border-subtle rounded-lg px-4 py-3 text-text-body focus:outline-none focus:border-primary-600"
            />
            {errors.name && <p className="text-sm text-red-400">{errors.name}</p>}

            <input
              type="email"
              name="email"
              maxLength={254}
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full bg-black border border-border-subtle rounded-lg px-4 py-3 text-text-body focus:outline-none focus:border-primary-600"
            />
            {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}

            <textarea
              name="message"
              maxLength={2000}
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full bg-black border border-border-subtle rounded-lg px-4 py-3 text-text-body focus:outline-none focus:border-primary-600 resize-none"
            />
            {errors.message && <p className="text-sm text-red-400">{errors.message}</p>}

            <button type="submit" disabled={isSubmitting} className="btn-gold w-full">
              {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index
            return (
              <article
                key={faq.question}
                className={`panel transition-colors duration-300 ${isOpen ? 'bg-[#19160c]' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex((prev) => (prev === index ? -1 : index))}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="w-full flex items-center justify-between gap-4 p-4 md:p-6 text-left"
                >
                  <h3
                    className={`text-base sm:text-lg md:text-xl font-heading font-semibold transition-colors ${
                      isOpen ? 'text-primary-400' : 'text-text-heading'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span className="h-9 w-9 shrink-0 rounded-full border border-border-subtle inline-flex items-center justify-center text-text-muted">
                    <Plus
                      size={16}
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-45 text-primary-400' : ''}`}
                    />
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="body-muted max-w-2xl px-4 pb-4 md:px-6 md:pb-6 text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
