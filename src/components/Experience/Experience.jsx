const experiences = [
  {
    title: 'Backend and Machine Learning Developer',
    company: 'Academic and Personal Projects',
    period: '2024 - Present',
    description:
      'Developed full stack applications using Spring Boot and React, designed scalable REST APIs, and built AI-assisted solutions for practical workflows.',
  },
  {
    title: 'Spring Boot Backend Developer (Trainee)',
    company: 'Self Learning and Project Development',
    period: '2025 - Present',
    description:
      'Implemented secure authentication with Spring Security and JWT, documented APIs, and focused on production-style backend architecture.',
  },
  {
    title: 'Software Development Learner',
    company: 'DSA, Full Stack, and AI',
    period: '2023 - Present',
    description:
      'Solved DSA problems consistently, built frontend and backend projects, and explored machine learning with real implementation outcomes.',
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
              <article key={exp.title} className="panel p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="headline-md text-[1.9rem] leading-[1.15]">{exp.title}</h3>
                    <p className="mt-1 body-muted">At {exp.company}</p>
                  </div>
                  <span className="date-pill">
                    {exp.period}
                  </span>
                </div>
                <p className="body-muted max-w-3xl">{exp.description}</p>
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
              <span>+91 9473562113</span>
            </p>
            <p className="flex justify-between gap-4 py-3 border-b border-border-subtle">
              <span className="body-muted">Email</span>
              <span>hariom.info07@gmail.com</span>
            </p>
            <p className="flex justify-between gap-4 py-3 border-b border-border-subtle">
              <span className="body-muted">Website</span>
              <a href="https://github.com/codebyharii" target="_blank" rel="noreferrer" className="text-gold-500 hover:text-gold-400 transition-colors">
                github.com/codebyharii
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
