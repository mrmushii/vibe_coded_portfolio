import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const sentinelRef = useRef(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#protocol' },
    { label: 'Contact', href: '#footer' },
  ]

  return (
    <>
      {/* Sentinel element at top of page for IntersectionObserver */}
      <div ref={sentinelRef} className="absolute top-0 left-0 w-full h-1" />

      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-1 px-2 py-2 transition-all duration-500 ease-magnetic ${
          scrolled
            ? 'bg-off-white/60 backdrop-blur-xl border border-paper shadow-lg'
            : 'bg-transparent border border-transparent'
        }`}
        style={{ borderRadius: '3rem' }}
      >
        {/* Logo */}
        <a
          href="#hero"
          className={`font-heading font-bold text-sm tracking-tight px-4 transition-colors duration-500 whitespace-nowrap ${
            scrolled ? 'text-dark' : 'text-off-white'
          }`}
        >
          MR<span className="text-signal-red">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-heading text-xs font-medium tracking-wide px-3 py-1.5 rounded-full transition-all duration-300 lift-hover ${
                scrolled
                  ? 'text-dark/70 hover:text-dark hover:bg-paper/60'
                  : 'text-off-white/70 hover:text-off-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#projects"
          className="hidden md:inline-flex btn-magnetic bg-signal-red text-off-white text-xs ml-2"
        >
          <span className="btn-bg bg-dark" />
          <span>Explore My Work</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
            scrolled ? 'text-dark' : 'text-off-white'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-off-white/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 transition-all duration-500 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-heading text-2xl font-semibold text-dark hover:text-signal-red transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#projects"
          onClick={() => setMobileOpen(false)}
          className="btn-magnetic bg-signal-red text-off-white text-sm mt-4"
        >
          <span className="btn-bg bg-dark" />
          <span>Explore My Work</span>
        </a>
      </div>
    </>
  )
}
