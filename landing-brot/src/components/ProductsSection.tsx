import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductModal from "./ProductModal";
import panesImage from "@/assets/images/panes.svg";
import sandwichesImage from "@/assets/images/sandwiches.jpg";
import empanadasImage from "@/assets/images/empanadas.svg";
import postresImage from "@/assets/images/postres.svg";
import especialesImage from "@/assets/images/especiales.svg";
import facturasImage from "@/assets/images/facturas.jpg";
import tartaFrutillaImage from "@/assets/images/TartaFrutilla.jpg";
import BrownieImage from "@/assets/images/Brownie.jpg";
import BudinesImage from "@/assets/images/Budines.jpg";
import PanImage from "@/assets/images/Pan.jpg";
import PastaFrolaImage from "@/assets/images/PastaFrola.jpg";
import PasteleriaImage from "@/assets/images/Pasteleriadulce.jpg";
import PastelitosImage from "@/assets/images/Pastelitos.jpg";
import PostreOreoImage from "@/assets/images/PostreOreo.jpg";
import SelvaNegraImage from "@/assets/images/SelvaNegra.jpg";

// Datos de las categorías de productos
const productCategories = [
  {
    id: 1,
    name: "Panadería",
    image: panesImage,
    description: "Nuestros panes artesanales y productos de panadería tradicional",
    badge: "Más Vendido",
    products: [
      {
        id: 1,
        name: "Pan",
        image: PanImage,
        description: "Pan artesanal con masa madre y fermentación natural",
        price: "$180"
      },
      {
        id: 2,
        name: "Pebete",
        image: panesImage,
        description: "Pebete tradicional con corteza dorada y miga suave",
        price: "$120"
      },
      {
        id: 3,
        name: "Pan de Hamburguesa",
        image: panesImage,
        description: "Pan de hamburguesa con semillas de sésamo",
        price: "$150"
      },
      {
        id: 4,
        name: "Pan de Grasa",
        image: panesImage,
        description: "Pan de grasa tradicional argentino",
        price: "$100"
      },
      {
        id: 5,
        name: "Pan de Panchos",
        image: panesImage,
        description: "Pan de panchos suave y esponjoso",
        price: "$80"
      },
      {
        id: 6,
        name: "Pan Rallado",
        image: panesImage,
        description: "Pan rallado para empanizar y cocinar",
        price: "$90"
      },
      {
        id: 7,
        name: "Marineras con Sal",
        image: panesImage,
        description: "Marineras con sal para acompañar cualquier comida",
        price: "$110"
      },
      {
        id: 8,
        name: "Marineras sin Sal",
        image: panesImage,
        description: "Marineras sin sal para dietas bajas en sodio",
        price: "$110"
      },
      {
        id: 9,
        name: "Plantillas con Sal",
        image: panesImage,
        description: "Plantillas con sal, perfectas para el desayuno",
        price: "$95"
      },
      {
        id: 10,
        name: "Plantillas sin Sal",
        image: panesImage,
        description: "Plantillas sin sal para dietas especiales",
        price: "$95"
      },
      {
        id: 11,
        name: "Tostadas",
        image: panesImage,
        description: "Tostadas artesanales para el desayuno",
        price: "$85"
      },
      {
        id: 12,
        name: "Sacramento",
        image: panesImage,
        description: "Pan sacramento tradicional",
        price: "$130"
      },
      {
        id: 13,
        name: "Pizzas y Pizzetas",
        image: panesImage,
        description: "Pizzas y pizzetas artesanales",
        price: "$200"
      }
    ]
  },
  {
    id: 2,
    name: "Pastelería Dulce",
    image: PasteleriaImage,
    description: "Facturas, scones, polvorones y masas secas tradicionales",
    badge: "Especialidad",
    products: [
      {
        id: 14,
        name: "Facturas",
        image: facturasImage,
        description: "Facturas tradicionales argentinas",
        price: "$80"
      },
      {
        id: 15,
        name: "Scones",
        image: facturasImage,
        description: "Scones ingleses con mantequilla",
        price: "$90"
      },
      {
        id: 16,
        name: "Polvorones",
        image: facturasImage,
        description: "Polvorones caseros y tradicionales",
        price: "$70"
      },
      {
        id: 17,
        name: "Masas Secas",
        image: facturasImage,
        description: "Masas secas para acompañar el té",
        price: "$75"
      },
      {
        id: 18,
        name: "Cuarterio",
        image: facturasImage,
        description: "Cuarterio tradicional argentino",
        price: "$85"
      },
      {
        id: 19,
        name: "Merengues",
        image: facturasImage,
        description: "Merengues caseros y decorados",
        price: "$60"
      },
      {
        id: 20,
        name: "Budín de Chocolate",
        image: BudinesImage,
        description: "Budín de chocolate casero",
        price: "$120"
      },
      {
        id: 21,
        name: "Budín de Frutas",
        image: facturasImage,
        description: "Budín de frutas variadas",
        price: "$110"
      },
      {
        id: 22,
        name: "Budín de Limón",
        image: facturasImage,
        description: "Budín de limón refrescante",
        price: "$115"
      },
      {
        id: 23,
        name: "Budín de Naranja",
        image: facturasImage,
        description: "Budín de naranja cítrico",
        price: "$115"
      },
      {
        id: 24,
        name: "Piononos",
        image: facturasImage,
        description: "Piononos rellenos de dulce de leche",
        price: "$100"
      }
    ]
  },
  {
    id: 3,
    name: "Tortas y Postres",
    image: postresImage,
    description: "Tortas clásicas, elaboradas y postres individuales",
    badge: "Premium",
    products: [
      {
        id: 25,
        name: "Torta Clásica de Vainilla",
        image: postresImage,
        description: "Torta clásica de vainilla con crema",
        price: "$250"
      },
      {
        id: 26,
        name: "Torta Clásica de Chocolate",
        image: postresImage,
        description: "Torta clásica de chocolate con crema",
        price: "$250"
      },
      {
        id: 27,
        name: "Torta Elaborada de Vainilla",
        image: postresImage,
        description: "Torta elaborada de vainilla con decoraciones",
        price: "$350"
      },
      {
        id: 28,
        name: "Torta Elaborada de Chocolate",
        image: postresImage,
        description: "Torta elaborada de chocolate con decoraciones",
        price: "$350"
      },
      {
        id: 29,
        name: "Torta Brownie",
        image: BrownieImage,
        description: "Torta brownie con chocolate y nueces",
        price: "$280"
      },
      {
        id: 30,
        name: "Milhojas",
        image: postresImage,
        description: "Milhojas con crema pastelera",
        price: "$200"
      },
      {
        id: 31,
        name: "Selva Negra",
        image: SelvaNegraImage,
        description: "Torta selva negra con cerezas",
        price: "$320"
      },
      {
        id: 32,
        name: "Rogel",
        image: postresImage,
        description: "Torta rogel tradicional argentina",
        price: "$300"
      },
      {
        id: 33,
        name: "Postre Balcarce",
        image: postresImage,
        description: "Postre balcarce individual",
        price: "$80"
      },
      {
        id: 34,
        name: "Postre de Merengue",
        image: postresImage,
        description: "Postre de merengue individual",
        price: "$70"
      },
      {
        id: 35,
        name: "Postre de Frutilla",
        image: postresImage,
        description: "Postre de frutilla individual",
        price: "$75"
      },
      {
        id: 36,
        name: "Postre de Durazno",
        image: postresImage,
        description: "Postre de durazno individual",
        price: "$75"
      },
      {
        id: 37,
        name: "Postre de Oreo",
        image: PostreOreoImage,
        description: "Postre de oreo individual",
        price: "$80"
      },
      {
        id: 38,
        name: "Porciones Individuales Heladera",
        image: postresImage,
        description: "Variedad de postres individuales de heladera",
        price: "$90"
      }
    ]
  },
  {
    id: 4,
    name: "Tartas",
    image: postresImage,
    description: "Tartas dulces y saladas artesanales",
    badge: null,
    products: [
      {
        id: 39,
        name: "Tarta de Manzana",
        image: postresImage,
        description: "Tarta de manzana tradicional",
        price: "$180"
      },
      {
        id: 40,
        name: "Tarta Crumble de Manzana",
        image: postresImage,
        description: "Tarta crumble de manzana con topping crujiente",
        price: "$200"
      },
      {
        id: 41,
        name: "Tarta de Ricota",
        image: postresImage,
        description: "Tarta de ricota casera",
        price: "$160"
      },
      {
        id: 42,
        name: "Tarta de Frutilla",
        image: tartaFrutillaImage,
        description: "Tarta de frutilla fresca",
        price: "$190"
      },
      {
        id: 43,
        name: "Tarta de Coco",
        image: postresImage,
        description: "Tarta de coco rallado",
        price: "$170"
      },
      {
        id: 44,
        name: "Lemon Pie",
        image: postresImage,
        description: "Lemon pie con merengue italiano",
        price: "$220"
      },
      {
        id: 45,
        name: "Tarta Pasta Frola",
        image: PastaFrolaImage,
        description: "Tarta pasta frola con dulce de membrillo",
        price: "$150"
      },
      {
        id: 46,
        name: "Tarta Mix de Frutas",
        image: postresImage,
        description: "Tarta mix de frutas variadas",
        price: "$210"
      },
      {
        id: 47,
        name: "Tarta Valeria",
        image: postresImage,
        description: "Tarta valeria especial",
        price: "$240"
      }
    ]
  },
  {
    id: 5,
    name: "Sandwiches de Miga",
    image: sandwichesImage,
    description: "Los clásicos sándwiches de miga con rellenos gourmet",
    badge: "Especialidad",
    products: [
      {
        id: 48,
        name: "Sand de Miga - Unidad",
        image: sandwichesImage,
        description: "Sándwich de miga individual con rellenos variados",
        price: "$120"
      },
      {
        id: 49,
        name: "Sand de Miga - Docena",
        image: sandwichesImage,
        description: "Docena de sándwiches de miga con rellenos variados",
        price: "$1200"
      },
      {
        id: 50,
        name: "Todas las Variedades",
        image: sandwichesImage,
        description: "Variedad completa de sándwiches de miga",
        price: "Consultar"
      },
      {
        id: 51,
        name: "Promociones",
        image: sandwichesImage,
        description: "Promociones especiales en sándwiches de miga",
        price: "Consultar"
      }
    ]
  },
  {
    id: 6,
    name: "Especiales",
    image: especialesImage,
    description: "Productos únicos y servicios especiales",
    badge: "Edición Limitada",
    products: [
      {
        id: 52,
        name: "Servicio de Lunch 1 Docena (2 personas)",
        image: especialesImage,
        description: "Servicio de lunch para 2 personas con 1 docena de sándwiches",
        price: "$1500"
      },
      {
        id: 53,
        name: "Servicio de Lunch 5 Docenas (10 personas)",
        image: especialesImage,
        description: "Servicio de lunch para 10 personas con 5 docenas de sándwiches",
        price: "$6000"
      },
      {
        id: 54,
        name: "Rosca de Pascua",
        image: especialesImage,
        description: "Rosca de Pascua tradicional",
        price: "$300"
      },
      {
        id: 55,
        name: "Panettone",
        image: especialesImage,
        description: "Panettone italiano tradicional",
        price: "$400"
      },
      {
        id: 56,
        name: "Pastelitos",
        image: PastelitosImage,
        description: "Pastelitos tradicionales argentinos",
        price: "$80"
      }
    ]
  }
];

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof productCategories[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryClick = (category: typeof productCategories[0]) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brot-cream to-brot-pink">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-brot-brown-dark mb-3 sm:mb-4">
            Nuestras Categorías
          </h2>
          <p className="text-base sm:text-xl text-brot-brown max-w-2xl mx-auto">
            Explora cada categoría para descubrir todos nuestros productos artesanales
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {productCategories.map((category) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm overflow-hidden cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              <div className="relative bg-white/70 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 sm:h-64 object-contain transition-transform duration-500"
                />
                {category.badge && (
                  <Badge className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-brot-gold text-brot-cream font-semibold text-xs sm:text-sm">
                    {category.badge}
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brot-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-3 sm:p-6">
                <div className="mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-xl font-bold text-brot-brown-dark group-hover:text-brot-gold transition-colors leading-tight mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm sm:text-base text-brot-brown">
                    {category.description}
                  </p>
                </div>
                <div className="text-sm text-brot-brown/70">
                  {category.products.length} productos disponibles
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <ProductModal 
          category={selectedCategory}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default ProductsSection;