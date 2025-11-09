
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="pt-24 pb-16 text-primary-foreground relative overflow-hidden"
    >
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22white%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020c0%2011-9%2020-20%2020s-20-9-20-20%209-20%2020-20%2020%209%2020%2020zm-30-15v30l15-15-15-15z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-white drop-shadow-lg" />
            <span className="text-white font-semibold" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>AloyTech | Soluciones de IA y Transformación Digital</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9)' }}>
            Hacemos que la tecnología trabaje para ti
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Convertimos tareas que toman horas en procesos automáticos que toman minutos. Lo explicamos en español simple, sin tecnicismos: soluciones claras con resultados medibles.
          </p>
          
          <div className="mb-8 inline-block px-6 py-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-full">
            <p className="text-lg md:text-xl font-semibold text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
              "Automatiza lo repetitivo, enfócate en lo importante"
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg group shadow-xl"
            >
              Comenzar Proyecto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg bg-white/10 backdrop-blur-sm shadow-xl"
            >
              Ver Servicios
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
};
