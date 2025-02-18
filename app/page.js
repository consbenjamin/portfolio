import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";

export default function Home() {

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar/>
      <Hero/>
      <About/>
      <Carousel/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
