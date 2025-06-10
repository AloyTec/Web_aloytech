
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d4640182-c867-485c-8826-55cb464bef9c.png" 
              alt="MIIAO Logo" 
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-900">MIIAO</h1>
              <p className="text-sm text-blue-600">IA DE OPERACIONES</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-blue-700 hover:text-blue-900 transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-blue-700 hover:text-blue-900 transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="text-blue-700 hover:text-blue-900 transition-colors"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-blue-700 hover:text-blue-900 transition-colors"
            >
              Contacto
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              Consulta Gratis
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-100">
            <div className="flex flex-col space-y-3 mt-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-blue-700 hover:text-blue-900 transition-colors py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-blue-700 hover:text-blue-900 transition-colors py-2"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="text-left text-blue-700 hover:text-blue-900 transition-colors py-2"
              >
                Proyectos
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-blue-700 hover:text-blue-900 transition-colors py-2"
              >
                Contacto
              </button>
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 w-full mt-2"
              >
                Consulta Gratis
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
