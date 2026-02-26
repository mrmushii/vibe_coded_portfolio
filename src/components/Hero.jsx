import { useEffect, useRef } from 'react'
import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-subtitle', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
      })
        .from('.hero-line-1', {
          y: 40,
          opacity: 0,
          duration: 0.8,
        }, '-=0.4')
        .from('.hero-line-2', {
          y: 60,
          opacity: 0,
          duration: 1,
        }, '-=0.4')
        .from('.hero-desc', {
          y: 30,
          opacity: 0,
          duration: 0.7,
        }, '-=0.3')
        .from('.hero-cta', {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
        }, '-=0.3')
        .from('.hero-social', {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
        }, '-=0.2')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-[100dvh] overflow-hidden flex items-end"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518893494013-4ce40e295032?w=1920&q=80')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-20">
        {/* Subtitle */}
        <p className="hero-subtitle font-mono text-xs md:text-sm text-signal-red tracking-widest uppercase mb-4">
          Software Engineer — Full Stack Developer
        </p>

        {/* Hero Typography */}
        <h1 className="mb-6">
          <span className="hero-line-1 block font-heading font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-off-white tracking-tight leading-[1.1]">
            Build the
          </span>
          <span className="hero-line-2 block font-drama italic text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-signal-red leading-[0.85] -ml-1">
            System.
          </span>
        </h1>

        {/* Description */}
        <p className="hero-desc font-heading text-off-white/60 text-sm md:text-base max-w-lg leading-relaxed mb-8">
          Full Stack Developer specializing in MERN stack &amp; Next.js,
          architecting dynamic SaaS interfaces, and integrating Generative AI
          to build systems that solve real problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <a
            href="#projects"
            className="hero-cta btn-magnetic bg-signal-red text-off-white text-sm"
          >
            <span className="btn-bg bg-dark" />
            <span className="flex items-center gap-2">
              Explore My Work <ArrowRight size={16} />
            </span>
          </a>
          <a
            href="#footer"
            className="hero-cta btn-magnetic bg-off-white/10 text-off-white text-sm border border-off-white/20"
          >
            <span className="btn-bg bg-off-white/20" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mrmushii"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social text-off-white/40 hover:text-signal-red transition-colors duration-300 lift-hover"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/mushfiqur-rahman"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social text-off-white/40 hover:text-signal-red transition-colors duration-300 lift-hover"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:mushfiq2808@gmail.com"
            className="hero-social text-off-white/40 hover:text-signal-red transition-colors duration-300 lift-hover"
          >
            <FileText size={18} />
          </a>
          <span className="hero-social font-mono text-[10px] text-off-white/30 ml-2">
            Chattogram, Bangladesh
          </span>
        </div>
      </div>
    </section>
  )
}
