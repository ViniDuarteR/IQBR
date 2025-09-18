import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            Realizamos mais que pesquisas.{" "}
            <span className="text-accent">Entregamos inteligência da informação!</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Consultoria especializada em Gestão da Inteligência da Informação e 
            Relacionamento com Stakeholders há mais de 30 anos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-8 py-4">
              SOLICITE UMA COTAÇÃO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-6 text-sm opacity-80">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">30+</div>
                <div>Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">400+</div>
                <div>Projetos desenvolvidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;