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
import v50_1 from "@/assets/v50-1.jpg";
import v50_2 from "@/assets/v50-2.jpg";
import v50_3 from "@/assets/v50-3.jpg";
import v50_4 from "@/assets/v50-4.jpg";
import v50_5 from "@/assets/v50-5.jpg";
import v50_6 from "@/assets/v50-6.jpg";
import v50_7 from "@/assets/v50-7.jpg";
import v50_8 from "@/assets/v50-8.jpg";
import v50_9 from "@/assets/v50-9.jpg";
import v50_10 from "@/assets/v50-10.jpg";

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

  const v50Images = [
    { src: v50_1, alt: "V50 - Detalhe do produto" },
    { src: v50_2, alt: "V50 - Sistema RevoCast" },
    { src: v50_3, alt: "V50 - Tecnologia RevoCast" },
    { src: v50_4, alt: "V50 - RevoCast em operação" },
    { src: v50_5, alt: "V50 - Sistema RevoSpray" },
    { src: v50_6, alt: "V50 - RevoSpray em campo" },
    { src: v50_7, alt: "V50 - Aplicação RevoSpray" },
    { src: v50_8, alt: "V50 - Performance RevoSpray" },
    { src: v50_9, alt: "V50 - Eficiência RevoSpray" },
    { src: v50_10, alt: "V50 - Drone agrícola avançado" },
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

            <AccordionItem value="v50" className="bg-background rounded-lg mb-4 border-border">
              <AccordionTrigger className="px-6 text-xl font-semibold text-foreground hover:text-primary hover:no-underline">
                V50
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <p className="text-muted-foreground">
                      O V50 é um drone agrícola versátil equipado com os sistemas RevoCast e RevoSpray, 
                      oferecendo soluções completas para pulverização e aplicação de precisão em diversas culturas.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {v50Images.map((image, index) => (
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
