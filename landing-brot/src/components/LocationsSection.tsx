import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "BROT Colón",
    address: "Av. Colon 8871, Mar del Plata",
    phone: "223 520-0844",
    hours: "Lun-Sab: 8:00 - 13:00 / 16:00 - 20:00 | Dom: 8:00 - 13:00",
    description: "Nuestra sucursal principal en el corazón de la ciudad",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Colon+8871,+Mar+del+Plata"
  },
  {
    id: 2,
    name: "BROT Libertad", 
    address: "Av. Libertad 4901, Mar del Plata",
    phone: "223 540-9745",
    hours: "Lun-Sab: 8:00 - 13:00 / 16:00 - 20:00 | Dom: 8:00 - 13:00",
    description: "Tradición y calidad en el barrio Libertad",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Libertad+4901,+Mar+del+Plata"
  }
];

const LocationsSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-brot-brown-dark mb-3 sm:mb-4">
            Nuestras Sucursales
          </h2>
          <p className="text-base sm:text-xl text-brot-brown max-w-2xl mx-auto">
            Encontranos en estos puntos estratégicos de Mar del Plata
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {locations.map((location) => (
            <Card key={location.id} className="hover:shadow-lg transition-shadow duration-300 border-brot-gold/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-brot-brown-dark flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-brot-gold" />
                  {location.name}
                </CardTitle>
                <CardDescription className="text-brot-brown">
                  {location.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-brot-gold mt-1 flex-shrink-0" />
                  <a 
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brot-brown hover:text-brot-gold transition-colors duration-200 cursor-pointer"
                  >
                    {location.address}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-brot-gold flex-shrink-0" />
                  <a 
                    href={`https://wa.me/${location.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brot-brown hover:text-brot-gold transition-colors duration-200 cursor-pointer font-medium"
                  >
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-brot-gold flex-shrink-0" />
                  <span className="text-brot-brown">{location.hours}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-brot-pink rounded-2xl p-4 sm:p-8 text-center">
          <h3 className="text-lg sm:text-2xl font-bold text-brot-brown-dark mb-3 sm:mb-4">
            ¿Necesitás indicaciones?
          </h3>
          <p className="text-sm sm:text-base text-brot-brown mb-4 sm:mb-6">
            Contactanos por WhatsApp y te ayudamos a llegar a la sucursal más cercana
          </p>
          <a 
            href="https://wa.me/542235200844" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            WhatsApp: (0223) 520-0844
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;