import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="om-os" ref={ref as React.RefObject<HTMLElement>} className={`py-24 bg-background section-fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Om os
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hos Trivon er vi specialister i at skabe intelligente IT-løsninger, der automatiserer komplekse arbejdsgange.
            Vi kombinerer teknisk ekspertise med forståelse for forretningsprocesser, så vores kunder kan arbejde hurtigere, 
            mere effektivt og med færre fejl. Vi hjælper organisationer med at forbinde deres systemer, eliminere gentagne 
            manuelle opgaver og udnytte data fuldt ud.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
