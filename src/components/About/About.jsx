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

          <h2 className="headline-lg max-w-3xl">Full Stack Developer building AI-powered products</h2>

          <p className="mt-6 max-w-3xl text-lg body-muted">
            I am Hari Om Singh, a Computer Science student at KIET and a Full Stack Developer at
            Macgence, where I build the Data Marketplace with Next.js, TypeScript, Node.js, and
            Prisma, including an LLM-powered chatbot and a secure auth and admin system. Earlier I
            shipped production features as a Full Stack Developer Intern at Brain Aura Innovations.
          </p>

          <a
            href="https://drive.google.com/file/d/1GrRdS9h8u0fKVgisjQ1zDWuIfjaFkAMC/view?usp=drive_link"
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
            <p className="body-muted mt-1">Full Stack Developer at Macgence</p>
            <div className="site-divider mt-5 pt-5 space-y-3 text-sm">
              <p className="flex justify-between gap-4">
                <span className="body-muted">Base</span>
                <span>Ghaziabad, India</span>
              </p>
              <p className="flex justify-between gap-4">
                <span className="body-muted">Experience</span>
                <span>Macgence (Aug 2026 - Present)</span>
              </p>
              <p className="flex justify-between gap-4">
                <span className="body-muted">Focus</span>
                <span>Next.js, TypeScript, Node.js, LLM APIs</span>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default About
