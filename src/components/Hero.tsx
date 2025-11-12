import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { useRef, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Reiniciar quando chegar a 99% do vídeo
      if (video.currentTime >= video.duration * 0.99) {
        console.log("Reiniciando vídeo via timeUpdate");
        video.currentTime = 0;
        video.play().catch(err => console.error("Erro ao reproduzir:", err));
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    // Fallback: verificar periodicamente
    const interval = setInterval(() => {
      if (video.paused && video.currentTime > 0) {
        console.log("Vídeo pausado detectado, reiniciando...");
        video.currentTime = 0;
        video.play().catch(err => console.error("Erro ao reproduzir:", err));
      }
    }, 1000);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      clearInterval(interval);
    };
  }, []);

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
      <div className="absolute inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onLoadStart={() => console.log("Iniciando carregamento do vídeo...")}
          onCanPlay={() => console.log("Vídeo pronto para reproduzir")}
          onEnded={(e) => {
            console.log("Evento onEnded disparado");
            const video = e.currentTarget as HTMLVideoElement;
            video.currentTime = 0;
            video.play().catch(err => console.error("Erro ao reproduzir no onEnded:", err));
          }}
          onError={(e) => {
            console.error("Erro ao carregar vídeo:", e);
            const video = e.currentTarget as HTMLVideoElement;
            console.error("Video error code:", video.error?.code);
            console.error("Video error message:", video.error?.message);
          }}
        >
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
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
