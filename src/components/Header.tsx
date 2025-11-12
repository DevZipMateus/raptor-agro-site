import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
      setIsMobileMenuOpen(false);
    }
  };
  const navItems = [{
    label: "Início",
    id: "hero"
  }, {
    label: "Sobre",
    id: "about"
  }, {
    label: "Serviços",
    id: "services"
  }, {
    label: "Missão",
    id: "mission"
  }, {
    label: "Parceiros",
    id: "partners"
  }, {
    label: "Contato",
    id: "contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Raptor Drones Agrícolas" className="h-28 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-foreground hover:text-primary transition-colors font-medium">
                {item.label}
              </button>)}
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg-primary">
              Fale conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <nav className="md:hidden py-4 border-t border-border">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-medium">
                {item.label}
              </button>)}
            <Button onClick={() => scrollToSection("contact")} className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              Fale conosco
            </Button>
          </nav>}
      </div>
    </header>;
};
export default Header;