
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Shield, Settings, GraduationCap, FileText, Users } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Mic className="w-12 h-12 text-blue-600" />,
      title: "Transcripción de Audio en Tiempo Real",
      description: "Soluciones avanzadas de IA para convertir audio a texto con precisión excepcional, ideales para reuniones, conferencias y documentación médica.",
      features: ["Precisión del 99%", "Múltiples idiomas", "Integración API", "Tiempo real"]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Auditorías ISO 27001",
      description: "Evaluaciones completas de seguridad de la información para garantizar el cumplimiento de estándares internacionales.",
      features: ["Evaluación completa", "Plan de mejoras", "Certificación", "Seguimiento"]
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: "Consultoría CRM y ERP",
      description: "Optimización de sistemas de gestión empresarial para mejorar la eficiencia operativa y la experiencia del cliente.",
      features: ["Análisis de procesos", "Implementación", "Integración", "Optimización"]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: "Capacitaciones Tecnológicas",
      description: "Programas de formación especializada en tecnologías emergentes, IA y transformación digital.",
      features: ["Cursos personalizados", "Certificaciones", "Modalidad virtual", "Soporte continuo"]
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "Creación de CV Profesional",
      description: "Servicio especializado de creación y optimización de currículums con apoyo de periodistas profesionales.",
      features: ["Diseño profesional", "Contenido optimizado", "ATS compatible", "Revisión periodística"]
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Desarrollo de Aplicaciones",
      description: "Creación de soluciones tecnológicas personalizadas con enfoque en IA y automatización de procesos.",
      features: ["Desarrollo a medida", "Tecnologías modernas", "Escalabilidad", "Mantenimiento"]
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto">
            Soluciones integrales de tecnología e inteligencia artificial para impulsar 
            la transformación digital de tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-blue-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-blue-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-blue-700">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
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
