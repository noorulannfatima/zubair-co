import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, stagger, viewport } from './motion'

const PROJECTS = [
  {
    title: 'Modern Villa — DHA',
    category: 'Residential',
    img: '/projects/home6.jpg',
    span: 'md:col-span-4 md:row-span-2',
  },
  {
    title: 'Residence',
    category: 'Residential',
    img: '/projects/home5.jpg',
    span: 'md:col-span-2',
  },
  {
    title: '5 Marla House',
    category: 'Residential',
    img: '/projects/home3.jpg',
    span: 'md:col-span-2',
  },
  {
    title: 'Classical Estate',
    category: 'Luxury',
    img: '/projects/home4.jpg',
    span: 'md:col-span-3',
  },
  {
    title: 'Contemporary Home',
    category: 'Residential',
    img: '/projects/home1.jpg',
    span: 'md:col-span-3',
  },
]

function ProjectCard({ title, category, img, span }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-carbon-2 min-h-[260px] sm:min-h-[300px] md:min-h-[340px] hover:border-orange-hi/50 transition-colors ${span}`}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent" />

      <div className="relative z-10 h-full w-full p-6 md:p-8 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="inline-block rounded-full border border-white/20 bg-carbon/40 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/80">
            {category}
          </span>
          <span className="grid place-items-center w-10 h-10 rounded-full bg-orange-hi/0 border border-white/20 text-white/80 group-hover:bg-orange-hi group-hover:text-carbon group-hover:border-orange-hi transition-colors">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <div>
          {/* Location div removed from here */}
          <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
            {title}
          </h3>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-carbon-2 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.25em] text-orange-hi mb-4"
            >
              — Selected projects
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-6xl font-black tracking-tight leading-[1]"
            >
              Homes we've
              <br />
              <span className="text-white/40">delivered.</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="max-w-md text-white/60 md:text-right"
          >
            A glimpse of recent residential builds, showcasing our commitment to quality and design excellence.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 md:gap-5 auto-rows-auto"
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}