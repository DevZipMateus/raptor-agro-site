import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <img src={logo} alt="Raptor Drones Agrícolas" className="h-28 mb-4" />
            <h3 className="text-lg font-semibold mb-4 text-foreground">Raptor Drones Agrícolas</h3>
            <p className="text-muted-foreground mb-4">
              Soluções tecnológicas completas para a agricultura de precisão. Voando alto junto com o agro!
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61584461529092" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/raptor_dronesbrasil" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("hero")} className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href="https://wa.me/55999361592" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">(55) 99936-1592</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href="mailto:raptordronesagricolas@gmail.com" className="hover:text-primary transition-colors">raptordronesagricolas@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Rua Engenheiro Rogerio Tochetto, 33, Nossa Senhora de Lourdes, Santa Maria/RS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Raptor Drones Agrícolas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;