import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brush, Shield, CheckCircle, Clock, AlertTriangle, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const Services = () => {
  const { t } = useLanguage();
  
  const workSteps = [{
    icon: <CheckCircle className="w-8 h-8 text-paint-blue" />,
    title: t('services.consultation'),
    description: t('services.consultationDesc')
  }, {
    icon: <Brush className="w-8 h-8 text-paint-blue" />,
    title: t('services.preparation'),
    description: t('services.preparationDesc')
  }, {
    icon: <Shield className="w-8 h-8 text-paint-blue" />,
    title: t('services.painting'),
    description: t('services.paintingDesc')
  }, {
    icon: <Clock className="w-8 h-8 text-paint-blue" />,
    title: t('services.finishing'),
    description: t('services.finishingDesc')
  }];
  return <section id="palvelut" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Urgent Health Warning */}
        

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
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
            {t('benefits.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ {t('benefits.experience')}</h4>
              <p className="text-muted-foreground">{t('benefits.experienceDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ {t('benefits.quality')}</h4>
              <p className="text-muted-foreground">{t('benefits.qualityDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ {t('benefits.warranty')}</h4>
              <p className="text-muted-foreground">{t('benefits.warrantyDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="font-bold text-paint-blue mb-2 text-lg">✓ {t('benefits.service')}</h4>
              <p className="text-muted-foreground">{t('benefits.serviceDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;