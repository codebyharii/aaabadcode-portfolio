import { useState } from 'react'
import { Loader2, Plus, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'I design and build responsive websites, secure backend APIs, and full stack products with scalable architecture.',
  },
  {
    question: 'How fast will I receive my work?',
    answer:
      'Small projects are usually delivered in 3-7 days, while larger full stack builds are delivered in milestones with clear timelines.',
  },
  {
    question: 'Can you work on a single project module?',
    answer:
      'Yes. I can handle individual modules like authentication, dashboard UI, backend API integration, or deployment setup.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes, I provide ongoing support for maintenance, bug fixes, feature updates, and performance improvements after delivery.',
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_zmpt20m'
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

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

  const sendWithEmailJS = async (data) => {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
      throw new Error('EmailJS configuration is missing')
    }

    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
      from_name: data.name,
      from_email: data.email,
      reply_to: data.email,
      to_name: 'Hari Om Singh',
    }

    return emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
      toast.error('Please fix the form errors.')
      return
    }

    setIsSubmitting(true)

    try {
      await sendWithEmailJS(formData)
      toast.success('Message sent successfully.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      if (error?.message === 'EmailJS configuration is missing') {
        toast.error('EmailJS is not configured. Add your service ID and public key.')
      } else {
        const detail = error?.text || error?.message || 'Unknown EmailJS error'
        toast.error(`Failed to send message: ${detail}`)
        console.error('EmailJS send failed', error)
      }
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
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-black border border-border-subtle rounded-lg px-4 py-3 text-text-body focus:outline-none focus:border-primary-600"
            />
            {errors.name && <p className="text-sm text-red-400">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full bg-black border border-border-subtle rounded-lg px-4 py-3 text-text-body focus:outline-none focus:border-primary-600"
            />
            {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}

            <textarea
              name="message"
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
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className={`panel p-5 md:p-6 ${openFaqIndex === index ? 'bg-[#19160c]' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className={`text-xl font-heading font-semibold ${
                      openFaqIndex === index ? 'text-primary-400' : 'text-text-heading'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      openFaqIndex === index ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                  >
                    <p className="body-muted max-w-2xl overflow-hidden">{faq.answer}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex((prev) => (prev === index ? -1 : index))}
                  aria-label={`Toggle answer for ${faq.question}`}
                  className="h-7 w-7 rounded-full border border-border-subtle inline-flex items-center justify-center text-text-muted hover:text-primary-400 hover:border-primary-600 transition-colors"
                >
                  <Plus
                    size={14}
                    className={`transition-transform duration-300 ${openFaqIndex === index ? 'rotate-45' : ''}`}
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
