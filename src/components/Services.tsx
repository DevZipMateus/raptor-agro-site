import { ShoppingCart, Wrench, GraduationCap, Map, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import commerceImg from "@/assets/p100-pro-1.jpg";
import maintenanceImg from "@/assets/p100-1.jpg";
import mappingImg from "@/assets/r150-3.jpg";
import trainingImg from "@/assets/v50-6.jpg";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Comercialização de drones XAG",
      description: "Revenda autorizada de drones agrícolas XAG, referência mundial em tecnologia de pulverização e mapeamento para o agronegócio.",
      image: commerceImg,
    },
    {
      icon: Wrench,
      title: "Assistência técnica e manutenção",
      description: "Suporte técnico especializado, manutenção preventiva e corretiva, além de fornecimento de peças originais para garantir máximo desempenho.",
      image: maintenanceImg,
    },
    {
      icon: Map,
      title: "Mapeamento de lavouras",
      description: "Análise detalhada com imagens de alta resolução para identificação de problemas, otimização de aplicações e gestão eficiente da propriedade.",
      image: mappingImg,
    },
    {
      icon: GraduationCap,
      title: "Cursos de formação",
      description: "Capacitação completa para pilotos de drones agrícolas, com certificação e treinamento prático para operação segura e eficiente.",
      image: trainingImg,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Nossos serviços
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Soluções completas em tecnologia para o campo, com atendimento personalizado e suporte técnico especializado
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg-primary transition-all duration-300 border border-border"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl p-6 sm:p-8 max-w-2xl mx-auto border border-primary/20">
            <Instagram className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
              Acompanhe nosso trabalho
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6">
              Confira conteúdos exclusivos, dicas e novidades sobre drones agrícolas no nosso Instagram
            </p>
            <Button asChild size="lg" className="gap-2">
              <a
                href="https://instagram.com/raptor_dronesbrasil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
                Seguir @raptor_dronesbrasil
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
