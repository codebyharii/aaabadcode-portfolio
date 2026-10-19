const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Macgence (Remote)',
    period: 'Aug 2026 - Present',
    points: [
      'Engineered an AI-powered chatbot for the Macgence Data Marketplace using LLM APIs, helping users discover datasets, compare pricing options, and get instant answers.',
      'Built full-stack features using Next.js, TypeScript, Node.js, Prisma, and REST APIs, covering dataset listings, pricing options, and sample uploads.',
      'Implemented secure authentication and an admin role system, including a 6-digit OTP password reset, email verification, and invitation-based admin onboarding with Resend email integration.',
      'Wrote automated tests for authentication flows and fixed edge cases, such as not blocking unverified emails, to improve reliability in production.',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Brain Aura Innovations (Remote)',
    period: 'Jun 2026 - Aug 2026',
    points: [
      'Built and shipped full-stack features end-to-end using React.js, Next.js, Node.js, and REST APIs for production client-facing platforms.',
      'Collaborated with marketing and product stakeholders to turn requirements into responsive UI components and backend integrations.',
      'Owned database design, API development, and production deployments (Vercel) for internal tools.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section-shell pt-8">
      <div className="page-pad grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12">
        <div>
          <div className="kicker mb-5">
            <span className="kicker-dot"></span>
            Experience
          </div>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <article key={exp.title + exp.company} className="panel p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="headline-md text-[1.9rem] leading-[1.15]">{exp.title}</h3>
                    <p className="mt-1 body-muted">At {exp.company}</p>
                  </div>
                  <span className="date-pill">
                    {exp.period}
                  </span>
                </div>
                <ul className="body-muted max-w-3xl space-y-2 list-disc pl-5">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <aside id="contact-panel" className="space-y-4">
          <div className="kicker mb-5">
            <span className="kicker-dot"></span>
            Contact
          </div>

          <div className="panel p-6">
            <p className="flex justify-between gap-4 py-3 border-b border-border-subtle">
              <span className="body-muted">Phone</span>
              <span>+91 947-356-2113</span>
            </p>
            <p className="flex justify-between gap-4 py-3 border-b border-border-subtle">
              <span className="body-muted">Email</span>
              <span>hariom.info07@gmail.com</span>
            </p>
            <p className="flex justify-between gap-4 py-3 border-b border-border-subtle">
              <span className="body-muted">GitHub</span>
              <a href="https://github.com/codebyharii" target="_blank" rel="noreferrer" className="text-gold-500 hover:text-gold-400 transition-colors">
                github.com/codebyharii
              </a>
            </p>
            <p className="flex justify-between gap-4 py-3 border-b border-border-subtle">
              <span className="body-muted">LinkedIn</span>
              <a href="https://www.linkedin.com/in/mrhari009/" target="_blank" rel="noreferrer" className="text-gold-500 hover:text-gold-400 transition-colors">
                linkedin.com/in/mrhari009
              </a>
            </p>
            <p className="flex justify-between gap-4 pt-3">
              <span className="body-muted">Address</span>
              <span>Ghaziabad, India</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Experience
