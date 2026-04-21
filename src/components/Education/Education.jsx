const educationItems = [
  {
    degree: 'Bachelor of Technology (Computer Science)',
    institution: 'KIET Group of Institutions, Ghaziabad',
    period: '2024 - 2027',
  },
  {
    degree: 'AWS Cloud Practitioner',
    institution: 'Amazon Web Services',
    period: '2025',
  },
  {
    degree: 'Full Stack Development with React and Spring Boot',
    institution: 'Infosys Springboard',
    period: '2025',
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
      </div>
    </section>
  )
}

export default Education
