import { Instagram, MapPin, MessageCircle } from "lucide-react";
import BrotLogo from "./BrotLogo";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-brot-brown-dark text-brot-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-4">
            <BrotLogo height={80} />
            <p className="text-brot-cream/80 text-sm leading-relaxed">
              Panadería artesanal familiar desde 2021. Tradición, calidad y sabor auténtico en cada producto.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/panaderiabrot_mdp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brot-gold rounded-full hover:bg-brot-gold-light transition-colors duration-300"
              >
                <Instagram className="h-4 w-4 text-brot-brown-dark" />
              </a>
              <a
                href="https://wa.me/542235200844"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                <MessageCircle className="h-4 w-4 text-white" />
              </a>

            </div>
          </div>

          <div>
            <h3 className="font-bold text-brot-gold mb-4">Sucursales</h3>
            <ul className="space-y-2 text-sm text-brot-cream/80">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Colon+8871,+Mar+del+Plata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brot-gold transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-brot-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-brot-cream">BROT Colón</div>
                      <div>Av. Colon 8871, MDP</div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Libertad+4901,+Mar+del+Plata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brot-gold transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-brot-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-brot-cream">BROT Libertad</div>
                      <div>Av. Libertad 4901, MDP</div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-brot-gold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-brot-cream/80">
              <li className="flex items-center gap-2">
                <a
                  href="https://wa.me/542235200844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brot-gold transition-colors duration-200 cursor-pointer flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/panaderiabrot_mdp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brot-gold transition-colors duration-200 cursor-pointer flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4 text-brot-gold" />
                  <span>Instagram</span>
                </a>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-brot-gold mb-4">Horarios</h3>
            <div className="text-sm text-brot-cream/80 space-y-1">
              <div>Lunes a Sábado</div>
              <div className="font-medium text-brot-cream">8:00 - 13:00</div>
              <div className="font-medium text-brot-cream">16:00 - 20:00</div>
              <div className="mt-2">Domingo</div>
              <div className="font-medium text-brot-cream">8:00 - 13:00</div>
            </div>
          </div>
        </div>

        <div className="border-t border-brot-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-brot-cream/60">
            <div>
              © 2025 Panadería BROT. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-brot-gold transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-brot-gold transition-colors">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;