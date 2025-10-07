import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Privatlivspolitik = () => {
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
            Privatlivspolitik
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduktion</h2>
              <p>
                Hos Trivon tager vi dit privatliv alvorligt. Denne privatlivspolitik beskriver, hvordan vi indsamler, 
                bruger og beskytter dine personoplysninger, når du besøger vores hjemmeside eller bruger vores tjenester.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Dataansvarlig</h2>
              <p>
                Trivon<br />
                CVR: 12345678<br />
                Testvej 123<br />
                2000 Frederiksberg<br />
                Email: kontakt@trivon.dk<br />
                Telefon: +45 12 34 56 78
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Hvilke personoplysninger indsamler vi?</h2>
              <p>Vi indsamler følgende typer af personoplysninger:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kontaktoplysninger:</strong> Navn, e-mailadresse, telefonnummer</li>
                <li><strong>Tekniske data:</strong> IP-adresse, browsertype, enhedstype</li>
                <li><strong>Brugsdata:</strong> Hvordan du interagerer med vores hjemmeside</li>
                <li><strong>Kommunikation:</strong> Beskeder du sender til os via kontaktformularer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Formål med databehandling</h2>
              <p>Vi bruger dine personoplysninger til følgende formål:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>At besvare dine henvendelser og forespørgsler</li>
                <li>At levere og forbedre vores tjenester</li>
                <li>At sende dig relevant information om vores produkter og løsninger</li>
                <li>At overholde lovgivningsmæssige krav</li>
                <li>At analysere og forbedre vores hjemmeside</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Retsgrundlag for behandling</h2>
              <p>
                Vi behandler dine personoplysninger baseret på følgende retsgrundlag:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Samtykke:</strong> Når du giver os dit udtrykkelige samtykke</li>
                <li><strong>Kontraktopfyldelse:</strong> For at opfylde en aftale med dig</li>
                <li><strong>Legitim interesse:</strong> For at varetage vores legitime forretningsinteresser</li>
                <li><strong>Lovkrav:</strong> For at overholde lovgivningsmæssige forpligtelser</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Deling af personoplysninger</h2>
              <p>
                Vi deler ikke dine personoplysninger med tredjeparter, medmindre:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Du har givet dit samtykke hertil</li>
                <li>Det er nødvendigt for at levere vores tjenester</li>
                <li>Vi er forpligtet til det ved lov</li>
                <li>Det er nødvendigt for at beskytte vores rettigheder</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Opbevaring af data</h2>
              <p>
                Vi opbevarer dine personoplysninger kun så længe, det er nødvendigt for de formål, 
                de er indsamlet til, eller som krævet af lovgivningen. Som udgangspunkt sletter vi 
                dine oplysninger efter 5 år, medmindre andet er påkrævet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Dine rettigheder</h2>
              <p>Du har følgende rettigheder i forhold til dine personoplysninger:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Indsigtsret:</strong> Du kan anmode om indsigt i de oplysninger, vi har om dig</li>
                <li><strong>Rettelse:</strong> Du kan få rettet ukorrekte eller ufuldstændige oplysninger</li>
                <li><strong>Sletning:</strong> Du kan anmode om sletning af dine oplysninger</li>
                <li><strong>Begrænsning:</strong> Du kan anmode om begrænsning af behandlingen</li>
                <li><strong>Dataportabilitet:</strong> Du kan få dine data udleveret i et struktureret format</li>
                <li><strong>Indsigelse:</strong> Du kan gøre indsigelse mod vores behandling</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Cookies</h2>
              <p>
                Vi bruger cookies til at forbedre din oplevelse på vores hjemmeside. 
                Læs mere i vores <Link to="/cookie-politik" className="text-primary hover:underline">cookie-politik</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Sikkerhed</h2>
              <p>
                Vi implementerer passende tekniske og organisatoriske sikkerhedsforanstaltninger 
                for at beskytte dine personoplysninger mod uautoriseret adgang, ændring, videregivelse 
                eller ødelæggelse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Ændringer til denne politik</h2>
              <p>
                Vi forbeholder os retten til at opdatere denne privatlivspolitik. Væsentlige ændringer 
                vil blive kommunikeret på vores hjemmeside.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Kontakt</h2>
              <p>
                Hvis du har spørgsmål til vores behandling af personoplysninger, er du velkommen til 
                at kontakte os på <a href="mailto:kontakt@trivon.dk" className="text-primary hover:underline">kontakt@trivon.dk</a> eller 
                +45 12 34 56 78.
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

export default Privatlivspolitik;
