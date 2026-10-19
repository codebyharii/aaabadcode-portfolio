import { ArrowUpRight, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Transaction-processing backend built with Spring Boot (REST APIs, MVC) and a React.js frontend, covering order lifecycle, cart state, product CRUD, and user authentication on a MySQL schema managed with Maven.',
    link: 'https://github.com/codebyharii/ecommerce-webise-using-spring-boot',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center 35%',
    accent: false,
  },
  {
    title: 'Lung Cancer Detection using ML',
    description:
      'Early lung cancer detection model using Logistic Regression, Random Forest, and CNN on medical imaging and patient data, built with Python, FastAPI, Pandas, NumPy, Scikit-learn, and TensorFlow.',
    link: 'https://github.com/codebyharii/lung-cancer-detection',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center 30%',
    accent: true,
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="page-pad">
        <div className="section-head flex items-center justify-between gap-6">
          <div>
            <div className="kicker mb-4">
              <span className="kicker-dot"></span>
              Featured Work
            </div>
            <h2 className="headline-lg">Showcasing My Work for Your Inspiration</h2>
          </div>

          <a
            href="https://github.com/codebyharii"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-primary-400 hover:text-primary-500 transition-colors"
          >
            Explore more Work
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group panel-lg overflow-hidden border border-border-subtle card-hover-up ${
                project.accent ? 'bg-[#151209]' : 'bg-[#0f0f0f]'
              }`}
            >
              {project.image ? (
                <div className="h-56 md:h-64 border-b border-border-subtle overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: project.imagePosition || 'center' }}
                  />
                </div>
              ) : (
                <div className="h-56 md:h-64 border-b border-border-subtle bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_42%),linear-gradient(140deg,#111_0%,#181818_50%,#0b0b0b_100%)]"></div>
              )}
              <div className="p-6 md:p-7">
                <h3 className={`headline-md ${project.accent ? 'text-primary-400' : 'text-text-heading'}`}>
                  {project.title}
                </h3>
                <p className="mt-3 body-muted">{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-text-body hover:text-primary-400 transition-colors"
                >
                  <Github size={16} />
                  View Project
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
