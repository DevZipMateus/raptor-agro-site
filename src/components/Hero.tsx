import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-drone.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-overlay-dark" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
            Raptor Drones Agrícolas
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-white/95 font-light animate-fade-in">
            Soluções tecnológicas completas para a agricultura de precisão
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl animate-fade-in">
            Comercialização de drones agrícolas XAG, assistência técnica especializada, manutenção, mapeamento de lavouras e formação de pilotos. Voando alto junto com o agro!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg-primary text-lg px-8"
            >
              <Phone className="mr-2" size={20} />
              Entre em contato
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="bg-white/10 border-white/60 text-white hover:bg-accent hover:text-accent-foreground hover:border-accent text-lg px-8"
            >
              <Mail className="mr-2" size={20} />
              Solicite um orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
