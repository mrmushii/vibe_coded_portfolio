import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Philosophy from './components/Philosophy'

function App() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />

      {/* Spacer for scroll testing */}
      <section className="h-[100vh] bg-off-white flex items-start justify-center pt-20">
        <p className="font-mono text-sm text-dark/40">// more sections coming soon</p>
      </section>
    </div>
  )
}

export default App
