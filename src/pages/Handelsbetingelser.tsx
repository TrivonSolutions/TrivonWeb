import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Handelsbetingelser = () => {
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
            Handelsbetingelser
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Generelt</h2>
              <p>
                Disse handelsbetingelser gælder for alle aftaler om levering af ydelser mellem 
                Trivon (CVR: 12345678) og kunden. Ved accept af et tilbud eller gennemførelse af en 
                bestilling accepterer kunden disse handelsbetingelser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Tilbud og aftaleindgåelse</h2>
              <p>
                Alle tilbud er uforpligtende, medmindre andet er angivet. En aftale anses for indgået, 
                når kunden har accepteret vores tilbud skriftligt, eller når vi har bekræftet en ordre.
              </p>
              <p>
                Tilbud er gyldige i 30 dage fra udstedelsesdato, medmindre andet er angivet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Priser</h2>
              <p>
                Alle priser er angivet i danske kroner (DKK) og er ekskl. moms, medmindre andet er angivet.
              </p>
              <p>
                Vi forbeholder os retten til at justere priser ved væsentlige ændringer i omkostningsgrundlaget, 
                herunder valutakurser, råvarepriser eller lovgivningsmæssige ændringer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Betaling</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Betalingsbetingelser er netto 14 dage, medmindre andet er aftalt</li>
                <li>Ved forsinket betaling kan vi opkræve morarenter på 1,5% pr. måned</li>
                <li>Ved væsentlig forsinket betaling forbeholder vi os retten til at standse arbejdet</li>
                <li>Kunden kan ikke tilbageholde betaling på grund af reklamationer eller modkrav</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Levering</h2>
              <p>
                Leveringstider er vejledende og ikke bindende, medmindre andet er udtrykkeligt aftalt. 
                Forsinkelser giver ikke kunden ret til annullering eller erstatning.
              </p>
              <p>
                Vi forbeholder os retten til delleveringer, medmindre andet er aftalt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Kundens forpligtelser</h2>
              <p>Kunden forpligter sig til at:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Stille nødvendige oplysninger og materialer til rådighed rettidigt</li>
                <li>Sikre at alle nødvendige godkendelser og licenser er på plads</li>
                <li>Samarbejde aktivt om projektets gennemførelse</li>
                <li>Acceptere eller afvise leverancer inden for aftalt tid</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Immaterielle rettigheder</h2>
              <p>
                Alle immaterielle rettigheder til løsninger, kode, design og dokumentation udviklet 
                af Trivon forbliver vores ejendom, medmindre andet er skriftligt aftalt.
              </p>
              <p>
                Kunden erhverver en ikke-eksklusiv brugsret til det leverede materiale til det aftalte formål.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Fortrolighed</h2>
              <p>
                Begge parter forpligter sig til at behandle alle fortrolige oplysninger modtaget i 
                forbindelse med samarbejdet fortroligt, både under og efter aftalens løbetid.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Garanti og reklamation</h2>
              <p>
                Vi garanterer, at vores ydelser udføres i overensstemmelse med god skik og aftalte 
                specifikationer. Reklamationer skal fremsættes skriftligt uden ugrundet ophold og 
                senest 14 dage efter, at fejlen er eller burde være opdaget.
              </p>
              <p>
                Ved berettiget reklamation vil vi efter vores valg afhjælpe fejlen, omlevere eller 
                give prisafslag. Vi påtager os ikke ansvar for fejl, der skyldes kundens forhold.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Ansvarsbegrænsning</h2>
              <p>
                Vores samlede erstatningsansvar er begrænset til det beløb, der er betalt for den 
                konkrete ydelse, som har givet anledning til kravet, dog maksimalt 100.000 DKK.
              </p>
              <p>
                Vi er ikke ansvarlige for indirekte tab, herunder driftstab, tabt avance, tab af data 
                eller goodwill, medmindre tabet er forårsaget af grov uagtsomhed eller forsæt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Force majeure</h2>
              <p>
                Vi er ikke ansvarlige for manglende eller forsinket opfyldelse af vores forpligtelser, 
                hvis dette skyldes force majeure, herunder men ikke begrænset til krig, naturkatastrofer, 
                strejke, lockout, brand eller lovindgreb.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Opsigelse og ophævelse</h2>
              <p>
                Løbende aftaler kan opsiges med 3 måneders varsel til udgangen af en måned, medmindre 
                andet er aftalt.
              </p>
              <p>
                Ved væsentlig misligholdelse kan den ikke-misligholdende part ophæve aftalen med øjeblikkelig virkning.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Lovvalg og værneting</h2>
              <p>
                Aftalen er underlagt dansk ret. Eventuelle tvister skal søges løst i mindelighed. 
                Kan enighed ikke opnås, skal tvisten afgøres ved de danske domstole med Københavns 
                Byret som værneting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Kontaktoplysninger</h2>
              <p>
                Trivon<br />
                CVR: 12345678<br />
                Testvej 123<br />
                2000 Frederiksberg<br />
                Email: kontakt@trivon.dk<br />
                Telefon: +45 12 34 56 78
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

export default Handelsbetingelser;
