import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, GraduationCap, TrendingUp } from "lucide-react";
import { LazyBackground } from "./LazyBackground";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const About = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  
  const uniqueFeatures = [
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Traducimos lo complejo en simple",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Gestionamos proyectos con rigor técnico y empatía humana",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Enseñamos mientras implementamos",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Acercamos la tecnología a quien la necesita",
    },
  ];

  return (
    <LazyBackground
      id="nosotros"
      imageUrl="https://aloytech.s3.us-east-1.amazonaws.com/brooke-cagle-G0hS-5j0sT0-unsplash.jpg"
      className="py-16 relative block"
      parallaxSpeed={0.4}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 [text-shadow:2px_2px_6px_rgba(0,0,0,0.8)] sm:[text-shadow:3px_3px_10px_rgba(0,0,0,0.9)]">
              Sobre Nosotros
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-semibold leading-relaxed [text-shadow:1px_1px_4px_rgba(0,0,0,0.7)] sm:[text-shadow:2px_2px_8px_rgba(0,0,0,0.8)]">
              AloyTech es más que una empresa de tecnología. Somos un puente entre 
              el mundo técnico y las personas que necesitan soluciones reales.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            <Card className="border-l-4 border-l-primary bg-background/85 backdrop-blur-md">
              <CardContent className="p-6">
                <p className="text-lg text-foreground leading-relaxed">
                  <span className="font-bold text-primary">Fundada en 2025</span>, AloyTech nació con una misión clara: 
                  <span className="font-semibold"> democratizar la tecnología y hacerla accesible para todos.</span>
                </p>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none bg-background/85 backdrop-blur-md rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Nuestra fundadora pasó años viendo el mismo problema: consultoras que hablaban en tecnicismos y clientes que no entendían qué estaban comprando. 
                AloyTech nació para cambiar eso. Aquí traducimos lo complejo a lo simple.
              </p>
            </div>

            {/* Diferenciador */}
            <div className="bg-primary/90 backdrop-blur-md rounded-lg p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Nuestra diferencia está en cómo comunicamos.
              </h3>
              <p className="text-white/95 leading-relaxed text-base md:text-lg">
                No hablamos en código. Explicamos cada decisión técnica en español simple. No usamos jerga para impresionar. 
                Trabajamos hasta que entiendas exactamente qué estamos haciendo, por qué lo hacemos así y qué vas a ganar con ello. 
                Luego te acompañamos para que tu equipo también lo entienda.
              </p>
            </div>
          </div>

          {/* Lo que nos hace únicos */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8 [text-shadow:1px_1px_4px_rgba(0,0,0,0.7)] sm:[text-shadow:2px_2px_8px_rgba(0,0,0,0.8)]">
              Lo que nos hace únicos
            </h3>
            <div 
              ref={elementRef}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {uniqueFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary bg-background/85 backdrop-blur-md"
                >
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">
                      {feature.title}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Filosofía */}
          <div className="text-center mb-12 bg-background/85 backdrop-blur-md rounded-lg p-6">
            <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              Creemos que la mejor tecnología es aquella que todos pueden entender y aprovechar. 
              Por eso, cada proyecto es una oportunidad para educar, empoderar y transformar.
            </p>
          </div>

          {/* Resultado Final */}
          <Card className="bg-primary/90 backdrop-blur-md text-primary-foreground border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Resultado:
              </h3>
              <p className="text-xl md:text-2xl font-semibold">
                Soluciones tecnológicas que tus equipos entienden, adoptan y aprovechan al máximo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </LazyBackground>
  );
};