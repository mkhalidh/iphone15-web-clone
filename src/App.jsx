import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import HowItWorks from "./components/HowItWorks"
import Model from "./components/Model"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    console.log("App")
      <main className="bg-black">
        <Navbar />
        <section id="Home">
          <Hero />
        </section>
        <section id="Highlights">
          <Highlights />
        </section>
        <section id="iPhone 15">
          <Model />
        </section>
        <section id="How It's Work">
          <HowItWorks />
        </section>
        <Footer />
      </main>
    </>
  )
}

export default App
