import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Bronze",
      price: "649",
      description: "Ideal para começar sua presença digital",
      features: [
        "Landing Page profissional",
        "Design responsivo",
        "Otimização SEO básica",
        "Formulário de contato",
        "1 mês de suporte",
        "Hospedagem por 1 ano"
      ],
      highlighted: false
    },
    {
      name: "Prata",
      price: "849",
      description: "Para negócios que buscam crescimento",
      features: [
        "Tudo do plano Bronze",
        "Até 5 páginas",
        "Integração com redes sociais",
        "Google Analytics configurado",
        "3 meses de suporte",
        "Chat online integrado"
      ],
      highlighted: true
    },
    {
      name: "Ouro Premium",
      price: "1249",
      description: "Solução completa para máxima conversão",
      features: [
        "Tudo do plano Prata",
        "E-commerce completo",
        "Sistema de pagamentos",
        "Painel administrativo",
        "6 meses de suporte",
        "Treinamento personalizado",
        "Manutenção prioritária"
      ],
      highlighted: false
    }
  ];

  const handleContact = (planName: string) => {
    const message = `Olá! Gostaria de saber mais sobre o Plano ${planName}.`;
    const whatsappUrl = `https://wa.me/5542999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="planos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Planos e <span className="text-gradient">Preços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para transformar seu negócio digitalmente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative bg-card border rounded-xl p-8 card-hover animate-fade-in ${
                plan.highlighted ? "border-primary shadow-lg glow" : "border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span className="text-xs font-semibold">Mais Popular</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlighted ? "hero" : "outline"} 
                className="w-full"
                onClick={() => handleContact(plan.name)}
              >
                Comece agora
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Todos os planos incluem domínio personalizado e certificado SSL
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
