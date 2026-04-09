import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/nosotros.css";
import ContactQuick from "../components/ContactQuick";

import heroNosotros from "../assets/nuestrosservicios/NOSOTROS.png";
import davidImage from "../assets/nuestroequipo/image_testimonio_david-300x267-1.png";
import jonathanImage from "../assets/nuestroequipo/image_testimonio_jonathan-300x267.png";
import alvi from "../assets/marcas/logo_alvi-150x150.png";
import bci from "../assets/marcas/logo_bci-150x150.png";
import dps from "../assets/marcas/logo_dps_chile-150x150.png";
import easy from "../assets/marcas/logo_easy-150x150.png";
import espacio from "../assets/marcas/logo_espacio_riesco-150x150.png";
import ikea from "../assets/marcas/logo_ikea-150x150.png";
import ironmount from "../assets/marcas/logo_iron_mountain-150x150.png";
import jumbo from "../assets/marcas/logo_jumbo-150x150.png";
import paris from "../assets/marcas/logo_paris-150x150.png";
import santaisabel from "../assets/marcas/logo_santa_isabel-150x150.png";
import sodimac from "../assets/marcas/logo_sodimac-150x150.png";
import starken from "../assets/marcas/logo_starken-3-150x150.png";
import vinaundurraga from "../assets/marcas/logo_vina_undurraga-150x150.png";
import walmart from "../assets/marcas/logo_walmart.png";
import xiaomi from "../assets/marcas/logo_xiaomi-150x150.png";

const DIFFERENCE_POINTS = [
  {
    title: "Respuesta agil",
    description:
      "Activamos equipos con rapidez y orden para responder a cada necesidad operativa.",
  },
  {
    title: "Cobertura nacional",
    description:
      "Acompanamos operaciones en distintas zonas del pais con vision local y estandar comun.",
  },
  {
    title: "Soluciones a medida",
    description:
      "Disenamos servicios ajustados al ritmo, tamano y complejidad de cada cliente.",
  },
  {
    title: "Seguimiento continuo",
    description:
      "Mantenemos cercania, control y mejora constante en cada etapa del servicio.",
  },
];

const TEAM_MEMBERS = [
  {
    name: "David",
    image: davidImage,
  },
  {
    name: "Jonathan",
    image: jonathanImage,
  },

];

const CLIENTS = [
  { name: "Santa Isabel", logo: santaisabel },
  { name: "Jumbo", logo: jumbo },
  { name: "Easy", logo: easy },
  { name: "Paris", logo: paris },
  { name: "BCI", logo: bci },
  { name: "DPS Chile", logo: dps },
  { name: "Sodimac", logo: sodimac },
  { name: "Alvi", logo: alvi },
  { name: "Starken", logo: starken },
  { name: "IKEA", logo: ikea },
  { name: "Walmart", logo: walmart },
  { name: "Espacio Riesco", logo: espacio },
  { name: "Iron Mountain", logo: ironmount },
  { name: "Vina Undurraga", logo: vinaundurraga },
  { name: "Xiaomi", logo: xiaomi },
];

