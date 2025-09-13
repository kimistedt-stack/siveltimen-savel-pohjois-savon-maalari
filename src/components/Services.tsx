import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Home, Shield, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Paintbrush className="w-8 h-8 text-primary" />,
      title: "Ulkomaalaus",
      description: "Kokonaisvaltainen talojen ulkomaalaus laadukkailla maaleilla. Huolehdimme pintojen esikäsittelystä ja lopputuloksen kestävyydestä."
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Huoltomaalaus",
      description: "Säännöllinen huoltomaalaus pitää talosi kunnossa ja säästää suuremmilta remonttikustannuksilta tulevaisuudessa."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Suojaus",
      description: "Tarjoamme tehokkaan suojauksen sääoloja vastaan. Maalit ja käsittelyt suojaavat puupintoja pitkäaikaisesti."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Viimeistely",
      description: "Huolellinen viimeistely ja siistit jäljet. Työmaa jätetään aina siistiksi ja maali kuivuu tasaisesti."
    }
  ];

  return (
    <section id="palvelut" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Palvelumme
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tarjoamme kattavan valikoiman huoltomaalauspalveluja omakotitaloille. 
            Kaikki työt tehdään ammattitaidolla ja huolella.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 shadow-card hover:shadow-soft transition-shadow border-border/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-subtle rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Miksi valita Siveltimen Sävel?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Paikallinen yritys</h4>
              <p className="text-muted-foreground">Tunnemme Pohjois-Savon sääolosuhteet ja niiden vaatimukset maalaustöissä.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Laadukkaat materiaalit</h4>
              <p className="text-muted-foreground">Käytämme vain parhaita maaleja ja työkaluja pitkäkestoisen lopputuloksen varmistamiseksi.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Ammattitaito</h4>
              <p className="text-muted-foreground">Yli 15 vuoden kokemus talojen huoltomaalauksesta ja tyytyväiset asiakkaat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;