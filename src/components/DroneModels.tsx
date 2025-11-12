import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import p100Pro1 from "@/assets/p100-pro-1.jpg";
import p100Pro2 from "@/assets/p100-pro-2.jpg";
import p100Pro3 from "@/assets/p100-pro-3.jpg";
import p100Pro4 from "@/assets/p100-pro-4.jpg";
import p100Pro5 from "@/assets/p100-pro-5.jpg";
import p100Pro6 from "@/assets/p100-pro-6.jpg";
import p100Pro7 from "@/assets/p100-pro-7.jpg";
import p100Pro8 from "@/assets/p100-pro-8.jpg";
import p100Pro9 from "@/assets/p100-pro-9.jpg";

const DroneModels = () => {
  const p100ProImages = [
    { src: p100Pro1, alt: "P100 PRO + - Componente de alta performance" },
    { src: p100Pro2, alt: "P100 PRO + - Detalhe técnico" },
    { src: p100Pro3, alt: "P100 PRO + - Sistema de pulverização" },
    { src: p100Pro4, alt: "P100 PRO + - Tecnologia avançada" },
    { src: p100Pro5, alt: "P100 PRO + - Equipamento completo" },
    { src: p100Pro6, alt: "P100 PRO + - Visão geral" },
    { src: p100Pro7, alt: "P100 PRO + - Design inovador" },
    { src: p100Pro8, alt: "P100 PRO + - Especificações" },
    { src: p100Pro9, alt: "P100 PRO + - Performance profissional" },
  ];

  return (
    <section id="drone-models" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos modelos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa linha completa de drones agrícolas com tecnologia de ponta
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="p100-pro" className="bg-background rounded-lg mb-4 border-border">
              <AccordionTrigger className="px-6 text-xl font-semibold text-foreground hover:text-primary hover:no-underline">
                P100 PRO +
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <p className="text-muted-foreground">
                      O P100 PRO + é um equipamento de alta performance para pulverização agrícola, 
                      combinando tecnologia de ponta com eficiência operacional excepcional.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {p100ProImages.map((image, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default DroneModels;
