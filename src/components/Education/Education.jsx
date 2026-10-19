const educationItems = [
  {
    degree: 'Bachelor of Technology in Computer Science Engineering',
    institution: 'KIET Group of Institutions, Ghaziabad (AKTU)',
    period: '2024 - May 2027',
  },
]

const achievements = [
  {
    title: 'SIH (Smart India Hackathon) - Internal Finalist',
    detail: 'Institute level. Secured 44th rank among 600 participating teams in the Internal Hackathon.',
    period: '2025',
  },
  {
    title: "INNOTECH'24 - Project Presentation Participant",
    detail: "Departmental level, KIET. Actively participated in project presentation during INNOTECH'24.",
    period: '2024',
  },
]

const Education = () => {
  return (
    <section id="education" className="section-shell pt-8">
      <div className="page-pad max-w-6xl">
        <div className="kicker mb-5">
          <span className="kicker-dot"></span>
          Education
        </div>

        <div className="space-y-3">
          {educationItems.map((item) => (
            <article key={item.degree} className="panel p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="headline-md text-[1.95rem]">{item.degree}</h3>
                  <p className="body-muted mt-1">{item.institution}</p>
                </div>
                <span className="date-pill">
                  {item.period}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="kicker mt-10 mb-5">
          <span className="kicker-dot"></span>
          Key Achievements
        </div>

        <div className="space-y-3">
          {achievements.map((item) => (
            <article key={item.title} className="panel p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="headline-md text-[1.95rem]">{item.title}</h3>
                  <p className="body-muted mt-1">{item.detail}</p>
                </div>
                <span className="date-pill">
                  {item.period}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
