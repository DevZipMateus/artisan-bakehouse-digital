import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Boa Vista, 6 Distrito, São Lourenço do Sul - RS",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "53 98408.6150",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "kroning@outlook.com.br",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sábado - 7:30 às 12:00 | 13:00 às 19:30\nDomingo - 8:30 às 11:00",
    },
    {
      icon: Facebook,
      title: "Facebook",
      content: "Mercado e Padaria Kroning",
      link: "https://www.facebook.com/mercadoepadariakroning",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@padariakroning",
      link: "https://www.instagram.com/padariakroning/",
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-4 sm:mb-6">
            Entre em Contato
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Estamos prontos para atendê-lo. Entre em contato conosco para fazer seu pedido
            ou tirar suas dúvidas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12 mb-10 sm:mb-16">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 sm:mb-8 text-center">
                Informações de Contato
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-card rounded-lg sm:rounded-xl shadow-medium"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{info.title}</h3>
                      {info.title === "Endereço" ? (
                        <a
                          href="https://www.google.com/maps/place/Mercado+e+Padaria+KRONING/@-31.2543149,-52.2122451,17z/data=!3m1!4b1!4m6!3m5!1s0x95106f6d336883a9:0xc72090f5feecc880!8m2!3d-31.2543149!4d-52.2122451!16s%2Fg%2F11c31xnyv4?entry=ttu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground whitespace-pre-line hover:text-primary transition-colors hover:underline"
                        >
                          {info.content}
                        </a>
                      ) : info.title === "Telefone" ? (
                        <a
                          href="https://api.whatsapp.com/send/?phone=53984086150&text&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground whitespace-pre-line hover:text-primary transition-colors hover:underline"
                        >
                          {info.content}
                        </a>
                      ) : info.title === "E-mail" ? (
                        <a
                          href="mailto:kroning@outlook.com.br"
                          className="text-muted-foreground whitespace-pre-line hover:text-primary transition-colors hover:underline"
                        >
                          {info.content}
                        </a>
                      ) : info.title === "Facebook" || info.title === "Instagram" ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground whitespace-pre-line hover:text-primary transition-colors hover:underline"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="bg-[hsl(var(--header-red))] rounded-lg sm:rounded-xl p-6 sm:p-8 text-center shadow-medium">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-foreground mb-3 sm:mb-4">
                Faça seu Pedido Agora
              </h3>
              <p className="text-primary-foreground/90 mb-4 sm:mb-6 text-sm sm:text-base">
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
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 sm:mb-8 text-center">
            Nossa Localização
          </h2>
          <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-strong h-[280px] sm:h-[350px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.123!2d-52.2122451!3d-31.2543149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95106f6d336883a9%3A0xc72090f5feecc880!2sMercado%20e%20Padaria%20KRONING!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Padaria Kroning"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
