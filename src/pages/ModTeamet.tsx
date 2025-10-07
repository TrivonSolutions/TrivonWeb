import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ModTeamet = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const team = [
    {
      name: "Shaquille",
      role: "Co-Founder & Ansvarlig for udvikling og systemarkitektur",
      description: "Ansvarlig for udvikling, systemarkitektur samt backend og frontend-løsninger.",
      image: "https://via.placeholder.com/300x300?text=Shaquille",
    },
    {
      name: "Oliver",
      role: "Co-Founder & Ansvarlig for tekniske løsninger",
      description: "Ansvarlig for tekniske løsninger, drift og integrationer.",
      image: "https://via.placeholder.com/300x300?text=Oliver",
    },
    {
      name: "Fabian",
      role: "Co-Founder & Ansvarlig for salg og partnerskaber",
      description: "Ansvarlig for salg, markedsføring og udvikling af strategiske partnerskaber.",
      image: "https://via.placeholder.com/300x300?text=Fabian",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            size="sm"
            className="mb-8 transition-transform hover:scale-105"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Tilbage til forsiden
          </Button>

          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Mød Teamet
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bag Trivon står tre passionerede partnere med hver deres ekspertise – sammen skaber vi digitale løsninger, der gør hverdagen lettere for virksomheder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center flex flex-col h-full"
              >
                <div className="mb-6 relative inline-block mx-auto">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl group-hover:shadow-2xl group-hover:border-primary/40 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="px-4 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {member.description}
                  </p>
                  <div className="flex gap-3 justify-center mt-auto">
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                      <Mail className="h-4 w-4 mr-2" />
                      Kontakt
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ModTeamet;
