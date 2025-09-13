import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="yhteystiedot" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ota yhteyttä
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pyydä ilmainen tarjous tai kysy lisää palveluistamme. 
            Vastaamme nopeasti ja ammattitaidolla.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Yhteystiedot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Puhelin</h3>
                    <p className="text-muted-foreground">+358 40 123 4567</p>
                    <p className="text-sm text-muted-foreground">Arkisin 8-17, viikonloppuisin sopimuksen mukaan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Sähköposti</h3>
                    <p className="text-muted-foreground">info@siveltimensavel.fi</p>
                    <p className="text-sm text-muted-foreground">Vastaamme 24h sisällä</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Toiminta-alue</h3>
                    <p className="text-muted-foreground">Pohjois-Savo</p>
                    <p className="text-sm text-muted-foreground">Kuopio, Siilinjärvi, Lapinlahti ja lähikunnat</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Työajat</h3>
                    <p className="text-muted-foreground">Ma-Pe 8:00-17:00</p>
                    <p className="text-sm text-muted-foreground">Kiireellisissä tapauksissa myös iltaisin</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Pyydä tarjous</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-6">
                  Kerro meille projektin tiedot, niin teemme sinulle ilmaisen tarjouksen nopeasti.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-hero hover:opacity-90 transition-opacity shadow-soft"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Soita suoraan: +358 40 123 4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Lähetä sähköpostia
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent/20 shadow-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Ilmainen tarjous 24h sisällä!
                  </h3>
                  <p className="text-muted-foreground">
                    Kaikki tarjoukset tehdään paikan päällä arvioinnin perusteella. 
                    Ei ylimääräisiä kuluja tai yllätyksiä.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;