import { lazy, Suspense } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Marquee from './components/Marquee'

const Projects = lazy(() => import('./components/Projects'))
const Gallery = lazy(() => import('./components/Gallery'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return <div className="min-h-[200px]" />
}

export default function App() {
  return (
    <div className="bg-carbon text-white min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Marquee />
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Marquee />
        <Suspense fallback={<SectionFallback />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}
