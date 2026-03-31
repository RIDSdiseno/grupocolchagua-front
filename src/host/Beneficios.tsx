import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/beneficios.css";
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
import contactoImg from "../assets/nuestroequipo/fondo_imagen_contactanos_formulario.png";

const BRANDS = [
  santaisabel,
  jumbo,
  easy,
  paris,
  bci,
  dps,
  sodimac,
  alvi,
  starken,
  ikea,
  walmart,
  espacio,
  ironmount,
  vinaundurraga,
  xiaomi,
];

type TalanaModalKey = "acceso" | "uso" | "club" | "terminos" | null;

const TALANA_MODAL_CONTENT: Record<Exclude<TalanaModalKey, null>, string> = {
  acceso:
    "Los administradores de la plataforma pueden acceder a través del menú de módulos, opción Club Talana. Además, pueden hacerlo a través de la sección Beneficios del módulo de Comunicaciones. Los Colaboradores acceden al Club Talana a través de la sección Beneficios del portal del Trabajador desde mi Talana o desde la aplicación Talana Next.",

  uso:
    "Es muy fácil aprovechar los beneficios. Para conocer un beneficio específico, el usuario debe primero abrirlo desde el Club Talana haciendo clic en su imagen. Para usarlo, usuario debe hacer clic en el botón usar beneficio, el cual abrirá la página web correspondiente a los descuentos online o desplegará la tarjeta Club Talana para las compras presenciales.",

  club:
    "Es una sección donde todos los clientes y usuarios de Talana pueden acceder a promociones y descuentos en diferentes categorías: Deporte, Salud, Finanzas, Alimentación, entre otros.",

  terminos:
    "Las ofertas, ventas, descuentos y beneficios, así como la disponibilidad, garantía, servicio y calidad del producto o servicio promocionado, serán de única y exclusiva responsabilidad del Comercio Oferente.",
};

export default function Beneficios() {
  const [activeModal, setActiveModal] = useState<TalanaModalKey>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <Layout>
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
            <a href="#trabaja" className="beneficios-btn">
              TRABAJA CON NOSOTROS
            </a>

            <a href="#cotiza" className="beneficios-btn">
              COTIZA CON NOSOTROS
            </a>
          </div>
        </div>
      </section>

      <section className="talana-section">
        <div className="talana-container">
          <img src={talana} alt="Talana" className="talana-logo" />

          <p className="talana-text">
            Grupo Colchagua tiene convenio con la plataforma digital de Recursos
            Humanos Talana, gracias a esto, todo colaborador tendrá de manera
            automática y sin costo alguno, todos los beneficios que Club Talana
            ofrece, logrando satisfacer a nuestros trabajadores con los mejores
            descuentos, ofertas, promociones y más de gran cantidad de tiendas y
            servicios.
          </p>

          <div className="talana-buttons">
            <button type="button" onClick={() => setActiveModal("acceso")}>
              ¿Cómo acceder a club Talana?
            </button>

            <button type="button" onClick={() => setActiveModal("uso")}>
              ¿Cómo se usan los beneficios?
            </button>

            <button type="button" onClick={() => setActiveModal("club")}>
              ¿Qué es Club Talana?
            </button>

            <button type="button" onClick={() => setActiveModal("terminos")}>
              Términos y condiciones
            </button>

            <button type="button" className="talana-main-btn">
              Ver beneficios
            </button>
          </div>
        </div>

        {activeModal && (
          <div className="talana-modal-overlay" onClick={closeModal}>
            <div className="talana-modal" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="talana-modal-close"
                onClick={closeModal}
                aria-label="Cerrar modal"
              >
                ×
              </button>

              <p className="talana-modal-text">
                {TALANA_MODAL_CONTENT[activeModal]}
              </p>
            </div>
          </div>
        )}
      </section>
        <section className="brands">
          <div className="container">
            <div className="section-header brands-header">
              <h2 className="section-header__title">CONFÍAN EN</h2>
              <h2 className="section-header__title">NOSOTROS</h2>
              <p className="section-header__desc">
                Nuestros clientes coní­an en nosotros y nos reconocen por el valor
                agregado que siempre entregamos en cada uno de nuestros servicios.
              </p>
            </div>

            <div className="brands-slider">
              <div className="brands-track">
                {[...BRANDS, ...BRANDS].map((logo, index) => (
                  <div key={index} className="brand-item">
                    <img src={logo} alt={`Marca ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="contact-options-section">
            <div className="contact-options-container">
                <div className="contact-options-visual">
                    <img src={contactoImg} 
                    alt="Opciones de contacto Grupo Colchagua"
                    className="contact-options-image"
                     />

                <a href="#services" className="contact-floating-btn contact-btn-left">
                Cotiza con nosotros
              </a>

              <a href="#contact" className="contact-floating-btn contact-btn-right">
                Trabaja con nosotros
              </a>
                </div>
            </div>

        </section>
    </Layout>
  );
}