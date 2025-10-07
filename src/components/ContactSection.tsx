import ContactForm from "@/components/ContactForm";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="kontakt" ref={ref as React.RefObject<HTMLElement>} className={`py-24 bg-section-light section-fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lad os optimere jeres arbejdsgange
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Kontakt os for en uforpligtende samtale om, hvordan automatisering kan frigøre tid 
            og skabe værdi i jeres virksomhed.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
