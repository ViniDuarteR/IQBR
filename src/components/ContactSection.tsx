import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    empresa: "",
    areaAtuacao: "",
    nome: "",
    areaSolicitante: "",
    email: "",
    telefone: "",
    produtoInteresse: "",
    informacoes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.empresa || !formData.nome || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha pelo menos os campos de empresa, nome e email.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });

    // Reset form
    setFormData({
      empresa: "",
      areaAtuacao: "",
      nome: "",
      areaSolicitante: "",
      email: "",
      telefone: "",
      produtoInteresse: "",
      informacoes: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Solicite maiores informações ou orçamento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a gerar inteligência da informação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-card border border-border">
              <h3 className="text-xl font-heading font-semibold text-card-foreground mb-6">
                Fale conosco
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">(11) 2842-4901</p>
                    <p className="text-sm text-muted-foreground">Telefone fixo</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">(11) 94110-6589</p>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">iq@iqbr.com.br</p>
                    <p className="text-sm text-muted-foreground">Email</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
              <h4 className="font-semibold text-accent mb-2">Tempo de resposta</h4>
              <p className="text-sm text-foreground">
                Respondemos todas as solicitações em até 24 horas úteis.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 shadow-card border border-border space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa *</Label>
                  <Input
                    id="empresa"
                    value={formData.empresa}
                    onChange={(e) => handleInputChange("empresa", e.target.value)}
                    placeholder="Nome da sua empresa"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="areaAtuacao">Área de atuação</Label>
                  <Input
                    id="areaAtuacao"
                    value={formData.areaAtuacao}
                    onChange={(e) => handleInputChange("areaAtuacao", e.target.value)}
                    placeholder="Ex: Tecnologia, Saúde, Varejo..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome do solicitante *</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => handleInputChange("nome", e.target.value)}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="areaSolicitante">Área do solicitante</Label>
                  <Input
                    id="areaSolicitante"
                    value={formData.areaSolicitante}
                    onChange={(e) => handleInputChange("areaSolicitante", e.target.value)}
                    placeholder="Ex: Marketing, RH, Diretoria..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="telefone">DDD/Telefone</Label>
                  <Input
                    id="telefone"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange("telefone", e.target.value)}
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="produtoInteresse">Produto de interesse</Label>
                <Select value={formData.produtoInteresse} onValueChange={(value) => handleInputChange("produtoInteresse", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma solução" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mapeamento">Mapeamento e percepção de valor</SelectItem>
                    <SelectItem value="satisfacao">Satisfação e fidelidade do cliente</SelectItem>
                    <SelectItem value="desercao">Drivers de deserção e recuperação</SelectItem>
                    <SelectItem value="imagem">Imagem projetada no mercado</SelectItem>
                    <SelectItem value="mulheres">Impulsionamento das mulheres</SelectItem>
                    <SelectItem value="franquias">Relacionamento franqueados</SelectItem>
                    <SelectItem value="clima">Clima organizacional</SelectItem>
                    <SelectItem value="comprometimento">Comprometimento dos colaboradores</SelectItem>
                    <SelectItem value="fornecedor">Relacionamento fornecedor-cliente interno</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="informacoes">Descreva aqui as informações que necessita</Label>
                <Textarea
                  id="informacoes"
                  value={formData.informacoes}
                  onChange={(e) => handleInputChange("informacoes", e.target.value)}
                  placeholder="Conte-nos mais sobre seu projeto, necessidades ou dúvidas..."
                  rows={4}
                />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full md:w-auto">
                <Send className="mr-2 h-5 w-5" />
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;