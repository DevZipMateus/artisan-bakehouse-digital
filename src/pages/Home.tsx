import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoKroning from "@/assets/logo-kroning.png";
import heroBreadBasket from "@/assets/hero-bread-basket.png";
import heroCoxinhas from "@/assets/hero-coxinhas.png";
import sectionDivider from "@/assets/section-divider.svg";
import bakeryCookies from "@/assets/bakery-cookies.jpg";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import wheatPattern from "@/assets/wheat-pattern-bg.png";
import parallaxBreads from "@/assets/parallax-breads.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const bolachasImages = [
  { src: "/Produtos kroning/Produtos/Bolachas /AMANTEIGADO.jpeg", alt: "Amanteigado" },
  { src: "/Produtos kroning/Produtos/Bolachas /BISCOITO SALGADO.jpeg", alt: "Biscoito Salgado" },
  { src: "/Produtos kroning/Produtos/Bolachas /CORAÇÃO DE MEL C_ CHOCOLATE.jpeg", alt: "Coração de Mel com Chocolate" },
  { src: "/Produtos kroning/Produtos/Bolachas /DENTINHOS.jpeg", alt: "Dentinhos" },
  { src: "/Produtos kroning/Produtos/Bolachas /FOLHADA DOCE.jpeg", alt: "Folhada Doce" },
  { src: "/Produtos kroning/Produtos/Bolachas /MEL COM COCO.jpeg", alt: "Mel com Coco" },
  { src: "/Produtos kroning/Produtos/Bolachas /MEL C_ CHOCOLATE.jpeg", alt: "Mel com Chocolate" },
  { src: "/Produtos kroning/Produtos/Bolachas /MEL MELADO.jpeg", alt: "Mel Melado" },
  { src: "/Produtos kroning/Produtos/Bolachas /MEL PINTADO.jpeg", alt: "Mel Pintado" },
  { src: "/Produtos kroning/Produtos/Bolachas /NATALINA.jpeg", alt: "Natalina" },
  { src: "/Produtos kroning/Produtos/Bolachas /PALITO DE COCO.jpeg", alt: "Palito de Coco" },
  { src: "/Produtos kroning/Produtos/Bolachas /PALITO DOCE.jpeg", alt: "Palito Doce" },
  { src: "/Produtos kroning/Produtos/Bolachas /POLVILHO COM CHOCOLATE E AMENDOIM.jpeg", alt: "Polvilho com Chocolate e Amendoim" },
  { src: "/Produtos kroning/Produtos/Bolachas /POLVILHO COM CHOCOLATE.jpeg", alt: "Polvilho com Chocolate" },
  { src: "/Produtos kroning/Produtos/Bolachas /POLVILHO COM GOIABADA.jpeg", alt: "Polvilho com Goiabada" },
  { src: "/Produtos kroning/Produtos/Bolachas /POLVILHO_.jpeg", alt: "Polvilho" },
  { src: "/Produtos kroning/Produtos/Bolachas /ROSQUINHA GLACÊ.jpeg", alt: "Rosquinha Glacê" },
  { src: "/Produtos kroning/Produtos/Bolachas /SALGADINHO.jpeg", alt: "Salgadinho" },
];
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
            <img src={logoKroning} alt="Logo Padaria Artesanal" className="w-72 md:w-96 lg:w-[360px] xl:w-[400px] 2xl:w-[500px] mx-auto drop-shadow-2xl" />
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
          {/* Bread Basket - Left Side */}
          <div className="hidden md:block absolute left-8 lg:left-16 xl:left-24 top-1/2 animate-slide-in-left" 
               style={{ animationDelay: "0.8s" }}>
            <img 
              src={heroBreadBasket} 
              alt="Pães Artesanais" 
              className="h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px] 2xl:h-[300px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Coxinhas - Right Side (Centered on mobile) */}
          <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 lg:right-16 xl:right-24 top-1/2 md:animate-slide-in-right animate-fade-in" 
               style={{ animationDelay: "1s" }}>
            <img 
              src={heroCoxinhas} 
              alt="Coxinhas" 
              className="h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px] 2xl:h-[300px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-20 container mx-auto px-4 -mt-1">
        <div className="text-center mb-12 animate-fade-in px-4">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-[#480E0A] hover:text-[#480E0A] transition-none">
            Qualidade e Tradição na Sua Mesa
          </h2>
        </div>

        <div className="w-full max-w-6xl mx-auto animate-fade-in mb-12" style={{ animationDelay: "0.2s" }}>
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4 text-center">
                        <p className="font-semibold text-[#480E0A]">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
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
      <section className="py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary hover:text-primary transition-none mb-6">
            Faça seu Pedido Agora
          </h2>
          <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp ou visite nossa vitrine online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/5553984086150?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-transparent hover:bg-transparent border-0 font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-110 px-6 py-3 group flex items-center gap-3">
                <img 
                  src={whatsappIcon} 
                  alt="WhatsApp" 
                  className="h-14 w-14 md:h-16 md:w-16 object-cover transition-transform group-hover:rotate-6"
                />
                <span className="text-primary text-lg md:text-xl font-bold">Chama no WhatsApp</span>
              </Button>
            </a>
            <Link to="/vitrine">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Ver Vitrine Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Image Section - Before Footer */}
      <section className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${parallaxBreads})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white drop-shadow-2xl animate-fade-in">
              Produtos de qualidade, e com a tradição de mais de uma década
            </h2>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;