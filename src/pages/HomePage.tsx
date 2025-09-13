import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import Features from "../components/Features";
import UserForm from "../components/UserForm";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main className="">
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
