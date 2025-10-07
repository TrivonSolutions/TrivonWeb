import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import trivonLogo from "@/assets/trivon-logo.png";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if navbar should be visible
      if (currentScrollY < 10) {
        setIsVisible(true);
        setIsScrolled(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
        setIsScrolled(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    if (!isHomepage) {
      // Navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomepage 
          ? "bg-background/95 backdrop-blur-sm shadow-md" 
          : isMobileMenuOpen 
            ? "bg-background/95 backdrop-blur-sm md:bg-transparent" 
            : "bg-transparent"
      } ${isVisible || !isHomepage ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center"
          >
            <img 
              src={trivonLogo} 
              alt="Trivon Logo" 
              className="h-10 md:h-14 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`transition-colors ${
                isScrolled || !isHomepage ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
              }`}
            >
              Forside
            </button>
            <button
              onClick={() => scrollToSection("om-os")}
              className={`transition-colors ${
                isScrolled || !isHomepage ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
              }`}
            >
              Om os
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors ${
                isScrolled || !isHomepage ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("produkter")}
              className={`transition-colors ${
                isScrolled || !isHomepage ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
              }`}
            >
              Produkter
            </button>
            <button
              onClick={() => {
                navigate('/mod-teamet');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`transition-colors ${
                isScrolled || !isHomepage ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
              }`}
            >
              Mød Teamet
            </button>
            <Button onClick={() => scrollToSection("kontakt")} size="sm">
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isMobileMenuOpen 
                ? "text-foreground" 
                : isScrolled || !isHomepage 
                  ? "text-foreground" 
                  : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button
              onClick={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Forside
            </button>
            <button
              onClick={() => scrollToSection("om-os")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Om os
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("produkter")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Produkter
            </button>
            <button
              onClick={() => {
                navigate('/mod-teamet');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Mød Teamet
            </button>
            <Button onClick={() => scrollToSection("kontakt")} size="sm" className="w-full">
              Kontakt
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
