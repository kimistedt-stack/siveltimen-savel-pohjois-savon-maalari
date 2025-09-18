import { Card } from "@/components/ui/card";
import beforeImage from "@/assets/before-paint.jpg";
import afterImage from "@/assets/after-paint.jpg";
import { CheckCircle, XCircle } from "lucide-react";

const BeforeAfter = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" id="info">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ennen ja jälkeen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Katso kuinka ammattitaitoinen huoltomaalaus muuttaa talosi ilmeen ja suojaa sitä vuosiksi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Before */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-card">
              <div className="relative">
                <img 
                  src={beforeImage} 
                  alt="Vanha, rapeutunut maalipinta ennen huoltomaalausta" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-semibold">
                  Ennen
                </div>
              </div>
            </Card>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground flex items-center">
                <XCircle className="w-6 h-6 text-destructive mr-3" />
                Vanha pinta
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                  Puutteelinen kosteuden sulku
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                  Ulkoverhouksen lahoaminen ja halkeilu
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                  Kosteusvaurioiden riski eristeissä
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                  Lyhentää ulkoverhouksen elinkaarta
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                  Rapeutunut ulkonäkö
                </li>
              </ul>
            </div>
          </div>

          {/* After */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-card">
              <div className="relative">
                <img 
                  src={afterImage} 
                  alt="Uusi, kestävä maalipinta huoltomaalauksen jälkeen" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4 bg-paint-blue text-white px-4 py-2 rounded-full font-semibold">
                  Jälkeen
                </div>
              </div>
            </Card>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground flex items-center">
                <CheckCircle className="w-6 h-6 text-paint-blue mr-3" />
                Uusi maali
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-paint-blue mr-3 mt-0.5 flex-shrink-0" />
                  Yhtenäinen pinta hylkii kosteutta ja likaa
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-paint-blue mr-3 mt-0.5 flex-shrink-0" />
                  Säänkestävä ulkoverhous
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-paint-blue mr-3 mt-0.5 flex-shrink-0" />
                  Pidentää rakennuksen teknistä käyttöikää
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-paint-blue mr-3 mt-0.5 flex-shrink-0" />
                  Moderni ja kaunis ulkonäkö
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-paint-blue mr-3 mt-0.5 flex-shrink-0" />
                  Talon arvo nousee ja säilyy
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-paint-accent/10 border border-paint-accent/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed">
              <strong className="text-paint-blue">Maalauksen väliin jättäminen voi olla kohtalokas pintalaadoitukselle.</strong>
              <br />
              Rapeilevan ja vanhan maalin alle pääsee kosteus paljon helpommin, mikä aiheuttaa 
              pintahomeen muodostumista ja talon huonovointisuutta. Huoltomaalaus on suoritettava 
              <strong className="text-paint-blue"> 10 vuoden välein</strong>, jotta kustannukset pysyvät mahdollisimman pieninä.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;