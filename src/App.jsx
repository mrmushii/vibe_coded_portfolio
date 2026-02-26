import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
