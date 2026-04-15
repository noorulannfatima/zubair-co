import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Marquee from './components/Marquee'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-carbon text-white min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Marquee />
        <Projects />
         <Marquee />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
