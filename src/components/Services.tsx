import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Brush, Paintbrush2, CheckCircle2 } from "lucide-react";

const Services = () => {
  return (
    <section id="palvelut" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Näin <span className="text-paint-blue">työ etenee</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jokaisessa projektissa noudatamme huolellista työprosessia, 
            joka takaa laadukkaan ja pitkäikäisen lopputuloksen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-card transition-shadow duration-300 group">
            <CardHeader>
              <div className="mx-auto w-20 h-20 bg-paint-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-paint-blue/20 transition-colors">
                <div className="bg-paint-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">1</div>
              </div>
              <CardTitle className="text-foreground">Kartoitus</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Annamme kiinteähintaisen tarjouksen ehdotetuista toimenpiteistä 
                käyntimme yhteydessä. Arvioimme työn laajuuden ja tarpeet.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-card transition-shadow duration-300 group">
            <CardHeader>
              <div className="mx-auto w-20 h-20 bg-paint-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-paint-blue/20 transition-colors">
                <div className="bg-paint-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">2</div>
              </div>
              <CardTitle className="text-foreground">Valmistelu</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Ennen varsinaista työtä teemme tarvittavat suojaukset, 
                homepesun ja hilseilevän maalin poiston huolellisesti.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-card transition-shadow duration-300 group">
            <CardHeader>
              <div className="mx-auto w-20 h-20 bg-paint-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-paint-blue/20 transition-colors">
                <div className="bg-paint-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">3</div>
              </div>
              <CardTitle className="text-foreground">Maalaus</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Maalaus sopivalla maalilla huolellisesti ja laadukkaasti 
                loistavan lopputuloksen takaamiseksi.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-card transition-shadow duration-300 group">
            <CardHeader>
              <div className="mx-auto w-20 h-20 bg-paint-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-paint-blue/20 transition-colors">
                <div className="bg-paint-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">4</div>
              </div>
              <CardTitle className="text-foreground">Loppusiivous</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Työn valmistuttua teemme lopputarkastuksen ja työmaan 
                loppusiivouksen. Luovutamme työn asiakkaalle.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 bg-gradient-subtle rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Miksi valita <span className="text-paint-blue">Siveltimen Sävel</span>?
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Siveltimen Sävel on luotettava ja kotimainen maalausalan ammattilainen, joka tuo talollesi uuden elämän 
            laadukkaalla ja kestävällä maalauksella. Meille tärkeintä on työn jälki, asiakkaan tyytyväisyys 
            ja sovituista aikatauluista kiinni pitäminen.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-paint-blue/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-paint-blue" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Intohimo työhön</h4>
              <p className="text-muted-foreground leading-relaxed">
                Me uskomme siihen, että hyvä maalaustyö ei ole vain pintaa – se on osa kodin suojaa ja kauneutta. 
                Yrityksemme toimii intohimolla ja tarkkuudella.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-paint-blue/10 rounded-full flex items-center justify-center mx-auto">
                <Paintbrush2 className="w-8 h-8 text-paint-blue" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Testatut materiaalit</h4>
              <p className="text-muted-foreground leading-relaxed">
                Käytämme vain testattuja ja säänkestäviä maaleja sekä huolellisia työmenetelmiä, 
                jotka takaavat pitkäikäisen ja näyttävän lopputuloksen.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-paint-blue/10 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-8 h-8 text-paint-blue" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Asiakkaan kuuntelu</h4>
              <p className="text-muted-foreground leading-relaxed">
                Asiakkaan tarpeita kuunnellen toteutamme jokaisen projektin. 
                Meillä jokainen maalausprojekti on yhtä tärkeä, oli kyseessä sitten pieni mökki tai iso omakotitalo.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-paint-blue/5 rounded-xl border border-paint-blue/20">
            <p className="text-lg italic text-foreground leading-relaxed">
              <strong className="text-paint-blue">"Sävel on siveltimessä – ja laatu työssämme."</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;