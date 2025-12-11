import { Users, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center">
            Nossa história
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-8 sm:mb-12" />
          
          <div className="prose prose-lg max-w-none mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              A história da Raptor Drones Agrícolas nasceu da paixão pelo campo e da busca por inovação tecnológica. Tudo começou com os irmãos <strong>Renato Weber</strong> e <strong>Rafael Weber</strong>, produtores rurais há mais de 10 (dez) anos, com ampla experiência na rotina diária de lavoura, e prática em pulverizações agrícolas utilizando diferentes modelos de drones.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Diante das dificuldades encontradas com os pulverizadores terrestres, ambos perceberam o enorme potencial de um equipamento realmente confiável, capaz de atender às necessidades do campo com precisão, eficiência, segurança, com o benefício de trazer lucratividade pela economia que a tecnologia oferece. Com essa visão, os irmãos convidaram o amigo de longa data, <strong>Humberto César Borges</strong>, profissional com sólida trajetória comercial no setor agrícola, para somar conhecimento de mercado ao projeto.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              A união entre experiência prática, vivência de campo e visão estratégica deu origem a uma parceria inovadora: a revenda oficial de drones da marca XAG. Assim, nasceu a <strong>Raptor Drones Agrícolas</strong>, uma empresa construída sobre pilares de confiança, tecnologia e compromisso com o produtor rural. Mais do que vender equipamentos, a Raptor oferece soluções completas: drones agrícolas de última geração, peças originais, assistência técnica especializada, cursos e treinamentos, além de misturadores de calda e geradores de energia.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Com mais de 8 anos de experiência prática no uso de drones em áreas próprias, a Raptor Drones Agrícolas se consolidou como referência em tecnologia agrícola, ajudando produtores a transformar seus resultados e modernizar a gestão de suas lavouras.
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary p-4 sm:p-6 rounded-r-lg">
              <p className="text-base sm:text-lg text-foreground font-medium italic">
                "RAPTOR nasce da união entre o voo firme e confiante de uma ave de rapina, símbolo de força, precisão e visão, e a potência implacável do Tiranossauro Raptor, trazendo para o campo a força da natureza transformada em tecnologia agrícola de última geração. São estas as qualidades que a empresa busca entregar em cada serviço e equipamento oferecido aos produtores rurais."
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="text-center p-5 sm:p-6 bg-background rounded-lg shadow-md hover:shadow-lg-primary transition-shadow">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Experiência real prática de quem vive no campo, unida a conhecimento comercial especializado
              </p>
            </div>
            
            <div className="text-center p-5 sm:p-6 bg-background rounded-lg shadow-md hover:shadow-lg-primary transition-shadow">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Precisão</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Tecnologia de ponta para agricultura de precisão e sustentável, trazida e entregue com o suporte de quem usa e utiliza aquilo que vende
              </p>
            </div>
            
            <div className="text-center p-5 sm:p-6 bg-background rounded-lg shadow-md hover:shadow-lg-primary transition-shadow">
              <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Resultados</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Eficiência operacional e redução de custos para o produtor rural evidenciados em ganho de lucratividade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
