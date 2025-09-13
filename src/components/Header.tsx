import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Siveltimen Sävel</h1>
            <p className="text-sm text-muted-foreground">Talojen huoltomaalaus</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#palvelut" className="text-foreground hover:text-primary transition-colors">
            Palvelut
          </a>
          <a href="#alue" className="text-foreground hover:text-primary transition-colors">
            Toiminta-alue
          </a>
          <a href="#yhteystiedot" className="text-foreground hover:text-primary transition-colors">
            Yhteystiedot
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span>Soita</span>
          </Button>
          <Button size="sm" className="bg-gradient-hero hover:opacity-90 transition-opacity">
            Pyydä tarjous
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;