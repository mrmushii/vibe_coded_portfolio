import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, Sparkles, ShoppingCart, Mic, Bus } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'UPSCALE',
    subtitle: 'AI Career Acceleration Platform',
    desc: 'AI-driven career platform with personalized learning roadmaps using Gemini 2.0 Flash. Features real-time voice-based mock interviews via Vapi AI and an ATS-optimized resume analyzer.',
    tech: ['Next.js 14', 'TypeScript', 'MongoDB', 'Gemini AI', 'Vapi Voice'],
    icon: <Sparkles size={20} />,
    featured: true,
    color: 'from-signal-red/10 to-transparent',
  },
  {
    title: 'KRISHI',
    subtitle: 'Agricultural Marketplace',
    desc: 'Multi-role marketplace (Farmer, Buyer, Agent, Admin) with role-based access control. Designed a "Price Freshness" algorithm and integrated escrow-style payment simulation.',
    tech: ['React.js', 'Firebase', 'Cloudinary', 'Tailwind'],
    icon: <ShoppingCart size={20} />,
    featured: false,
    color: 'from-dark/5 to-transparent',
  },
  {
    title: 'AI-INTERVIEW',
    subtitle: 'Voice-First Interview Platform',
    desc: 'Practice technical interviews with realistic AI agents. Integrated VAPI AI and Google Gemini for context-aware questions and real-time performance feedback.',
    tech: ['Next.js 15', 'TypeScript', 'Firebase', 'Vapi AI'],
    icon: <Mic size={20} />,
    featured: false,
    color: 'from-dark/5 to-transparent',
  },
  {
    title: 'TMD SUPPORT',
    subtitle: 'Transport Management System',
    desc: 'Connects students and admins via role-protected dashboards. AI-powered bus assignment suggestions and real-time announcement features.',
    tech: ['React 19', 'Appwrite', 'Tailwind CSS 4', 'Recharts'],
    icon: <Bus size={20} />,
    featured: false,
    color: 'from-dark/5 to-transparent',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <p className="font-mono text-[10px] text-signal-red tracking-widest uppercase mb-3">
          // Projects
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-dark tracking-tight">
          Selected Work
        </h2>
        <p className="font-heading text-dark/50 text-sm mt-3 max-w-lg">
          Systems built to solve real problems — from AI career platforms to multi-role marketplaces.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`project-card group relative bg-off-white border border-dark/10 p-6 md:p-8 hover:border-signal-red/30 transition-all duration-500 overflow-hidden ${
              project.featured ? 'md:col-span-2' : ''
            }`}
            style={{ borderRadius: '2rem' }}
          >
            {/* Gradient accent */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              style={{ borderRadius: '2rem' }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-signal-red">{project.icon}</div>
                  {project.featured && (
                    <span className="font-mono text-[9px] bg-signal-red/10 text-signal-red px-2 py-0.5 rounded-full uppercase tracking-widest">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-dark/30 hover:text-signal-red transition-colors cursor-pointer lift-hover">
                    <Github size={16} />
                  </span>
                  <span className="text-dark/30 hover:text-signal-red transition-colors cursor-pointer lift-hover">
                    <ExternalLink size={16} />
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl md:text-2xl text-dark mb-1 tracking-tight">
                {project.title}
              </h3>
              <p className="font-mono text-[10px] text-dark/40 uppercase tracking-widest mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="font-heading text-dark/60 text-xs md:text-sm leading-relaxed mb-6 max-w-lg">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="font-mono text-[10px] bg-dark/5 text-dark/60 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
