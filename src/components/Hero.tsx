import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToPlanos = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Azzul Agência Web" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground/80">Agência Web em Guarapuava-PR</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Transformamos ideias em <br />
          <span className="text-gradient">vendas digitais</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Desenvolvimento de e-commerces, landing pages e aplicativos personalizados. 
          Soluções digitais que geram resultados reais para o seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToPlanos}
            className="group"
          >
            Solicite seu orçamento
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const element = document.getElementById("servicos");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Conheça nossos serviços
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">+50</div>
            <div className="text-muted-foreground">Projetos entregues</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3x</div>
            <div className="text-muted-foreground">Aumento médio em vendas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Satisfação dos clientes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
