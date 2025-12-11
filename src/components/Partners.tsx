import xagLogo from "@/assets/partner-xag.png";
import timberLogo from "@/assets/partner-timber.png";
import buffaloLogo from "@/assets/partner-buffalo.png";
import jrLogo from "@/assets/partner-jr.png";

const Partners = () => {
  return (
    <section id="partners" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Nossos parceiros
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Trabalhamos com as melhores marcas do mercado para oferecer soluções de excelência
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="bg-background rounded-lg p-4 sm:p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow min-h-[120px] sm:min-h-[150px]">
            <img
              src={xagLogo}
              alt="XAG"
              className="max-h-16 sm:max-h-20 w-auto object-contain"
            />
          </div>
          <div className="bg-background rounded-lg p-4 sm:p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow min-h-[120px] sm:min-h-[150px]">
            <img
              src={timberLogo}
              alt="Timber Consórcio"
              className="max-h-16 sm:max-h-20 w-auto object-contain"
            />
          </div>
          <div className="bg-background rounded-lg p-4 sm:p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow min-h-[120px] sm:min-h-[150px]">
            <img
              src={buffaloLogo}
              alt="Buffalo Motores & Acoplados"
              className="max-h-[84px] sm:max-h-[104px] w-auto object-contain"
            />
          </div>
          <div className="bg-background rounded-lg p-4 sm:p-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow min-h-[120px] sm:min-h-[150px]">
            <img
              src={jrLogo}
              alt="JR Soluções"
              className="max-h-16 sm:max-h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
