import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const CookiePolitik = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="mb-6 hover:bg-accent hover:scale-105 transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Tilbage til forsiden
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Cookie-politik
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Hvad er cookies?</h2>
              <p>
                Cookies er små tekstfiler, der gemmes på din computer, tablet eller smartphone, 
                når du besøger en hjemmeside. Cookies bruges til at genkende din enhed og forbedre 
                din brugeroplevelse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Hvorfor bruger vi cookies?</h2>
              <p>Vi bruger cookies til følgende formål:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>At sikre hjemmesidens grundlæggende funktioner</li>
                <li>At huske dine præferencer og indstillinger</li>
                <li>At forbedre hjemmesidens ydeevne og brugeroplevelse</li>
                <li>At indsamle statistik om, hvordan vores hjemmeside bruges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Hvilke typer cookies bruger vi?</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Nødvendige cookies</h3>
                  <p>
                    Disse cookies er essentielle for, at hjemmesiden kan fungere korrekt. De kan ikke 
                    slås fra i vores systemer. De sættes normalt kun som respons på handlinger, du foretager, 
                    såsom at acceptere eller afvise cookies.
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li><strong>cookieConsent:</strong> Husker dit cookievalg (varighed: 1 år)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Funktionelle cookies</h3>
                  <p>
                    Disse cookies gør det muligt for hjemmesiden at huske valg, du træffer, og give 
                    forbedrede og mere personlige funktioner.
                  </p>
                  <p className="italic mt-2">Vi bruger i øjeblikket ikke funktionelle cookies.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Analytiske cookies</h3>
                  <p>
                    Disse cookies hjælper os med at forstå, hvordan besøgende interagerer med vores 
                    hjemmeside, ved at indsamle og rapportere information anonymt.
                  </p>
                  <p className="italic mt-2">Vi bruger i øjeblikket ikke analytiske cookies.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Marketing cookies</h3>
                  <p>
                    Disse cookies bruges til at spore besøgende på tværs af hjemmesider. Formålet er 
                    at vise annoncer, der er relevante og engagerende for den enkelte bruger.
                  </p>
                  <p className="italic mt-2">Vi bruger ikke marketing cookies.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Tredjepartscookies</h2>
              <p>
                Vi deler i øjeblikket ikke data med tredjeparter gennem cookies. Hvis dette ændres, 
                vil vi opdatere denne politik tilsvarende.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Sådan håndterer du cookies</h2>
              <p>
                Du kan til enhver tid ændre eller trække dit samtykke tilbage via cookie-banneret, 
                som vises første gang du besøger hjemmesiden.
              </p>
              <p>
                Du kan også slette eller blokere cookies via din browsers indstillinger. Bemærk dog, 
                at hvis du sletter eller blokerer cookies, kan visse dele af hjemmesiden muligvis ikke 
                fungere optimalt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Sådan sletter du cookies i din browser</h2>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Google Chrome</h3>
                  <p>Indstillinger → Privatliv og sikkerhed → Slet browserdata → Cookies og andre webstedsdata</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">Mozilla Firefox</h3>
                  <p>Indstillinger → Privatliv og sikkerhed → Cookies og webstedsdata → Ryd data</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">Safari</h3>
                  <p>Præferencer → Privatliv → Administrer webstedsdata → Fjern alle</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">Microsoft Edge</h3>
                  <p>Indstillinger → Cookies og webstedstilladelser → Administrer og slet cookies og webstedsdata</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Opdateringer af cookie-politikken</h2>
              <p>
                Vi kan opdatere denne cookie-politik fra tid til anden for at afspejle ændringer i 
                vores praksis eller af andre driftsmæssige, juridiske eller regulatoriske årsager. 
                Vi opfordrer dig til at gennemgå denne side regelmæssigt for at være informeret om, 
                hvordan vi bruger cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Kontakt</h2>
              <p>
                Hvis du har spørgsmål til vores brug af cookies, er du velkommen til at kontakte os:
              </p>
              <p className="mt-2">
                Trivon<br />
                Email: <a href="mailto:kontakt@trivon.dk" className="text-primary hover:underline">kontakt@trivon.dk</a><br />
                Telefon: +45 12 34 56 78
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Yderligere information</h2>
              <p>
                Læs mere om vores generelle behandling af personoplysninger i vores{" "}
                <Link to="/privatlivspolitik" className="text-primary hover:underline">privatlivspolitik</Link>.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              Sidst opdateret: Januar 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolitik;
