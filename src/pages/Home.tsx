import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import logoKroning from "@/assets/logo-kroning.png";
import heroBreadBasket from "@/assets/hero-bread-basket.png";
import heroCoxinhas from "@/assets/hero-coxinhas.png";
import sectionDivider from "@/assets/section-divider.svg";
import kroningProducts from "@/assets/kroning-products.png";
import bakeryCookies from "@/assets/bakery-cookies.jpg";
const Home = () => {
  return <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[75vh] overflow-hidden bg-gradient-to-b from-[#3D1F0F] via-[#5C2E14] to-[#7A3E1A]">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Filtro colorido nas cores do site + overlay escuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D1F0F]/80 via-[#5C2E14]/70 to-[#7A3E1A]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />

        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center z-20">
          <div className="text-center logo-entrance mb-12">
            <img src={logoKroning} alt="Logo Padaria Artesanal" className="w-72 md:w-96 lg:w-[450px] xl:w-[500px] mx-auto drop-shadow-2xl" />
          </div>
          
        </div>
        
        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-30">
          <ChevronDown className="h-8 w-8 text-title-gold" />
        </div>
      </section>

      {/* Section Divider with Product Images */}
      <div className="relative -mt-32 md:-mt-24 mb-[-4px]">
        {/* Layered SVG Effect */}
        <div className="relative w-full leading-[0] block scale-[2] md:scale-[1.8] overflow-hidden">
          {/* Layer 1 - Background (15% opacity, displaced up) */}
          <img 
            src={sectionDivider} 
            alt="" 
            className="w-full h-auto block absolute top-0 left-0 opacity-15 -translate-y-6"
            aria-hidden="true"
          />
          {/* Layer 2 - Middle (30% opacity, slightly displaced) */}
          <img 
            src={sectionDivider} 
            alt="" 
            className="w-full h-auto block absolute top-0 left-0 opacity-30 -translate-y-3"
            aria-hidden="true"
          />
          {/* Layer 3 - Front (100% opacity, main divider) */}
          <img 
            src={sectionDivider} 
            alt="" 
            className="w-full h-auto block relative"
          />
        </div>
        
        {/* Product Images - Positioned at the divider line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-10">
          <div className="container mx-auto px-4 flex justify-center md:justify-between items-center">
            {/* Bread Basket - Single Image - Hidden on mobile */}
            <div className="hidden md:block relative animate-fade-in" style={{ animationDelay: "1s" }}>
              <img 
                src={heroBreadBasket} 
                alt="Pães Artesanais" 
                className="h-[250px] lg:h-[350px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Coxinhas - Single Image - Centered on mobile */}
            <div className="relative animate-fade-in" style={{ animationDelay: "1.2s" }}>
              <img 
                src={heroCoxinhas} 
                alt="Coxinhas" 
                className="h-[250px] lg:h-[350px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-20 container mx-auto px-4 -mt-1">
        <div className="text-center mb-12 animate-fade-in px-4">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-primary hover:text-primary transition-none">
            Qualidade e Tradição na Sua Mesa
          </h2>
        </div>

        <div className="flex justify-center animate-fade-in mb-12" style={{ animationDelay: "0.2s" }}>
          <img 
            src={kroningProducts} 
            alt="Produtos Kroning" 
            className="w-full max-w-5xl h-auto object-contain"
          />
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link to="/produtos">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Ver Todos os Produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bakeryCookies})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Faça seu Pedido Agora
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp ou visite nossa vitrine online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/5553984086150?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-0 font-semibold shadow-lg hover:shadow-xl transition-all">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chama no WhatsApp
              </Button>
            </a>
            <Link to="/vitrine">
              <Button size="lg" variant="outline" className="bg-card hover:bg-card/90 text-primary border-2 border-primary font-semibold shadow-lg hover:shadow-xl transition-all">
                Ver Vitrine Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;