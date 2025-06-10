
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
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22white%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020c0%2011-9%2020-20%2020s-20-9-20-20%209-20%2020-20%2020%209%2020%2020zm-30-15v30l15-15-15-15z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-cyan-300 mr-3" />
            <span className="text-cyan-300 font-semibold">Innovación en IA y Operaciones</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Transformamos tu empresa con
            <span className="block text-cyan-300">Inteligencia Artificial</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Especialistas en transcripción de audio en tiempo real, auditorías ISO 27001, 
            consultoría CRM/ERP y capacitaciones tecnológicas que impulsan tu negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg group"
            >
              Comenzar Proyecto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent"
            >
              Ver Servicios
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-300 mb-2">+50</div>
              <div className="text-blue-200">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-300 mb-2">99%</div>
              <div className="text-blue-200">Precisión en Transcripción</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-300 mb-2">24/7</div>
              <div className="text-blue-200">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
