import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 bg-white border-b border-black/10 shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 h-16 md:h-20 flex items-center justify-between gap-3 md:gap-6">
        <a href="#top" className="flex items-center gap-2 md:gap-3 text-black min-w-0 shrink">
          <img
            src="/logo.png"
            alt="Malik Zubair & Co."
            className="h-8 md:h-10 w-auto block shrink-0"
          />
          <span className="font-display font-bold tracking-tight leading-tight whitespace-nowrap text-[11px] sm:text-xs md:text-sm lg:text-base">
            MALIK ZUBAIR <span className="text-orange-hi">&</span> CO.
            <span className="hidden sm:block text-[8px] md:text-[10px] tracking-[0.18em] font-normal text-black/55">
              CONSTRUCTION & INFRASTRUCTURE
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-black/70 hover:text-black transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange-hi transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/923004337330"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-orange-hi px-4 xl:px-5 py-2.5 text-xs xl:text-sm font-semibold text-black hover:bg-black hover:text-white transition-colors whitespace-nowrap"
        >
          Contact us on WhatsApp
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-md border border-black/10 text-black shrink-0"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-black/10 bg-white"
          >
            <div className="px-5 py-6 flex flex-col items-center gap-5">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-black/80 text-base hover:text-black text-center w-full"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://wa.me/923004337330"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-orange-hi px-6 py-3 text-sm font-semibold text-black w-full max-w-xs"
              >
                Contact us on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
