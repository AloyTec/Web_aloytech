import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success("¡Mensaje enviado exitosamente! Te contactaremos pronto.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contacto" className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Estamos listos para transformar tus ideas en soluciones innovadoras. 
            Contáctanos para una consulta gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary-foreground">
                Solicita tu Consulta Gratuita
              </CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Completa el formulario y te contactaremos en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-primary-foreground mb-2 block">
                      Nombre Completo *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-primary-foreground mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-primary-foreground mb-2 block">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-primary-foreground mb-2 block">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="text-primary-foreground mb-2 block">
                    Servicio de Interés *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="transcripcion">Transcripción de Audio en Tiempo Real</SelectItem>
                      <SelectItem value="crm-erp">Consultoría CRM/ERP</SelectItem>
                      <SelectItem value="capacitacion">Capacitaciones Tecnológicas</SelectItem>
                      <SelectItem value="cv">Creación de CV Profesional</SelectItem>
                      <SelectItem value="desarrollo">Desarrollo de Aplicaciones</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-primary-foreground mb-2 block">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 min-h-[120px]"
                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-warning hover:bg-warning/90 text-warning-foreground py-3 text-lg group"
                >
                  Enviar Mensaje
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary-foreground flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-accent" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-accent mr-4" />
                  <div>
                    <p className="text-primary-foreground font-semibold">Email</p>
                    <p className="text-primary-foreground/80">contacto@aloytech.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-accent mr-4" />
                  <div>
                    <p className="text-primary-foreground font-semibold">Teléfono</p>
                    <p className="text-primary-foreground/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-accent mr-4" />
                  <div>
                    <p className="text-primary-foreground font-semibold">Ubicación</p>
                    <p className="text-primary-foreground/80">Operaciones globales</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary-foreground">
                  ¿Por qué elegir AloyTech?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-primary-foreground/80">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Experiencia comprobada en soluciones de IA</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Soporte técnico especializado 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Implementación rápida y eficiente</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Garantía de satisfacción al 100%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};