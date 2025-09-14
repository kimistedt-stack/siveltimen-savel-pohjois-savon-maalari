import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brush, Shield, CheckCircle, Clock, AlertTriangle, Phone } from "lucide-react";

const Services = () => {
  const workSteps = [
    {
      icon: <CheckCircle className="w-8 h-8 text-paint-blue" />,
      title: "1. Ilmainen katsastus",
      description: "Tulemme paikan päälle samana tai seuraavana päivänä arvioimaan tilanneen ja annamme kiinteähintaisen tarjouksen."
    },
    {
      icon: <Brush className="w-8 h-8 text-paint-blue" />,
      title: "2. Ammattimainen valmistelu",
      description: "Pesemme ja valmistelemme pinnat huolellisesti - tämä on työn tärkein vaihe."
    },
    {
      icon: <Shield className="w-8 h-8 text-paint-blue" />,
      title: "3. Kestävä maalaus",
      description: "Käytämme vain parhaita, säänkestäviä maaleja jotka kestävät 15+ vuotta."
    },
    {
      icon: <Clock className="w-8 h-8 text-paint-blue" />,
      title: "4. Takuu ja huolenpito",
      description: "Annamme takuun työlle ja neuvomme miten pitää talo kunnossa jatkossa."
    }
  ];

  return (
    <section id="palvelut" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Urgent Health Warning */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-16 text-center">
          <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-red-800 mb-4">
            Huoltomaalaamaton talo on terveysriski!
          </h2>
          <p className="text-lg text-red-700 max-w-4xl mx-auto leading-relaxed mb-6">
            <strong>Maalaamattomissa taloissa kosteus pääsee puurakenteisiin aiheuttaen hometta ja mikrobikasvustoa.</strong> 
            Nämä ovat vaarallisia erityisesti lapsille ja aiheuttavat hengityselinsairauksia, allergioita ja astmaa. 
            Mitä kauemmin odotat, sitä kalliimmaksi korjaus tulee.
          </p>
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4"
            onClick={() => {
              if (window.innerWidth <= 768) {
                window.location.href = "tel:+358449890048";
              } else {
                document.getElementById('yhteystiedot')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Phone className="w-5 h-5 mr-2" />
            Soita nyt - älä odota huomenna!
          </Button>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Helppo ja <span className="text-paint-blue">luotettava</span> prosessi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Teemme kaiken niin helpoksi kuin mahdollista. <strong className="text-paint-blue">Sinun tarvitsee vain soittaa</strong> 
            - me hoidamme loput ammattitaidolla ja aikataulussa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {workSteps.map((step, index) => (
            <Card key={index} className="text-center shadow-card border-border/50 hover:shadow-soft transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-paint-blue/10 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-paint-blue/5 border border-paint-blue/20 rounded-2xl p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Miksi <span className="text-paint-blue">tuhannet asiakkaat</span> luottavat meihin?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ Helppous ja nopeus</h4>
              <p className="text-muted-foreground">Soitat, me tulemme ja hoidamme kaiken. Ei stressiä, ei yllätyksiä.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ Kiinteä hinta etukäteen</h4>
              <p className="text-muted-foreground">Tiedät tarkan hinnan ennen työn aloitusta. Ei piilokustannuksia.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ Yli 15 vuoden kokemus</h4>
              <p className="text-muted-foreground">Olemme nähneet kaiken ja osaamme tehdä työn oikein kerralla.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ Parhaat materiaalit</h4>
              <p className="text-muted-foreground">Vain säänkestäviä, testattuja maaleja jotka kestävät vuosikymmeniä.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ Aikataulussa pysyminen</h4>
              <p className="text-muted-foreground">Tulemme sovittuna aikana ja työ valmistuu luvattuun päivään.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ Takuu ja vastuu</h4>
              <p className="text-muted-foreground">Vastaamme työstämme ja korjaamme mahdolliset puutteet.</p>
            </div>
          </div>
          
          <div className="mt-10 p-6 bg-paint-blue/10 rounded-xl">
            <p className="text-2xl font-bold text-paint-blue italic">
              "Ota yhteyttä tänään - huomenna saattaa olla myöhäistä"
            </p>
            <p className="text-muted-foreground mt-2">
              Kosteusvauriot etenevät nopeasti ja korjaus kallistuu joka kuukausi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;