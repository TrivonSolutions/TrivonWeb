import { Mail, Phone, Linkedin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Om Trivon</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Vi er specialister i workflow og automation løsninger, der hjælper virksomheder med at optimere deres processer og øge produktiviteten gennem innovative teknologiske løsninger.
            </p>
            <p className="text-sm text-gray-500">CVR: 12345678</p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white transition-colors inline-block"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Forside
                </Link>
              </li>
              <li>
                <Link 
                  to="/mod-teamet" 
                  className="text-gray-400 hover:text-white transition-colors inline-block"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Mød Teamet
                </Link>
              </li>
              <li>
                <Link 
                  to="/privatlivspolitik" 
                  className="text-gray-400 hover:text-white transition-colors inline-block"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                <Link 
                  to="/handelsbetingelser" 
                  className="text-gray-400 hover:text-white transition-colors inline-block"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Handelsbetingelser
                </Link>
              </li>
              <li>
                <Link 
                  to="/cookie-politik" 
                  className="text-gray-400 hover:text-white transition-colors inline-block"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Cookie-politik
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Kontakt</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:kontakt@trivon.dk" className="hover:text-white transition-colors">
                  kontakt@trivon.dk
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+4512345678" className="hover:text-white transition-colors">
                  +45 12 34 56 78
                </a>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-3">Følg os</p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Trivon - Workflow & Automation Solutions. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
