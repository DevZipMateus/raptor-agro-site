import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

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
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white animate-fade-in">
            Raptor Drones Agrícolas
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-white/95 font-light animate-fade-in">
            Soluções tecnológicas completas para a agricultura de precisão
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-white/90 max-w-2xl animate-fade-in leading-relaxed">
            Comercialização de drones agrícolas XAG, assistência técnica especializada, manutenção, mapeamento de lavouras e formação de pilotos. Voando alto junto com o agro!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg-primary text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
            >
              <Phone className="mr-2" size={18} />
              Entre em contato
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="bg-white/10 border-white/60 text-white hover:bg-accent hover:text-accent-foreground hover:border-accent text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
            >
              <Mail className="mr-2" size={18} />
              Solicite um orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
