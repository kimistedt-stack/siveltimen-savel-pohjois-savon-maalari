import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fi' | 'en' | 'sv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fi: {
    // Header
    'nav.home': 'Etusivu',
    'nav.services': 'Palvelut',
    'nav.info': 'Info',
    'nav.contact': 'Yhteystiedot',
    'header.callNow': 'Soita nyt',
    'header.getQuote': 'Pyydä tarjous',
    
    // Hero
    'hero.title': 'Ammattitaitoista maalaustyötä Helsingissä',
    'hero.subtitle': 'Teemme kotisi kauniimmaksi ja suojaamme sen sään vaikutuksilta. Yli 15 vuoden kokemus takaa laadukkaan lopputuloksen.',
    'hero.cta': 'Pyydä maksuton tarjous',
    
    // Services
    'services.title': 'Näin työskentelemme',
    'services.subtitle': 'Ammattitaitoinen ja huolellinen työskentely takaa parhaan mahdollisen lopputuloksen',
    'services.consultation': 'Konsultointi ja suunnittelu',
    'services.consultationDesc': 'Kartoitamme tarpeet ja suunnittelemme työn yksityiskohtaisesti',
    'services.preparation': 'Huolellinen valmistelu',
    'services.preparationDesc': 'Suojaamme kiinteistön ja valmistelEmme pinnat ammattitaitoisesti',
    'services.painting': 'Laadukas maalaustyö',
    'services.paintingDesc': 'Käytämme laadukkaita materiaaleja ja ammattitaitoisia tekniikoita',
    'services.finishing': 'Viimeistely ja siivous',
    'services.finishingDesc': 'Huolehdimme siististä lopputuloksesta ja siivouksesta',
    
    // Benefits
    'benefits.title': 'Miksi valita meidät?',
    'benefits.experience': 'Yli 15 vuoden kokemus',
    'benefits.experienceDesc': 'Pitkä kokemus takaa ammattitaidon',
    'benefits.quality': 'Laadukkaat materiaalit',
    'benefits.qualityDesc': 'Käytämme vain parhaita maaleja ja työkaluja',
    'benefits.warranty': 'Takuu työlle',
    'benefits.warrantyDesc': 'Luotamme työhömme ja tarjoamme takuun',
    'benefits.service': 'Ystävällinen palvelu',
    'benefits.serviceDesc': 'Asiakastyytyväisyys on meille tärkeintä',
    
    // Before/After
    'beforeAfter.title': 'Ennen ja jälkeen',
    'beforeAfter.subtitle': 'Katso kuinka muutamme tilat upeiksi ammattitaitoisella maalaustyöllä',
    'beforeAfter.before': 'Ennen',
    'beforeAfter.after': 'Jälkeen',
    
    // Quote Form
    'quote.title': 'Pyydä maksuton tarjous',
    'quote.subtitle': 'Kerro meille projektistasi, niin lähetämme sinulle räätälöidyn tarjouksen.',
    'quote.phone': 'Puhelin',
    'quote.email': 'Sähköposti',
    'quote.name': 'Nimi',
    'quote.address': 'Osoite',
    'quote.message': 'Kerro projektistasi',
    'quote.submit': 'Lähetä tarjouspyyntö',
    'quote.submitting': 'Lähetetään...',
    
    // Contact
    'contact.title': 'Ota yhteyttä',
    'contact.subtitle': 'Olemme valmiita auttamaan sinua maalaustyössäsi',
    'contact.phone': 'Puhelin',
    'contact.email': 'Sähköposti',
    'contact.hours': 'Aukioloajat',
    'contact.hoursValue': 'Ma-Pe 8:00-17:00',
    'contact.area': 'Palvelualue',
    'contact.areaValue': 'Helsinki ja lähikunnat',
    
    // Footer
    'footer.company': 'Siveltimen Sävel',
    'footer.slogan': 'Väriä elämään',
    'footer.description': 'Ammattitaitoista maalauspalvelua Helsingissä jo yli 15 vuotta. Kotisi ansaitsee parhaan.',
    'footer.services': 'Palvelut',
    'footer.interior': 'Sisämaalaus',
    'footer.exterior': 'Ulkomaalaus',
    'footer.renovation': 'Remonttimaalaus',
    'footer.consultation': 'Konsultointi',
    'footer.contact': 'Yhteystiedot',
    'footer.copyright': '© 2024 Siveltimen Sävel. Kaikki oikeudet pidätetään.',
    'footer.tagline': 'Tehty rakkaudella maalaukseen',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.info': 'Info',
    'nav.contact': 'Contact',
    'header.callNow': 'Call now',
    'header.getQuote': 'Get quote',
    
    // Hero
    'hero.title': 'Professional Painting Services in Helsinki',
    'hero.subtitle': 'We make your home more beautiful and protect it from weather conditions. Over 15 years of experience guarantees quality results.',
    'hero.cta': 'Get free quote',
    
    // Services
    'services.title': 'How we work',
    'services.subtitle': 'Professional and careful work ensures the best possible result',
    'services.consultation': 'Consultation and planning',
    'services.consultationDesc': 'We assess needs and plan the work in detail',
    'services.preparation': 'Careful preparation',
    'services.preparationDesc': 'We protect the property and prepare surfaces professionally',
    'services.painting': 'Quality painting work',
    'services.paintingDesc': 'We use quality materials and professional techniques',
    'services.finishing': 'Finishing and cleaning',
    'services.finishingDesc': 'We ensure clean results and proper cleanup',
    
    // Benefits
    'benefits.title': 'Why choose us?',
    'benefits.experience': 'Over 15 years experience',
    'benefits.experienceDesc': 'Long experience ensures professionalism',
    'benefits.quality': 'Quality materials',
    'benefits.qualityDesc': 'We only use the best paints and tools',
    'benefits.warranty': 'Work guarantee',
    'benefits.warrantyDesc': 'We trust our work and offer guarantee',
    'benefits.service': 'Friendly service',
    'benefits.serviceDesc': 'Customer satisfaction is most important to us',
    
    // Before/After
    'beforeAfter.title': 'Before and after',
    'beforeAfter.subtitle': 'See how we transform spaces with professional painting work',
    'beforeAfter.before': 'Before',
    'beforeAfter.after': 'After',
    
    // Quote Form
    'quote.title': 'Request free quote',
    'quote.subtitle': 'Tell us about your project and we\'ll send you a customized quote.',
    'quote.phone': 'Phone',
    'quote.email': 'Email',
    'quote.name': 'Name',
    'quote.address': 'Address',
    'quote.message': 'Tell us about your project',
    'quote.submit': 'Send quote request',
    'quote.submitting': 'Sending...',
    
    // Contact
    'contact.title': 'Contact us',
    'contact.subtitle': 'We are ready to help you with your painting project',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Opening hours',
    'contact.hoursValue': 'Mon-Fri 8:00-17:00',
    'contact.area': 'Service area',
    'contact.areaValue': 'Helsinki and surrounding areas',
    
    // Footer
    'footer.company': 'Siveltimen Sävel',
    'footer.slogan': 'Color to life',
    'footer.description': 'Professional painting services in Helsinki for over 15 years. Your home deserves the best.',
    'footer.services': 'Services',
    'footer.interior': 'Interior painting',
    'footer.exterior': 'Exterior painting',
    'footer.renovation': 'Renovation painting',
    'footer.consultation': 'Consultation',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 Siveltimen Sävel. All rights reserved.',
    'footer.tagline': 'Made with love for painting',
  },
  sv: {
    // Header
    'nav.home': 'Hem',
    'nav.services': 'Tjänster',
    'nav.info': 'Info',
    'nav.contact': 'Kontakt',
    'header.callNow': 'Ring nu',
    'header.getQuote': 'Begär offert',
    
    // Hero
    'hero.title': 'Professionella målerietjänster i Helsingfors',
    'hero.subtitle': 'Vi gör ditt hem vackrare och skyddar det från väderförhållanden. Över 15 års erfarenhet garanterar kvalitetsresultat.',
    'hero.cta': 'Få gratis offert',
    
    // Services
    'services.title': 'Så arbetar vi',
    'services.subtitle': 'Professionellt och omsorgsfullt arbete säkerställer bästa möjliga resultat',
    'services.consultation': 'Konsultation och planering',
    'services.consultationDesc': 'Vi bedömer behov och planerar arbetet i detalj',
    'services.preparation': 'Noggrann förberedelse',
    'services.preparationDesc': 'Vi skyddar fastigheten och förbereder ytor professionellt',
    'services.painting': 'Kvalitetsmåleri',
    'services.paintingDesc': 'Vi använder kvalitetsmaterial och professionella tekniker',
    'services.finishing': 'Slutbehandling och städning',
    'services.finishingDesc': 'Vi säkerställer rent resultat och proper städning',
    
    // Benefits
    'benefits.title': 'Varför välja oss?',
    'benefits.experience': 'Över 15 års erfarenhet',
    'benefits.experienceDesc': 'Lång erfarenhet säkerställer professionalism',
    'benefits.quality': 'Kvalitetsmaterial',
    'benefits.qualityDesc': 'Vi använder endast bästa färger och verktyg',
    'benefits.warranty': 'Arbetsgaranti',
    'benefits.warrantyDesc': 'Vi litar på vårt arbete och erbjuder garanti',
    'benefits.service': 'Vänlig service',
    'benefits.serviceDesc': 'Kundnöjdhet är viktigast för oss',
    
    // Before/After
    'beforeAfter.title': 'Före och efter',
    'beforeAfter.subtitle': 'Se hur vi förvandlar utrymmen med professionellt måleriarbete',
    'beforeAfter.before': 'Före',
    'beforeAfter.after': 'Efter',
    
    // Quote Form
    'quote.title': 'Begär gratis offert',
    'quote.subtitle': 'Berätta om ditt projekt så skickar vi dig en skräddarsydd offert.',
    'quote.phone': 'Telefon',
    'quote.email': 'E-post',
    'quote.name': 'Namn',
    'quote.address': 'Adress',
    'quote.message': 'Berätta om ditt projekt',
    'quote.submit': 'Skicka offertförfrågan',
    'quote.submitting': 'Skickar...',
    
    // Contact
    'contact.title': 'Kontakta oss',
    'contact.subtitle': 'Vi är redo att hjälpa dig med ditt måleriproject',
    'contact.phone': 'Telefon',
    'contact.email': 'E-post',
    'contact.hours': 'Öppettider',
    'contact.hoursValue': 'Mån-Fre 8:00-17:00',
    'contact.area': 'Serviceområde',
    'contact.areaValue': 'Helsingfors och omkringliggande områden',
    
    // Footer
    'footer.company': 'Siveltimen Sävel',
    'footer.slogan': 'Färg till livet',
    'footer.description': 'Professionella målerietjänster i Helsingfors i över 15 år. Ditt hem förtjänar det bästa.',
    'footer.services': 'Tjänster',
    'footer.interior': 'Inomhusmålning',
    'footer.exterior': 'Utomhusmålning',
    'footer.renovation': 'Renoveringsmålning',
    'footer.consultation': 'Konsultation',
    'footer.contact': 'Kontakt',
    'footer.copyright': '© 2024 Siveltimen Sävel. Alla rättigheter förbehållna.',
    'footer.tagline': 'Gjort med kärlek för målning',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fi');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};