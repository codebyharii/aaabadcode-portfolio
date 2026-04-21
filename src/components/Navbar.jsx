import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-black/95 border-border-subtle' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="page-pad relative">
        <div className="h-20 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
            }}
            className="flex items-center gap-3"
          >
            <span className="h-8 w-8 rounded-full bg-primary-400 text-black font-heading font-bold flex items-center justify-center text-sm">
              H
            </span>
            <span className="font-heading font-semibold text-2xl text-text-heading">aaabadcode</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.12em]">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-text-body hover:text-primary-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden h-10 w-10 rounded-lg border border-border-subtle text-text-heading flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="relative inline-flex h-5 w-5 items-center justify-center">
              <Menu
                size={20}
                className={`absolute transition-all duration-250 ease-out ${
                  isMobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                size={20}
                className={`absolute transition-all duration-250 ease-out ${
                  isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`}
              />
            </span>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 top-20 z-40 bg-black/82 backdrop-blur-[1px] px-5 py-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <motion.ul
                initial={{ opacity: 0, y: -8, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.985 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="panel p-4 space-y-2 bg-[#070707] will-change-transform"
                onClick={(e) => e.stopPropagation()}
              >
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }}
                      className="block rounded-lg px-4 py-3 text-sm uppercase tracking-[0.1em] text-text-body hover:text-primary-400 hover:bg-white/5 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
