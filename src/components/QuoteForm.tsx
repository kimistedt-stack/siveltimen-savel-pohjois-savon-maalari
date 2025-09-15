import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Create mailto link with form data
      const subject = `Tarjouspyyntö - ${formData.name}`;
      const body = `
Nimi: ${formData.name}
Puhelinnumero: ${formData.phone}
Sähköposti: ${formData.email}
Osoite: ${formData.address}

Viesti:
${formData.message}

---
Lähetetty siveltimensavel.fi tarjouslomakkeelta
      `;
      const mailtoUrl = `mailto:asiakaspalvelu@siveltimensavel.fi?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      toast({
        title: "Tarjouspyyntö lähetetty!",
        description: "Otamme sinuun yhteyttä 24 tunnin sisällä."
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Virhe",
        description: "Jotain meni pieleen. Yritä uudelleen tai soita suoraan.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return <section id="tarjous-lomake" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Aloitetaan <span className="text-paint-blue">yhdessä</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Meille tärkeintä on asiakkaan tyytyväisyys ja sovituista aikatauluista kiinni pitäminen. 
            Ota rohkeasti yhteyttä – kerrotaan lisää siitä, miten voimme auttaa taloasi pysymään terveenä.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
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
                  <p className="text-sm text-muted-foreground">Vastaamme sähköposteihin 24h sisällä</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-paint-blue/5 rounded-lg border border-paint-blue/20">
                <p className="text-sm text-muted-foreground text-center">
                  <strong className="text-paint-blue">Miksi odottaa?</strong> Maali alkaa kulua ja haalistua noin 10–15 vuodessa. 
                  Ajoissa tehty huoltomaalaus säästää suuremmilta remonttikustannuksilta.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardHeader className="bg-paint-blue/5">
              <CardTitle className="text-2xl text-paint-blue flex items-center gap-2">
                <Send className="w-6 h-6" />
                Täytä lomake
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                    Nimi *
                  </Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-2 border-paint-blue/20 focus:border-paint-blue" placeholder="Etunimi Sukunimi" />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
                    Puhelinnumero *
                  </Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required className="mt-2 border-paint-blue/20 focus:border-paint-blue" placeholder="044 123 4567" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Sähköposti
                  </Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className="mt-2 border-paint-blue/20 focus:border-paint-blue" placeholder="etunimi@esimerkki.fi" />
                </div>

                <div>
                  <Label htmlFor="address" className="text-sm font-semibold text-foreground">
                    Osoite *
                  </Label>
                  <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required className="mt-2 border-paint-blue/20 focus:border-paint-blue" placeholder="Katuosoite, Postinumero Kaupunki" />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Kerro tarkemmin tarpeestasi
                  </Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={4} className="mt-2 border-paint-blue/20 focus:border-paint-blue resize-none" placeholder="Esim. kuinka vanha talo, milloin viimeksi maalattu, erityisiä tarpeita..." />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-paint-blue hover:bg-paint-blue/90 text-white text-lg py-4">
                  {isSubmitting ? "Lähetetään..." : <>
                      <Send className="w-5 h-5 mr-2" />
                      Lähetä tarjouspyyntö
                    </>}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default QuoteForm;