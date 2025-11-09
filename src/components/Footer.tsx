import { Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="https://aloytech.s3.us-east-1.amazonaws.com/logo+2.1+transparente.png" 
                alt="AloyTech" 
                className="h-20 w-auto flex-shrink-0"
              />
              <p className="text-background/70 max-w-md">

                Soluciones integrales para la era digital.
              </p>
            </div>
            <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/company/aloytech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 p-3 rounded-full transition-colors group"
            >
                <Linkedin className="w-5 h-5 text-primary-foreground group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Servicios</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#servicios" className="hover:text-background transition-colors">
                  Transcripción IA
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-background transition-colors">
                  Consultoría CRM/ERP
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-background transition-colors">
                  Capacitaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contacto</h4>
            <ul className="space-y-2 text-background/70">
              <li>info@aloytech.cl</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/70">
            © {currentYear} AloyTech - SOLUCIONES TECNOLÓGICAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};