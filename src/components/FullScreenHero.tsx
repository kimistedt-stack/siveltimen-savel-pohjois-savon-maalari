import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroHouse from "@/assets/hero-house.jpg";
import heroVideo from "@/assets/hero-video.mp4";
const FullScreenHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVideo(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative h-screen overflow-hidden">
      {/* Background Media with Parallax */}
      <div className="absolute inset-0">
        {showVideo ? (
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroHouse})`,
              transform: `translateY(${scrollY * 0.5}px)`
            }} 
          />
        )}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      
      {/* Fade Effect */}
      <div className="absolute inset-0 bg-background" style={{
      opacity: Math.min(scrollY / (window.innerHeight * 0.8), 1)
    }} />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Jotta talosi
            <br />
            <span className="text-paint-orange">pysyisi terveenä</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Siveltimen Sävel tuo talollesi uuden elämän laadukkaalla ja 
            kestävällä huoltomaalauksella Pohjois-Savossa
          </p>
          
          <div className="flex justify-center pt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 font-semibold" onClick={() => document.getElementById('tarjous-lomake')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              <Phone className="w-5 h-5 mr-2" />
              Aloitetaan yhdessä
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div>
      </div>
    </section>;
};
export default FullScreenHero;