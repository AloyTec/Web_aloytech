import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, ArrowRight, BarChart3 } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      icon: <Stethoscope className="w-16 h-16 text-primary-foreground" />,
      title: "Transcripción Clínica Inteligente",
      description: "Plataforma de transcripción médica inteligente que automatiza la documentación clínica, mejorando la eficiencia y precisión en el sector salud.",
      highlights: [
        "Transcripción Inteligente",
        "Clasificación Automática",
        "App Móvil Intuitiva",
        "Arquitectura Serverless"
      ],
      technologies: ["Inteligencia Artificial", "Machine Learning", "React Native"],
      results: "Reducción del 85% en tiempo de documentación médica con precisión del 99.3%"
    },
    {
      icon: <BarChart3 className="w-16 h-16 text-primary-foreground" />,
      title: "Optimización de Procesos Empresariales",
      description: "Plataforma integral para la gestión, evaluación y optimización de procesos organizacionales con análisis de beneficios y priorización estratégica.",
      highlights: [
        "Dashboard con métricas en tiempo real",
        "Calculadora de beneficios y ROI",
        "Matriz de priorización estratégica",
        "Formularios de levantamiento de procesos"
      ],
      technologies: ["React", "Node.js", "Analytics", "Dashboard"],
      results: "Automatización del análisis de procesos con cálculo de ahorro anual, ROI y recomendaciones de implementación basadas en priorización"
    }
  ];

  return (
    <section id="proyectos" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Casos de éxito que demuestran nuestro compromiso con la innovación 
            y la excelencia en cada solución desarrollada
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-primary overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary-foreground/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold mb-2">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-primary-foreground/80 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Características Principales:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Tecnologías Utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/80">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-accent rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold text-foreground mb-2">Resultados:</h4>
                  <p className="text-muted-foreground text-sm">{project.results}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};