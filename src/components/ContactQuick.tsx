import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactQuick() {
  return (
    <div className="contact-quick">
      <a href="tel:+56227646300">
        <FaPhoneAlt /> +56 2 2764 6300
      </a>

      <a href="mailto:contacto@grupocolchagua.cl">
        <FaEnvelope /> contacto@grupocolchagua.cl
      </a>

      <a
        href="https://wa.me/56939326442?text=Hola%20quiero%20información"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp /> WhatsApp
      </a>
    </div>
  );
}