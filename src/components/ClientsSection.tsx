const ClientsSection = () => {
  const clients = [
    "HONDA",
    "S.A. HOSPITAL ALIANÇA", 
    "INTER TANK",
    "Ipiranga",
    "Jurid DO BRASIL",
    "LIQUIGÁS",
    "maislaser BY ANA HICKMANN",
    "METRÔ",
    "Mosaic",
    "MODEC",
    "MRS",
    "NAKATA",
    "nts",
    "Pellegrino",
    "PERNAMBUCANAS",
    "PETROBRAS"
  ];

  return (
    <section id="clientes" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Nossos Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas que confiam em nossa expertise para gerar inteligência da informação
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 carousel-scroll">
            {/* First set */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 bg-card rounded-lg shadow-card p-6 min-w-[200px] h-24 flex items-center justify-center border border-border hover:shadow-hover transition-shadow duration-300 group"
              >
                <span className="text-primary font-semibold text-center group-hover:text-accent transition-colors duration-300">
                  {client}
                </span>
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 bg-card rounded-lg shadow-card p-6 min-w-[200px] h-24 flex items-center justify-center border border-border hover:shadow-hover transition-shadow duration-300 group"
              >
                <span className="text-primary font-semibold text-center group-hover:text-accent transition-colors duration-300">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;