import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-painting.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-subtle py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Ammattitaitoista <br />
                <span className="text-primary">talojen huoltomaalausta</span> <br />
                Pohjois-Savossa
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Siveltimen Sävel tarjoaa laadukasta huoltomaalausta omakotitaloille. 
                Kokeneena ammattilaisena huolehdimme talosi ulkonäöstä ja suojauksesta.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Ammattitaitoinen työ</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Laadukkaat materiaalit</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Paikallinen yritys</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Kilpailukykyiset hinnat</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-soft">
                <Phone className="w-5 h-5 mr-2" />
                Pyydä ilmainen tarjous
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Mail className="w-5 h-5 mr-2" />
                Lähetä viesti
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="Ammattitaitoista talojen huoltomaalausta Siveltimen Sävel" 
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </Card>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-soft max-w-xs">
              <p className="font-semibold">Yli 15 vuoden kokemus</p>
              <p className="text-sm opacity-90">talojen huoltomaalauksesta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;