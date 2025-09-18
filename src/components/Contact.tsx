import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="yhteystiedot" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Erinomainen valinta! Aloitetaan projektisi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Olet tekemässä viisasta päätöstä valitessasi meidät. Kotisi ansaitsee ammattitaitoisen 
            maalauksen, joka kestää aikaa ja näyttää upealta vuodesta toiseen. Otamme yhteyttä 
            sinuun pian ja sovimme katsastuskäynnin - tästä alkaa kotisi muodonmuutos!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 px-0 py-0">
          <div className="space-y-6">
            <Card className="shadow-card border-border/50">
              
              
            </Card>
          </div>

          
        </div>
      </div>
    </section>
  );
};
export default Contact;