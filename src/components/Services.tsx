import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brush, Shield, CheckCircle, Clock, AlertTriangle, Phone } from "lucide-react";

const Services = () => {
  const workSteps = [
    {
      icon: <CheckCircle className="w-8 h-8 text-paint-blue" />,
      title: "Konsultaatio ja kartoitus",
      description: "Tulemme paikalle arvioimaan työn laajuuden ja antamaan tarkan tarjouksen."
    },
    {
      icon: <Brush className="w-8 h-8 text-paint-blue" />,
      title: "Huolellinen valmistelu",
      description: "Pintojen pesu, hionta ja pohjustus ammattitaidolla - perusta kestävälle lopputulokselle."
    },
    {
      icon: <Shield className="w-8 h-8 text-paint-blue" />,
      title: "Laadukas maalaus",
      description: "Käytämme vain parhaita maaleja ja työkaluja täydellisen lopputuloksen varmistamiseksi."
    },
    {
      icon: <Clock className="w-8 h-8 text-paint-blue" />,
      title: "Viimeistely ja luovutus",
      description: "Huolellinen siivous ja tarkastus ennen työn luovutusta asiakkaalle."
    }
  ];
  return <section id="palvelut" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Urgent Health Warning */}
        

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Näin teemme työt
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ammattitaitoinen ja luotettava prosessi jokaisessa projektissa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {workSteps.map((step, index) => <Card key={index} className="text-center shadow-card border-border/50 hover:shadow-soft transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-paint-blue/10 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>)}
        </div>

        <div className="bg-paint-blue/5 border border-paint-blue/20 rounded-2xl p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Miksi valita meidät?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ Kokemusta vuodesta 2018</h4>
              <p className="text-muted-foreground">Satoja tyytyväisiä asiakkaita ja onnistuneita projekteja</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ Laadukkaat materiaalit</h4>
              <p className="text-muted-foreground">Käytämme vain parhaita maaleja ja työkaluja</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ Työlle takuu</h4>
              <p className="text-muted-foreground">Luotamme työhömme ja tarjoamme kattavan takuun</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ Asiakaspalvelua ympäri vuorokauden</h4>
              <p className="text-muted-foreground">Vastaamme kyselyihin nopeasti ja ammattitaidolla</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;