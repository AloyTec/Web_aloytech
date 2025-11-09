import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, ArrowRight, BarChart3 } from "lucide-react";
import { LazyBackground } from "./LazyBackground";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Projects = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  
  const projects = [
    {
      icon: <Stethoscope className="w-16 h-16 text-primary-foreground" />,
      title: "Transcripción Clínica Inteligente",
      description: "Los médicos dictan sus consultas y el sistema escribe automáticamente todo lo que dijeron, organizado y listo para guardar. Ahorra horas de trabajo manual.",
      highlights: [
        "Transcripción Inteligente",
        "Clasificación Automática",
        "App Intuitiva",
      ],
      idealFor: ["Clínicas Médicas", "Hospitales", "Consultorios Privados", "Centros de Salud"],
      results: "Reducción del 85% en tiempo de documentación médica con precisión del 99.3%"
    },
    {
      icon: <BarChart3 className="w-16 h-16 text-primary-foreground" />,
      title: "Optimización de Procesos Empresariales",
      description: "Sistema que identifica qué procesos de tu empresa te hacen perder tiempo y dinero, calcula cuánto puedes ahorrar y te dice por dónde empezar a mejorar.",
      highlights: [
        "Panel de control que muestra tus ahorros al instante",
        "Calculadora que te dice cuánto dinero ahorrarás",
        "Te dice qué problemas resolver primero",
        "Formularios fáciles para documentar cómo trabajas"
      ],
      idealFor: ["PYMEs", "Empresas en Crecimiento", "Startups", "Negocios Familiares"],
      results: [
        "Identifica automáticamente dónde pierdes dinero", 
        "Calcula cuánto ahorrarías al año", 
        "Te recomienda qué mejorar primero según el impacto"
      ]
    }
  ];

  return (
    <LazyBackground
      id="proyectos"
      imageUrl="https://aloytech.s3.us-east-1.amazonaws.com/minh-pham-AHCmAX0k_J4-unsplash.jpg"
      className="py-16 relative block"
      parallaxSpeed={0.3}
    >
      {/* Overlay oscuro con gradiente azul para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-950/45 to-blue-900/50 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 [text-shadow:2px_2px_6px_rgba(0,0,0,0.8)] sm:[text-shadow:2px_2px_8px_rgba(0,0,0,0.8)]">
            Proyectos Destacados
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto [text-shadow:1px_1px_4px_rgba(0,0,0,0.7)] sm:[text-shadow:1px_1px_6px_rgba(0,0,0,0.7)]">
            Ejemplos de cómo convertimos problemas en soluciones
          </p>
        </div>

        <div 
          ref={elementRef}
          className={`grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 border-blue-300/40 hover:border-blue-400/70 overflow-hidden bg-white/92 backdrop-blur-lg">
              <CardHeader className="bg-gradient-to-br from-blue-600/95 to-blue-700/95 text-white relative backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/15 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white/25 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold mb-2 text-white">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-blue-50 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="p-6 bg-white/98 backdrop-blur-xl">
                <div className="mb-6 bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3">Características Principales:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center text-gray-800">
                        <ArrowRight className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3">Ideal Para:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.idealFor.map((client, clientIndex) => (
                      <Badge key={clientIndex} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 border border-blue-200">
                        {client}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-blue-50/95 backdrop-blur-sm rounded-lg border-l-4 border-blue-600 shadow-sm border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2">Resultados:</h4>
                  {Array.isArray(project.results) ? (
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start text-gray-800 text-sm">
                          <ArrowRight className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-800 text-sm">{project.results}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </LazyBackground>
  );
};