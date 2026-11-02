import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/bolsa-trabajo.css";
import postulanteImage from "../assets/inicio/mujerpostulacion.png";
import { useSeo } from "../hooks/useSeo";

const COMPUTRABAJO_URL =
  "https://cl.computrabajo.com/empresas/ofertas-de-trabajo-de-grupo-colchagua-2E41DA812DC62D9D";

export default function BolsaDeTrabajo() {
  const navigate = useNavigate();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (!iframeLoaded) {
        setShowFallback(true);
      }
    }, 4500);

    return () => window.clearTimeout(timeoutId);
  }, [iframeLoaded]);

  useSeo(
    "Bolsa de Trabajo | Grupo Colchagua y Grupo Santa Cruz",
    "Encuentra oportunidades laborales en logística, ventas, administración y áreas de la salud con Grupo Colchagua y Grupo Santa Cruz."
  );

  return (
    <Layout hideWhatsappFloat>
      <div className="bolsa-empleo-banner">
        <div className="bolsa-empleo-banner__content">
          <img src={postulanteImage} alt="" className="bolsa-empleo-banner__img" aria-hidden="true" />
          <div className="bolsa-empleo-banner__text">
            <span className="bolsa-empleo-banner__kicker">Oportunidades laborales</span>
            <strong className="bolsa-empleo-banner__title">Encuentra tu próximo trabajo</strong>
            <p className="bolsa-empleo-banner__desc">
              Revisa ofertas disponibles y postula a oportunidades para crecer con empresas reconocidas.
            </p>
          </div>
          <button
            className="bolsa-empleo-banner__btn"
            type="button"
            onClick={() => navigate("/postulaciones")}
          >
            Ver postulaciones
          </button>
        </div>
      </div>
      <section className="bolsa-page" aria-label="Bolsa de Trabajo">
        <div className="bolsa-embed-section">
          <div className="bolsa-floating-action">
            <a
              className="bolsa-external-button"
              href={COMPUTRABAJO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Postular en Computrabajo
            </a>
          </div>

          <div className="bolsa-embed-shell">
            {!showFallback && (
              <iframe
                className="bolsa-iframe"
                src={COMPUTRABAJO_URL}
                title="Bolsa de trabajo Grupo Colchagua en Computrabajo"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIframeLoaded(true)}
              />
            )}

            {showFallback && (
              <div className="bolsa-fallback" role="status">
                <div className="bolsa-fallback__content">
                  <h2>Bolsa oficial de empleo</h2>
                  <p>
                    Para postular, abre nuestra bolsa oficial en Computrabajo.
                  </p>
                  <a
                    className="bolsa-fallback__button"
                    href={COMPUTRABAJO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Postular en Computrabajo
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
