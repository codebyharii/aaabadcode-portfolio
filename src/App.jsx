import { lazy, Suspense, useEffect, useRef } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
const About = lazy(() => import('./components/About/About'))
const Experience = lazy(() => import('./components/Experience/Experience'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Education = lazy(() => import('./components/Education/Education'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const mainRef = useRef(null)

  useEffect(() => {
    if (!mainRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const registerSections = (observerInstance) => {
      const sections = mainRef.current.querySelectorAll('section')
      sections.forEach((section, index) => {
        if (section.dataset.revealBound === '1') {
          return
        }

        section.dataset.revealBound = '1'

        // Keep hero visible immediately to avoid blank first viewport.
        if (index === 0 || section.id === 'home') {
          section.classList.add('is-visible')
          return
        }

        section.classList.add('reveal-on-scroll')

        if (observerInstance) {
          observerInstance.observe(section)
        } else {
          section.classList.add('is-visible')
        }
      })
    }

    if (!('IntersectionObserver' in window)) {
      registerSections(null)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    registerSections(observer)

    const mutationObserver = new MutationObserver(() => registerSections(observer))
    mutationObserver.observe(mainRef.current, { childList: true, subtree: true })

    return () => {
      mutationObserver.disconnect()
      observer.disconnect()
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main ref={mainRef} className="relative z-10">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App
