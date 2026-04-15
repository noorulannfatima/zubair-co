import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from './motion'

const BENTO = [
  {
    title: 'Residential',
    tag: '01',
    desc: 'Custom homes and premium estates engineered for longevity, efficiency, and uncompromising design.',
    features: ['Luxury Villas', 'Multi-Family', 'Renovations'],
    img: '/services/service1.avif',
    span: 'md:col-span-3 md:row-span-2 min-h-[420px] md:min-h-[520px]',
  },
  {
    title: 'Commercial',
    tag: '02',
    desc: 'Offices, retail, and hospitality spaces that work as hard as they look — delivered on time, every time.',
    features: ['Office Towers', 'Retail Fit-Out', 'Hospitality'],
    img: '/services/service2.avif',
    span: 'md:col-span-3 min-h-[240px] md:min-h-[260px]',
  },
  {
    title: 'Industrial',
    tag: '03',
    desc: 'Heavy-duty facilities built for scale: warehouses, plants, and infrastructure for the industries that matter.',
    features: ['Warehousing', 'Manufacturing', 'Logistics Hubs'],
    img: '/services/service3.avif',
    span: 'md:col-span-3 min-h-[240px] md:min-h-[260px]',
  },
  {
    title: 'Renovation & restoration',
    tag: '04',
    desc: 'Breathing new life into existing structures — structural upgrades, historic sensitivity, and modern systems.',
    features: ['Retrofits', 'Historic', 'Tenant improvements'],
    img: '/services/service4.avif',
    span: 'md:col-span-2 min-h-[280px] md:min-h-[300px]',
  },
  {
    title: 'Design-build',
    tag: '05',
    desc: 'Single contract, aligned incentives — faster decisions, fewer gaps between design intent and field execution.',
    features: ['Integrated teams', 'Fast-track', 'Value engineering'],
    img: '/services/service5.avif',
    span: 'md:col-span-2 min-h-[280px] md:min-h-[300px]',
  },
  {
    title: 'Infrastructure & civil',
    tag: '06',
    desc: 'Roads, utilities, and site work that set the foundation for everything that follows above grade.',
    features: ['Site work', 'Utilities', 'Paving'],
    img: '/services/service6.avif',
    span: 'md:col-span-2 min-h-[280px] md:min-h-[300px]',
  },
]

function BentoCard({ title, tag, desc, features, img, span }) {
  return (
    <motion.article
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-carbon-2 p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-orange-hi/50 ${span}`}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(11,11,12,0.95) 0%, rgba(11,11,12,0.75) 45%, rgba(11,11,12,0.45) 100%), url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 flex items-start justify-end">
        <span className="text-xs tracking-[0.3em] text-white/40">{tag}</span>
      </div>

      <div className="relative z-10">
        <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h3>
        <p className="mt-4 text-sm md:text-base text-white/60 leading-relaxed max-w-sm">
          {desc}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {features.map((f) => (
            <li
              key={f}
              className="text-[11px] uppercase tracking-wider rounded-full border border-white/15 px-3 py-1 text-white/70"
            >
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.25em] text-orange-hi mb-4"
            >
              — What we build
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-6xl font-black tracking-tight leading-[1]"
            >
              Precision across
              <br />
              every <span className="text-white/40">discipline.</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="max-w-md text-white/60 md:text-right"
          >
            From single-family residences to industrial-scale facilities, we
            bring the same engineering rigor and obsessive quality control.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-auto"
        >
          {BENTO.map((item) => (
            <BentoCard key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
