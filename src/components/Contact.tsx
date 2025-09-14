import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
const Contact = () => {
  return <section id="yhteystiedot" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Aloitetaan <span className="text-paint-blue">yhdessä</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meille tärkeintä on asiakkaan tyytyväisyys ja sovituista aikatauluista kiinni pitäminen. 
            Ota rohkeasti yhteyttä – kerrotaan lisää siitä, miten voimme auttaa taloasi pysymään terveenä.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Yhteystiedot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-paint-blue">Siveltimen Sävel</strong> palvelee niin yksityisasiakkaita kuin 
                    taloyhtiöitäkin Pohjois-Savon alueella. Toimimme intohimolla, tarkkuudella ja asiakkaan tarpeita kuunnellen.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-paint-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-paint-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Puhelin</h3>
                    <p className="text-muted-foreground font-medium">044 989 0048</p>
                    <p className="text-sm text-muted-foreground">Vastaamme henkilökohtaisesti ma-pe 8-17</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-paint-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-paint-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Sähköposti</h3>
                    <p className="text-muted-foreground font-medium">asiakaspalvelu@siveltimensavel.fi</p>
                    <p className="text-sm text-muted-foreground">Vastaamme sähköposteihin saman päivän aikana</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-paint-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-paint-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Toiminta-alue</h3>
                    <p className="text-muted-foreground font-medium">Koko Pohjois-Savo</p>
                    <p className="text-sm text-muted-foreground">Kuopio, Siilinjärvi, Lapinlahti, Iisalmi ja lähikunnat</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-paint-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-paint-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Työajat</h3>
                    <p className="text-muted-foreground font-medium">Maanantai-Perjantai 8:00-17:00</p>
                    <p className="text-sm text-muted-foreground">Kiireellisissä tilanteissa myös iltaisin ja viikonloppuisin</p>
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
              <CardContent className="space-y-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong className="text-paint-blue">Annamme kiinteähintaisen tarjouksen</strong> ehdotetuista toimenpiteistä 
                  käyntimme yhteydessä. Ei piilokustannuksia, ei yllätyksiä – vain rehellinen arvio työstä ja sen hinnasta.
                </p>
                
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-paint-blue hover:bg-paint-blue/90 text-white text-lg px-8 py-4 shadow-soft" onClick={() => {
                  if (window.innerWidth <= 768) {
                    window.location.href = "tel:+358449890048";
                  } else {
                    window.open("tel:+358449890048");
                  }
                }}>
                    <Phone className="w-5 h-5 mr-2" />
                    Soita nyt: 044 989 0048
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full border-paint-blue text-paint-blue hover:bg-paint-blue hover:text-white text-lg px-8 py-4" onClick={() => document.getElementById('tarjous-lomake')?.scrollIntoView({
                  behavior: 'smooth'
                })}>
                    <Mail className="w-5 h-5 mr-2" />
                    Täytä tarjouslomake
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-paint-blue/5 rounded-lg border border-paint-blue/20">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong className="text-paint-blue">Miksi odottaa?</strong> Maali alkaa kulua ja haalistua noin 10–15 vuodessa. 
                    Ajoissa tehty huoltomaalaus säästää suuremmilta remonttikustannuksilta.
                  </p>
                </div>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;