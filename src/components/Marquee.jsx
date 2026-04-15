const TICKER = [
  'Quality over quantity',
  'Expert Team',
  'On-Site Safety',
  'Transparent Pricing',
  'Certified professionals',
  'Fully insured operations',
]

export default function Marquee() {
  return (
    <section
      aria-label="Values"
      className="relative border-y border-white/10 py-5 md:py-6 overflow-hidden"
    >
      <div className="marquee-track flex whitespace-nowrap gap-8 md:gap-14 w-max">
        {[...TICKER, ...TICKER].map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-8 md:gap-14 text-xl sm:text-2xl md:text-4xl font-display font-bold tracking-tight text-white/30 hover:text-orange-hi transition-colors"
          >
            {t}
            <span className="w-2 h-2 rounded-full bg-orange-hi shrink-0" />
          </div>
        ))}
      </div>
    </section>
  )
}
