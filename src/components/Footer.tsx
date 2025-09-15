import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  return <footer className="bg-paint-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Siveltimen Sävel logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold">Siveltimen Sävel</h3>
                <p className="text-sm text-blue-200">Luomme kodillesi värien sinfonian</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Luotettava kumppani talon huoltomaalauksessa 
              Pohjois-Savon alueella.
            </p>
            <p className="text-blue-200 text-sm">Palvelemme niin yksityisasiakkaita kuin taloyhtiöitäkin ammattitaidolla ja aikataulussa.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Palvelumme</h4>
            <ul className="space-y-2 text-blue-100">
              <li>• Huoltomaalaukset</li>
              <li>• Ulkomaalaukset</li>
              <li>• Pintakäsittelyt ja korjaukset</li>
              <li>• Kosteusvaurioiden ehkäisy</li>
              <li>
            </li>
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
                <span>Koko Pohjois-Savo</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white/10 rounded-lg">
              <p className="text-sm text-blue-100">
                <strong>Vastaamme ma-pe 8-17</strong><br />
                Kiireellisissä tapauksissa myös iltaisin
              </p>
            </div>
          </div>
        </div>
        
        <hr className="border-blue-300/30 my-8" />
        
        <div className="text-center text-blue-200">
          <p>&copy; 2024 Siveltimen Sävel. Kaikki oikeudet pidätetään.</p>
          <p className="text-sm mt-2 italic">
            "Jotta talosi pysyisi terveenä - ota yhteyttä tänään"
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;