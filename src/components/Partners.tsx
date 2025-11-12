import xagLogo from "@/assets/partner-xag.png";
import timberLogo from "@/assets/partner-timber.png";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos parceiros
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as melhores marcas do mercado para oferecer soluções de excelência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-background rounded-lg p-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={xagLogo}
              alt="XAG with Timber"
              className="max-h-24 w-auto object-contain"
            />
          </div>
          <div className="bg-background rounded-lg p-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={timberLogo}
              alt="Timber Consórcio"
              className="max-h-24 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
