import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const phones = [
    { number: "55999361592", display: "(55) 99936-1592" },
    { number: "55999128830", display: "(55) 99912-8830" },
    { number: "55996627085", display: "(55) 99662-7085" },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Entre em contato
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos prontos para atender você e levar tecnologia de ponta para sua propriedade
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Telefones</h3>
                  <div className="space-y-2">
                    {phones.map((phone, index) => (
                      <a
                        key={index}
                        href={`https://wa.me/${phone.number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">E-mail</h3>
                  <a
                    href="mailto:raptordronesagricolas@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    raptordronesagricolas@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Endereço da loja</h3>
                  <p className="text-muted-foreground">
                    Rua Engenheiro Rogerio Tochetto, 33<br />
                    Nossa Senhora de Lourdes<br />
                    Santa Maria/RS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Horário de funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 08:00 - 19:00<br />
                    Sábado: 08:00 - 12:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Redes sociais</h3>
                  <div className="space-y-2">
                    <a
                      href="https://instagram.com/raptor_dronesbrasil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      @raptor_dronesbrasil
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61584461529092"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                      Raptor Drones Agrícolas
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-hero-gradient rounded-xl p-6 sm:p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Pronto para decolar com o agro?
              </h3>
              <p className="text-white/90 mb-5 sm:mb-6 text-base sm:text-lg">
                Entre em contato conosco e descubra como a tecnologia de drones pode transformar sua produção agrícola.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-white/90 shadow-accent"
              >
                <a href="https://wa.me/55999361592" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
