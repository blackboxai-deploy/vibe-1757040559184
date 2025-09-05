import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, MapPin, Moon, Sun } from "lucide-react";
import LogoNav from "./LogoNav";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-brot-cream/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <LogoNav height={40} className="h-10" isScrolled={isScrolled} />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('productos')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'text-brot-brown hover:text-brot-gold' 
                    : 'text-white hover:text-brot-gold'
                }`}
              >
                Productos
              </button>
              <button 
                onClick={() => scrollToSection('sucursales')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'text-brot-brown hover:text-brot-gold' 
                    : 'text-white hover:text-brot-gold'
                }`}
              >
                Sucursales
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'text-brot-brown hover:text-brot-gold' 
                    : 'text-white hover:text-brot-gold'
                }`}
              >
                Contacto
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button
              size="sm"
              variant="ghost"
              onClick={toggleDarkMode}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-brot-brown hover:text-brot-gold' 
                  : 'text-white hover:text-brot-gold'
              }`}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button 
              size="sm"
              className="bg-brot-gold text-brot-cream hover:bg-brot-gold-light transition-colors"
              onClick={() => scrollToSection('sucursales')}
            >
              <MapPin className="mr-1 h-4 w-4" />
              Ubicaciones
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-brot-gold text-brot-brown hover:bg-brot-gold hover:text-brot-cream transition-colors"
              asChild
            >
              <a href="https://www.instagram.com/panaderiabrot_mdp" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-1 h-4 w-4" />
                Instagram
              </a>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-brot-brown' : 'text-white'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-brot-cream/95 backdrop-blur-md rounded-lg mt-2">
              <button 
                onClick={() => scrollToSection('productos')}
                className="text-brot-brown hover:text-brot-gold block px-3 py-2 text-base font-medium transition-colors w-full text-left"
              >
                Productos
              </button>
              <button 
                onClick={() => scrollToSection('sucursales')}
                className="text-brot-brown hover:text-brot-gold block px-3 py-2 text-base font-medium transition-colors w-full text-left"
              >
                Sucursales
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-brot-brown hover:text-brot-gold block px-3 py-2 text-base font-medium transition-colors w-full text-left"
              >
                Contacto
              </button>
              <div className="pt-4 pb-2 space-y-2">
                <div className="flex justify-center">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={toggleDarkMode}
                    className="text-brot-brown hover:text-brot-gold transition-colors"
                  >
                    {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                    {isDarkMode ? 'Modo claro' : 'Modo oscuro'}
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    size="sm"
                    className="bg-brot-gold text-brot-cream hover:bg-brot-gold-light transition-colors flex-1"
                    onClick={() => scrollToSection('sucursales')}
                  >
                    <MapPin className="mr-1 h-4 w-4" />
                    Ubicaciones
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="border-brot-gold text-brot-brown hover:bg-brot-gold hover:text-brot-cream transition-colors flex-1"
                    asChild
                  >
                    <a href="https://www.instagram.com/panaderiabrot_mdp" target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-1 h-4 w-4" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;