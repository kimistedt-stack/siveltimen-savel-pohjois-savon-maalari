import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
const Contact = () => {
  return <section id="yhteystiedot" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        

        <div className="grid lg:grid-cols-2 gap-12 px-0 py-0">
          <div className="space-y-6">
            <Card className="shadow-card border-border/50">
              
              <CardContent className="space-y-6">
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
                    <p className="text-sm text-muted-foreground">Vastaamme sähköposteihin 24h sisällä</p>
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

          
        </div>
      </div>
    </section>;
};
export default Contact;