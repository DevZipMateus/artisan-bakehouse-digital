import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import productBread from "@/assets/product-bread.jpg";
import productCookies from "@/assets/product-cookies.jpg";
import productSweets from "@/assets/product-sweets.jpg";
import SectionDivider from "@/components/SectionDivider";

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const products = {
    paes: [
      {
        name: "Pão Francês",
        description: "Clássico crocante por fora e macio por dentro",
        image: productBread,
      },
      {
        name: "Pão Integral",
        description: "Nutritivo e saboroso, rico em fibras",
        image: productBread,
      },
      {
        name: "Pão de Forma",
        description: "Perfeito para o café da manhã",
        image: productBread,
      },
      {
        name: "Ciabatta",
        description: "Massa leve e aerada, ideal para sanduíches",
        image: productBread,
      },
      {
        name: "Baguete",
        description: "Tradicional pão francês alongado e crocante",
        image: productBread,
      },
      {
        name: "Pão de Centeio",
        description: "Sabor marcante e textura única",
        image: productBread,
      },
    ],
    bolachas: [
      {
        name: "Biscoito de Polvilho",
        description: "Leve e crocante, tradicional mineiro",
        image: productCookies,
      },
      {
        name: "Cookie de Chocolate",
        description: "Gotas de chocolate belga derretido",
        image: productCookies,
      },
      {
        name: "Rosquinha de Coco",
        description: "Doce e aromática, feita com coco fresco",
        image: productCookies,
      },
      {
        name: "Biscoito Amanteigado",
        description: "Delicado e que derrete na boca",
        image: productCookies,
      },
      {
        name: "Sequilhos",
        description: "Tradicional bolacha caseira de maisena",
        image: productCookies,
      },
      {
        name: "Biscoito de Aveia",
        description: "Crocante e saudável com mel",
        image: productCookies,
      },
    ],
    doces: [
      {
        name: "Croissant",
        description: "Folhado artesanal com manteiga francesa",
        image: productSweets,
      },
      {
        name: "Pão de Mel",
        description: "Recheado com doce de leite cremoso",
        image: productSweets,
      },
      {
        name: "Sonho",
        description: "Tradicional sonho recheado com creme",
        image: productSweets,
      },
      {
        name: "Carolina",
        description: "Massa folhada com creme de confeiteiro",
        image: productSweets,
      },
      {
        name: "Torta de Morango",
        description: "Massa crocante com creme e morangos frescos",
        image: productSweets,
      },
      {
        name: "Brownie",
        description: "Denso e cremoso com pedaços de chocolate",
        image: productSweets,
      },
    ],
  };

  const renderCategory = (title: string, id: string, items: typeof products.paes, showDivider: boolean = false) => (
    <>
      {showDivider && (
        <div className="relative -mb-1 -mx-4">
          <SectionDivider 
            color="#FFFFFF" 
            flip={false}
            showDepthEffect={true}
          />
        </div>
      )}
      <section 
        id={id} 
        className={`mb-20 scroll-mt-24 ${showDivider ? 'relative -mt-16 pt-20 pb-12 -mx-4 px-4 bg-white' : ''}`}
      >
      <div className="mb-12 animate-fade-in">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
          {title}
        </h2>
        <div className="h-1 w-24 bg-secondary rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((product, index) => (
          <div
            key={index}
            className="group bg-card rounded-xl overflow-hidden shadow-medium hover-lift animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
            Nossos Produtos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossa linha completa de produtos artesanais. Tudo feito com ingredientes
            selecionados e muito carinho, do forno para sua mesa.
          </p>
        </div>

        {renderCategory("Pães Artesanais", "paes", products.paes, false)}
        {renderCategory("Bolachas", "bolachas", products.bolachas, true)}
        {renderCategory("Doces & Massas", "doces", products.doces, true)}
      </div>
    </div>
  );
};

export default Products;
