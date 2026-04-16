export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const viewport = { once: true, amount: 0.15 }

// For tall containers (like gallery grid on mobile), use a pixel margin
// so animation triggers even when 25% of 4000px can't fit on screen
export const viewportTall = { once: true, margin: '-80px 0px' }
