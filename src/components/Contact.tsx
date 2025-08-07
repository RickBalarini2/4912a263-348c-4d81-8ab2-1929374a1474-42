import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Vamos Conversar
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para ajudar você a encontrar o companheiro perfeito. 
            Entre em contato conosco e tire todas suas dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-strong">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Envie sua Mensagem
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone *
                    </label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Interesse
                  </label>
                  <select className="w-full p-3 border border-border rounded-md bg-background">
                    <option>Selecione uma opção</option>
                    <option>American Bully Micro</option>
                    <option>American Bully Nano</option>
                    <option>Exotic Bully Fluffy</option>
                    <option>Bulldog Francês</option>
                    <option>Bulldog Francês Fluffy</option>
                    <option>Cobertura/Acasalamento</option>
                    <option>Informações Gerais</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea 
                    placeholder="Conte-nos mais sobre seu interesse, dúvidas ou necessidades..."
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-gold hover:shadow-gold transition-all duration-300"
                  size="lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 text-foreground">
                  Contato Rápido
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Conversar
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Telefone</p>
                      <p className="text-muted-foreground">(11) 3333-4444</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Ligar
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">E-mail</p>
                      <p className="text-muted-foreground">contato@microbullie.com</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      E-mail
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <h4 className="text-xl font-semibold text-foreground">
                    Horário de Atendimento
                  </h4>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda - Sexta</span>
                    <span className="font-medium text-foreground">8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado</span>
                    <span className="font-medium text-foreground">8h às 14h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo</span>
                    <span className="font-medium text-foreground">Plantão WhatsApp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                  <h4 className="text-xl font-semibold text-foreground">
                    Localização
                  </h4>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  São Paulo - SP<br />
                  Região Metropolitana<br />
                  <span className="text-sm">(Endereço fornecido após agendamento)</span>
                </p>
                
                <Button variant="outline" className="w-full">
                  Agendar Visita
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 text-foreground">
                  Redes Sociais
                </h4>
                
                <div className="flex gap-4">
                  <Button variant="outline" size="lg" className="flex-1">
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Siga-nos para acompanhar novidades diárias!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;