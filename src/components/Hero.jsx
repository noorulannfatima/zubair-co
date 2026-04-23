import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, stagger } from './motion'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon to-carbon" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 pt-28 md:pt-48 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="order-1 md:order-1"
          >
            <motion.h1
              variants={fadeUp}
              className="font-display font-black tracking-[-0.03em] text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.92] text-white"
            >
              Building the
              <br />
              Future of{' '}
              <span className="italic font-light text-orange-hi">
                Infrastructure
              </span>
              .
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-base md:text-lg text-white/70 leading-relaxed"
            >
              Malik Zubair & Co. delivers building and infrastructure projects
              across Pakistan — fusing industrial strength with architectural
              precision. We don't just build structures, we shape skylines.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-orange-hi px-7 py-4 text-sm font-semibold text-carbon hover:bg-white transition-colors"
              >
                Start Your Project <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 md:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] md:aspect-[4/5]">
              <img
                src="/hero_image_opt.jpg"
                alt="Malik Zubair & Co. building"
                fetchpriority="high"
                width={1600}
                height={1067}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
