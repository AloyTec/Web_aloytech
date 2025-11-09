
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LazyBackground } from "@/components/LazyBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Wrapper con imagen de fondo continua para Hero y Services */}
      <LazyBackground
        imageUrl="https://aloytech.s3.us-east-1.amazonaws.com/thisisengineering-sbVu5zitZt0-unsplash.jpg"
        className="relative block"
        parallaxSpeed={0.4}
      >
        <Hero />
        <Services />
      </LazyBackground>
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
