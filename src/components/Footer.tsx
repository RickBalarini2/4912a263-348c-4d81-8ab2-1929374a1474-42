import { Button } from "@/components/ui/button";
import { Heart, MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import logoImage from "@/assets/logo-benites-bulls.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src={logoImage} 
                  alt="Benites Bulls Logo" 
                  className="w-12 h-12 object-contain"
                />
                <span className="text-2xl font-bold">Benites Bulls</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Mais que criadores, somos aficionados pela raça American Bully e Bulldog Francês. 
                Priorizamos o cuidado, bem-estar e qualidade em cada animal.
              </p>
              
              {/* Dados Empresariais */}
              <div className="bg-white/5 rounded-lg p-4 mb-6">
                <h5 className="font-semibold mb-3 text-accent">Dados Empresariais</h5>
                <div className="space-y-2 text-sm text-primary-foreground/80">
                  <p><strong>CNPJ:</strong> 25.128.982/0001-22</p>
                  <p><strong>Razão Social:</strong> Junior Libero Benites Pinto</p>
                  <p><strong>Estabelecimento desde:</strong> 2016</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Navegação</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#inicio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Sobre o Canil
                  </a>
                </li>
                <li>
                  <a href="#racas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Raças
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Galeria
                  </a>
                </li>
                <li>
                  <a href="#padreadores" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Padreadores
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Breeds */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Nossas Raças</h4>
              <ul className="space-y-3">
                <li className="text-primary-foreground/80">
                  American Bully Micro
                </li>
                <li className="text-primary-foreground/80">
                  American Bully Nano
                </li>
                <li className="text-primary-foreground/80">
                  Exotic Bully Fluffy
                </li>
                <li className="text-primary-foreground/80">
                  Bulldog Francês
                </li>
                <li className="text-primary-foreground/80">
                  Bulldog Francês Fluffy
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-primary-foreground/80">Rua Honório Gasparino, 595</p>
                    <p className="text-sm text-primary-foreground/60">Res. Alexandre - Dobrada/SP</p>
                    <p className="text-sm text-primary-foreground/60">CEP: 15980-000</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-primary-foreground/80">(11) 99999-9999</p>
                    <p className="text-sm text-primary-foreground/60">WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-primary-foreground/80">contato@benitesbulls.com</p>
                    <p className="text-sm text-primary-foreground/60">E-mail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-sm">
                © 2024 Benites Bulls Canil. Feito com amor pelos nossos cães.
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contrato de Venda
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;