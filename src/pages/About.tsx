import { Heart, Award, Users, Clock } from "lucide-react";
import aboutImage from "@/assets/about-bakery.jpg";
import SectionDivider from "@/components/SectionDivider";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Paixão",
      description: "Amor pelo que fazemos em cada receita",
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Ingredientes selecionados e processos artesanais",
    },
    {
      icon: Users,
      title: "Tradição",
      description: "Receitas passadas de geração em geração",
    },
    {
      icon: Clock,
      title: "Dedicação",
      description: "Mais de 10 anos servindo com excelência",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
            Quem Somos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma história de amor, tradição e dedicação à arte da panificação
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <img
              src={aboutImage}
              alt="Padaria Artesanal"
              className="rounded-2xl shadow-strong w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              Mais de Uma Década de Tradição
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed">
              Há mais de 10 anos, nascemos com um propósito simples mas poderoso: levar para sua
              mesa o verdadeiro sabor de pão artesanal, feito com dedicação e carinho.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Nossa jornada começou com receitas tradicionais passadas de geração em geração,
              combinadas com técnicas modernas de panificação. Cada pão, bolacha e doce que sai
              do nosso forno carrega não apenas ingredientes de qualidade, mas também nossa
              história e paixão.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Acreditamos que a verdadeira qualidade está nos detalhes: na seleção cuidadosa
              dos ingredientes, no tempo de fermentação respeitado, no cuidado artesanal de
              cada etapa do processo. É isso que nos torna únicos e especiais para nossos clientes.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Hoje, continuamos firmes em nosso compromisso de oferecer produtos artesanais de
              excelência, mantendo viva a tradição da boa panificação e conquistando o coração
              de quem valoriza o sabor autêntico e a qualidade em cada mordida.
            </p>
          </div>
        </div>

        {/* Divider before Values */}
        <div className="relative -mb-1 -mx-4">
          <SectionDivider 
            color="#F5F5F0" 
            flip={false}
            showDepthEffect={true}
          />
        </div>

        {/* Values Section */}
        <div className="relative mb-20 -mt-16 pt-20 pb-12 -mx-4 px-4" style={{ backgroundColor: '#F5F5F0' }}>
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho diário
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-medium hover-lift text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider before CTA */}
        <div className="relative -mb-1 -mx-4">
          <SectionDivider 
            color="linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)" 
            flip={true}
            showDepthEffect={true}
          />
        </div>

        {/* CTA Section */}
        <div className="relative text-center gradient-warm rounded-2xl p-12 shadow-strong animate-fade-in -mt-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Visite Nossa Padaria
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Conheça nosso espaço, sinta o aroma irresistível e experimente produtos fresquinhos
            direto do forno. Será um prazer recebê-lo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
