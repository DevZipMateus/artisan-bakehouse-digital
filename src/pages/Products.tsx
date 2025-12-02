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
        name: "Pão de Bauru",
        description: "120g | 80g",
        image: "/Produtos kroning/Produtos/Pães /BAURU 120G.jpg",
      },
      {
        name: "Bauruzinho",
        description: "Pacote de 340g com 5 und",
        image: "/Produtos kroning/Produtos/Pães /BAURUZINHO.png",
      },
      {
        name: "Broa",
        description: "500g",
        image: "/Produtos kroning/Produtos/Pães /BROA.png",
      },
      {
        name: "Cacetinho",
        description: "Pacote de 500g com 10 und. (30g cada)",
        image: "/Produtos kroning/Produtos/Pães /CACETINHO.png",
      },
      {
        name: "Cachorro Quente",
        description: "Pacote de 500g com 10 und.",
        image: "/Produtos kroning/Produtos/Pães /CACHORRO QUENTE.png",
      },
      {
        name: "Cachorro Quente 80g",
        description: "80g",
        image: "/Produtos kroning/Produtos/Pães /CACHORRO QUENTE 80G.png",
      },
      {
        name: "Cuca de Sabores",
        description: "Gotas de Chocolate | Chocolate c/ Doce de Leite | Pêssego | Morango | Figo — 500g",
        image: "/Produtos kroning/Produtos/Pães /CUCA FORMA SABORES.png",
      },
      {
        name: "Cuca Alta",
        description: "Chocolate | Doce de Leite | Goiabada — 500g",
        image: "/Produtos kroning/Produtos/Pães /CUCA RECHEADA.png",
      },
      {
        name: "Cuca Tradicional",
        description: "500g",
        image: "/Produtos kroning/Produtos/Pães /CUCA TRADICIONAL.png",
      },
      {
        name: "Pão Fofinho",
        description: "Pacote de 500g com 10 und",
        image: "/Produtos kroning/Produtos/Pães /FOFINHO.png",
      },
      {
        name: "Pão de Hambúrguer",
        description: "60g",
        image: "/Produtos kroning/Produtos/Pães /HAMBURGUER.png",
      },
      {
        name: "Mini Hambúrguer",
        description: "30g",
        image: "/Produtos kroning/Produtos/Pães /MINI HAMBURGUER.png",
      },
      {
        name: "Pão D'água",
        description: "500g",
        image: "/Produtos kroning/Produtos/Pães /PÃO DÀGUA.png",
      },
      {
        name: "Sanduíche",
        description: "500g",
        image: "/Produtos kroning/Produtos/Pães /SANDUICHE.png",
      },
      {
        name: "Torta Fria",
        description: "500g",
        image: "/Produtos kroning/Produtos/Pães /TORTA FRIA.png",
      },
    ],
    bolachas: [
      {
        name: "Bolacha Amanteigada",
        description: "Pacote com 400g",
        image: "/Produtos kroning/Produtos/Bolachas /AMANTEIGADO.jpeg",
      },
      {
        name: "Biscoitos",
        description: "Pacote com 400g",
        image: "/Produtos kroning/Produtos/Bolachas /BISCOITO SALGADO.jpeg",
      },
      {
        name: "Coração de Mel com Chocolate Preto e Branco",
        description: "Pacote com 400g",
        image: "/Produtos kroning/Produtos/Bolachas /CORAÇÃO DE MEL C_ CHOCOLATE.jpeg",
      },
      {
        name: "Dentinhos",
        description: "Sabor Churrasco — Pacote com 200g",
        image: "/Produtos kroning/Produtos/Bolachas /DENTINHOS.jpeg",
      },
      {
        name: "Bolacha Folhada Doce",
        description: "Pacote com 400g",
        image: "/Produtos kroning/Produtos/Bolachas /FOLHADA DOCE.jpeg",
      },
      {
        name: "Bolacha de Mel com Coco",
        description: "Pacote com 400g",
        image: "/Produtos kroning/Produtos/Bolachas /MEL COM COCO.jpeg",
      },
      {
        name: "Bolacha de Mel com Chocolate Preto e Branco",
        description: "Pacote com 300g",
        image: "/Produtos kroning/Produtos/Bolachas /MEL C_ CHOCOLATE.jpeg",
      },
      {
        name: "Bolacha de Mel com Glacê",
        description: "Pacote com 400g",
        image: "/Produtos kroning/Produtos/Bolachas /MEL MELADO.jpeg",
      },
      {
        name: "Bolacha de Mel Pintada com Glacê",
        description: "Pacote com 400g",
        image: "/Produtos kroning/Produtos/Bolachas /MEL PINTADO.jpeg",
      },
      {
        name: "Bolacha Natal",
        description: "Pacote com 400g",
        image: "/Produtos kroning/Produtos/Bolachas /NATALINA.jpeg",
      },
      {
        name: "Bolacha Palito de Coco",
        description: "Pacote com 200g",
        image: "/Produtos kroning/Produtos/Bolachas /PALITO DE COCO.jpeg",
      },
      {
        name: "Bolacha Palito Doce",
        description: "Pacote com 400g",
        image: "/Produtos kroning/Produtos/Bolachas /PALITO DOCE.jpeg",
      },
      {
        name: "Bolacha de Polvilho com Chocolate e Amendoim",
        description: "Pacote com 300g",
        image: "/Produtos kroning/Produtos/Bolachas /POLVILHO COM CHOCOLATE E AMENDOIM.jpeg",
      },
      {
        name: "Bolacha de Polvilho com Chocolate Preto e Branco",
        description: "Pacote com 400g",
        image: "/Produtos kroning/Produtos/Bolachas /POLVILHO COM CHOCOLATE.jpeg",
      },
      {
        name: "Bolacha de Polvilho com Goiabada",
        description: "Pacote com 400g",
        image: "/Produtos kroning/Produtos/Bolachas /POLVILHO COM GOIABADA.jpeg",
      },
      {
        name: "Bolacha de Polvilho Tradicional",
        description: "Pacote com 400g",
        image: "/Produtos kroning/Produtos/Bolachas /POLVILHO_.jpeg",
      },
      {
        name: "Bolacha Rosquinha Branca",
        description: "Pacote com 400g",
        image: "/Produtos kroning/Produtos/Bolachas /ROSQUINHA GLACÊ.jpeg",
      },
      {
        name: "Palitos Salgados",
        description: "Sabor Churrasco — Pacote com 400g ou 150g",
        image: "/Produtos kroning/Produtos/Bolachas /SALGADINHO.jpeg",
      },
    ],
    salgados: [
      {
        name: "Bolinha de Queijo",
        description: "Pacote 750g",
        image: "/Produtos kroning/Produtos/Salgados/BOLINHA DE QUEIJO.png",
      },
      {
        name: "Coxinha de Frango",
        description: "Pacote 750g",
        image: "/Produtos kroning/Produtos/Salgados/COXINHA DE FRANGO.png",
      },
      {
        name: "Coxona de Frango",
        description: "Coxinha grande de frango, perfeita para matar a fome",
        image: "/Produtos kroning/Produtos/Salgados/COXONA DE FRANGO.png",
      },
      {
        name: "Croquete de Carne",
        description: "Bandeja 250g",
        image: "/Produtos kroning/Produtos/Salgados/CROQUETE DE CARNE.png",
      },
      {
        name: "Espetinho de Frango",
        description: "Bandeja 250g",
        image: "/Produtos kroning/Produtos/Salgados/ESPETINHO DE FRANGO.png",
      },
      {
        name: "Espetão de Frango",
        description: "130g",
        image: "/Produtos kroning/Produtos/Salgados/ESPETÃO DE FRANGO.png",
      },
      {
        name: "Folhado de Avelã",
        description: "Bandeja 750g",
        image: "/Produtos kroning/Produtos/Salgados/FOLHADO DE AVELÃ.png",
      },
      {
        name: "Folhado de Carne",
        description: "Bandeja 750g",
        image: "/Produtos kroning/Produtos/Salgados/FOLHADO DE CARNE.png",
      },
      {
        name: "Folhado de Frango",
        description: "Bandeja 750g",
        image: "/Produtos kroning/Produtos/Salgados/FOLHADO DE FRANGO.png",
      },
      {
        name: "Folhado de Goiabada",
        description: "Bandeja 750g",
        image: "/Produtos kroning/Produtos/Salgados/FOLHADO DE GOIABADA.png",
      },
      {
        name: "Folhado de Salsicha",
        description: "Bandeja 750g",
        image: "/Produtos kroning/Produtos/Salgados/FOLHADO DE SALSICHA.png",
      },
      {
        name: "Mini Pizza de Calabresa",
        description: "400g (12 unidades)",
        image: "/Produtos kroning/Produtos/Salgados/MINI PIZZA CALABRESA.png",
      },
      {
        name: "Mini Pizza de Frango",
        description: "400g (12 unidades)",
        image: "/Produtos kroning/Produtos/Salgados/MINI PIZZA FRANGO.png",
      },
      {
        name: "Pastel",
        description: "Carne, Frango ou Presunto e Queijo — 80g",
        image: "/Produtos kroning/Produtos/Salgados/PASTEL.png",
      },
      {
        name: "Pastelzinhos",
        description: "Carne, Frango ou Presunto e Queijo — 25 unidades",
        image: "/Produtos kroning/Produtos/Salgados/PASTELZINHOS.png",
      },
      {
        name: "Pizza de Calabresa",
        description: "400g",
        image: "/Produtos kroning/Produtos/Salgados/PIZZA CALABRESA.png",
      },
      {
        name: "Pizza de Frango",
        description: "400g",
        image: "/Produtos kroning/Produtos/Salgados/PIZZA FRANGO.png",
      },
      {
        name: "Risoles",
        description: "Carne, Frango ou Presunto e Queijo — Pacote 750g",
        image: "/Produtos kroning/Produtos/Salgados/RISOLES - CARNE, FRANGO, PRESUNTO E QUEIJO.png",
      },
      {
        name: "Enroladinho de Salsicha",
        description: "Pacote 750g",
        image: "/Produtos kroning/Produtos/Salgados/RISOLESENROLADINHO DE SALSICHA_.png",
      },
    ],
  };

  const renderCategory = (title: string, id: string, items: typeof products.paes) => (
    <section id={id} className="mb-12 sm:mb-16 md:mb-20 scroll-mt-24">
      <div className="mb-8 sm:mb-12 animate-fade-in">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">{title}</h2>
        <div className="h-1 w-16 sm:w-24 bg-secondary rounded-full" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-8 max-w-7xl mx-auto">
        {items.map((product, index) => (
          <div
            key={index}
            className="group bg-card rounded-lg sm:rounded-xl overflow-hidden shadow-medium hover-lift animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-3 sm:p-4 md:p-6">
              <h3 className="font-display text-sm sm:text-base md:text-xl font-semibold text-primary mb-1 sm:mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base line-clamp-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-4 sm:mb-6">Nossos Produtos</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Conheça nossa linha completa de produtos. Tudo feito com ingredientes selecionados e muito carinho da nossa
            familia para a sua.
          </p>
        </div>

        {renderCategory("Pães", "paes", products.paes)}
        {renderCategory("Bolachas", "bolachas", products.bolachas)}
        {renderCategory("Salgados", "salgados", products.salgados)}
      </div>
    </div>
  );
};

export default Products;
