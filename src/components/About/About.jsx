import { Briefcase, Code2, GraduationCap, MapPin, Trophy } from 'lucide-react'

const facts = [
  {
    icon: Briefcase,
    label: 'Currently',
    value: 'Full Stack Developer at Macgence',
    detail: 'Data Marketplace, AI chatbot, auth and admin systems',
  },
  {
    icon: Code2,
    label: 'Core Stack',
    value: 'Next.js, TypeScript, Node.js',
    detail: 'Plus Spring Boot, React, PostgreSQL, MySQL and Docker',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech CSE, KIET Ghaziabad',
    detail: 'Graduating May 2027',
  },
  {
    icon: Trophy,
    label: 'Achievement',
    value: 'SIH Internal Finalist',
    detail: '44th rank among 600 teams',
  },
]

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="page-pad grid lg:grid-cols-[1.2fr_0.9fr] gap-8 lg:gap-12 items-start">
        <div>
          <div className="kicker mb-5">
            <span className="kicker-dot"></span>
            About Me
          </div>

          <h2 className="headline-lg max-w-3xl">I turn ideas into shipped, production-ready products</h2>

          <p className="mt-6 max-w-3xl text-lg body-muted">
            I work across the stack: responsive Next.js and React interfaces, REST APIs in Node.js
            and Spring Boot, and databases designed for consistency. I like owning a feature from
            requirement to release, including auth, testing, and deployment.
          </p>

          <p className="mt-4 max-w-3xl text-lg body-muted">
            Lately I have been building with LLM APIs and RAG, from chatbots that answer questions
            over real data to machine learning models for medical prediction.
          </p>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-text-muted">
            <MapPin size={16} className="text-primary-400" />
            Based in Ghaziabad, India. Open to remote work.
          </p>
        </div>

        <aside className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {facts.map(({ icon: Icon, label, value, detail }) => (
            <article key={label} className="panel p-5 card-hover-up flex items-start gap-4">
              <span className="h-11 w-11 shrink-0 rounded-lg border border-border-subtle text-primary-400 inline-flex items-center justify-center">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-text-muted">{label}</p>
                <h3 className="headline-md text-lg mt-1">{value}</h3>
                <p className="body-muted text-sm mt-1">{detail}</p>
              </div>
            </article>
          ))}
        </aside>
      </div>
    </section>
  )
}

export default About
