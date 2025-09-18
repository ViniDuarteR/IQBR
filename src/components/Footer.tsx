import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-heading font-bold mb-4">
              Instituto da Qualidade
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Mais de 30 anos gerando inteligência da informação e fortalecendo 
              relacionamentos entre empresas e seus stakeholders.
            </p>
            <div className="text-accent font-semibold">
              Realizamos mais que pesquisas. Entregamos inteligência da informação!
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Navegação</h3>
            <nav className="space-y-2">
              <Button 
                variant="ghost" 
                className="text-primary-foreground/80 hover:text-accent p-0 h-auto font-normal justify-start"
                onClick={() => scrollToSection('hero')}
              >
                Principal
              </Button>
              <Button 
                variant="ghost" 
                className="text-primary-foreground/80 hover:text-accent p-0 h-auto font-normal justify-start"
                onClick={() => scrollToSection('quem-somos')}
              >
                Quem Somos
              </Button>
              <Button 
                variant="ghost" 
                className="text-primary-foreground/80 hover:text-accent p-0 h-auto font-normal justify-start"
                onClick={() => scrollToSection('solucoes')}
              >
                Soluções
              </Button>
              <Button 
                variant="ghost" 
                className="text-primary-foreground/80 hover:text-accent p-0 h-auto font-normal justify-start"
                onClick={() => scrollToSection('clientes')}
              >
                Clientes
              </Button>
              <Button 
                variant="ghost" 
                className="text-primary-foreground/80 hover:text-accent p-0 h-auto font-normal justify-start"
                onClick={() => scrollToSection('contato')}
              >
                Contato
              </Button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <span className="text-primary-foreground/80">(11) 2842-4901</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <span className="text-primary-foreground/80">(11) 94110-6589</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <span className="text-primary-foreground/80">iq@iqbr.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Instituto da Qualidade (IQBR). Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2 md:mt-0">
              Desde 1992 entregando inteligência da informação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;