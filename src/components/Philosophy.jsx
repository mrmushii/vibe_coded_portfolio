import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each word
      const words = sectionRef.current.querySelectorAll('.reveal-word')
      gsap.set(words, { opacity: 0, y: 20 })

      gsap.to(words, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center center',
          toggleActions: 'play none none none',
        },
      })

      // Parallax texture
      gsap.to('.philosophy-texture', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const wrapWords = (text, className = '') =>
    text.split(' ').map((word, i) => (
      <span key={i} className={`reveal-word inline-block mr-[0.3em] ${className}`}>
        {word}
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-44 px-6 md:px-12 bg-dark overflow-hidden"
    >
      {/* Parallax Texture */}
      <div
        className="philosophy-texture absolute inset-0 opacity-[0.08] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&q=60')`,
          height: '120%',
          top: '-10%',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Line 1 — Neutral statement */}
        <p className="font-heading text-off-white/40 text-lg md:text-2xl leading-relaxed mb-8">
          {wrapWords('Most portfolios focus on: listing technologies, counting years of experience, and showcasing static screenshots.')}
        </p>

        {/* Line 2 — Bold differentiation */}
        <h2 className="font-heading text-off-white text-2xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6">
          {wrapWords('I focus on:')}
          <br />
          <span className="font-drama italic">
            {wrapWords('building systems', 'text-signal-red')}
          </span>
          {' '}
          {wrapWords('that solve')}
          <br />
          <span className="font-drama italic">
            {wrapWords('real problems.', 'text-signal-red')}
          </span>
        </h2>

        {/* Supporting monospace detail */}
        <p className="font-mono text-[11px] text-off-white/30 max-w-md leading-relaxed mt-12">
          <span className="reveal-word inline-block">
            From AI-powered career platforms to multi-role agricultural marketplaces —
            every project starts with a problem worth solving and ends with a system
            that works.
          </span>
        </p>
      </div>
    </section>
  )
}
