import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <Hero />

      {/* Spacer for scroll testing */}
      <section className="h-[200vh] bg-off-white flex items-start justify-center pt-20">
        <p className="font-mono text-sm text-dark/40">// sections coming soon</p>
      </section>
    </div>
  )
}

export default App
