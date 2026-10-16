import HeroSection from "./components/HeroSection";
import DestinationSection from "./components/DestinationSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <HeroSection />
      <DestinationSection />
      <Footer />
    </main>
  );
}