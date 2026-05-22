import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactQuick() {
  return (
    <div className="contact-quick">


      <a href="mailto:contacto@grupocolchagua.cl">
        <FaEnvelope /> contacto@grupocolchagua.cl
      </a>

      <a
        href="https://wa.me/56932316431?text=Hola%20quiero%20información"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp /> WhatsApp: +56 9 3231 6431
      </a>
    </div>
  );
}
