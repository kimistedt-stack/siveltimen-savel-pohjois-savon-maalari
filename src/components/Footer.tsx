import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import paintbrushIcon from "@/assets/paintbrush-footer.png";
const Footer = () => {
  const { t } = useLanguage();
  
  return <footer className="bg-paint-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={paintbrushIcon} alt="Siveltimen Sävel sivellin" className="h-16 w-auto" />
              <div>
                <h3 className="text-xl font-bold">{t('footer.company')}</h3>
                <p className="text-sm text-blue-200">{t('footer.slogan')}</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              {t('footer.description')}
            </p>
            <p className="text-blue-200 text-sm">Palvelemme niin yksityisasiakkaita kuin taloyhtiöitäkin ammattitaidolla ja aikataulussa.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-blue-100">
              <li>• {t('footer.interior')}</li>
              <li>• {t('footer.exterior')}</li>
              <li>• {t('footer.renovation')}</li>
              <li>• {t('footer.consultation')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>044 989 0048</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>asiakaspalvelu@siveltimensavel.fi</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>{t('contact.areaValue')}</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white/10 rounded-lg">
              <p className="text-sm text-blue-100">
                <strong>{t('contact.hoursValue')}</strong><br />
                Kiireellisissä tapauksissa myös iltaisin
              </p>
            </div>
          </div>
        </div>
        
        <hr className="border-blue-300/30 my-8" />
        
        <div className="text-center text-blue-200">
          <p>{t('footer.copyright')}</p>
          <p className="text-sm mt-2 italic">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;