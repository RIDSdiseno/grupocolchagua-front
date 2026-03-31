import Layout from "../components/Layout";
import "../styles/nosotros.css";
import heroNosotros from "../assets/nuestrosservicios/NOSOTROS.png";
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

export default function Nosotros() {
  return (
    <Layout>
      {/* HERO */}
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
            <a href="#trabaja" className="nosotros-btn">
              TRABAJA CON NOSOTROS
            </a>

            <a href="#cotiza" className="nosotros-btn">
              COTIZA CON NOSOTROS
            </a>
          </div>
        </div>
      </section>

      {/* NUESTRA HISTORIA */}
      <section className="historia-section">
        <div className="historia-container">
          <h2 className="historia-title">NUESTRA HISTORIA</h2>

          <p className="historia-text">
            Desde hace más de 10 años somos una empresa especializada en
            Servicios Transitorios y Outsourcing, enfocados en la contratación
            y gestión de talentos. Nuestro objetivo es brindar soluciones
            integrales a nuestros clientes, proporcionándoles personal
            calificado y comprometido para cubrir sus necesidades.
          </p>

          <p className="historia-text">
            Valoramos la colaboración, la transparencia y la excelencia en
            nuestros servicios. Permitimos ser tu socio confiable en la
            contratación de talentos y juntos alcanzaremos el éxito.
          </p>
        </div>
      </section>

      {/* SERVICIOS INTEGRALES */}
      <section className="servicios-section">
        <div className="servicios-container">
          <div className="servicios-numero">+25</div>

          <div className="servicios-info">
            <h2>SERVICIOS INTEGRALES</h2>
            <p>
              mil trabajadores que se han convertido en nuestros valiosos
              aliados a lo largo de nuestra historia
            </p>
          </div>
        </div>
      </section>

      <section className="promesa-section">
         <div className="promesa-container">
            <h2 className="promesa-title">NUESTRA PROMESA</h2>

            <p className="promesa-text">
            Nos centramos en brindarle resultados excepcionales. Nos comprometemos a
            ofrecer soluciones innovadoras, servicio de calidad y atención
            personalizada. Trabajaremos de la mano para alcanzar sus objetivos y
            superar sus expectativas en cada proyecto.
            </p>

            <div className="promesa-highlight">
            <span className="promesa-numero">+60%</span>
            <p>
                De nuestros trabajadores son mujeres. Estamos comprometidos con el
                trabajo de la MUJER
            </p>
            </div>
          </div>
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
              <img
                src={contactoImg}
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