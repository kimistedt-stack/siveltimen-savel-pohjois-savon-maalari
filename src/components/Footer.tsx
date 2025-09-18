import { Phone, Mail, MapPin } from "lucide-react";
import paintbrushIcon from "@/assets/paintbrush-footer.png";

const Footer = () => {
  return (
    <footer className="bg-paint-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={paintbrushIcon} alt="Siveltimen Sävel sivellin" className="h-16 w-auto" />
              <div>
                <h3 className="text-xl font-bold">Siveltimen Sävel</h3>
                <p className="text-sm text-blue-200">Ammattitaitoista maalausta</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Olemme maalausalan ammattilaisyritys, joka palvelee kotitalouksia ja yrityksiä Uudellamaalla.
            </p>
            <p className="text-blue-200 text-sm">Palvelemme niin yksityisasiakkaita kuin taloyhtiöitäkin ammattitaidolla ja aikataulussa.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Palvelumme</h4>
            <ul className="space-y-2 text-blue-100">
              <li>• Sisätilojen maalaus</li>
              <li>• Ulkomaalaus</li>
              <li>• Remonttimaalaus</li>
              <li>• Konsultointi</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Yhteystiedot</h4>
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
                <span>Uusimaa, pääkaupunkiseutu</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white/10 rounded-lg">
              <p className="text-sm text-blue-100">
                <strong>Ma-Pe 8-17, La 9-15</strong><br />
                Kiireellisissä tapauksissa myös iltaisin
              </p>
            </div>
          </div>
        </div>
        
        <hr className="border-blue-300/30 my-8" />
        
        <div className="text-center text-blue-200">
          <p>© 2024 Siveltimen Sävel. Kaikki oikeudet pidätetään.</p>
          <p className="text-sm mt-2 italic">
            Luotettava kumppani maalaustyöhön - vuodesta 2018 lähtien
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;