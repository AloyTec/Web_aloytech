
import { Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/abf01c4c-4a50-460f-9efa-988bddd73e18.png" 
              alt="AloyTech Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h3 className="text-2xl font-bold">AloyTech</h3>
              <p className="text-cyan-300">SOLUCIONES TECNOLÓGICAS</p>
            </div>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              Transformamos empresas a través de la innovación tecnológica y la inteligencia artificial. 
              Soluciones integrales para la era digital.
            </p>
            <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/company/aloytech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors group"
            >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-300">Servicios</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Transcripción IA
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Consultoría CRM/ERP
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Capacitaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-300">Contacto</h4>
            <ul className="space-y-2 text-blue-200">
              <li>contacto@aloytech.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Operaciones globales</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-300">
            © {currentYear} AloyTech - SOLUCIONES TECNOLÓGICAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
