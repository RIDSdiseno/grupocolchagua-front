import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/beneficios.css";
import ContactQuick from "../components/ContactQuick";

import heroBeneficios from "../assets/inicio/beneficios.png";
import talana from "../assets/logo/TALANA.png";
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

const TALANA_URL = "https://web.talana.com/club-beneficios";

const TALANA_CARDS = [
  {
    title: "Como acceder a Club Talana",
    description:
      "Los administradores pueden ingresar desde el menu de modulos, opcion Club Talana, o desde Beneficios en el modulo de Comunicaciones. Los colaboradores acceden desde la seccion Beneficios en Mi Talana o en la aplicacion Talana Next.",
  },
  {
    title: "Como se usan los beneficios",
    description:
      "Para conocer un beneficio, el usuario debe abrirlo desde Club Talana haciendo clic en su imagen. Luego puede usarlo desde el boton correspondiente, que redirige al descuento online o despliega la tarjeta Club Talana para compras presenciales.",
  },
  {
    title: "Que es Club Talana",
    description:
      "Es una seccion donde todos los clientes y usuarios de Talana pueden acceder a promociones y descuentos en distintas categorias: deporte, salud, finanzas, alimentacion y otros servicios.",
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

export default function Beneficios() {
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
      <div className="beneficios-page">
        <section className="beneficios-hero">
          <img
            src={heroBeneficios}
            alt="Beneficios Grupo Colchagua"
            className="beneficios-hero-image"
          />

          <div className="beneficios-overlay" />

          <div className="beneficios-content">
            <h1 className="beneficios-title">BENEFICIOS</h1>

            <div className="beneficios-actions">
              <Link to="/trabaja" className="beneficios-btn">
                TRABAJA CON NOSOTROS
              </Link>

              <Link
                to="/cotizar"
                className="beneficios-btn beneficios-btn--secondary"
              >
                COTIZA CON NOSOTROS
              </Link>
            </div>
          </div>
        </section>

        <section className="talana-section">
          <div className="beneficios-container">
            <div className="talana-panel">
              <div className="talana-panel__header">
                <span className="beneficios-kicker">Club Talana</span>
                <div className="talana-logo-container">
                  <img src={talana} alt="Talana" />
                </div>
              </div>

              <div className="talana-panel__content">
                <h2 className="beneficios-section-title">
                  Beneficios digitales para todos nuestros colaboradores
                </h2>
                <p className="talana-text">
                  Grupo Colchagua tiene convenio con la plataforma digital de Recursos Humanos Talana.
                   Gracias a esto, todo colaborador tendrá de manera automática y sin costo alguno todos los beneficios
                    que Club Talana ofrece, logrando satisfacer a nuestros trabajadores con los mejores descuentos,
                     ofertas, promociones y más, en una gran cantidad de tiendas y servicios.
                </p>

                <a
                  href={TALANA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="talana-main-btn"
                >
                  Ver beneficios
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="beneficios-info-section">
          <div className="beneficios-container">
            <div className="beneficios-section-heading">
              <span className="beneficios-kicker">Informacion</span>
              <h2 className="beneficios-section-title">
                Todo lo que necesitas saber sobre Club Talana
              </h2>
              <p className="beneficios-section-text">
                Consulta como ingresar, como aprovechar cada beneficio y que
                incluye la plataforma disponible para nuestros equipos.
              </p>
            </div>

            <div className="talana-cards">
              {TALANA_CARDS.map((card) => (
                <article key={card.title} className="talana-card">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="beneficios-terms-section">
          <div className="beneficios-container">
            <div className="beneficios-terms-card">
              <span className="beneficios-kicker">Condiciones</span>
              <h2 className="beneficios-section-title">
                Terminos y condiciones
              </h2>
              <p className="beneficios-section-text">
                Las ofertas, ventas, descuentos y beneficios, asi como la
                disponibilidad, garantia, servicio y calidad del producto o
                servicio promocionado, son de unica y exclusiva responsabilidad
                del Comercio Oferente.
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing clients-section">
          <div className="home-container">
            <div className="section-heading">
              <span className="section-kicker">Clientes</span>
              <h2 className="section-title">
                Marcas que confían en nuestro trabajo
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
          <div className="beneficios-container">
            <div className="final-cta-card">
              <div>
                <h2 className="final-cta-title">Contactanos</h2>
                <p className="final-cta-text">
                  Contactanos eligiendo la opcion que mas se ajuste a tus
                  necesidades.
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
