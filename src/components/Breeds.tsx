import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import americanBullyMicro from "@/assets/american-bully-micro.jpg";
import exoticBullyFluffy from "@/assets/exotic-bully-fluffy.jpg";
import frenchBulldog from "@/assets/french-bulldog.jpg";
import frenchBulldogFluffy from "@/assets/french-bulldog-fluffy.jpg";

const Breeds = () => {
  const breeds = [
    {
      name: "American Bully Micro",
      subtitle: "Pequenos Gigantes",
      image: americanBullyMicro,
      description: "O American Bully Micro é a menor variação da raça, mantendo todas as características de temperamento dócil e companheiro, em um tamanho compacto e adorável.",
      characteristics: ["Altura: 33-38cm", "Temperamento Dócil", "Musculatura Compacta", "Ideal para Apartamentos"],
      available: true
    },
    {
      name: "American Bully Nano",
      subtitle: "Ultra Compactos",
      image: americanBullyMicro,
      description: "A versão ainda mais compacta do Micro, o Nano American Bully é perfeito para quem busca um companheiro pequeno com personalidade gigante.",
      characteristics: ["Altura: Até 33cm", "Super Compacto", "Personalidade Marcante", "Fácil Manuseio"],
      available: false
    },
    {
      name: "Exotic Bully Fluffy",
      subtitle: "Pelagem Exuberante",
      image: exoticBullyFluffy,
      description: "O Exotic Bully Fluffy combina as características únicas do Exotic Bully com uma pelagem longa e sedosa, criando um cão verdadeiramente especial.",
      characteristics: ["Pelagem Longa", "Estrutura Exotic", "Temperamento Calmo", "Genética Rara"],
      available: true
    },
    {
      name: "Bulldog Francês",
      subtitle: "Clássico Elegante",
      image: frenchBulldog,
      description: "O Bulldog Francês é conhecido por sua personalidade carismática, orelhas de morcego distintivas e natureza afetuosa, sendo um excelente companheiro urbano.",
      characteristics: ["Orelhas Eretas", "Personalidade Única", "Adaptável", "Companheiro Leal"],
      available: true
    },
    {
      name: "Bulldog Francês Fluffy",
      subtitle: "Raridade Preciosa",
      image: frenchBulldogFluffy,
      description: "Uma variação rara do Bulldog Francês com pelagem longa e macia, resultado de uma mutação genética natural que torna cada exemplar único e especial.",
      characteristics: ["Pelagem Fluffy", "Genética Rara", "Personalidade Cativante", "Extremamente Raro"],
      available: false
    }
  ];

  return (
    <section id="racas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Nossas Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Raças que Trabalhamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Especializamo-nos nas mais exclusivas linhagens de bulldogs, 
            cada uma com características únicas e cuidadosamente selecionadas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {breeds.map((breed, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={breed.image} 
                  alt={breed.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={breed.available ? "default" : "secondary"} className="bg-white/90 text-foreground">
                    {breed.available ? "Disponível" : "Em Breve"}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{breed.name}</h3>
                  <p className="text-accent text-sm font-medium">{breed.subtitle}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {breed.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {breed.characteristics.map((char, charIndex) => (
                    <div key={charIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                      <span className="text-muted-foreground">{char}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    className="flex-1 bg-gradient-gold hover:shadow-gold transition-all duration-300"
                    disabled={!breed.available}
                  >
                    {breed.available ? "Ver Disponíveis" : "Avise-me"}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Saiba Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-subtle border-accent/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Procura uma raça específica?
              </h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco para discutir suas necessidades e 
                encontrar o filhote perfeito para sua família.
              </p>
              <Button size="lg" className="bg-gradient-gold hover:shadow-gold transition-all duration-300">
                Conversar com Especialista
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Breeds;