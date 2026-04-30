import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/promo-modal.css";
import postulanteImage from "../assets/inicio/mujerpostulacion.png";

const POPUP_CLOSED_KEY = "grupo_colchagua_popup_closed";

export default function PromoPostulacionesModal() {
  const navigate = useNavigate();
  const [showPostulationPopup, setShowPostulationPopup] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_CLOSED_KEY)) {
      return;
    }

    let hasShown = false;

    const showPopup = () => {
      if (hasShown || sessionStorage.getItem(POPUP_CLOSED_KEY)) {
        return;
      }

      hasShown = true;
      setShowPostulationPopup(true);
      window.removeEventListener("scroll", handleScroll);
    };

    const handleScroll = () => {
      if (window.scrollY > 360) {
        showPopup();
      }
    };

    const timeoutId = window.setTimeout(showPopup, 6000);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    sessionStorage.setItem(POPUP_CLOSED_KEY, "true");
    setShowPostulationPopup(false);
  };

  const handlePostular = () => {
    sessionStorage.setItem(POPUP_CLOSED_KEY, "true");
    setShowPostulationPopup(false);
    navigate("/postulaciones");
  };

  if (!showPostulationPopup) return null;

  return (
    <div
      className="promo-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Postulaciones Grupo Colchagua"
      onClick={(event) => event.target === event.currentTarget && handleClose()}
    >
      <div className="promo-modal">
        <button
          className="promo-modal__close"
          onClick={handleClose}
          aria-label="Cerrar"
          type="button"
        >
          ×
        </button>

        <div className="promo-modal__banner">
          <div className="promo-modal__content">
            <span className="promo-modal__kicker">Oportunidades laborales</span>
            <h2 className="promo-modal__title">
              Encuentra tu próximo trabajo
            </h2>
            <p className="promo-modal__subtitle">
              Revisa ofertas disponibles y postula a oportunidades para crecer
              con empresas reconocidas.
            </p>
            <button
              className="promo-modal__btn"
              onClick={handlePostular}
              type="button"
            >
              Postular
            </button>
          </div>

          <div className="promo-modal__visual" aria-hidden="true">
            <img src={postulanteImage} alt="" className="promo-modal__person" />
          </div>
        </div>
      </div>
    </div>
  );
}
