import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import { LazyBackground } from "./LazyBackground";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    otherService: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Configuración de EmailJS
      const serviceId = 'service_djnht66';
      const templateId = 'template_cfsfjpi'; // NECESITAS REEMPLAZAR ESTO con tu Template ID real
      const publicKey = 'JHdxlNwy0cKjXR9Zp';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'No proporcionado',
        company: formData.company || 'No proporcionado',
        service: formData.service === 'otro' ? formData.otherService : formData.service,
        message: formData.message,
        to_email: 'info@aloytech.cl'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success("¡Mensaje enviado exitosamente! Te contactaremos pronto.");
      
      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        otherService: '',
        message: ''
      });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      toast.error("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o escríbenos a info@aloytech.cl");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <LazyBackground
      id="contacto"
      imageUrl="https://aloytech.s3.us-east-1.amazonaws.com/christina-wocintechchat-com-UTw3j_aoIKM-unsplash.jpg"
      className="py-16 relative block"
      parallaxSpeed={0.25}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white [text-shadow:2px_2px_6px_rgba(0,0,0,0.8)] sm:[text-shadow:3px_3px_10px_rgba(0,0,0,0.9)]">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto [text-shadow:1px_1px_4px_rgba(0,0,0,0.7)] sm:[text-shadow:2px_2px_8px_rgba(0,0,0,0.8)]">
            ¿Listo para automatizar procesos y ahorrar tiempo? 
            <br />
            Cuéntanos tu situación y te mostramos cómo podemos ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-background/90 backdrop-blur-md border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Solicita tu Consulta Gratuita
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Completa el formulario y te contactaremos en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" aria-label="Formulario de contacto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground mb-2 block">
                      Nombre Completo *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-foreground mb-2 block">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-foreground mb-2 block">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="text-foreground mb-2 block">
                    Servicio de Interés *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="bg-background border-border text-foreground">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultoria">CConsultoría Estratégica</SelectItem>
                      <SelectItem value="desarrollo">Desarrollo de Soluciones</SelectItem>
                      <SelectItem value="capacitacion">Capacitación & Adopción</SelectItem>
                      <SelectItem value="gestion-proyectos">Gestión de Proyectos</SelectItem>
                      <SelectItem value="no-seguro">No estoy seguro / Necesito asesoría</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Campo condicional para "Otro" */}
                {formData.service === 'otro' && (
                  <div>
                    <Label htmlFor="otherService" className="text-foreground mb-2 block">
                      Especifica el servicio *
                    </Label>
                    <Input
                      id="otherService"
                      type="text"
                      value={formData.otherService}
                      onChange={(e) => handleInputChange('otherService', e.target.value)}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      placeholder="¿Qué servicio necesitas?"
                      required={formData.service === 'otro'}
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="message" className="text-foreground mb-2 block">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-[120px]"
                    placeholder="Cuéntanos: ¿Qué proceso manual te gustaría automatizar? ¿Cuánto tiempo pierdes en ello?"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg group shadow-xl"
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? 'Enviando mensaje...' : 'Enviar mensaje de contacto'}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-background/90 backdrop-blur-md border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-primary" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-4" />
                  <div>
                    <p className="text-foreground font-semibold">Email</p>
                    <p className="text-muted-foreground">info@aloytech.cl</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-4" />
                  <div>
                    <p className="text-foreground font-semibold">Ubicación</p>
                    <p className="text-muted-foreground">Santiago, Chile</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/90 backdrop-blur-md border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  ¿Por qué elegir AloyTech?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Experiencia real: proyectos funcionando en salud, gestión y más</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Soporte continuo: estamos cuando nos necesitas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Implementación ágil: resultados en 2-8 semanas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>GSi no funciona como prometimos, lo arreglamos sin costo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LazyBackground>
  );
};