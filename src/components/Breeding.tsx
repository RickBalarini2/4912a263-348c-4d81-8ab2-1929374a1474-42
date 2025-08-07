import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Heart, Crown } from "lucide-react";
import americanBullyMicro from "@/assets/american-bully-micro.jpg";
import exoticBullyFluffy from "@/assets/exotic-bully-fluffy.jpg";
import frenchBulldog from "@/assets/french-bulldog.jpg";

const Breeding = () => {
  const studs = [
    {
      name: "Zeus",
      breed: "American Bully Micro",
      image: americanBullyMicro,
      achievements: ["Campeão Nacional 2023", "Best in Show", "Bloodline Importada"],
      weight: "15kg",
      height: "35cm",
      age: "3 anos",
      offspring: "12 filhotes",
      status: "Disponível",
      price: "Consulte"
    },
    {
      name: "Apollo",
      breed: "Exotic Bully Fluffy",
      image: exoticBullyFluffy,
      achievements: ["Linhagem Rara", "Genética Premium", "Temperamento Exemplar"],
      weight: "18kg",
      height: "38cm",
      age: "4 anos",
      offspring: "8 filhotes",
      status: "Disponível",
      price: "Consulte"
    },
    {
      name: "Rex",
      breed: "Bulldog Francês",
      image: frenchBulldog,
      achievements: ["Champion Bloodline", "Exames Genéticos OK", "Reprodutor Certificado"],
      weight: "12kg",
      height: "32cm",
      age: "2 anos",
      offspring: "15 filhotes",
      status: "Reservado",
      price: "Consulte"
    }
  ];

  const dams = [
    {
      name: "Bella",
      breed: "American Bully Micro",
      image: americanBullyMicro,
      achievements: ["Mãe Exemplar", "Linhagem Champion", "Temperamento Dócil"],
      weight: "13kg",
      height: "33cm",
      age: "2 anos",
      litters: "2 ninhadas",
      status: "Gestante",
      nextLitter: "Mar 2024"
    },
    {
      name: "Luna",
      breed: "Exotic Bully Fluffy",
      image: exoticBullyFluffy,
      achievements: ["Genética Rara", "Primeira Cria", "Bloodline Premium"],
      weight: "16kg",
      height: "36cm",
      age: "2 anos",
      litters: "1 ninhada",
      status: "Disponível",
      nextLitter: "Abr 2024"
    }
  ];

  return (
    <section id="padreadores" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Reprodução
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Padreadores & Matrizes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça nossos reprodutores campeões, cuidadosamente selecionados 
            por suas qualidades genéticas, temperamento e características da raça.
          </p>
        </div>

        {/* Studs Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Crown className="w-8 h-8 text-accent" />
            <h3 className="text-2xl font-bold text-foreground">Padreadores</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studs.map((stud, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={stud.image} 
                    alt={stud.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={stud.status === "Disponível" ? "default" : "secondary"}
                      className={stud.status === "Disponível" ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"}
                    >
                      {stud.status}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-2xl font-bold mb-1">{stud.name}</h4>
                    <p className="text-accent text-sm font-medium">{stud.breed}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Peso:</span>
                      <span className="font-medium ml-2">{stud.weight}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Altura:</span>
                      <span className="font-medium ml-2">{stud.height}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Idade:</span>
                      <span className="font-medium ml-2">{stud.age}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Filhotes:</span>
                      <span className="font-medium ml-2">{stud.offspring}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      Conquistas
                    </h5>
                    {stud.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center text-sm mb-1">
                        <Star className="w-3 h-3 text-accent mr-2" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="default" 
                      className="flex-1 bg-gradient-gold hover:shadow-gold transition-all duration-300"
                      disabled={stud.status !== "Disponível"}
                    >
                      {stud.status === "Disponível" ? "Solicitar Cobertura" : "Em Reserva"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dams Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-accent" />
            <h3 className="text-2xl font-bold text-foreground">Matrizes</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dams.map((dam, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dam.image} 
                    alt={dam.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={dam.status === "Gestante" ? "default" : "secondary"}
                      className={dam.status === "Gestante" ? "bg-accent text-accent-foreground" : "bg-success text-success-foreground"}
                    >
                      {dam.status}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-2xl font-bold mb-1">{dam.name}</h4>
                    <p className="text-accent text-sm font-medium">{dam.breed}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Peso:</span>
                      <span className="font-medium ml-2">{dam.weight}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Altura:</span>
                      <span className="font-medium ml-2">{dam.height}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Idade:</span>
                      <span className="font-medium ml-2">{dam.age}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Ninhadas:</span>
                      <span className="font-medium ml-2">{dam.litters}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      Qualidades
                    </h5>
                    {dam.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center text-sm mb-1">
                        <Star className="w-3 h-3 text-accent mr-2" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  {dam.nextLitter && (
                    <div className="mb-4 p-3 bg-accent/10 rounded-lg">
                      <span className="text-sm font-medium text-accent">
                        Próxima Ninhada: {dam.nextLitter}
                      </span>
                    </div>
                  )}
                  
                  <Button 
                    variant="default" 
                    className="w-full bg-gradient-gold hover:shadow-gold transition-all duration-300"
                  >
                    {dam.status === "Gestante" ? "Reservar Filhote" : "Solicitar Acasalamento"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breeding;