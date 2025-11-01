import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchCheck, Code, Rocket, GraduationCap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <SearchCheck className="w-12 h-12 text-primary" />,
      title: "Te ayudamos a encontrar dónde está el problema",
      description: "Revisamos cómo trabaja tu empresa y te mostramos exactamente dónde pierdes tiempo o dinero. Luego te damos un plan claro para solucionarlo, paso a paso.",
      features: ["Identificamos qué procesos te hacen perder tiempo", "Creamos un plan de mejora fácil de entender", "Te mostramos cómo la tecnología puede ayudarte específicamente", "Optimizamos lo que ya tienes antes de crear algo nuevo"]
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Desarrollo de Soluciones",
      description: "Creamos aplicaciones y sistemas que resuelven problemas reales",
      features: ["Aplicaciones web", "Sistemas de gestión (CRM/ERP)", "Automatización de procesos"]
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: "Gestión de Proyectos",
      description: "Lideramos tu transformación tecnológica con metodologías ágiles y resultados garantizados",
      features: ["PMO especializado en tecnología", "Metodologías ágiles (Scrum/Kanban)", "Control de calidad y riesgos"]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "Capacitación & Adopción",
      description: "Preparamos a tu equipo para adoptar y dominar las nuevas tecnologías implementadas",
      features: ["Programas de formación personalizados", "Capacitación en IA y herramientas digitales", "Soporte post-implementación"]
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones integrales de tecnología e inteligencia artificial para impulsar 
            la transformación digital de tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
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
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                      {feature}
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