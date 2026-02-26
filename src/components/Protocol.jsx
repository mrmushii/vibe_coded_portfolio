import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── SVG Animation 1: Rotating Geometric ── */
function RotatingGeometric() {
  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-48 md:h-48 opacity-20 protocol-svg">
      <g className="rotating-geo" style={{ transformOrigin: 'center' }}>
        {[0, 60, 120].map((angle) => (
          <ellipse
            key={angle}
            cx="100"
            cy="100"
            rx="80"
            ry="30"
            fill="none"
            stroke="#E63B2E"
            strokeWidth="0.8"
            transform={`rotate(${angle} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="4" fill="#E63B2E" />
      </g>
    </svg>
  )
}

/* ── SVG Animation 2: Scanning Laser ── */
function ScanningLaser() {
  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-48 md:h-48 opacity-20 protocol-svg">
      {/* Dot grid */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={25 + col * 22}
            cy={25 + row * 22}
            r="2"
            fill="#E8E4DD"
          />
        ))
      )}
      {/* Scanning line */}
      <line
        className="scanning-line"
        x1="10"
        y1="100"
        x2="190"
        y2="100"
        stroke="#E63B2E"
        strokeWidth="1.5"
        opacity="0.8"
      />
    </svg>
  )
}

/* ── SVG Animation 3: Pulsing Waveform ── */
function PulsingWaveform() {
  return (
    <svg viewBox="0 0 200 80" className="w-48 h-16 md:w-64 md:h-20 opacity-20 protocol-svg">
      <path
        className="waveform-path"
        d="M0 40 L20 40 L30 15 L40 65 L50 25 L60 55 L70 35 L80 45 L90 30 L100 50 L110 20 L120 60 L130 35 L140 45 L150 38 L160 42 L170 40 L200 40"
        fill="none"
        stroke="#E63B2E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ── Protocol Steps Data ── */
const steps = [
  {
    step: '01',
    title: 'Discover',
    desc: 'Research, ideate, and define the problem space. Understand the user, the constraints, and the opportunity.',
    detail: 'From competitive analysis to user interviews — every project begins with a deep dive into the problem.',
    bg: 'bg-paper',
    SVG: RotatingGeometric,
  },
  {
    step: '02',
    title: 'Engineer',
    desc: 'Architect the solution. Build the core systems with clean, scalable code and thoughtful API design.',
    detail: 'MERN stack, Next.js, Generative AI integration — choosing the right tool for the right problem.',
    bg: 'bg-off-white',
    SVG: ScanningLaser,
  },
  {
    step: '03',
    title: 'Deploy',
    desc: 'Ship, iterate, and refine. Real users, real feedback, real impact.',
    detail: 'From staging to production — Docker, Vercel, and continuous deployment keep the loop tight.',
    bg: 'bg-paper',
    SVG: PulsingWaveform,
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotate geometric
      gsap.to('.rotating-geo', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
        transformOrigin: 'center center',
      })

      // Scanning laser
      gsap.to('.scanning-line', {
        attr: { y1: 20, y2: 20 },
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })

      // Waveform dash
      const wavePath = document.querySelector('.waveform-path')
      if (wavePath) {
        const length = wavePath.getTotalLength()
        gsap.set(wavePath, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(wavePath, {
          strokeDashoffset: 0,
          duration: 2,
          repeat: -1,
          ease: 'power1.inOut',
          yoyo: true,
        })
      }

      // Stacking cards on scroll
      cardsRef.current.forEach((card, i) => {
        if (i < cardsRef.current.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top 10%',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            onUpdate: (self) => {
              const progress = self.progress
              gsap.to(card, {
                scale: 1 - progress * 0.1,
                filter: `blur(${progress * 20}px)`,
                opacity: 1 - progress * 0.5,
                duration: 0.1,
              })
            },
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="protocol" ref={sectionRef} className="py-24 md:py-32">
      {/* Section Header */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <p className="font-mono text-[10px] text-signal-red tracking-widest uppercase mb-3">
          // Protocol
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-dark tracking-tight">
          How I Work
        </h2>
      </div>

      {/* Stacking Cards */}
      <div className="relative">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`${step.bg} min-h-[80vh] flex items-center px-6 md:px-12 relative overflow-hidden`}
          >
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="flex-1 max-w-xl">
                <span className="font-mono text-signal-red text-6xl md:text-8xl font-bold opacity-20 block mb-4">
                  {step.step}
                </span>
                <h3 className="font-heading font-bold text-3xl md:text-5xl text-dark tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="font-heading text-dark/70 text-sm md:text-base leading-relaxed mb-4">
                  {step.desc}
                </p>
                <p className="font-mono text-[11px] text-dark/40 leading-relaxed">
                  {step.detail}
                </p>
              </div>

              {/* SVG Animation */}
              <div className="flex-shrink-0">
                <step.SVG />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
