import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-kennel.png";
import logoImage from "@/assets/logo-benites-bulls.png";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <img 
            src={logoImage} 
            alt="Benites Bulls Logo" 
            className="w-16 h-16 object-contain"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Benites Bulls
          </h1>
        </div>
        
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
            Canil Premium Especializado
          </span>
        </div>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          American Bully Micro & Nano<br />
          <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
            Exotic Bully Fluffy
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white opacity-95">
          Criamos com amor e dedicação as mais belas linhagens de American Bully Micro, Nano, Exotic Bully Fluffy e Bulldogs Francês
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-2 mx-auto">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <div className="text-2xl font-bold">10+</div>
            <div className="text-sm text-white opacity-90">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-2 mx-auto">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm text-white opacity-90">Filhotes Entregues</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-2 mx-auto">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <div className="text-2xl font-bold">100%</div>
            <div className="text-sm text-white opacity-90">Satisfação</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:shadow-gold text-primary font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
          >
            Ver Disponíveis
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
                    className="border-white/30 text-primary hover:bg-white/10 px-8 py-3 transition-all duration-300"
          >
            Conhecer o Canil
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white opacity-75" />
      </div>
    </section>
  );
};

export default Hero;