export default function Nosotros() {
  const renderClientLogo = (
    client: (typeof CLIENTS)[number],
    keyPrefix = ""
  ) => (
    <div key={`${keyPrefix}${client.name}`} className="client-logo-card">
      <img src={client.logo} alt={client.name} loading="lazy" />
    </div>
  );

  return (
    <Layout>
      <div className="nosotros-page">
        <section className="nosotros-hero">
          <img
            src={heroNosotros}
            alt="Nosotros Grupo Colchagua"
            className="nosotros-hero-image"
          />

          <div className="nosotros-overlay" />

          <div className="nosotros-content">
            <h1 className="nosotros-title">NOSOTROS</h1>

            <div className="nosotros-actions">
              <Link to="/trabaja" className="nosotros-btn">
                TRABAJA CON NOSOTROS
              </Link>

              <Link
                to="/cotizar"
                className="nosotros-btn nosotros-btn--secondary"
              >
                COTIZA CON NOSOTROS
              </Link>
            </div>
          </div>
        </section>

        <section className="historia-section">
          <div className="nosotros-container historia-layout">
            <div className="historia-card">
              <h2 className="section-title">NUESTRA HISTORIA</h2>

              <div className="historia-copy">
                <p>
                  Desde hace mas de 10 anos somos una empresa especializada en
                  Servicios Transitorios y Outsourcing, enfocada en la
                  contratacion y gestion de talentos. Nuestro objetivo es
                  brindar soluciones integrales a nuestros clientes,
                  proporcionandoles personal calificado y comprometido para
                  cubrir sus necesidades.
                </p>

                <p>
                  Valoramos la colaboracion, la transparencia y la excelencia en
                  nuestros servicios. Queremos ser tu socio confiable en la
                  contratacion de talentos y avanzar contigo hacia resultados
                  sostenibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="difference-section">
          <div className="nosotros-container difference-layout">
            <div className="difference-copy">
              <span className="section-kicker">Valor agregado</span>
              <h2 className="section-title">LO QUE NOS DIFERENCIA</h2>
              <p className="difference-subtitle">
                Compromiso con la mejora y la atencion a nuestros clientes
              </p>
              <p className="difference-text">
                Nos enfocamos en ofrecer una experiencia cercana, agil y
                profesional. Combinamos conocimiento operativo, gestion de
                personas y acompanamiento permanente para construir relaciones
                de largo plazo con cada cliente.
              </p>

              <div className="difference-highlight">
                <strong>Compromiso real</strong>
                <p>
                  Mejoramos procesos y acompanamos cada operacion con foco en
                  continuidad, servicio y respuesta oportuna.
                </p>
              </div>

              <div className="difference-grid">
                {DIFFERENCE_POINTS.map((item) => (
                  <article key={item.title} className="difference-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="nosotros-container">
            <div className="services-panel">
              <div className="services-panel__number">+25</div>

              <div className="services-panel__body">
                <span className="section-kicker section-kicker--light">
                  Trayectoria
                </span>
                <h2>SERVICIOS INTEGRALES</h2>
                <p>
                  mil trabajadores que se han convertido en nuestros valiosos
                  aliados a lo largo de nuestra historia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="nosotros-container">
            <div className="team-header">
              <span className="section-kicker section-kicker--light">
                Personas
              </span>
              <h2 className="section-title section-title--light">
                NUESTRO EQUIPO
              </h2>
              <p className="team-description">
                Detras de cada servicio hay profesionales que coordinan,
                acompanan y cuidan la calidad de cada operacion.
              </p>
            </div>

            <div className="team-grid">
              {TEAM_MEMBERS.map((member) => (
                <article key={member.name} className="team-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-card__image"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing clients-section">
          <div className="home-container">
            <div className="section-heading">
              <span className="section-kicker">Clientes</span>
              <h2 className="section-title">
                Marcas que confian en nuestro trabajo
              </h2>
            </div>

            <div className="clients-marquee" aria-label="Marcas clientes">
              <div className="clients-marquee__track">
                <div className="clients-marquee__group">
                  {CLIENTS.map((client) => renderClientLogo(client))}
                </div>

                <div className="clients-marquee__group" aria-hidden="true">
                  {CLIENTS.map((client) =>
                    renderClientLogo(client, "duplicate-")
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing final-cta-section">
          <div className="home-container">
            <div className="final-cta-card">
              <div>
                <h2 className="final-cta-title">Contactanos</h2>
                <p className="final-cta-text">
                  Contactanos eligiendo la opcion que mas se ajuste
                  a tus necesidades.
                </p>
              </div>

              <div className="cta-buttons">
                <Link to="/cotizar" className="home-button home-button--white">
                  Cotiza con nosotros
                </Link>

                <Link to="/trabaja" className="home-button home-button--white">
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
