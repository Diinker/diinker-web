import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import PromoSection from "./components/PromoSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-dvh w-full bg-linear-to-b from-[#1f23d6] to-black">
      {/* HEADER */}
      <NavBar />
      {/* MAIN CONTENT */}
      <HeroSection />
      <PromoSection />
      <Footer />
    </div>
  )
}

export default App
