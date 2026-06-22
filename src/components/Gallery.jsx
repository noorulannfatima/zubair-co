import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { fadeUp, stagger, viewport, viewportTall } from './motion'

const IMAGES = [
  { thumb: '/gallary/construction3_thumb.jpg', src: '/gallary/construction3.jpg', alt: 'Residential building progress by Malik Zubair & Co. in Lahore', label: 'Building' },
  { thumb: '/gallary/construction2_thumb.jpg', src: '/gallary/construction2.jpg', alt: 'Structural framework and concrete work on a commercial project site', label: 'Building' },
  { thumb: '/gallary/construction1_thumb.jpg', src: '/gallary/construction1.jpg', alt: 'Foundation and groundwork for new residential development in DHA Lahore', label: 'Building' },
  { thumb: '/gallary/infrastructor1_thumb.jpg', src: '/gallary/infrastructor1.jpg', alt: 'Road infrastructure and civil engineering project in Punjab', label: 'Infrastructure' },
  { thumb: '/gallary/infrastructor2_thumb.jpg', src: '/gallary/infrastructor2.jpg', alt: 'Utility infrastructure installation and site development work', label: 'Infrastructure' },
  { thumb: '/gallary/infrastructor3_thumb.jpg', src: '/gallary/infrastructor3.jpg', alt: 'Large-scale infrastructure project with heavy machinery on site', label: 'Infrastructure' },
  { thumb: '/gallary/construction4_thumb.jpg', src: '/gallary/construction4.jpg', alt: 'Multi-storey building site with scaffolding', label: 'Building' },
  { thumb: '/gallary/construction5_thumb.jpg', src: '/gallary/construction5.jpg', alt: 'Finishing phase of residential building project', label: 'Building' },
  { thumb: '/gallary/land_marking1_thumb.jpg', src: '/gallary/land_marking1.jpg', alt: 'Land surveying and marking for new building project', label: 'Land Marking' },
  { thumb: '/gallary/land_marking2_thumb.jpg', src: '/gallary/land_marking2.jpg', alt: 'Site preparation and boundary marking for residential plot', label: 'Land Marking' },
  { thumb: '/gallary/members_thumb.jpg', src: '/gallary/members.jpg', alt: 'Malik Zubair & Co. team members on project site', label: 'Our Team' },
  { thumb: '/gallary/land_marking3_thumb.jpg', src: '/gallary/land_marking3.jpg', alt: 'Precision land demarcation with survey equipment', label: 'Land Marking' },
  { thumb: '/gallary/office0_thumb.jpg', src: '/gallary/office0.jpg', alt: 'Malik Zubair & Co. modern head office interior in Lahore', label: 'Head Office' },
  { thumb: '/gallary/office1_thumb.jpg', src: '/gallary/office1.jpg', alt: 'Executive conference room at Malik Zubair & Co. headquarters', label: 'Head Office' },
  { thumb: '/gallary/office2_thumb.jpg', src: '/gallary/office2.jpg', alt: 'Professional work environment and workstation area at Malik Zubair & Co.', label: 'Head Office' },
  { thumb: '/gallary/office3_thumb.jpg', src: '/gallary/office3.jpg', alt: 'Main lobby and reception area at Malik Zubair & Co. office', label: 'Head Office' },
  { thumb: '/gallary/office4_thumb.jpg', src: '/gallary/office4.jpg', alt: 'Discussion room and meeting space for client consultations', label: 'Head Office' },
  { thumb: '/gallary/office5_thumb.jpg', src: '/gallary/office5.jpg', alt: 'Exterior view of Malik Zubair & Co. office building', label: 'Head Office' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % IMAGES.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + IMAGES.length) % IMAGES.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section id="gallery" className="relative py-24 md:py-36 bg-carbon-2">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
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
              — Gallery
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-6xl font-black tracking-tight leading-[1]"
            >
              A closer
              <br />
              <span className="text-white/40">look.</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="max-w-md text-white/60 md:text-right"
          >
            Details from our recent work — renders, facades, and finished
            interiors. Tap any image to view it full size.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportTall}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 auto-rows-[1fr]"
        >
          {IMAGES.map((img, i) => (
            <motion.button
              key={img.src}
              variants={fadeUp}
              onClick={() => setActive(i)}
              className="group relative block w-full aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-carbon hover:border-orange-hi/50 transition-colors"
            >
              <img
                src={img.thumb}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/85 via-carbon/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/90">
                  {img.label}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-orange-hi">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-carbon/95 backdrop-blur-md grid place-items-center p-4 md:p-10"
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                setActive(null)
              }}
              aria-label="Close"
              className="absolute top-5 right-5 grid place-items-center w-11 h-11 rounded-full border border-white/20 text-white hover:bg-orange-hi hover:text-carbon hover:border-orange-hi transition-colors"
            >
              <X size={18} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setActive((i) => (i - 1 + IMAGES.length) % IMAGES.length)
              }}
              aria-label="Previous"
              className="absolute left-4 md:left-8 grid place-items-center w-11 h-11 rounded-full border border-white/20 text-white hover:bg-orange-hi hover:text-carbon hover:border-orange-hi transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={IMAGES[active].src}
              alt={IMAGES[active].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[92vw] max-h-[86vh] object-contain rounded-xl border border-white/10"
            />

            <button
              onClick={(e) => {
                e.stopPropagation()
                setActive((i) => (i + 1) % IMAGES.length)
              }}
              aria-label="Next"
              className="absolute right-4 md:right-8 grid place-items-center w-11 h-11 rounded-full border border-white/20 text-white hover:bg-orange-hi hover:text-carbon hover:border-orange-hi transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-5 left-0 right-0 text-center text-xs tracking-[0.2em] uppercase text-white/60">
              {String(active + 1).padStart(2, '0')} / {String(IMAGES.length).padStart(2, '0')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
