import { Button } from "@/components/ui/button";
import { Phone, Mail, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroHouse from "@/assets/hero-house.jpg";

const FullScreenHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroHouse})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      
      {/* Fade Effect */}
      <div 
        className="absolute inset-0 bg-background"
        style={{
          opacity: Math.min(scrollY / (window.innerHeight * 0.8), 1),
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Jotta talosi
            <br />
            <span className="text-paint-blue-light">pysyisi terveenä</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Siveltimen Sävel tuo talollesi uuden elämän laadukkaalla ja 
            kestävällä huoltomaalauksella Pohjois-Savossa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-paint-blue hover:bg-paint-blue/90 text-white text-lg px-8 py-4"
              onClick={() => document.getElementById('tarjous-lomake')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="w-5 h-5 mr-2" />
              Pyydä ilmainen tarjous
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-paint-blue text-lg px-8 py-4"
              onClick={() => {
                if (window.innerWidth <= 768) {
                  window.location.href = "tel:+358449890048";
                } else {
                  document.getElementById('yhteystiedot')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Ota heti yhteyttä
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div>
      </div>
    </section>
  );
};

export default FullScreenHero;