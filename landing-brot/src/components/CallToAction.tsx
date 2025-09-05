import { Button } from "@/components/ui/button";
import { Instagram, MapPin, Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 brot-gradient-warm">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-brot-cream/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-brot-gold/20">
          <h2 className="text-4xl sm:text-5xl font-bold text-brot-brown-dark mb-6">
            ¿Listos para probar
            <br />
            <span className="text-brot-gold">el mejor pan de la ciudad?</span>
          </h2>
          
          <p className="text-xl text-brot-brown mb-8 max-w-2xl mx-auto">
            Visitá cualquiera de nuestras sucursales o seguinos en redes para no perderte las novedades y promociones especiales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-brot-brown text-brot-cream font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-brot-brown-dark hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const element = document.getElementById('sucursales');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Ver todas las sucursales
            </Button>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://www.instagram.com/panaderiabrot_mdp" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                @panaderiabrot_mdp
              </a>
            </Button>
          </div>
          
          <div className="border-t border-brot-gold/20 pt-6">
            <p className="text-brot-brown mb-4">¿Tenés alguna consulta?</p>
            <a 
              href="https://wa.me/542235200844" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp: (0223) 520-0844
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;