import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  badge?: string;
}

interface ProductCategory {
  id: number;
  name: string;
  image: string;
  description: string;
  badge: string | null;
  products: ProductItem[];
}

interface ProductModalProps {
  category: ProductCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ category, isOpen, onClose }: ProductModalProps) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  if (!category) return null;

  const currentProduct = category.products[currentProductIndex];
  const totalProducts = category.products.length;

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % totalProducts);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + totalProducts) % totalProducts);
  };

  const goToProduct = (index: number) => {
    setCurrentProductIndex(index);
  };

  const handleClose = () => {
    setCurrentProductIndex(0);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-4xl bg-card/95 backdrop-blur-md border-brot-gold/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brot-brown-dark flex items-center gap-3">
            {category.name}
            {category.badge && (
              <Badge className="bg-brot-gold text-brot-cream font-semibold">
                {category.badge}
              </Badge>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Carrusel de imágenes */}
          <div className="relative">
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg bg-white">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-full h-full object-contain transition-all duration-500"
              />
              
              {/* Botones de navegación */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 border-brot-gold/30"
                onClick={prevProduct}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 border-brot-gold/30"
                onClick={nextProduct}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Indicadores de puntos */}
            <div className="flex justify-center mt-4 space-x-2">
              {category.products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProduct(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProductIndex
                      ? "bg-brot-gold scale-125"
                      : "bg-brot-brown/30 hover:bg-brot-brown/50"
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Información del producto actual */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <h3 className="text-2xl font-bold text-brot-brown-dark">
                {currentProduct.name}
              </h3>
              {currentProduct.badge && (
                <Badge className="bg-brot-gold text-brot-cream font-semibold">
                  {currentProduct.badge}
                </Badge>
              )}
            </div>
            
            <p className="text-brot-brown text-lg leading-relaxed max-w-2xl mx-auto">
              {currentProduct.description}
            </p>
            
            <div className="text-3xl font-bold text-brot-gold">
              {currentProduct.price}
            </div>
          </div>
          
          {/* Contador de productos */}
          <div className="text-center text-sm text-brot-brown/70">
            Producto {currentProductIndex + 1} de {totalProducts}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;