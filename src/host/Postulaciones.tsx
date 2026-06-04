import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/postulaciones-cyber.css";
import "../styles/home.css";
import ContactQuick from "../components/ContactQuick";
import HeroPostulaciones from "../components/HeroPostulaciones";
import PostulacionModal from "../components/PostulacionModal";
import { type Empleo, listarEmpleosPublicos } from "../services/empleos.service";

const PASOS = [
  {
    num: "01",
    title: "Revisa las oportunidades",
    desc: "Conoce las posiciones disponibles y encuentra la que mejor se adapta a tu perfil.",
  },
  {
    num: "02",
    title: "Completa tus datos",
    desc: "Contáctanos con tu información y CV actualizado para iniciar el proceso.",
  },
  {
    num: "03",
    title: "Nuestro equipo te contactará",
    desc: "Un ejecutivo de selección coordinará una entrevista contigo a la brevedad.",
  },
  {
    num: "04",
    title: "Avanza en el proceso laboral",
    desc: "Ingresa a trabajar en una empresa reconocida respaldada por Grupo Colchagua.",
  },
];

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

export default function Postulaciones() {
  const [ofertaActiva, setOfertaActiva] = useState<Empleo | null>(null);
  const [empleos, setEmpleos] = useState<Empleo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    listarEmpleosPublicos()
      .then(setEmpleos)
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Error al cargar ofertas");
      })
      .finally(() => setLoading(false));
  }, []);

  const scrollToOffers = () => {
    document
      .getElementById("ofertas-disponibles")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const formatFecha = (fecha: string) =>
    new Date(fecha).toLocaleDateString("es-CL", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <Layout>
      <div className="lp-page">

        <HeroPostulaciones />

        {/* ── Ofertas destacadas ── */}
        <section
          className="lp-section lp-ofertas-section"
          id="ofertas-disponibles"
        >
          <div className="lp-container">
            <div className="lp-section-head">
              <span className="lp-label">Oportunidades laborales</span>
              <h2 className="lp-section-title">
                Encuentra una oferta que se ajuste a ti
              </h2>
              <p className="lp-section-sub">
                Revisa cargos disponibles, postula con tus datos y avanza hacia
                una nueva oportunidad de trabajo y crecimiento.
              </p>
              <button
                type="button"
                className="lp-btn lp-btn--primary"
                onClick={scrollToOffers}
              >
                Ver ofertas disponibles
              </button>
            </div>

            {loading && (
              <p className="lp-section-sub" style={{ textAlign: "center", padding: "40px 0" }}>
                Cargando ofertas...
              </p>
            )}

            {!loading && error && (
              <p style={{ textAlign: "center", padding: "40px 0", color: "#c0392b" }}>
                {error}
              </p>
            )}

            {!loading && !error && empleos.length === 0 && (
              <p className="lp-section-sub" style={{ textAlign: "center", padding: "40px 0" }}>
                Actualmente no hay ofertas laborales disponibles.
              </p>
            )}

            {!loading && !error && empleos.length > 0 && (
              <div className="lp-ofertas-list" id="oportunidades">
                {empleos.map((empleo) => (
                  <div key={empleo.id} className="lp-oferta-card">
                    <div className="lp-oferta-card__header">
                      <div className="lp-oferta-card__logo-group">
                        {empleo.empresa && (
                          <span style={{ fontWeight: 600, fontSize: "14px", color: "#333" }}>
                            {empleo.empresa}
                          </span>
                        )}
                        <span className="lp-oferta-card__tipo">
                          {empleo.modalidad ?? "Oferta laboral"}
                        </span>
                      </div>
                      <button
                        className="lp-btn-postular"
                        onClick={() => setOfertaActiva(empleo)}
                      >
                        Postular
                      </button>
                    </div>

                    <div className="lp-oferta-card__body">
                      <div className="lp-oferta-card__info">
                        <span className="lp-oferta-card__buscando">Estamos buscando</span>
                        <h3 className="lp-oferta-card__cargo">{empleo.titulo}</h3>
                        {empleo.cargo && empleo.cargo !== empleo.titulo && (
                          <p style={{ fontSize: "13px", color: "#666", marginBottom: "6px" }}>
                            {empleo.cargo}
                          </p>
                        )}
                        {empleo.jornada && (
                          <div className="lp-oferta-card__turnos">
                            <span className="lp-oferta-card__sub-label">Jornada</span>
                            <ul className="lp-oferta-card__turnos-list">
                              <li>{empleo.jornada}</li>
                            </ul>
                          </div>
                        )}
                        {empleo.sueldo && (
                          <p style={{ fontSize: "13px", color: "#5b1746", fontWeight: 600, marginTop: "6px" }}>
                            {empleo.sueldo}
                          </p>
                        )}
                        {(empleo.vacantes != null || empleo.fechaCierre) && (
                          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
                            {empleo.vacantes != null && (
                              <span style={{ fontSize: "12px", background: "#f0e6ee", color: "#5b1746", padding: "2px 8px", borderRadius: "20px" }}>
                                {empleo.vacantes} vacante{empleo.vacantes !== 1 ? "s" : ""}
                              </span>
                            )}
                            {empleo.fechaCierre && (
                              <span style={{ fontSize: "12px", color: "#888" }}>
                                Cierra: {formatFecha(empleo.fechaCierre)}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="lp-oferta-card__zona">
                        <span className="lp-oferta-card__zona-label">
                          <PinIcon />
                          Zona de trabajo
                        </span>
                        <ul className="lp-oferta-card__comunas">
                          {empleo.region && <li><strong>Región:</strong> {empleo.region}</li>}
                          {empleo.ubicacion && <li><strong>Comuna:</strong> {empleo.ubicacion}</li>}
                          {!empleo.region && !empleo.ubicacion && (
                            <li>A coordinar</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Pasos ── */}
        <section className="lp-section lp-pasos-section">
          <div className="lp-container">
            <div className="lp-section-head">
              <span className="lp-label">¿Cómo postular?</span>
              <h2 className="lp-section-title">
                Cuatro pasos para iniciar tu camino
              </h2>
            </div>
            <div className="lp-pasos">
              {PASOS.map((paso) => (
                <div key={paso.num} className="lp-paso">
                  <div className="lp-paso__num-wrap">
                    <span className="lp-paso__num">{paso.num}</span>
                  </div>
                  <h3 className="lp-paso__title">{paso.title}</h3>
                  <p className="lp-paso__desc">{paso.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Final ── */}
        <section className="section-spacing final-cta-section" id="postular">
          <div className="home-container">
            <div className="final-cta-card">
              <div>
                <h2 className="final-cta-title">Contáctanos</h2>
                <p className="final-cta-text">
                  Contáctanos eligiendo la opción que más se ajuste a tus necesidades.
                </p>
              </div>
              <div className="cta-buttons">
                <Link to="/cotizar" className="home-button home-button--white">
                  Cotiza con nosotros
                </Link>
                <Link to="/postulaciones" className="home-button home-button--white">
                  Trabaja con nosotros
                </Link>
              </div>
              <ContactQuick />
            </div>
          </div>
        </section>

      </div>

      {ofertaActiva && (
        <PostulacionModal
          empleo={ofertaActiva}
          onClose={() => setOfertaActiva(null)}
        />
      )}
    </Layout>
  );
}
