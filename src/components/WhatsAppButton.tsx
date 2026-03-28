import { MessageCircle } from "lucide-react";

const PHONE = "8608320133";
const MESSAGE = encodeURIComponent("Hello, I would like to know about admission.");

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-bounce-gentle"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
