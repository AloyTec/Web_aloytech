import { Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <p className="text-primary-foreground/80 max-w-md mb-4">
                Soluciones integrales para la era digital.
              </p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/aloytech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white hover:bg-white/90 p-3 rounded-full transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#servicios" className="hover:text-primary-foreground transition-colors">
                  Transcripción IA
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary-foreground transition-colors">
                  Consultoría CRM/ERP
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary-foreground transition-colors">
                  Capacitaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>info@aloytech.cl</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {currentYear} AloyTech - SOLUCIONES TECNOLÓGICAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};