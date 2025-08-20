import { Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
            <img 
              src="/lovable-uploads/f0641d3f-27dc-4b7a-8155-4221a82b53dd.png" 
              alt="AloyTech Brain Icon" 
              className="h-12 w-auto"
            />
            <img 
              src="/lovable-uploads/35800f66-0d70-4bb3-9d63-02701e70452b.png" 
              alt="AloyTech" 
              className="h-10 w-auto filter brightness-0 invert"
            />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transformamos empresas a través de la innovación tecnológica y la inteligencia artificial. 
              Soluciones integrales para la era digital.
            </p>
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
            <ul className="space-y-2 text-muted-foreground">
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
            <ul className="space-y-2 text-muted-foreground">
              <li>contacto@aloytech.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Operaciones globales</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} AloyTech - SOLUCIONES TECNOLÓGICAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};