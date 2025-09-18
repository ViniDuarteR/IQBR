import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-heading font-bold text-primary">
              IQBR
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="nav" onClick={() => scrollToSection('hero')}>
              Principal
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('quem-somos')}>
              Quem Somos
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('solucoes')}>
              Soluções
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('clientes')}>
              Clientes
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('artigos')}>
              Artigos
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('contato')}>
              Contato
            </Button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" onClick={() => scrollToSection('contato')}>
              SOLICITE UMA COTAÇÃO
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              <Button variant="nav" className="justify-start" onClick={() => scrollToSection('hero')}>
                Principal
              </Button>
              <Button variant="nav" className="justify-start" onClick={() => scrollToSection('quem-somos')}>
                Quem Somos
              </Button>
              <Button variant="nav" className="justify-start" onClick={() => scrollToSection('solucoes')}>
                Soluções
              </Button>
              <Button variant="nav" className="justify-start" onClick={() => scrollToSection('clientes')}>
                Clientes
              </Button>
              <Button variant="nav" className="justify-start" onClick={() => scrollToSection('artigos')}>
                Artigos
              </Button>
              <Button variant="nav" className="justify-start" onClick={() => scrollToSection('contato')}>
                Contato
              </Button>
              <Button variant="cta" className="mt-4" onClick={() => scrollToSection('contato')}>
                SOLICITE UMA COTAÇÃO
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;