import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  const phoneNumber = "5553984086150"; // Número no formato internacional
  const message = "Olá! Gostaria de fazer um pedido.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-fade-in"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 md:h-16 md:w-16 shadow-strong hover:scale-110 transition-transform bg-transparent p-0 overflow-hidden"
      >
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="h-full w-full object-cover"
        />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
