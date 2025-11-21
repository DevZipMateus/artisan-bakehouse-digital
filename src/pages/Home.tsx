import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoKroning from "@/assets/logo-kroning.png";
import heroBreadBasket from "@/assets/hero-bread-basket.png";
import heroCoxinhas from "@/assets/hero-coxinhas.png";
import productBread from "@/assets/product-bread.jpg";
import productCookies from "@/assets/product-cookies.jpg";
import productSweets from "@/assets/product-sweets.jpg";

const Home = () => {
  const categories = [
    {
      title: "Pães Artesanais",
      description: "Feitos diariamente com ingredientes selecionados",
      image: productBread,
      link: "/produtos#paes",
    },
    {
      title: "Bolachas",
      description: "Receitas tradicionais com aquele sabor de casa",
      image: productCookies,
      link: "/produtos#bolachas",
    },
    {
      title: "Doces & Massas",
      description: "Sobremesas irresistíveis para adoçar seu dia",
      image: productSweets,
      link: "/produtos#doces",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[650px] md:h-[750px] overflow-hidden bg-gradient-to-b from-[#2d1810] via-[#3d2418] to-[#4a2e1f]">
        {/* Product Images - Left Side */}
        <div className="absolute left-0 bottom-0 w-1/4 hidden lg:block animate-fade-in" style={{ animationDelay: "1s" }}>
          <img 
            src={heroBreadBasket} 
            alt="Pães Artesanais" 
            className="w-full h-auto object-contain"
          />
        </div>
        
        {/* Product Images - Right Side */}
        <div className="absolute right-0 bottom-0 w-1/4 hidden lg:block animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <img 
            src={heroCoxinhas} 
            alt="Coxinhas" 
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <div className="text-center logo-entrance">
            <img 
              src={logoKroning} 
              alt="Logo Padaria Artesanal" 
              className="w-48 md:w-64 lg:w-80 mx-auto mb-8"
            />
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-card leading-tight">
              Qualidade e Tradição na Sua Mesa
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a
              href="https://wa.me/5511987654321?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white border-0 font-semibold">
                Chama no WhatsApp
              </Button>
            </a>
            <Link to="/produtos">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-card/10 backdrop-blur-sm border-card hover:bg-card/20 text-card group">
                Ver Produtos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-secondary" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossas categorias de produtos artesanais, feitos com carinho e os melhores ingredientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group block animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-medium hover-lift bg-card">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Faça seu Pedido Agora
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp e garanta produtos fresquinhos para você e sua família
          </p>
          <a
            href="https://wa.me/5511987654321?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="bg-card hover:bg-card/90 text-primary border-0 font-semibold">
              Chama no WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
