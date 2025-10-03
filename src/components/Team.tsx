import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "João Grando",
      role: "CEO & Fundador",
      description: "Especialista em estratégias digitais com mais de 8 anos de experiência em desenvolvimento web e e-commerce.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao"
    },
    {
      name: "Lucas Silva",
      role: "Gerente de Projetos",
      description: "Responsável pela gestão e execução de projetos, garantindo qualidade e prazos em todas as entregas.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas"
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossa <span className="text-gradient">Equipe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os profissionais dedicados a transformar seu negócio digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className="bg-card border border-border rounded-xl p-8 card-hover animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full rounded-full bg-card"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground mb-6">{member.description}</p>
              <div className="flex items-center justify-center gap-4">
                <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </button>
                <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-8 md:p-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Sobre a Azzul</h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            Sediada em Guarapuava-PR, a Azzul Agência Web nasceu com o propósito de democratizar o acesso 
            a soluções digitais de qualidade. Combinamos tecnologia de ponta com estratégias de marketing 
            digital para criar projetos que realmente geram resultados. Nossa missão é transformar pequenos 
            e médios negócios em referências digitais em seus segmentos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
