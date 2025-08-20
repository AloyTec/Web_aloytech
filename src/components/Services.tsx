import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, GraduationCap, Users } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "Consultoría CRM y ERP",
      description: "Optimización de sistemas de gestión empresarial para mejorar la eficiencia operativa y la experiencia del cliente.",
      features: ["Análisis de procesos", "Implementación", "Integración", "Optimización"]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "Capacitaciones Tecnológicas",
      description: "Programas de formación especializada en tecnologías emergentes, IA y transformación digital.",
      features: ["Cursos personalizados", "Certificaciones", "Modalidad virtual", "Soporte continuo"]
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Desarrollo de Aplicaciones",
      description: "Creación de soluciones tecnológicas personalizadas con enfoque en IA y automatización de procesos.",
      features: ["Desarrollo a medida", "Tecnologías modernas", "Escalabilidad", "Mantenimiento"]
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