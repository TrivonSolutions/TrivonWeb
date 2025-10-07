import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, FileText, Plug } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Workflow,
    title: "Workflow automatisering",
    description: "Optimer processer og eliminer manuelle opgaver med intelligente automatiseringsløsninger.",
  },
  {
    icon: FileText,
    title: "Data & dokumenthåndtering",
    description: "AI, der kan læse, forstå og strukturere dokumenter automatisk.",
  },
  {
    icon: Plug,
    title: "Integration & systemudvikling",
    description: "Vi bygger løsninger, der taler sammen - CRM, e-signatur, ERP og meget mere.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="services" ref={ref as React.RefObject<HTMLElement>} className={`py-24 bg-section-light section-fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Vores services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-xl hover:scale-105 transition-all duration-300 bg-card"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
