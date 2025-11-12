import p100Pro1 from "@/assets/p100-pro-1.jpg";
import p100Pro2 from "@/assets/p100-pro-2.jpg";
import p100Pro3 from "@/assets/p100-pro-3.jpg";
import p100Pro4 from "@/assets/p100-pro-4.jpg";
import p100Pro5 from "@/assets/p100-pro-5.jpg";
import p100Pro6 from "@/assets/p100-pro-6.jpg";
import p100Pro7 from "@/assets/p100-pro-7.jpg";
import p100Pro8 from "@/assets/p100-pro-8.jpg";
import p100Pro9 from "@/assets/p100-pro-9.jpg";

const P100Pro = () => {
  const images = [
    { src: p100Pro1, alt: "P100 Pro - Componente de alta performance" },
    { src: p100Pro2, alt: "P100 Pro - Detalhe técnico" },
    { src: p100Pro3, alt: "P100 Pro - Sistema de pulverização" },
    { src: p100Pro4, alt: "P100 Pro - Tecnologia avançada" },
    { src: p100Pro5, alt: "P100 Pro - Equipamento completo" },
    { src: p100Pro6, alt: "P100 Pro - Visão geral" },
    { src: p100Pro7, alt: "P100 Pro - Design inovador" },
    { src: p100Pro8, alt: "P100 Pro - Especificações" },
    { src: p100Pro9, alt: "P100 Pro - Performance profissional" },
  ];

  return (
    <section id="p100-pro" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            P100 Pro
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça o P100 Pro, equipamento de alta performance para pulverização agrícola com tecnologia de ponta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default P100Pro;
