import { ArrowUpRight } from 'lucide-react'
import profile from '../assests/dp.png'

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="page-pad grid lg:grid-cols-[1.2fr_0.9fr] gap-8 lg:gap-12">
        <div>
          <div className="kicker mb-5">
            <span className="kicker-dot"></span>
            About Me
          </div>

          <h2 className="headline-lg max-w-3xl">Passionate Full Stack and Backend Engineer</h2>

          <p className="mt-6 max-w-3xl text-lg body-muted">
            I am Hari Om Singh, a developer passionate about building intuitive and scalable
            digital products. I have worked on Spring Boot APIs, full stack dashboards, and
            machine-learning-driven products that solve practical problems.
          </p>

          <a
            href="https://drive.google.com/file/d/1Xkn8DMnm4ZCHVtjE7x5cCscCW2ziy6I4/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8"
          >
            Download Resume
            <ArrowUpRight size={18} />
          </a>
        </div>

        <aside className="panel-lg border border-border-subtle overflow-hidden">
          <img src={profile} alt="Hari Om Singh" className="w-full h-[360px] object-cover object-top" />
          <div className="p-6 border-t border-border-subtle">
            <h3 className="headline-md text-xl">Hari Om Singh</h3>
            <p className="body-muted mt-1">Full Stack Developer and Backend Engineer</p>
            <div className="site-divider mt-5 pt-5 space-y-3 text-sm">
              <p className="flex justify-between gap-4">
                <span className="body-muted">Base</span>
                <span>Ghaziabad, India</span>
              </p>
              <p className="flex justify-between gap-4">
                <span className="body-muted">Experience</span>
                <span>3+ Years Learning and Building</span>
              </p>
              <p className="flex justify-between gap-4">
                <span className="body-muted">Focus</span>
                <span>Spring Boot, MERN, React, ML</span>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default About
