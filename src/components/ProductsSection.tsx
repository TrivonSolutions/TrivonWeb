import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, ScanLine, RefreshCw, FileInput, Mail, Database } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    icon: FileCheck,
    title: "AutoContract AI",
    description: "Automatisk generering af købsaftaler ud fra dokumenter med intelligent AI-analyse.",
  },
  {
    icon: ScanLine,
    title: "DocScan",
    description: "OCR-værktøj til datatræk fra PDF'er og billeder med høj præcision.",
  },
  {
    icon: RefreshCw,
    title: "FlowSync",
    description: "Forbinder systemer og skaber digitalt workflow på tværs af platforme.",
  },
  {
    icon: FileInput,
    title: "SmartForms",
    description: "Dynamiske AI-formularer der tilpasser sig brugerens input intelligent.",
  },
  {
    icon: Mail,
    title: "MailBot",
    description: "AI-drevet mail-sortering og autosvar der sparer tid i din indbakke.",
  },
  {
    icon: Database,
    title: "DataHub",
    description: "Centraliseret datahåndtering med automatisk synkronisering på tværs af systemer.",
  },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="produkter" ref={ref as React.RefObject<HTMLElement>} className={`py-24 bg-background section-fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Vores produkter
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-xl hover:scale-105 transition-all duration-300 bg-card group cursor-pointer"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
