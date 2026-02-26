import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Activity, Zap, Trophy } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ──────────────────────────────────────────
   Card 1 — Diagnostic Shuffler
   "Growth Timeline: progressive milestones"
   ────────────────────────────────────────── */
function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 1, label: 'BSc CSE — IIUC', sub: '2023 – Present', color: 'bg-paper' },
    { id: 2, label: 'Frontend Intern — Racdox', sub: 'Feb – Jun 2025', color: 'bg-signal-red/10' },
    { id: 3, label: 'Hackathon Champion', sub: 'Intra Dept 2025', color: 'bg-dark/5' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-40 w-full">
      {cards.map((card, i) => (
        <div
          key={card.id}
          className={`absolute inset-x-0 ${card.color} border border-dark/10 p-4 transition-all duration-700`}
          style={{
            borderRadius: '1.5rem',
            top: `${i * 12}px`,
            zIndex: cards.length - i,
            transform: `scale(${1 - i * 0.04})`,
            opacity: 1 - i * 0.2,
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <p className="font-heading font-semibold text-dark text-sm">{card.label}</p>
          <p className="font-mono text-[10px] text-dark/50 mt-1">{card.sub}</p>
        </div>
      ))}
    </div>
  )
}

/* ──────────────────────────────────────────
   Card 2 — Telemetry Typewriter
   "Live Projects & Demos"
   ────────────────────────────────────────── */
function TelemetryTypewriter() {
  const [text, setText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const lines = [
    '> Deploying UPSCALE v2.0 — AI career platform...',
    '> KRISHI marketplace: 4 roles, RBAC active...',
    '> AI-Interview: Vapi voice agent initialized...',
    '> TMD Support: real-time bus assignment live...',
    '> Building next iteration...',
  ]

  useEffect(() => {
    let charIdx = 0
    const currentLine = lines[lineIndex]
    setText('')

    const typeInterval = setInterval(() => {
      if (charIdx < currentLine.length) {
        setText(currentLine.slice(0, charIdx + 1))
        charIdx++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % lines.length)
        }, 2000)
      }
    }, 45)

    return () => clearInterval(typeInterval)
  }, [lineIndex])

  return (
    <div className="bg-dark/[0.03] border border-dark/10 p-4" style={{ borderRadius: '1.5rem' }}>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-signal-red animate-pulse" />
        <span className="font-mono text-[10px] text-dark/50 uppercase tracking-widest">Live Feed</span>
      </div>
      <div className="font-mono text-xs text-dark/80 min-h-[3rem]">
        {text}
        <span className="inline-block w-[2px] h-3 bg-signal-red ml-0.5 animate-pulse" />
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────
   Card 3 — Cursor Protocol Scheduler
   "Achievements as Narrative"
   ────────────────────────────────────────── */
function CursorScheduler() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const [activeDay, setActiveDay] = useState(-1)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [showCursor, setShowCursor] = useState(false)
  const [saved, setSaved] = useState(false)
  const gridRef = useRef(null)

  useEffect(() => {
    const sequence = async () => {
      setShowCursor(true)
      setSaved(false)
      setActiveDay(-1)

      // Move cursor across days
      for (let i = 0; i < days.length; i++) {
        await new Promise((r) => setTimeout(r, 400))
        setCursorPos({ x: i * 40 + 16, y: 8 })

        if (i === 2 || i === 4) {
          await new Promise((r) => setTimeout(r, 200))
          setActiveDay(i)
        }
      }

      // Move to Save button
      await new Promise((r) => setTimeout(r, 500))
      setCursorPos({ x: 120, y: 60 })
      await new Promise((r) => setTimeout(r, 400))
      setSaved(true)
      await new Promise((r) => setTimeout(r, 1500))
      setShowCursor(false)
      await new Promise((r) => setTimeout(r, 1000))
    }

    sequence()
    const interval = setInterval(sequence, 7500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-dark/[0.03] border border-dark/10 p-4 relative overflow-hidden" style={{ borderRadius: '1.5rem' }}>
      {/* Animated SVG Cursor */}
      {showCursor && (
        <svg
          className="absolute z-10 transition-all duration-500 ease-magnetic"
          style={{ left: cursorPos.x, top: cursorPos.y }}
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
        >
          <path d="M1 1L1 15L5 11L9 19L12 17.5L8 10L13 10L1 1Z" fill="#E63B2E" stroke="#111" strokeWidth="0.5" />
        </svg>
      )}

      {/* Weekly Grid */}
      <div ref={gridRef} className="flex gap-2 mb-4">
        {days.map((d, i) => (
          <div
            key={i}
            className={`w-8 h-8 flex items-center justify-center rounded-lg text-[10px] font-mono font-bold transition-all duration-300 ${
              activeDay === i
                ? 'bg-signal-red text-off-white scale-95'
                : 'bg-paper text-dark/50'
            }`}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Save Button */}
      <button
        className={`font-mono text-[10px] px-3 py-1.5 rounded-full transition-all duration-300 ${
          saved
            ? 'bg-signal-red text-off-white scale-95'
            : 'bg-paper text-dark/60'
        }`}
      >
        {saved ? '✓ Saved' : 'Save'}
      </button>
    </div>
  )
}

/* ──────────────────────────────────────────
   Main Features Section
   ────────────────────────────────────────── */
export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const cards = [
    {
      icon: <Activity size={20} />,
      title: 'Growth Timeline',
      desc: 'Progressive milestones told as interactive moments — from education to hackathon victories.',
      component: <DiagnosticShuffler />,
    },
    {
      icon: <Zap size={20} />,
      title: 'Live Projects & Demos',
      desc: 'Hands-on builds with real-time data — SaaS platforms, AI integrations, and playable UIs.',
      component: <TelemetryTypewriter />,
    },
    {
      icon: <Trophy size={20} />,
      title: 'Achievements as Narrative',
      desc: 'Technical wins presented as animated stories — each accomplishment earns its moment.',
      component: <CursorScheduler />,
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <p className="font-mono text-[10px] text-signal-red tracking-widest uppercase mb-3">
          // Features
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-dark tracking-tight">
          Interactive Artifacts
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="feature-card bg-off-white border border-dark/10 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-500"
            style={{ borderRadius: '2rem' }}
          >
            <div className="text-signal-red mb-4">{card.icon}</div>
            <h3 className="font-heading font-bold text-lg text-dark mb-2">{card.title}</h3>
            <p className="font-heading text-xs text-dark/50 mb-6 leading-relaxed">{card.desc}</p>
            {card.component}
          </div>
        ))}
      </div>
    </section>
  )
}
