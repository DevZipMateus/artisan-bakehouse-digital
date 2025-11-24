import { Instagram, Facebook } from "lucide-react";
import logoKroning from "@/assets/logo-kroning.png";
import wheatFooter from "@/assets/wheat-footer.png";

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden" style={{ backgroundColor: '#480E0A' }}>
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
            ©{new Date().getFullYear()} . Criado por Vagner Design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
