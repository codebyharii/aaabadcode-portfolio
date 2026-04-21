import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-8 border-t border-border-subtle bg-[radial-gradient(circle_at_25%_20%,rgba(255,215,0,0.1),transparent_35%),#090909]">
      <div className="page-pad py-14 md:py-16">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
          <div>
            <div className="kicker mb-4">
              <span className="kicker-dot"></span>
              Got a project?
            </div>
            <h2 className="headline-lg max-w-3xl">Surround yourself with an expert</h2>
          </div>

          <div className="lg:justify-self-end">
            <a href="#contact" className="btn-gold">
              Start a Project Now
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="site-divider mt-12 pt-8 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
          <div>
            <p className="font-heading font-semibold text-2xl text-text-heading">aaabadcode</p>
            <p className="body-muted text-sm mt-2">©{currentYear} Hari Om Singh. All rights reserved.</p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm uppercase tracking-[0.08em]">
            <a href="#home" className="hover:text-primary-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-400 transition-colors">About Me</a>
            <a href="#skills" className="hover:text-primary-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/codebyharii"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full border border-border-subtle text-text-muted hover:text-primary-400 hover:border-primary-600 transition-colors inline-flex items-center justify-center"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/mrhari009/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full border border-border-subtle text-text-muted hover:text-primary-400 hover:border-primary-600 transition-colors inline-flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://x.com/HariomS41254755"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full border border-border-subtle text-text-muted hover:text-primary-400 hover:border-primary-600 transition-colors inline-flex items-center justify-center"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
            <a
              href="mailto:hariom.info07@gmail.com"
              className="h-10 w-10 rounded-full border border-border-subtle text-text-muted hover:text-primary-400 hover:border-primary-600 transition-colors inline-flex items-center justify-center"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
