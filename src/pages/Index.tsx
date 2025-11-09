
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Wrapper con imagen de fondo continua para Hero y Services */}
      <div 
        className="relative"
        style={{
          backgroundImage: 'url(https://aloytech.s3.us-east-1.amazonaws.com/thisisengineering-sbVu5zitZt0-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Hero />
        <Services />
      </div>
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
