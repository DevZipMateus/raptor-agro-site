import { Eye, Target, Heart } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visão, missão e valores
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-background rounded-xl p-8 shadow-md hover:shadow-lg-primary transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Visão</h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Ser líder na transformação da agricultura por meio de tecnologia de drones, promovendo práticas agrícolas sustentáveis e aumentando a eficiência na produção de alimentos.
            </p>
          </div>

          <div className="bg-background rounded-xl p-8 shadow-md hover:shadow-lg-primary transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Missão</h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Desenvolver e fornecer soluções inovadoras com drones que auxiliem os agricultores a monitorar, gerenciar e otimizar suas lavouras, contribuindo para uma agricultura mais produtiva e sustentável.
            </p>
          </div>

          <div className="bg-background rounded-xl p-8 shadow-md hover:shadow-lg-primary transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Valores</h3>
            <ul className="text-muted-foreground leading-relaxed space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Inovação:</strong> Compromisso constante com a pesquisa e desenvolvimento de tecnologias avançadas</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Sustentabilidade:</strong> Práticas que respeitam o meio ambiente</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Excelência:</strong> Qualidade em produtos e serviços</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
