import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeUp, stagger, viewport } from './motion'

const POINTS = [
  {
    title: 'Zero-Compromise Safety',
    desc: 'OSHA + ISO 45001 protocols on every site. 2.1M hours without a lost-time incident in 2025.',
  },
  {
    title: 'On-Time, Every Time',
    desc: '97% of projects delivered on or ahead of schedule — backed by contractual milestones.',
  },
  {
    title: 'Millimeter Precision',
    desc: 'BIM Level 3 modeling, laser surveying, and AI-assisted quality control on every pour.',
  },
  {
    title: 'Sustainable by Default',
    desc: 'LEED Gold is our floor, not our ceiling. 40% lower embodied carbon than industry average.',
  },
  {
    title: 'Transparent Pricing',
    desc: 'Open-book cost model. No change-order surprises — just honest numbers, from day one.',
  },
  {
    title: 'In-House Crews',
    desc: '350+ full-time craftspeople. We don\u2019t subcontract accountability.',
  },
]

function PointCard({ title, desc, index }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-carbon p-8 md:p-10 h-full flex flex-col justify-between min-h-[260px] hover:border-orange-hi/40"
    >
      <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-orange-hi/0 group-hover:bg-orange-hi/10 blur-3xl transition-colors duration-700" />

      <div className="relative flex items-start justify-between">
        <span className="font-display text-xs tracking-[0.3em] text-orange-hi">
          {String(index + 1).padStart(2, '0')} / 06
        </span>
        <span className="font-display text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="relative">
        <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h3>
        <p className="mt-3 text-sm text-white/60 leading-relaxed">{desc}</p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 h-px bg-gradient-to-r from-orange-hi via-orange-hi/40 to-transparent origin-left"
        />
      </div>
    </motion.div>
  )
}

export default function Different() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const titleX = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-grid opacity-40 pointer-events-none"
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-carbon-2 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-16 md:mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.25em] text-orange-hi mb-4"
          >
            — What makes us different
          </motion.div>

          <motion.h2
            style={{ x: titleX }}
            className="font-display text-4xl md:text-7xl font-black tracking-tight leading-[0.95]"
          >
            <motion.span variants={fadeUp} className="block">
              Not just another
            </motion.span>
            <motion.span variants={fadeUp} className="block text-white/40">
              building firm.
            </motion.span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-white/60"
          >
            Six principles we refuse to compromise on — the reason our clients
            come back, and their architects recommend us.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {POINTS.map((p, i) => (
            <PointCard key={p.title} {...p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
