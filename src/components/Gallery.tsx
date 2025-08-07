import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Share2, Play, Camera } from "lucide-react";
import americanBullyMicro from "@/assets/american-bully-micro.jpg";
import exoticBullyFluffy from "@/assets/exotic-bully-fluffy.jpg";
import frenchBulldog from "@/assets/french-bulldog.jpg";
import frenchBulldogFluffy from "@/assets/french-bulldog-fluffy.jpg";

const Gallery = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const posts = [
    {
      id: 1,
      type: "photo",
      image: americanBullyMicro,
      title: "Thor - American Bully Micro",
      description: "Nosso novo campeão Thor mostrando toda sua personalidade! 🏆",
      breed: "American Bully Micro",
      age: "8 meses",
      likes: 45,
      comments: 12,
      date: "2 dias atrás"
    },
    {
      id: 2,
      type: "video",
      image: exoticBullyFluffy,
      title: "Princesa - Exotic Bully Fluffy",
      description: "Vídeo mostrando a personalidade doce da nossa Princesa brincando no jardim 🎥",
      breed: "Exotic Bully Fluffy",
      age: "1 ano",
      likes: 67,
      comments: 23,
      date: "3 dias atrás"
    },
    {
      id: 3,
      type: "photo",
      image: frenchBulldog,
      title: "Max - Bulldog Francês",
      description: "Max posando para as câmeras como um verdadeiro modelo! 📸",
      breed: "Bulldog Francês",
      age: "6 meses",
      likes: 89,
      comments: 34,
      date: "5 dias atrás"
    },
    {
      id: 4,
      type: "photo",
      image: frenchBulldogFluffy,
      title: "Luna - Bulldog Francês Fluffy",
      description: "Nossa raridade Luna com sua pelagem única e personalidade encantadora ✨",
      breed: "Bulldog Francês Fluffy",
      age: "4 meses",
      likes: 112,
      comments: 45,
      date: "1 semana atrás"
    }
  ];

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const filterPosts = (filter: string) => {
    if (filter === "all") return posts;
    if (filter === "photos") return posts.filter(post => post.type === "photo");
    if (filter === "videos") return posts.filter(post => post.type === "video");
    return posts;
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Galeria & Feed
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos Momentos Especiais
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o dia a dia dos nossos cães, filhotes disponíveis, 
            momentos especiais e novidades do canil.
          </p>
        </div>

        <Tabs defaultValue="all" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Todos
            </TabsTrigger>
            <TabsTrigger value="photos" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Fotos
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              Vídeos
            </TabsTrigger>
          </TabsList>

          {["all", "photos", "videos"].map((filter) => (
            <TabsContent key={filter} value={filter}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filterPosts(filter).map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-medium transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-64 object-cover"
                      />
                      {post.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-primary ml-1" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-foreground">
                          {post.breed}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90 text-foreground border-white/20">
                          {post.age}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {post.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(post.id)}
                            className="flex items-center gap-2 hover:text-red-500 transition-colors"
                          >
                            <Heart 
                              className={`w-4 h-4 ${
                                likedPosts.includes(post.id) 
                                  ? "fill-red-500 text-red-500" 
                                  : ""
                              }`} 
                            />
                            <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                          </Button>
                          
                          <Button variant="ghost" size="sm" className="flex items-center gap-2">
                            <Share2 className="w-4 h-4" />
                            Compartilhar
                          </Button>
                        </div>
                        
                        <span className="text-sm text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          {post.comments} comentários
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Upload CTA for Admin */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-gold/10 border-accent/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Quer ver mais conteúdo?
              </h3>
              <p className="text-muted-foreground mb-6">
                Siga nossas redes sociais para acompanhar atualizações diárias 
                dos nossos cães e filhotes disponíveis.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="outline">
                  Instagram
                </Button>
                <Button variant="outline">
                  Facebook
                </Button>
                <Button className="bg-gradient-gold hover:shadow-gold transition-all duration-300">
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;