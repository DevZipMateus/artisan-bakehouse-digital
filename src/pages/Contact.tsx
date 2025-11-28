import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua das Padarias, 123\nCentro - São Paulo, SP",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 98765-4321",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@padariaartesanal.com.br",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sáb: 6h às 20h\nDom: 6h às 14h",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atendê-lo. Entre em contato conosco para fazer seu pedido
            ou tirar suas dúvidas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
                Informações de Contato
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-medium"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="bg-[hsl(var(--header-red))] rounded-xl p-8 text-center shadow-medium">
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                Faça seu Pedido Agora
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Entre em contato pelo WhatsApp para pedidos e encomendas
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=53984086150&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-card hover:bg-card/90 text-primary border-0 font-semibold">
                  Chama no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="animate-fade-in">
          <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            Nossa Localização
          </h2>
          <div className="rounded-xl overflow-hidden shadow-strong h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1981!2d-46.6333824!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzgnMDAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Padaria Artesanal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
