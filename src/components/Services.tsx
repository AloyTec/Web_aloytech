import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchCheck, Code, ClipboardCheck, GraduationCap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <SearchCheck className="w-12 h-12 text-primary" />,
      title: "Te ayudamos a encontrar dónde está el problema",
      description: "Revisamos cómo trabaja tu empresa y te mostramos exactamente dónde pierdes tiempo o dinero. Luego te damos un plan claro para solucionarlo, paso a paso.",
      features: [
        "Identificamos qué procesos te hacen perder tiempo", 
        "Creamos un plan de mejora fácil de entender", 
        "Te mostramos cómo la tecnología puede ayudarte específicamente", 
        "Optimizamos lo que ya tienes antes de crear algo nuevo"
      ]
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Desarrollo de Soluciones",
      description: "Creamos aplicaciones y sistemas que resuelven problemas reales",
      features: [
        "Aplicaciones web", 
        "Sistemas de gestión (CRM/ERP)", 
        "Automatización de procesos"
      ]
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-primary" />,
      title: "Gestión de Proyectos",
      description: "Coordinamos todo el proceso de implementación para que no tengas que preocuparte de los detalles técnicos. Te mantenemos informado en cada paso y nos aseguramos de cumplir plazos.",
      features: [
        "Coordinación completa del proyecto de principio a fin", 
        "Reportes claros sobre el avance (sin jerga técnica)", 
        "Resolvemos problemas antes de que se conviertan en crisis"
      ]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "Capacitación & Adopción",
      description: "Preparamos a tu equipo para adoptar y dominar las nuevas tecnologías implementadas",
      features: [
        "Programas de formación personalizados", 
        "Capacitación en IA y herramientas digitales", 
        "Soporte post-implementación"
      ]
    }
  ];

  return (
    <section 
      id="servicios" 
      className="py-16 relative"
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}>
            Nuestros Servicios
          </h2>
          <p className="text-xl text-white/95 max-w-3xl mx-auto" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Soluciones integrales de tecnología e inteligencia artificial para impulsar 
            la transformación digital de tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 bg-background/80 backdrop-blur-md">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-foreground">
                      <div className="w-2 h-2 bg-success rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};