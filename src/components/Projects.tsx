
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, FileUser, ArrowRight } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      icon: <Stethoscope className="w-16 h-16 text-blue-600" />,
      title: "Soluciones de Salud con IA",
      description: "Desarrollo de sistemas avanzados de transcripción en tiempo real para el sector salud, mejorando la documentación médica y la atención al paciente.",
      highlights: [
        "Transcripción médica precisa",
        "Integración con sistemas hospitalarios",
        "Cumplimiento normativo HIPAA",
        "Reducción del 80% en tiempo de documentación"
      ],
      technologies: ["Inteligencia Artificial", "Machine Learning", "APIs REST", "Seguridad Médica"],
      results: "Implementado en 15+ centros médicos con 99.2% de precisión"
    },
    {
      icon: <FileUser className="w-16 h-16 text-blue-600" />,
      title: "Plataforma de CV Inteligente",
      description: "Creación de una plataforma integral para la elaboración de currículums profesionales con apoyo de periodistas especializados y optimización automática.",
      highlights: [
        "Editor inteligente de CV",
        "Revisión periodística profesional",
        "Optimización para ATS",
        "Templates personalizables"
      ],
      technologies: ["React", "NLP", "Content Management", "Design Systems"],
      results: "Más de 1,000 CVs creados con 85% de tasa de éxito en entrevistas"
    }
  ];

  return (
    <section id="proyectos" className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto">
            Casos de éxito que demuestran nuestro compromiso con la innovación 
            y la excelencia en cada solución desarrollada
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-blue-200 hover:border-blue-400 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold mb-2">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-blue-100 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Características Principales:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center text-blue-700">
                        <ArrowRight className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Tecnologías Utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 mb-2">Resultados:</h4>
                  <p className="text-blue-700 text-sm">{project.results}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
