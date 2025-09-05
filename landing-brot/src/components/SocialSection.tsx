import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Share2, Camera, Hash, Facebook } from "lucide-react";

const SocialSection = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Panadería BROT - Mar del Plata',
        text: '¡Descubrí el mejor pan artesanal de Mar del Plata!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 brot-gradient-earth">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-brot-brown-dark mb-3 sm:mb-4">
            Compartí Tu Experiencia BROT
          </h2>
          <p className="text-base sm:text-xl text-brot-brown max-w-2xl mx-auto">
            Mostranos cómo disfrutás nuestros productos y formá parte de la familia BROT
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <Card className="bg-card/80 backdrop-blur-sm border-brot-gold/20">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brot-gold rounded-full">
                    <Camera className="h-6 w-6 text-brot-cream" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brot-brown-dark">Subí tus fotos</h3>
                    <p className="text-brot-brown">Etiquetanos en tus historias</p>
                  </div>
                </div>
                <p className="text-brot-brown mb-4">
                  ¡Queremos ver cómo disfrutás nuestros productos! Compartí tus fotos en Instagram.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 bg-brot-gold/20 text-brot-brown rounded-full text-sm">
                    <Hash className="h-3 w-3 mr-1" />
                    BrotMDP
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-brot-gold/20 text-brot-brown rounded-full text-sm">
                    <Hash className="h-3 w-3 mr-1" />
                    PanArtesanal
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-brot-gold/20 text-brot-brown rounded-full text-sm">
                    <Hash className="h-3 w-3 mr-1" />
                    MarDelPlata
                  </span>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleShare}
                className="flex-1 bg-brot-brown text-brot-cream hover:bg-brot-brown-dark transition-colors duration-300"
                size="lg"
              >
                <Share2 className="mr-2 h-5 w-5" />
                Compartir BROT
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="flex-1 border-brot-gold text-brot-brown hover:bg-brot-gold hover:text-brot-cream transition-colors duration-300"
                size="lg"
              >
                <a 
                  href="https://www.instagram.com/panaderiabrot_mdp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  @panaderiabrot_mdp
                </a>
              </Button>
            </div>
          </div>
          
          <div className="bg-brot-cream/80 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-brot-gold/20">
            <h3 className="text-xl sm:text-2xl font-bold text-brot-brown-dark mb-4 sm:mb-6 text-center">
              Seguinos en Redes
            </h3>
            
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/panaderiabrot_mdp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Instagram</div>
                    <div className="text-sm opacity-90">@panaderiabrot_mdp</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold">2K</div>
                  <div className="text-xs opacity-90">seguidores</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;