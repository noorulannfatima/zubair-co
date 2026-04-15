import { motion } from 'framer-motion'
import { Shield, Award, HardHat, CheckCircle } from 'lucide-react'
import { fadeUp, stagger, viewport } from './motion'



const TICKER = [
  'Quality over quantity',
  'Expert Team',
  'On-Site Safety',
  'Transparent Pricing',
  'Certified professionals',
  'Fully insured operations',
]

export default function TrustBar() {
  return (
    <section id="trust" className="relative py-28 md:py-40">
    

      <div className="mt-16 md:mt-24 border-y border-white/10 py-6 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap gap-14 w-max">
          {[...TICKER, ...TICKER].map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-14 text-2xl md:text-4xl font-display font-bold tracking-tight text-white/30 hover:text-orange-hi transition-colors"
            >
              {t}
              <span className="w-2 h-2 rounded-full bg-orange-hi" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
