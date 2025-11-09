import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchCheck, Code, ClipboardCheck, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Services = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const services = [
    {
      icon: <SearchCheck className="w-12 h-12 text-primary" />,
      title: "Te ayudamos a encontrar dónde está el problema",
      description: "Revisamos cómo trabaja tu empresa y te mostramos exactamente dónde pierdes tiempo o dinero.",
      features: [
        "Identificamos qué procesos te hacen perder tiempo", 
        "Creamos un plan de mejora fácil de entender", 
        "Te mostramos cómo la tecnología puede ayudarte específicamente", 
      ]
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Desarrollamos tu solución a medida",
      description: "Creamos aplicaciones y sistemas que resuelven problemas reales",
      features: [
        "Aplicaciones web y mobile", 
        "Sistemas de gestión", 
        "Automatización de procesos con IA"
      ]
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-primary" />,
      title: "Gestión de Proyectos",
      description: "Coordinamos todo el proceso de implementación para que no tengas que preocuparte de los detalles técnicos.",
      features: [
        "Coordinación completa del proyecto de principio a fin", 
        "Reportes claros del avance", 
        "Anticipamos y resolvemos problemas antes de que te afecten"
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
      className="py-12 sm:py-16 relative"
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 [text-shadow:2px_2px_6px_rgba(0,0,0,0.8)] sm:[text-shadow:3px_3px_10px_rgba(0,0,0,0.9)]">
            Nuestros Servicios
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto [text-shadow:1px_1px_4px_rgba(0,0,0,0.7)] sm:[text-shadow:2px_2px_8px_rgba(0,0,0,0.8)]">
            Todo lo que necesitas para automatizar procesos y hacer crecer tu empresa
          </p>
        </div>

        <div 
          ref={elementRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 bg-background/80 backdrop-blur-md">
              <CardHeader className="text-center pb-3 sm:pb-4">
                <div className="flex justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
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