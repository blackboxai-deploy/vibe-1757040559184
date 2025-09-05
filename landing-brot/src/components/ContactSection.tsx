import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const ContactSection = () => {

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-brot-brown-dark mb-3 sm:mb-4">
            Contactanos
          </h2>
          <p className="text-base sm:text-xl text-brot-brown max-w-2xl mx-auto mb-6">
            ¿Tenés alguna consulta o querés hacer un pedido especial? Contactanos por WhatsApp
          </p>
          <div className="flex justify-center mb-8">
            <a 
              href="https://wa.me/542235200844?text=Hola! Quiero hacer una consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageSquare className="mr-3 h-6 w-6" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <Card className="border-brot-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brot-brown-dark">
                  <MessageSquare className="h-5 w-5 text-brot-gold" />
                  Información de contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-brot-brown-dark mb-1">WhatsApp Colón</h4>
                  <a 
                    href="https://wa.me/542235200844"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brot-brown hover:text-brot-gold transition-colors duration-200 cursor-pointer"
                  >
                    (0223) 520-0844
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-brot-brown-dark mb-1">WhatsApp Libertad</h4>
                  <a 
                    href="https://wa.me/542235409745"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brot-brown hover:text-brot-gold transition-colors duration-200 cursor-pointer"
                  >
                    (0223) 540-9745
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-brot-brown-dark mb-1">Horarios de atención</h4>
                  <p className="text-brot-brown">Lun-Sab: 8:00 - 13:00 / 16:00 - 20:00</p>
                  <p className="text-brot-brown">Domingo: 8:00 - 13:00</p>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-brot-pink rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-brot-brown-dark mb-2 sm:mb-3">
                Pedidos por encargo
              </h3>
              <p className="text-sm sm:text-base text-brot-brown mb-3 sm:mb-4">
                ¿Necesitás tortas, panes especiales o productos para eventos? 
                Hacemos pedidos personalizados con 48hs de anticipación.
              </p>
              <p className="text-xs sm:text-sm text-brot-brown font-medium">
                💡 Tip: Para pedidos grandes contactanos por WhatsApp
              </p>
              <div className="mt-4">
                <a 
                  href="https://wa.me/542235200844?text=Hola! Quiero hacer un pedido especial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-300 text-sm"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Hacer pedido por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;