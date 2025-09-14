import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const handleCallClick = () => {
    if (window.innerWidth <= 768) {
      window.location.href = "tel:+358449890048";
    } else {
      document.getElementById('yhteystiedot')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    document.getElementById('tarjous-lomake')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Siveltimen Sävel logo" className="h-16 w-auto" />
          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold text-foreground">Siveltimen Sävel</h1>
            <p className="text-sm text-muted-foreground">Luomme kodillesi värien sinfonian</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#etusivu" className="text-foreground hover:text-paint-blue transition-colors">
            Etusivu
          </a>
          <a href="#palvelut" className="text-foreground hover:text-paint-blue transition-colors">
            Palvelut
          </a>
          <a href="#info" className="text-foreground hover:text-paint-blue transition-colors">
            Info
          </a>
          <a href="#yhteystiedot" className="text-foreground hover:text-paint-blue transition-colors">
            Yhteystiedot
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden sm:flex items-center space-x-1 border-paint-blue text-paint-blue hover:bg-paint-blue hover:text-white" 
            onClick={handleCallClick}
          >
            <Phone className="w-4 h-4" />
            <span>Soita nyt</span>
          </Button>
          <Button 
            size="sm" 
            className="bg-paint-blue hover:bg-paint-blue/90 text-white" 
            onClick={handleQuoteClick}
          >
            Pyydä tarjous
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;