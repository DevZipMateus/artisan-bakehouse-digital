import { Instagram, Facebook } from "lucide-react";
import { useEffect, useState } from "react";
import logoKroning from "@/assets/logo-kroning.png";
import wheatFooter from "@/assets/wheat-footer.png";
import breadsBackground from "@/assets/footer-breads-bg.jpg";

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#480E0A' }}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${breadsBackground})`,
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 0.15
        }}
      />
      <img 
        src={wheatFooter} 
        alt="" 
        className="absolute left-0 top-0 h-full w-auto object-cover opacity-20"
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <img 
            src={logoKroning} 
            alt="Kroning Mercado & Padaria" 
            className="h-32 w-auto"
          />
          
          {/* Texto Redes Sociais */}
          <p className="text-white text-lg font-body">
            Siga-nos nas redes sociais
          </p>
          
          {/* Ícones Redes Sociais */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/mercadoepadariakroning"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-header-red hover:bg-title-gold hover:text-white transition-all"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/padariakroning/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-header-red hover:bg-title-gold hover:text-white transition-all"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-white/80 text-sm font-body">
            ©{new Date().getFullYear()} . Desenvolvido por{" "}
            <a 
              href="https://lp.montesite.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-title-gold hover:text-white transition-colors"
            >
              MonteSite
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
