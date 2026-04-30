import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/nosotros.css";
import ContactQuick from "../components/ContactQuick";

import heroNosotros from "../assets/nuestrosservicios/NOSOTROS.png";

const VALUES = [
  {
    title: "Compromiso",
    description:
      "Acompañamos a clientes y trabajadores con responsabilidad en cada etapa del servicio.",
  },
  {
    title: "Transparencia",
    description:
      "Promovemos relaciones claras, cercanas y basadas en la confianza.",
  },
  {
    title: "Agilidad",
    description:
      "Respondemos con rapidez ante necesidades operativas y procesos de selección.",
  },
  {
    title: "Excelencia",
    description:
      "Buscamos mejorar continuamente la calidad de nuestras soluciones.",
  },
];

export default function Nosotros() {
  return (
    <Layout>
      <div className="nosotros-page">
        <section className="nosotros-hero">
          <img
            src={heroNosotros}
            alt="Equipo Grupo Colchagua"
            className="nosotros-hero-image"
          />

          <div className="nosotros-overlay" />

          <div className="nosotros-content">
            <span className="nosotros-hero-kicker">Nosotros</span>
            <h1 className="nosotros-title">Grupo Colchagua</h1>
            <p className="nosotros-hero-copy">
              Conectamos empresas con talento y acompañamos oportunidades
              laborales con un servicio cercano, ágil y profesional.
            </p>

            <div className="nosotros-actions">
              <Link to="/servicios" className="nosotros-btn">
                Ver servicios
              </Link>

              <Link
                to="/postulaciones"
                className="nosotros-btn nosotros-btn--secondary"
              >
                Trabaja con nosotros
              </Link>
            </div>
          </div>
        </section>

        <section className="historia-section">
          <div className="nosotros-container nosotros-info-layout">
            <article className="historia-card">
              <span className="section-kicker">Quiénes somos</span>
              <h2 className="section-title">Soluciones integrales en recursos humanos</h2>

              <div className="historia-copy">
                <p>
                  Grupo Colchagua es una empresa especializada en servicios
                  transitorios, outsourcing, payroll y reclutamiento. Apoyamos a
                  organizaciones que necesitan equipos confiables y gestión
                  profesional de personas.
                </p>
                <p>
                  Nuestro trabajo combina cobertura, experiencia operativa y
                  cercanía para responder a las necesidades de cada cliente y
                  postulante.
                </p>
              </div>
            </article>

            <div className="nosotros-purpose-grid">
              <article className="nosotros-purpose-card">
                <span className="section-kicker">Misión</span>
                <h2>Entregar un servicio profesional para cada necesidad</h2>
                <p>
                  Aportar soluciones de personas con atención específica,
                  seguimiento y mejora permanente en cada operación.
                </p>
              </article>

              <article className="nosotros-purpose-card">
                <span className="section-kicker">Visión</span>
                <h2>Ser un socio confiable en gestión de talento</h2>
                <p>
                  Consolidarnos como una empresa referente en recursos humanos
                  por nuestra respuesta rápida, cercanía y calidad de servicio.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="difference-section">
          <div className="nosotros-container">
            <div className="difference-copy">
              <span className="section-kicker">Valores</span>
              <h2 className="section-title">Lo que guía nuestro trabajo</h2>
              <p className="difference-text">
                Nuestros valores ordenan la relación con clientes, trabajadores
                y postulantes. Son la base de una experiencia profesional y
                cercana.
              </p>

              <div className="difference-grid">
                {VALUES.map((item) => (
                  <article key={item.title} className="difference-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing final-cta-section">
          <div className="home-container">
            <div className="final-cta-card">
              <div>
                <h2 className="final-cta-title">Hablemos</h2>
                <p className="final-cta-text">
                  Estamos disponibles para orientar a empresas y postulantes.
                </p>
              </div>

              <div className="cta-buttons">
                <Link to="/servicios" className="home-button home-button--white">
                  Ver servicios
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
    </Layout>
  );
}
