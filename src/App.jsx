import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CanvasSection from "./components/CanvasSection";
import Features from "./components/Features";
import LogoStrip from "./components/LogoStrip";
import Pricing from "./components/Pricing";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoStrip />
      <CanvasSection />
      <Features />
      <Pricing />
      <Accordion />
      <Footer />
    </>
  );
}