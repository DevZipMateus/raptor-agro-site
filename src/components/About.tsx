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
              Tudo começou com <strong>Renato Weber</strong>, produtor rural com experiência prática em pulverizações utilizando diferentes modelos de drones. Ao lado do irmão <strong>Rafael Weber</strong>, ambos perceberam o potencial de um equipamento realmente confiável que pudesse atender as necessidades do campo com precisão e eficiência.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Foi então que Renato convidou <strong>Humberto César Borges</strong>, profissional com ampla experiência comercial no setor agrícola, para juntos iniciarem um novo projeto: a revenda de drones da marca XAG.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A partir dessa parceria, unindo conhecimento técnico, vivência de campo e visão de mercado, nasceu a ideia de criar uma empresa sólida e inovadora — e assim surgiu a <strong>Raptor Drones Agrícolas</strong>.
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-lg text-foreground font-medium">
                O nome Raptor representa o voo firme e confiante de uma ave de rapina, símbolo de força, precisão e visão, as mesmas qualidades que a empresa busca entregar em cada serviço e equipamento oferecido aos produtores rurais.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="text-center p-5 sm:p-6 bg-background rounded-lg shadow-md hover:shadow-lg-primary transition-shadow">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-muted-foreground">
                Experiência real no campo unida a conhecimento comercial especializado
              </p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg shadow-md hover:shadow-lg-primary transition-shadow">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Precisão</h3>
              <p className="text-muted-foreground">
                Tecnologia de ponta para agricultura de precisão e sustentável
              </p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg shadow-md hover:shadow-lg-primary transition-shadow">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resultados</h3>
              <p className="text-muted-foreground">
                Eficiência operacional e redução de custos para o produtor rural
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
