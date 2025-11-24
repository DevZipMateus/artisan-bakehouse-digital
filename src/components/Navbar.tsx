import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import wheatIcon from "@/assets/wheat-icon.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: "Início",
    path: "/"
  }, {
    name: "Produtos",
    path: "/produtos"
  }, {
    name: "Vitrine",
    path: "/vitrine"
  }, {
    name: "Quem Somos",
    path: "/quem-somos"
  }, {
    name: "Contato",
    path: "/contato"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="sticky top-0 z-50 bg-header-red backdrop-blur-sm border-b border-header-red shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Wheat Icon */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={wheatIcon} alt="Wheat Icon" className="h-10 w-10 transition-transform group-hover:scale-110" />
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`font-medium transition-colors relative py-2 ${isActive(link.path) ? "text-white" : "text-title-gold hover:text-white"}`}>
                {link.name}
                {isActive(link.path) && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-title-gold rounded-full" />}
              </Link>)}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative"
          >
            <div className="bg-title-gold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform">
              <span className="text-primary font-display font-semibold text-sm tracking-wider">
                {isMenuOpen ? "FECHAR" : "MENU"}
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={`font-medium py-2 px-4 rounded-lg transition-colors ${isActive(link.path) ? "bg-white/20 text-white" : "text-title-gold hover:bg-white/10 hover:text-white"}`}>
                  {link.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;