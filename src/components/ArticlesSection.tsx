import { FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticlesSection = () => {
  const articles = [
    {
      title: "As 7 armadilhas da falta (ou falha) de uma cultura Fornecedor-Cliente Interno",
      description: "Descubra como uma cultura organizacional eficaz pode transformar o relacionamento entre diferentes áreas da empresa.",
      readTime: "8 min"
    },
    {
      title: "A Gestão da experiência do cliente em um Hospital",
      description: "Como aplicar princípios de gestão da experiência do cliente no setor de saúde para melhorar resultados.",
      readTime: "6 min"
    },
    {
      title: "Os Sete Pecados Capitais de uma Pesquisa de Satisfação de Clientes",
      description: "Erros comuns que podem comprometer a qualidade e eficácia das pesquisas de satisfação.",
      readTime: "10 min"
    }
  ];

  return (
    <section id="artigos" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Artigos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira artigos interessantes que disponibilizamos para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-card rounded-lg shadow-card hover:shadow-hover card-interactive border border-border group overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-card-foreground mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {article.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:text-accent transition-colors duration-300"
                >
                  Ler artigo
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;