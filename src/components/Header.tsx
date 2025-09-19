import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallClick = () => {
    if (window.innerWidth <= 768) {
      window.location.href = "tel:+358449890048";
    } else {
      document.getElementById('yhteystiedot')?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleQuoteClick = () => {
    document.getElementById('tarjous-lomake')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-background/95 backdrop-blur-sm border-b border-border'
    }`}>
      <div className="container mx-auto px-6 py-0 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logoFull} alt="Siveltimen Sävel logo" className="h-20 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#etusivu" className="text-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-md hover:bg-primary/10">
            Etusivu
          </a>
          <a href="#palvelut" className="text-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-md hover:bg-primary/10">
            Palvelut
          </a>
          <a href="#info" className="text-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-md hover:bg-primary/10">
            Info
          </a>
          <a href="#yhteystiedot" className="text-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-md hover:bg-primary/10">
            Yhteystiedot
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium" onClick={handleCallClick}>
            <Phone className="w-4 h-4" />
            <span>Soita nyt</span>
          </Button>
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6" onClick={handleQuoteClick}>
            Pyydä tarjous
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;