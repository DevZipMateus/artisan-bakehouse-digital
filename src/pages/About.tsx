import { Heart, Award, Users, Lightbulb, Target, Eye } from "lucide-react";
import aboutImage from "@/assets/about-bakery.jpg";
import aboutBreadsFooter from "@/assets/about-breads-footer.png";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Qualidade",
      description: "Compromisso em oferecer produtos frescos e de alta qualidade",
    },
    {
      icon: Users,
      title: "Tradição",
      description: "Respeitar e valorizar as receitas e técnicas tradicionais",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Estar sempre aberto a novas ideias e sabores, adaptando-se às tendências e necessidades dos nossos clientes",
    },
    {
      icon: Heart,
      title: "Atendimento",
      description: "Acolhimento e cuidado com cada cliente",
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
            A mais de 10 anos no mercado, oferecendo qualidade e tradição
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
              Mercado e Padaria Kroning
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed">
              A mais de 10 anos no mercado, creditamos que cada produto que oferecemos deve ter uma história, refletindo nosso compromisso com a qualidade, a tradição. Nossa missão vai além de simplesmente oferecer pães frescos e produtos de qualidade; queremos criar um espaço onde a comunidade se encontre, compartilhe experiências e celebre momentos especiais.
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
                Oferecer produtos de alta qualidade, preparados com ingredientes selecionados e receitas tradicionais, proporcionando aos nossos clientes uma experiência acolhedora e saborosa.
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
                Ser reconhecida como uma padaria de referência na nossa comunidade, destacando-nos pela qualidade e tradição dos nossos produtos e pelo atendimento excepcional
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

        {/* Footer Image */}
        <div className="mt-20 animate-fade-in relative">
          <img
            src={aboutBreadsFooter}
            alt="Produtos da Padaria Kroning"
            className="w-full h-auto object-cover rounded-2xl shadow-strong"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none" 
               style={{
                 background: `linear-gradient(to bottom, 
                   #EDE8DE 0%, 
                   transparent 15%, 
                   transparent 85%, 
                   #EDE8DE 100%)`
               }}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
