import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { About } from "./About";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Altura del header fijo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/aloytech-logo.png" 
              alt="AloyTech" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegación principal">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Ir a la sección de Inicio"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Ir a la sección de Servicios"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Ir a la sección de Proyectos"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Ir a la sección Sobre Nosotros"
            >
              Nosotros
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-primary hover:bg-primary/90 -mt-1"
              aria-label="Ir al formulario de Contacto"
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border" aria-label="Navegación móvil">
            <div className="flex flex-col space-y-3 mt-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
                aria-label="Ir a la sección de Inicio"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
                aria-label="Ir a la sección de Servicios"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
                aria-label="Ir a la sección de Proyectos"
              >
                Proyectos
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
                aria-label="Ir a la sección Sobre Nosotros"
              >
                Nosotros
              </button>
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-primary hover:bg-primary/90 w-full mt-2"
                aria-label="Ir al formulario de Contacto"
              >
                Contacto
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};