import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-carbon">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-12 flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
        <a href="#top" className="inline-flex items-center gap-3 text-white">
          <span className="grid place-items-center bg-white rounded-lg p-1.5">
            <img src="/logo_opt.jpg" alt="Malik Zubair & Co." className="h-8 w-auto block" />
          </span>
          <span className="font-display font-bold text-sm leading-tight">
            MALIK ZUBAIR <span className="text-orange-hi">&</span> CO.
            <span className="block text-[9px] tracking-[0.18em] font-normal text-white/50">
              BUILDING & INFRASTRUCTURE
            </span>
          </span>
        </a>

        <p className="text-xs text-white/40 text-center">
          © {new Date().getFullYear()} Malik Zubair & Co. All rights reserved.
        </p>

        <a
          href="#top"
          className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-orange-hi transition-colors"
        >
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  )
}
