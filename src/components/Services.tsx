import { ShoppingCart, Wrench, GraduationCap, Map } from "lucide-react";
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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos serviços
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em tecnologia para o campo, com atendimento personalizado e suporte técnico especializado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg-primary transition-all duration-300 border border-border"
            >
              <div className="relative h-64 overflow-hidden">
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
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
