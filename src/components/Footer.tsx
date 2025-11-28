import logoKroning from "@/assets/logo-kroning.png";
import wheatFooter from "@/assets/wheat-footer.png";
import instagramIcon from "@/assets/instagram-icon.png";
import facebookIcon from "@/assets/facebook-icon.png";

const Footer = () => {

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#480E0A' }}>
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
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-title-gold transition-all"
            >
              <img src={facebookIcon} alt="Facebook" className="h-7 w-7" />
            </a>
            <a
              href="https://www.instagram.com/padariakroning/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-title-gold transition-all"
            >
              <img src={instagramIcon} alt="Instagram" className="h-7 w-7" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-white/80 text-sm font-body">
            ©{new Date().getFullYear()} . Desenvolvido por{" "}
            <a 
              href="https://lp.montesite.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D69C6C] hover:text-white transition-colors"
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
