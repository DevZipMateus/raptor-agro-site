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
import r150_1 from "@/assets/r150-1.jpg";
import r150_2 from "@/assets/r150-2.jpg";
import r150_3 from "@/assets/r150-3.jpg";
import r150_4 from "@/assets/r150-4.jpg";
import r150_5 from "@/assets/r150-5.jpg";
import r150_6 from "@/assets/r150-6.jpg";
import p100_1 from "@/assets/p100-1.jpg";
import p100_2 from "@/assets/p100-2.jpg";
import p100_3 from "@/assets/p100-3.jpg";
import p100_4 from "@/assets/p100-4.jpg";
import p100_5 from "@/assets/p100-5.jpg";
import p100_6 from "@/assets/p100-6.jpg";
import p100_7 from "@/assets/p100-7.jpg";
import p100_8 from "@/assets/p100-8.jpg";
import p100_9 from "@/assets/p100-9.jpg";
import p150_1 from "@/assets/p150-1.jpg";
import p150_2 from "@/assets/p150-2.jpg";
import p150_3 from "@/assets/p150-3.jpg";
import p150_4 from "@/assets/p150-4.jpg";
import p150_5 from "@/assets/p150-5.jpg";
import p150_6 from "@/assets/p150-6.jpg";
import p150_7 from "@/assets/p150-7.jpg";
import p150_8 from "@/assets/p150-8.jpg";
import p150_9 from "@/assets/p150-9.jpg";
import p150_10 from "@/assets/p150-10.jpg";

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

  const r150Images = [
    { src: r150_1, alt: "R150 - Pulverização em pomar de pitaya" },
    { src: r150_2, alt: "R150 - Sistema de aplicação agrícola" },
    { src: r150_3, alt: "R150 - Operação em campo" },
    { src: r150_4, alt: "R150 - Tecnologia de precisão" },
    { src: r150_5, alt: "R150 - Equipamento profissional" },
    { src: r150_6, alt: "R150 - Drone agrícola em ação" },
  ];

  const p100Images = [
    { src: p100_1, alt: "P100 PRO - Sistema RevoCast" },
    { src: p100_2, alt: "P100 PRO - Tecnologia RevoCast" },
    { src: p100_3, alt: "P100 PRO - Sistema RevoSpray" },
    { src: p100_4, alt: "P100 PRO - RevoSpray em operação" },
    { src: p100_5, alt: "P100 PRO - Aplicação RevoSpray" },
    { src: p100_6, alt: "P100 PRO - RevoSpray avançado" },
    { src: p100_7, alt: "P100 PRO - Performance RevoSpray" },
    { src: p100_8, alt: "P100 PRO - Eficiência RevoSpray" },
    { src: p100_9, alt: "P100 PRO - Drone agrícola profissional" },
  ];

  const p150Images = [
    { src: p150_1, alt: "P150 - Sistema RevoCast em operação" },
    { src: p150_2, alt: "P150 - RevoSpray em campo" },
    { src: p150_3, alt: "P150 - Tecnologia RevoSpray" },
    { src: p150_4, alt: "P150 - Aplicação de precisão" },
    { src: p150_5, alt: "P150 - RevoSpray profissional" },
    { src: p150_6, alt: "P150 - Performance avançada" },
    { src: p150_7, alt: "P150 - Eficiência operacional" },
    { src: p150_8, alt: "P150 - Drone em operação" },
    { src: p150_9, alt: "P150 - Pulverização agrícola" },
    { src: p150_10, alt: "P150 - Drone agrícola avançado" },
  ];

  return (
    <section id="drone-models" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Nossos modelos
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Conheça nossa linha completa de drones agrícolas com tecnologia de ponta
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="p100-pro" className="bg-background rounded-lg mb-3 sm:mb-4 border-border">
              <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-lg sm:text-xl font-semibold text-foreground hover:text-primary hover:no-underline">
                P100 PRO +
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6">
                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <p className="text-sm sm:text-base text-muted-foreground">
                      O P100 PRO + é um equipamento de alta performance para pulverização agrícola, 
                      combinando tecnologia de ponta com eficiência operacional excepcional.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {p100ProImages.map((image, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="r150" className="bg-background rounded-lg mb-4 border-border">
              <AccordionTrigger className="px-6 text-xl font-semibold text-foreground hover:text-primary hover:no-underline">
                R150
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <p className="text-muted-foreground">
                      O R150 é um drone agrícola robusto e eficiente, ideal para pulverização de precisão 
                      em diversos tipos de culturas, incluindo pomares e áreas de difícil acesso.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {r150Images.map((image, index) => (
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

                  <div className="mt-6">
                    <video
                      className="w-full rounded-lg shadow-lg"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/videos/r150.mp4" type="video/mp4" />
                      Seu navegador não suporta a reprodução de vídeos.
                    </video>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="p100" className="bg-background rounded-lg mb-4 border-border">
              <AccordionTrigger className="px-6 text-xl font-semibold text-foreground hover:text-primary hover:no-underline">
                P100 PRO
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <p className="text-muted-foreground">
                      O P100 PRO combina os sistemas RevoCast e RevoSpray para oferecer máxima versatilidade 
                      e eficiência em operações agrícolas, com tecnologia de ponta para aplicações de precisão.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {p100Images.map((image, index) => (
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

            <AccordionItem value="p150" className="bg-background rounded-lg mb-4 border-border">
              <AccordionTrigger className="px-6 text-xl font-semibold text-foreground hover:text-primary hover:no-underline">
                P150
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <p className="text-muted-foreground">
                      O P150 é um drone agrícola de alta capacidade, equipado com sistemas RevoCast e RevoSpray 
                      avançados, ideal para operações de grande escala com máxima eficiência e precisão.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {p150Images.map((image, index) => (
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
