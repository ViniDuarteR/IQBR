import { 
  Target, 
  Heart, 
  UserMinus, 
  TrendingUp, 
  Users, 
  Handshake, 
  Smile, 
  Brain, 
  Network 
} from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Target,
      title: "Mapeamento e percepção de valor",
      description: "Identificamos como seus stakeholders percebem o valor da sua empresa"
    },
    {
      icon: Heart,
      title: "Satisfação e fidelidade do cliente",
      description: "Medimos e aprimoramos a experiência dos seus clientes"
    },
    {
      icon: UserMinus,
      title: "Drivers de deserção e recuperação de clientes inativos",
      description: "Entendemos por que clientes deixam sua empresa e como recuperá-los"
    },
    {
      icon: TrendingUp,
      title: "Imagem projetada no mercado",
      description: "Analisamos como sua marca é percebida no mercado"
    },
    {
      icon: Users,
      title: "Impulsionamento das mulheres para exercer cargos de comando",
      description: "Desenvolvemos estratégias para diversidade e inclusão"
    },
    {
      icon: Handshake,
      title: "Relacionamento franqueados e franqueador",
      description: "Fortalecemos vínculos em redes de franquias"
    },
    {
      icon: Smile,
      title: "Clima organizacional e fidelidade do colaborador",
      description: "Melhoramos o ambiente de trabalho e engajamento"
    },
    {
      icon: Brain,
      title: "Comprometimento dos colaboradores: crenças e percepções",
      description: "Entendemos o que motiva e engaja seus colaboradores"
    },
    {
      icon: Network,
      title: "Relacionamento fornecedor-cliente interno entre áreas da empresa",
      description: "Otimizamos a comunicação e colaboração interna"
    }
  ];

  return (
    <section id="solucoes" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Nossas Soluções
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos soluções personalizadas para diferentes stakeholders da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-card hover:shadow-hover card-interactive border border-border group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <IconComponent className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-card-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;