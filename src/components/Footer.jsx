import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="relative bg-dark text-off-white px-6 md:px-12 pt-20 pb-8"
      style={{ borderRadius: '4rem 4rem 0 0' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-heading font-bold text-2xl mb-3">
              Mushfiqur Rahman<span className="text-signal-red">.</span>
            </h3>
            <p className="font-heading text-off-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Full Stack Developer building systems that solve real problems.
              Specializing in MERN stack, Next.js, and Generative AI.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href="mailto:mushfiq2808@gmail.com"
                className="flex items-center gap-2 text-off-white/40 hover:text-signal-red transition-colors duration-300 text-xs font-mono lift-hover"
              >
                <Mail size={14} />
                mushfiq2808@gmail.com
              </a>
              <a
                href="tel:+8801714466395"
                className="flex items-center gap-2 text-off-white/40 hover:text-signal-red transition-colors duration-300 text-xs font-mono lift-hover"
              >
                <Phone size={14} />
                +880 171 446 6395
              </a>
              <span className="flex items-center gap-2 text-off-white/40 text-xs font-mono">
                <MapPin size={14} />
                Chattogram, Bangladesh
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-xs text-off-white/60 uppercase tracking-widest mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#protocol' },
                { label: 'Contact', href: '#footer' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-heading text-sm text-off-white/40 hover:text-off-white transition-colors duration-300 lift-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-heading font-semibold text-xs text-off-white/60 uppercase tracking-widest mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/mrmushii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-heading text-sm text-off-white/40 hover:text-off-white transition-colors duration-300 lift-hover"
                >
                  <Github size={14} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/mushfiqur-rahman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-heading text-sm text-off-white/40 hover:text-off-white transition-colors duration-300 lift-hover"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:mushfiq2808@gmail.com"
                  className="flex items-center gap-2 font-heading text-sm text-off-white/40 hover:text-off-white transition-colors duration-300 lift-hover"
                >
                  <Mail size={14} />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-off-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* System Status */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-[10px] text-off-white/30 uppercase tracking-widest">
              System Operational
            </span>
          </div>

          {/* Copyright */}
          <p className="font-mono text-[10px] text-off-white/20">
            © {currentYear} Mushfiqur Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
