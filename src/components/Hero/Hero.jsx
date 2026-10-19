import { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Download, Github, Linkedin, Twitter } from 'lucide-react'
import { SiLeetcode } from 'react-icons/si'
import profile from '../assests/dp.png'

const Hero = () => {
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 400], [0, -28])

  const socialLinks = useMemo(
    () => [
      { icon: Github, href: 'https://github.com/codebyharii', label: 'GitHub' },
      { icon: Linkedin, href: 'https://www.linkedin.com/in/mrhari009/', label: 'LinkedIn' },
      { icon: Twitter, href: 'https://x.com/HariomS41254755', label: 'Twitter' },
      { icon: SiLeetcode, href: 'https://leetcode.com/u/codebyhari/', label: 'LeetCode' },
    ],
    []
  )

  return (
    <section id="home" className="section-shell pt-28 sm:pt-32 md:pt-40 pb-14 sm:pb-16 md:pb-20">
      <div className="page-pad">
        <div className="section-head mb-8 sm:mb-10 md:mb-14">
          <h1 className="headline-xl text-center lg:text-left uppercase">
            Hari Om
            <span className="block lg:inline lg:ml-8">Singh</span>
          </h1>
          <div className="mt-7 max-w-[420px] mx-auto lg:mx-0 px-2 sm:px-0 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 sm:gap-x-8 gap-y-3">
            <span className="hash-tag">#FULL STACK</span>
            <span className="hash-tag">#NEXT.JS</span>
            <span className="hash-tag">#AI</span>
            <span className="hash-tag">#SPRING BOOT</span>
          </div>
        </div>

        <div className="hero-grid items-end">
          <motion.div
            style={{ y: imageY }}
            className="panel-lg overflow-hidden border border-border-subtle max-w-xl"
          >
            <div className="bg-gradient-to-tr from-[#101010] via-[#151515] to-[#0a0a0a] px-8 pt-8 pb-0">
              <motion.img
                src={profile}
                alt="Hari Om Singh"
                className="w-full h-[420px] object-cover object-top"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          <div className="space-y-7 pb-3">
            <p className="text-base md:text-[1.25rem] leading-[1.7] max-w-2xl text-text-body">
              Welcome to my portfolio. I am Hari Om Singh, a Full Stack Developer at Macgence
              building AI-powered products with Next.js, TypeScript, Node.js, and LLM APIs.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-gold">
                Start a Project Now
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://drive.google.com/file/d/1GrRdS9h8u0fKVgisjQ1zDWuIfjaFkAMC/view?usp=drive_link"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 w-11 rounded-lg border border-border-subtle text-text-muted hover:text-primary-400 hover:border-primary-600 transition-colors duration-300 inline-flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="ticker-strip mt-16 md:mt-20 overflow-hidden">
        <div className="ticker-row">
          <span>Full Stack Developer at Macgence</span>
          <span>Next.js · TypeScript · Node.js · Prisma</span>
          <span>LLM-powered chatbots and RAG</span>
          <span>Spring Boot · React · MySQL</span>
          <span>Full Stack Developer at Macgence</span>
          <span>Next.js · TypeScript · Node.js · Prisma</span>
          <span>LLM-powered chatbots and RAG</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
