import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/bolsa-trabajo.css";

const COMPUTRABAJO_URL =
  "https://cl.computrabajo.com/empresas/ofertas-de-trabajo-de-grupo-colchagua-2E41DA812DC62D9D";

export default function BolsaDeTrabajo() {
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

  return (
    <Layout hideWhatsappFloat>
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
