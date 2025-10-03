import { ShoppingCart, FileCode, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Lojas virtuais completas e otimizadas para vendas. Integração com meios de pagamento, gestão de estoque e painel administrativo.",
      features: ["Integração de pagamentos", "Gestão de produtos", "Painel administrativo", "Checkout otimizado"]
    },
    {
      icon: FileCode,
      title: "Landing Pages",
      description: "Páginas de conversão focadas em resultados. Design atrativo e persuasivo para transformar visitantes em clientes.",
      features: ["Alta conversão", "Design responsivo", "SEO otimizado", "Carregamento rápido"]
    },
    {
      icon: Smartphone,
      title: "Aplicativos",
      description: "Aplicações web e mobile personalizadas. Soluções sob medida para necessidades específicas do seu negócio.",
      features: ["Interface intuitiva", "Performance elevada", "Multiplataforma", "Atualizações contínuas"]
    }
  ];

  const scrollToPlanos = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções digitais completas para impulsionar seu negócio no mundo online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-card border border-border rounded-xl p-8 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 glow">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" onClick={scrollToPlanos} className="group">
            Ver planos e preços
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
