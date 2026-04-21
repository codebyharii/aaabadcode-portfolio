import { useState } from 'react'
import { ArrowUpRight, Plus } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Redux'],
  },
  {
    title: 'Backend',
    technologies: ['Spring Boot', 'Python', 'Express', 'FastAPI', 'Java', 'Node.js'],
  },
  {
    title: 'Database',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  },
  {
    title: 'Cloud & DevOps',
    technologies: ['AWS', 'Docker', 'CI/CD', 'ORACLE', 'Cloudflare'],
  },
  {
    title: 'AI & ML',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP'],
  },
  {
    title: 'Tools & Others',
    technologies: ['Git', 'Jira', 'IntelliJ IDEA', 'Postman', 'VS Code', 'Linux'],
  },
]

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="skills" className="section-shell">
      <div className="page-pad px-4 sm:px-5 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto mb-5 md:mb-7 text-left md:ml-0">
          <div className="flex flex-col gap-3 md:gap-4 mb-4 md:mb-5">
            <div className="flex flex-wrap items-center justify-start gap-3 md:gap-5">
            <div className="kicker">
              <span className="kicker-dot"></span>
              My Skills
            </div>
            <a href="#contact" className="btn-gold">
              Start a Project Now
              <ArrowUpRight size={18} />
            </a>
          </div>
            <p className="max-w-2xl mx-0 text-text-primary text-xl md:text-[1.9rem] font-semibold leading-tight tracking-tight">
              Exploring the Technologies Behind My Full-Stack and AI-Powered Projects
          </p>
          </div>
        </div>

        <div className="space-y-3 md:space-y-3.5 mt-0">
          {skillCategories.map((category, index) => {
            const isOpen = openIndex === index

            return (
              <article
                key={category.title}
                className={`panel p-4 sm:p-5 md:p-6 card-hover-up min-h-[104px] md:min-h-[116px] max-w-6xl mx-auto w-full ${isOpen ? 'bg-[#14120a]' : ''}`}
              >
                <div className="flex items-start md:items-center justify-between gap-3 md:gap-5 h-full">
                  <div className="flex-1 min-w-0 py-0.5 pr-1 sm:pr-2 md:pr-0">
                    <h3 className="headline-md text-[1.55rem] sm:text-[1.7rem] md:text-[1.9rem] leading-tight pr-2 md:pr-4">
                      {category.title}
                    </h3>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-wrap gap-2 md:gap-2.5 pt-1 pr-2">
                          {category.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] md:text-sm px-2.5 py-1.5 rounded-md border border-border-subtle bg-black/60 text-text-body whitespace-nowrap"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
                    aria-label={`Toggle ${category.title} technologies`}
                    className="h-10 w-10 md:h-11 md:w-11 rounded-full border border-border-subtle inline-flex items-center justify-center text-primary-400 shrink-0 self-center mr-1 sm:mr-0 hover:border-primary-600 transition-colors"
                  >
                    <Plus size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
