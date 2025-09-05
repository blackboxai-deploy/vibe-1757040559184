import { Button } from "@/components/ui/button";
import { Instagram, MapPin } from "lucide-react";
import heroImage from "@/assets/images/a.png";
import BrotLogo from "./BrotLogo";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center wheat-pattern">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-brot-brown/20"></div>
      </div>
      
      <div className="relative z-10 text-center px-10 sm:px-6 lg:px-10 max-w-3xl mx-auto">
        <div className="bg-brot-cream/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-2xl border border-brot-gold/20">
          <div className="flex justify-center mb-4 sm:mb-12">
            <BrotLogo height={200} className="h-12 sm:h-16 lg:h-20" disableBlend />
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-brot-brown-dark mb-4 sm:mb-6 leading-tight">
            El aroma del pan fresco
            <br />
            <span className="text-brot-gold">te espera cada mañana</span>
          </h1>
          
          <p className="text-sm sm:text-lg lg:text-xl text-brot-brown mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Desde 2021 en Mar del Plata, horneamos con pasión y tradición familiar. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button 
              size="default"
              className="brot-gradient-warm text-brot-cream font-semibold px-4 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              onClick={() => {
                const element = document.getElementById('sucursales');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <MapPin className="mr-1 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              Ver Sucursales
            </Button>
            
            <Button 
              variant="outline" 
              size="default"
              className="border-2 border-brot-gold text-brot-brown bg-brot-cream/80 font-semibold px-4 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-brot-gold hover:text-brot-cream transition-all duration-300 text-sm sm:text-base"
              asChild
            >
              <a 
                href="https://www.instagram.com/panaderiabrot_mdp" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="mr-1 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Seguinos
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brot-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brot-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;