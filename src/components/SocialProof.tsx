import { TrendingUp, Users, Star, Award } from "lucide-react";

const SocialProof = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "3x mais",
      label: "Empresas com loja online vendem até 3x mais que apenas redes sociais"
    },
    {
      icon: Users,
      value: "87%",
      label: "Dos consumidores pesquisam online antes de comprar"
    },
    {
      icon: Star,
      value: "24/7",
      label: "Sua loja funcionando e vendendo a qualquer hora do dia"
    },
    {
      icon: Award,
      value: "+200%",
      label: "Aumento médio em leads qualificados com landing page profissional"
    }
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por que investir em <span className="text-gradient">presença digital?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Os números provam: ter uma presença digital profissional é essencial para o crescimento do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-card border border-border rounded-xl p-6 text-center card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Não fique para trás da concorrência
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Enquanto seus concorrentes já vendem online 24 horas por dia, você está perdendo oportunidades. 
            É hora de dar o próximo passo no mundo digital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
