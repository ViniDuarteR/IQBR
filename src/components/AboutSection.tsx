import { Target, Eye, Heart } from "lucide-react";
import sectionBg from "@/assets/section-bg.jpg";

const AboutSection = () => {
  const values = [
    "Trabalhamos para garantir a fidelidade dos nossos clientes",
    "Priorizamos a excelência através da melhoria contínua", 
    "Atuamos com transparência, ética e responsabilidade",
    "Valorizamos o desenvolvimento de nossa equipe",
    "Buscamos inovação constante em nossas metodologias"
  ];

  return (
    <section id="quem-somos" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${sectionBg})` }}
      />
      <div className="absolute inset-0 subtle-gradient" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Quem Somos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              O Instituto da Qualidade é uma empresa de consultoria empresarial especializada na 
              Gestão da Inteligência da Informação e no Relacionamento com Stakeholders.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Nos mais de 30 anos de existência (desde 1992) desenvolvemos mais de 400 projetos, 
              sempre focados em entregar inteligência da informação que gere valor real para 
              nossos clientes.
            </p>
            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
              <p className="text-accent font-semibold text-lg">
                "Nosso diferencial está na capacidade de transformar dados em insights 
                estratégicos que impulsionam o crescimento dos nossos clientes."
              </p>
            </div>
          </div>

          {/* Right Column - Mission, Focus, Values */}
          <div className="space-y-6">
            {/* Mission */}
            <div className="bg-card rounded-lg p-6 shadow-card border border-border">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg mr-3">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-card-foreground">
                  Nossa Missão
                </h3>
              </div>
              <p className="text-muted-foreground">
                Sermos reconhecidos no mercado como a melhor opção para ajudar as empresas 
                na geração de inteligência da informação.
              </p>
            </div>

            {/* Focus */}
            <div className="bg-card rounded-lg p-6 shadow-card border border-border">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg mr-3">
                  <Eye className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-card-foreground">
                  Nosso Foco
                </h3>
              </div>
              <p className="text-muted-foreground">
                Ajudá-lo a centrar mais fortemente a gestão de sua empresa nos seus stakeholders.
              </p>
            </div>

            {/* Values */}
            <div className="bg-card rounded-lg p-6 shadow-card border border-border">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg mr-3">
                  <Heart className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-card-foreground">
                  Nossos Valores
                </h3>
              </div>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;