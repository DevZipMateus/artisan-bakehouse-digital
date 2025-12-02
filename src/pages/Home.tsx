import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoKroning from "@/assets/logo-kroning.png";
import heroBreadBasket from "@/assets/hero-bread-basket.png";
import heroCoxinhas from "@/assets/hero-coxinhas.png";

import bakeryCookies from "@/assets/bakery-cookies.jpg";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import wheatPattern from "@/assets/wheat-pattern-bg.png";
import parallaxBreads from "@/assets/parallax-breads.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const bolachasImages = [
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/AMANTEIGADO.png", alt: "Amanteigado" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/BISCOITO SALGADO.png", alt: "Biscoito Salgado" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/CORAÇÃO DE MEL C_ CHOCOLATE.png", alt: "Coração de Mel com Chocolate" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/DENTINHOS.png", alt: "Dentinhos" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/FOLHADA DOCE.png", alt: "Folhada Doce" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/MEL COM COCO.png", alt: "Mel com Coco" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/MEL C_ CHOCOLATE.png", alt: "Mel com Chocolate" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/MEL MELADO.png", alt: "Mel Melado" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/MEL PINTADO.png", alt: "Mel Pintado" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/NATALINA.png", alt: "Natalina" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/PALITO DE COCO.png", alt: "Palito de Coco" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/PALITO DOCE.png", alt: "Palito Doce" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/POLVILHO COM CHOCOLATE E AMENDOIM.png", alt: "Polvilho com Chocolate e Amendoim" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/POLVILHO COM CHOCOLATE.png", alt: "Polvilho com Chocolate" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/POLVILHO COM GOIABADA.png", alt: "Polvilho com Goiabada" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/POLVILHO_.png", alt: "Polvilho" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/ROSQUINHA GLACÊ.png", alt: "Rosquinha Glacê" },
  { src: "/Produtos kroning/Produtos/Bolachas/BOLACHAS SEM FUNDO/SALGADINHO.png", alt: "Salgadinho" },
];
const Home = () => {
  return <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[65vh] md:h-[75vh] overflow-hidden bg-gradient-to-b from-[#3D1F0F] via-[#5C2E14] to-[#7A3E1A]">
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
          <div className="text-center logo-entrance mb-8 md:mb-12">
            <img src={logoKroning} alt="Logo Padaria Artesanal" className="w-56 sm:w-72 md:w-96 lg:w-[360px] xl:w-[400px] 2xl:w-[500px] mx-auto drop-shadow-2xl" />
          </div>
          
        </div>
        
        {/* Scroll Down Arrow */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-30">
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-title-gold" />
        </div>
      </section>

      {/* Product Images Section */}
      <div className="relative py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 flex justify-center items-center gap-4 sm:gap-8 md:gap-16">
          {/* Bread Basket - Left Side */}
          <div className="hidden md:block animate-slide-in-left" 
               style={{ animationDelay: "0.8s" }}>
            <img 
              src={heroBreadBasket} 
              alt="Pães Artesanais" 
              className="h-[180px] md:h-[200px] lg:h-[220px] xl:h-[240px] 2xl:h-[280px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Mobile - Alternating Images */}
          <div className="md:hidden animate-fade-in relative" 
               style={{ animationDelay: "1s" }}>
            <img 
              src={heroCoxinhas} 
              alt="Coxinhas" 
              className="h-[140px] xs:h-[160px] sm:h-[180px] w-auto object-contain drop-shadow-2xl absolute inset-0 m-auto transition-opacity duration-1000"
              style={{ 
                animation: "mobileImageSwitch 6s infinite",
                opacity: 1
              }}
            />
            <img 
              src={heroBreadBasket} 
              alt="Pães Artesanais" 
              className="h-[140px] xs:h-[160px] sm:h-[180px] w-auto object-contain drop-shadow-2xl transition-opacity duration-1000"
              style={{ 
                animation: "mobileImageSwitch 6s infinite 3s",
                opacity: 0
              }}
            />
          </div>
          
          {/* Desktop - Coxinhas Right Side */}
          <div className="hidden md:block md:animate-slide-in-right" 
               style={{ animationDelay: "1s" }}>
            <img 
              src={heroCoxinhas} 
              alt="Coxinhas" 
              className="md:h-[200px] lg:h-[220px] xl:h-[240px] 2xl:h-[280px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-12 sm:py-16 md:py-20 container mx-auto px-4 -mt-1">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in px-2 sm:px-4 pt-12 xs:pt-8 sm:pt-4 md:pt-0">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#480E0A] hover:text-[#480E0A] transition-none leading-tight">
            Qualidade e Tradição na Sua Mesa
          </h2>
        </div>

        <div className="w-full max-w-6xl mx-auto animate-fade-in mb-8 sm:mb-12" style={{ animationDelay: "0.2s" }}>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {bolachasImages.map((image, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1 sm:p-2">
                    <div className="rounded-xl overflow-hidden bg-[#EDE8DE]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-48 sm:h-56 md:h-64 object-contain p-3 sm:p-4"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link to="/produtos">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base px-4 sm:px-6">
              Ver Todos os Produtos
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${bakeryCookies})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-primary hover:text-primary transition-none mb-4 sm:mb-6">
            Faça seu Pedido Agora
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Entre em contato pelo WhatsApp ou visite nossa vitrine online
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a href="https://wa.me/5553984086150?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-transparent hover:bg-transparent border-0 font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-110 px-4 sm:px-6 py-2 sm:py-3 group flex items-center gap-2 sm:gap-3">
                <img 
                  src={whatsappIcon} 
                  alt="WhatsApp" 
                  className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 object-cover transition-transform group-hover:rotate-6"
                />
                <span className="text-primary text-base sm:text-lg md:text-xl font-bold">Chama no WhatsApp</span>
              </Button>
            </a>
            <Link to="/vitrine">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base px-4 sm:px-6">
                Ver Vitrine Online
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Image Section - Before Footer */}
      <section className="relative h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${parallaxBreads})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl animate-fade-in leading-tight">
              Produtos de qualidade, e com a tradição de mais de uma década
            </h2>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;