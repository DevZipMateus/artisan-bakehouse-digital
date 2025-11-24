import { Heart, Award, Users, Leaf, Lightbulb, Target, Eye } from "lucide-react";
import aboutImage from "@/assets/about-bakery.jpg";

const About = () => {
  const values = [
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
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Compromisso com o meio ambiente e práticas conscientes",
    },
    {
      icon: Heart,
      title: "Atendimento",
      description: "Acolhimento e cuidado com cada cliente",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre buscando novas formas de surpreender",
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
              Nossa Filosofia
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed">
              Acreditamos que a alimentação é um elemento essencial para o bem-estar e a felicidade das pessoas. Nossa missão vai além de simplesmente oferecer pães frescos e produtos de qualidade.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Queremos criar um espaço onde a comunidade se encontre, compartilhe experiências e celebre momentos especiais. Acreditamos que cada produto que oferecemos deve ter uma história, refletindo nosso compromisso com a qualidade, a tradição e a sustentabilidade.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Queremos ser um ponto de encontro onde nossos clientes possam não apenas adquirir alimentos, mas também encontrar inspiração, descobrir novos sabores.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Estamos aqui para promover um estilo de vida saudável, fornecendo produtos que nutrem o corpo e a alma, porque acreditamos que a verdadeira conexão acontece ao redor da sua mesa.
            </p>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Missão e Visão
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-10 shadow-medium hover-lift animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-display text-3xl font-semibold text-primary mb-4">
                Missão
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                Oferecer produtos de alta qualidade, preparados com ingredientes selecionados e receitas tradicionais, proporcionando aos nossos clientes uma experiência acolhedora e saborosa a cada refeição.
              </p>
            </div>

            <div className="bg-card rounded-xl p-10 shadow-medium hover-lift animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Eye className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-display text-3xl font-semibold text-primary mb-4">
                Visão
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                Ser reconhecida como uma padaria de referência na nossa comunidade, destacando-nos pela qualidade e tradição dos nossos produtos e pelo atendimento excepcional, sempre inovando e mantendo um compromisso com a saúde dos nossos clientes.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho diário
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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

        {/* CTA Section */}
        <div className="text-center gradient-warm rounded-2xl p-12 shadow-strong animate-fade-in">
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
