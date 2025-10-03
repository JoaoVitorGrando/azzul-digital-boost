import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-xl font-bold text-primary-foreground">A</span>
          </div>
          <span className="text-xl font-bold text-gradient">Azzul</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("inicio")} className="text-foreground/80 hover:text-primary transition-colors">
            Início
          </button>
          <button onClick={() => scrollToSection("servicos")} className="text-foreground/80 hover:text-primary transition-colors">
            Serviços
          </button>
          <button onClick={() => scrollToSection("planos")} className="text-foreground/80 hover:text-primary transition-colors">
            Planos
          </button>
          <button onClick={() => scrollToSection("sobre")} className="text-foreground/80 hover:text-primary transition-colors">
            Sobre
          </button>
          <Button onClick={() => scrollToSection("contato")} variant="hero" size="sm">
            Fale Conosco
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("inicio")} className="text-left text-foreground/80 hover:text-primary transition-colors py-2">
              Início
            </button>
            <button onClick={() => scrollToSection("servicos")} className="text-left text-foreground/80 hover:text-primary transition-colors py-2">
              Serviços
            </button>
            <button onClick={() => scrollToSection("planos")} className="text-left text-foreground/80 hover:text-primary transition-colors py-2">
              Planos
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-left text-foreground/80 hover:text-primary transition-colors py-2">
              Sobre
            </button>
            <Button onClick={() => scrollToSection("contato")} variant="hero" className="w-full">
              Fale Conosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
