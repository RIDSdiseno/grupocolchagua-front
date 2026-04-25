import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/promo-modal.css";
import almacenamientoImage from "../assets/inicio/almacenamiento.png";

export default function PromoPostulacionesModal() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  const handleClose = () => setVisible(false);

  const handlePostular = () => {
    setVisible(false);
    navigate("/postulaciones");
  };

  if (!visible) return null;

  return (
    <div
      className="promo-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Postulaciones Grupo Colchagua"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="promo-modal">
        <button
          className="promo-modal__close"
          onClick={handleClose}
          aria-label="Cerrar"
        >
          &times;
        </button>

        <div
          className="promo-modal__banner"
          onClick={handlePostular}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handlePostular()}
        >
          <img
            src={almacenamientoImage}
            alt="Postula con Grupo Colchagua"
            className="promo-modal__bg"
          />
          <div className="promo-modal__overlay" aria-hidden="true" />
          <div className="promo-modal__content">
            <h2 className="promo-modal__title">Postula con Grupo Colchagua</h2>
            <div className="promo-modal__bottom">
              <p className="promo-modal__subtitle">Tu trabajo ideal está con nosotros</p>
              <span className="promo-modal__btn">Postular</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
