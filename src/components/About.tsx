import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Star, Trophy } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Amor pela Raça",
      description: "Mais de 10 anos dedicados exclusivamente às raças American Bully e Bulldog Francês, com paixão genuína por cada animal."
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Todos os nossos reprodutores possuem exames genéticos, pedigree e acompanhamento veterinário completo."
    },
    {
      icon: Star,
      title: "Linhagens Exclusivas",
      description: "Trabalhamos com as melhores linhagens importadas e nacionais, garantindo características únicas em cada filhote."
    },
    {
      icon: Trophy,
      title: "Reconhecimento",
      description: "Nossos cães são campeões em exposições e nossos clientes são referência na criação dessas raças especiais."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Sobre o Canil
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Paixão, Qualidade e Tradição
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos um canil especializado em raças bulldog com foco na excelência, 
            saúde e bem-estar animal. Cada filhote é criado com amor e cuidado para 
            se tornar um companheiro excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Text */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-medium">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Nossa História
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Iniciamos nossa jornada há mais de uma década, movidos pela paixão 
                    pelas raças bully. O que começou como um hobby se transformou em um 
                    dos canis mais respeitados do país.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Especializamo-nos em American Bully Micro e Nano, Exotic Bully Fluffy, 
                    Bulldog Francês e Bulldog Francês Fluffy, sempre priorizando a saúde, 
                    temperamento e características da raça.
                  </p>
                  <p className="text-muted-foreground">
                    Cada filhote é parte da nossa família até encontrar seu lar definitivo, 
                    garantindo que chegue até você com todo o amor e cuidado que merece.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-8 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-muted-foreground mb-4">Famílias Felizes</div>
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-muted-foreground mb-4">Reprodutores Campeões</div>
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-muted-foreground">Satisfação Garantida</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;