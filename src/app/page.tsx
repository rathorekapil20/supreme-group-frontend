
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";
import VehicleShowcase from "@/components/VehicleShowcase";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <VehicleShowcase />
      <Contact />
      <Footer />
    </div>
  );
}
