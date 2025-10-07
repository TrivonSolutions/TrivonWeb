import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Vi bruger cookies til at forbedre din oplevelse. Læs vores{" "}
            <Link 
              to="/privatlivspolitik" 
              className="text-primary hover:underline"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              privatlivspolitik
            </Link>.
          </p>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={handleDecline} size="sm">
              Afvis
            </Button>
            <Button onClick={handleAccept} size="sm">
              Accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
