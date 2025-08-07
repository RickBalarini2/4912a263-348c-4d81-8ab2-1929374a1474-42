import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Breeds from "@/components/Breeds";
import Gallery from "@/components/Gallery";
import Breeding from "@/components/Breeding";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Breeds />
        <Gallery />
        <Breeding />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
