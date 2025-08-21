import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, GraduationCap, Users, Palette, Target } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "Consultoría tecnológica",
      description: "Especialidades tecnológicas para impulsar la transformación digital de tu empresa.",
      features: ["Aplicaciones Web", "Diseño UI/UX", "Inteligencia Artificial"]
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
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Agencia Diseño gráfico",
      description: "Servicios creativos de diseño visual para fortalecer la identidad de tu marca.",
      features: ["Identidad corporativa", "Diseño web", "Material publicitario", "Branding"]
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "PMO Service",
      description: "Gestión profesional de proyectos para asegurar el éxito de tus iniciativas empresariales.",
      features: ["Planificación estratégica", "Control de calidad", "Gestión de riesgos", "Seguimiento continuo"]
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