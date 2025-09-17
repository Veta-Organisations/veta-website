import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import Features from "../components/Features";
import UserForm from "../components/UserForm";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main
      className="relative min-h-screen bg-cover bg-no-repeat bg-center overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Watermark logo overlay */}
      <img
        src="/footer-logo.svg"
        alt="Veta watermark top-left"
        className="absolute top-[100px] left-[-700px] w-[1500px] opacity-3 rotate-[-25deg] pointer-events-none select-none"
      />

      {/* Bottom-right logo */}
      <img
        src="/footer-logo.svg"
        alt="Veta watermark bottom-right"
        className="absolute top-[700px] right-[-900px] w-[1500px] opacity-3 rotate-[-25deg] pointer-events-none select-none"
      />

      {/* Content */}
      <Navbar />
      <Hero />
      <Offer />
      <Features />
      <UserForm />
      <FAQ />
      <Footer />
    </main>
  );
};

export default HomePage;
