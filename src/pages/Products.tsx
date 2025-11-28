import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import productBread from "@/assets/product-bread.jpg";
import productCookies from "@/assets/product-cookies.jpg";
import productSweets from "@/assets/product-sweets.jpg";

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
        name: "Bauru 120g",
        description: "Pão de forma especial de 120g, ideal para lanches",
        image: "/Produtos kroning/Produtos/Pães /BAURU 120G.jpg",
      },
      {
        name: "Bauru 80g",
        description: "Pão de forma tradicional de 80g",
        image: "/Produtos kroning/Produtos/Pães /BAURU 80G.png",
      },
      {
        name: "Bauruzinho",
        description: "Pãozinho pequeno perfeito para lanche rápido",
        image: "/Produtos kroning/Produtos/Pães /BAURUZINHO.png",
      },
      {
        name: "Broa",
        description: "Pão tradicional de fubá, sabor caseiro",
        image: "/Produtos kroning/Produtos/Pães /BROA.png",
      },
      {
        name: "Brotinho",
        description: "Pãozinho francês em tamanho reduzido",
        image: "/Produtos kroning/Produtos/Pães /BROTINHO.png",
      },
      {
        name: "Cacetinho",
        description: "Pão alongado crocante, tradicional gaúcho",
        image: "/Produtos kroning/Produtos/Pães /CACETINHO.png",
      },
      {
        name: "Cachorro Quente",
        description: "Pão macio especial para hot dog",
        image: "/Produtos kroning/Produtos/Pães /CACHORRO QUENTE.png",
      },
      {
        name: "Cachorro Quente 80g",
        description: "Pão para hot dog em tamanho individual",
        image: "/Produtos kroning/Produtos/Pães /CACHORRO QUENTE 80G.png",
      },
      {
        name: "Pão de Centeio",
        description: "Pão escuro com sabor marcante de centeio",
        image: "/Produtos kroning/Produtos/Pães /CENTEIO.png",
      },
      {
        name: "Cuca Forma Sabores",
        description: "Cuca tradicional em forma com diversos sabores",
        image: "/Produtos kroning/Produtos/Pães /CUCA FORMA SABORES.png",
      },
      {
        name: "Cuca Recheada",
        description: "Cuca artesanal com recheios especiais",
        image: "/Produtos kroning/Produtos/Pães /CUCA RECHEADA.png",
      },
      {
        name: "Cuca Tradicional",
        description: "Cuca clássica com farofa crocante",
        image: "/Produtos kroning/Produtos/Pães /CUCA TRADICIONAL.png",
      },
      {
        name: "Fofinho",
        description: "Pão macio e leve, ideal para o café",
        image: "/Produtos kroning/Produtos/Pães /FOFINHO.png",
      },
      {
        name: "Hambúrguer",
        description: "Pão especial para hambúrguer artesanal",
        image: "/Produtos kroning/Produtos/Pães /HAMBURGUER.png",
      },
      {
        name: "Mini Hambúrguer",
        description: "Pãozinho para mini hambúrguer e sliders",
        image: "/Produtos kroning/Produtos/Pães /MINI HAMBURGUER.png",
      },
      {
        name: "Pão D'água",
        description: "Pão tradicional com casca crocante",
        image: "/Produtos kroning/Produtos/Pães /PÃO DÀGUA.png",
      },
      {
        name: "Sanduíche",
        description: "Pão de forma perfeito para sanduíches",
        image: "/Produtos kroning/Produtos/Pães /SANDUICHE.png",
      },
      {
        name: "Torta Fria",
        description: "Base para torta salgada",
        image: "/Produtos kroning/Produtos/Pães /TORTA FRIA.png",
      },
    ],
    bolachas: [
      {
        name: "Amanteigado",
        description: "Biscoito delicado que derrete na boca",
        image: "/Produtos kroning/Produtos/Bolachas /AMANTEIGADO.jpeg",
      },
      {
        name: "Biscoito Salgado",
        description: "Crocante e saboroso para acompanhar café",
        image: "/Produtos kroning/Produtos/Bolachas /BISCOITO SALGADO.jpeg",
      },
      {
        name: "Coração de Mel com Chocolate",
        description: "Biscoito de mel em formato de coração com cobertura de chocolate",
        image: "/Produtos kroning/Produtos/Bolachas /CORAÇÃO DE MEL C_ CHOCOLATE.jpeg",
      },
      {
        name: "Dentinhos",
        description: "Biscoito crocante em formato tradicional",
        image: "/Produtos kroning/Produtos/Bolachas /DENTINHOS.jpeg",
      },
      {
        name: "Folhada Doce",
        description: "Massa folhada crocante e levemente adocicada",
        image: "/Produtos kroning/Produtos/Bolachas /FOLHADA DOCE.jpeg",
      },
      {
        name: "Mel com Coco",
        description: "Biscoito de mel com toque de coco ralado",
        image: "/Produtos kroning/Produtos/Bolachas /MEL COM COCO.jpeg",
      },
      {
        name: "Mel com Chocolate",
        description: "Biscoito de mel coberto com chocolate",
        image: "/Produtos kroning/Produtos/Bolachas /MEL C_ CHOCOLATE.jpeg",
      },
      {
        name: "Mel Melado",
        description: "Biscoito de mel com acabamento melado",
        image: "/Produtos kroning/Produtos/Bolachas /MEL MELADO.jpeg",
      },
      {
        name: "Mel Pintado",
        description: "Biscoito de mel decorado artesanalmente",
        image: "/Produtos kroning/Produtos/Bolachas /MEL PINTADO.jpeg",
      },
      {
        name: "Natalina",
        description: "Biscoito especial decorado para o Natal",
        image: "/Produtos kroning/Produtos/Bolachas /NATALINA.jpeg",
      },
      {
        name: "Palito de Coco",
        description: "Biscoito alongado com sabor de coco",
        image: "/Produtos kroning/Produtos/Bolachas /PALITO DE COCO.jpeg",
      },
      {
        name: "Palito Doce",
        description: "Biscoito em formato de palito, levemente doce",
        image: "/Produtos kroning/Produtos/Bolachas /PALITO DOCE.jpeg",
      },
      {
        name: "Polvilho com Chocolate e Amendoim",
        description: "Biscoito de polvilho com chocolate e amendoim crocante",
        image: "/Produtos kroning/Produtos/Bolachas /POLVILHO COM CHOCOLATE E AMENDOIM.jpeg",
      },
      {
        name: "Polvilho com Chocolate",
        description: "Biscoito de polvilho com gotas de chocolate",
        image: "/Produtos kroning/Produtos/Bolachas /POLVILHO COM CHOCOLATE.jpeg",
      },
      {
        name: "Polvilho com Goiabada",
        description: "Biscoito de polvilho recheado com goiabada",
        image: "/Produtos kroning/Produtos/Bolachas /POLVILHO COM GOIABADA.jpeg",
      },
      {
        name: "Polvilho",
        description: "Biscoito de polvilho tradicional mineiro",
        image: "/Produtos kroning/Produtos/Bolachas /POLVILHO_.jpeg",
      },
      {
        name: "Rosquinha Glacê",
        description: "Rosquinha com cobertura de glacê",
        image: "/Produtos kroning/Produtos/Bolachas /ROSQUINHA GLACÊ.jpeg",
      },
      {
        name: "Salgadinho",
        description: "Biscoito salgado crocante",
        image: "/Produtos kroning/Produtos/Bolachas /SALGADINHO.jpeg",
      },
    ],
  };

  const renderCategory = (title: string, id: string, items: typeof products.paes) => (
    <section id={id} className="mb-20 scroll-mt-24">
      <div className="mb-12 animate-fade-in">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">{title}</h2>
        <div className="h-1 w-24 bg-secondary rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {items.map((product, index) => (
          <div
            key={index}
            className="group bg-card rounded-xl overflow-hidden shadow-medium hover-lift animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="aspect-square overflow-hidden bg-muted">
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
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">Nossos Produtos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossa linha completa de produtos. Tudo feito com ingredientes selecionados e muito carinho da nossa
            familia para a sua.
          </p>
        </div>

        {renderCategory("Pães", "paes", products.paes)}
        {renderCategory("Bolachas", "bolachas", products.bolachas)}
      </div>
    </div>
  );
};

export default Products;
