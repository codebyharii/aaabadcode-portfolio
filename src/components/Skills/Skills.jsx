import {
  SiApachemaven,
  SiC,
  SiClaude,
  SiCloudflare,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglegemini,
  SiHuggingface,
  SiIntellijidea,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import { FaDatabase, FaJava, FaNetworkWired, FaPenFancy, FaPlug, FaSearch } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Languages',
    technologies: [
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'C', icon: SiC },
      { name: 'C++', icon: SiCplusplus },
      { name: 'SQL', icon: FaDatabase },
    ],
  },
  {
    title: 'Frontend',
    technologies: [
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    technologies: [
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'RESTful API Design', icon: FaPlug },
      { name: 'Maven', icon: SiApachemaven },
    ],
  },
  {
    title: 'Database',
    technologies: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    technologies: [
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Load Balancing', icon: FaNetworkWired },
      { name: 'Cloudflare', icon: SiCloudflare },
    ],
  },
  {
    title: 'AI-Assisted Development',
    technologies: [
      { name: 'Claude CLI', icon: SiClaude },
      { name: 'Claude API', icon: SiClaude },
      { name: 'Google Gemini API', icon: SiGooglegemini },
      { name: 'Hugging Face', icon: SiHuggingface },
      { name: 'Prompt Engineering', icon: FaPenFancy },
      { name: 'RAG', icon: FaSearch },
    ],
  },
  {
    title: 'Tools & Platforms',
    technologies: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Linux', icon: SiLinux },
      { name: 'IntelliJ IDEA', icon: SiIntellijidea },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="page-pad">
        <div className="max-w-6xl mb-8 md:mb-10">
          <div className="kicker mb-4">
            <span className="kicker-dot"></span>
            My Skills
          </div>
          <h2 className="headline-lg max-w-3xl">
            Technologies behind my full-stack and AI-powered projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5 max-w-6xl">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className={`panel p-5 md:p-6 card-hover-up ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <h3 className="headline-md text-[1.4rem] md:text-[1.6rem] leading-tight">
                {category.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2 md:gap-2.5">
                {category.technologies.map(({ name, icon: Icon }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 text-xs md:text-sm px-3 py-2 rounded-lg border border-border-subtle bg-black/60 text-text-body transition-colors duration-300 hover:border-primary-600 hover:text-primary-400"
                  >
                    <Icon size={16} className="text-primary-400 shrink-0" />
                    {name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
