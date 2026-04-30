import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/servicios.css";
import ContactQuick from "../components/ContactQuick";

import heroImage from "../assets/nuestrosservicios/serviciosout.png";
import outsourcingImage from "../assets/nuestrosservicios/servicos.png";
import transitoryImage from "../assets/inicio/almacenamiento.png";
import trainingImage from "../assets/nuestrosservicios/formacion.png";
import recruitingImage from "../assets/nuestrosservicios/reclutamiento.png";
import repositionImage from "../assets/inicio/Hombre-vegetales-logo-scaled.png";
import customSolutionsImage from "../assets/nuestrosservicios/soluciones.png";

const SERVICES = [
  {
    id: "outsourcing",
    path: "/servicios/outsourcing",
    image: outsourcingImage,
    title: "Outsourcing",
    description:
      "Administramos procesos operativos con equipos preparados, seguimiento continuo y foco en continuidad del servicio.",
  },
  {
    id: "servicios-transitorios",
    path: "/servicios/servicios-transitorios",
    image: transitoryImage,
    title: "Servicios Transitorios",
    description:
      "Apoyamos necesidades temporales de dotación para cubrir reemplazos, temporadas altas y proyectos específicos.",
  },
  {
    id: "formacion",
    path: "/servicios/formacion-capacitacion",
    image: trainingImage,
    title: "Formación y Capacitación",
    description:
      "Fortalecemos competencias laborales con programas orientados a desempeño, seguridad y mejora continua.",
  },
  {
    id: "reclutamiento",
    path: "/servicios/reclutamiento-seleccion",
    image: recruitingImage,
    title: "Reclutamiento y Selección",
    description:
      "Buscamos y evaluamos talento alineado al cargo, la cultura y las necesidades de cada empresa.",
  },
  {
    id: "reposicion",
    path: "/servicios/reposicion-multimarca",
    image: repositionImage,
    title: "Reposición Multimarca",
    description:
      "Apoyamos la continuidad comercial en salas de venta con equipos coordinados y seguimiento operativo.",
  },
  {
    id: "soluciones",
    path: "/servicios/soluciones-a-tu-medida",
    image: customSolutionsImage,
    title: "Soluciones a tu medida",
    description:
      "Diseñamos servicios adaptados al tamaño, ritmo y objetivos de cada operación.",
  },
];

const STATS = [
  { value: "+10", label: "Años de experiencia" },
  { value: "5", label: "Sucursales a nivel nacional" },
  { value: "+3.500", label: "Trabajadores asociados" },
  { value: "+350", label: "Clientes en Chile" },
];

export default function Servicios() {
  return (
    <Layout>
      <div className="servicios-page">
        <section className="servicios-hero servicios-hero--static">
          <img
            src={heroImage}
            alt="Equipo operativo de Grupo Colchagua"
            className="servicios-hero-image servicios-hero-image--active"
          />
          <div className="servicios-overlay" />

          <div className="servicios-content">
            <span className="servicios-hero-kicker">Servicios</span>
            <h1 className="servicios-title">
              <span className="servicios-title-line">Servicios para empresas</span>
            </h1>
            <p className="servicios-hero-copy">
              Soluciones de recursos humanos para apoyar la operación, la
              continuidad y el crecimiento de tu organización.
            </p>
            <div className="servicios-actions">
              <Link to="/cotizar" className="servicios-btn servicios-btn--secondary">
                Cotiza con nosotros
              </Link>
            </div>
          </div>
        </section>

        <section className="servicios-services-section">
          <div className="servicios-container">
            <div className="servicios-section-heading">
              <span className="servicios-kicker">Nuestros servicios</span>
              <h2 className="servicios-section-title">
                Apoyo especializado para tu operación
              </h2>
            </div>

            <div className="servicios-service-grid">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  id={service.id}
                  to={service.path}
                  className="servicios-service-card"
                >
                  <img src={service.image} alt="" loading="lazy" />
                  <div className="servicios-service-card__body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="servicios-stats-section">
          <div className="servicios-container">
            <div className="servicios-section-heading">
              <span className="servicios-kicker">Respaldo</span>
              <h2 className="servicios-section-title">
                Experiencia operativa convertida en resultados medibles
              </h2>
            </div>

            <div className="servicios-stats-grid">
              {STATS.map((stat) => (
                <article key={stat.label} className="servicios-stat-card">
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="servicios-final-cta">
          <div className="servicios-container">
            <div className="servicios-final-cta-card">
              <div>
                <h2 className="servicios-final-cta-title">Conversemos</h2>
                <p className="servicios-final-cta-text">
                  Cuéntanos qué necesita tu empresa y te orientamos con la
                  solución más adecuada.
                </p>
              </div>

              <div className="servicios-final-cta-actions">
                <Link to="/cotizar" className="servicios-final-cta-btn">
                  Cotiza con nosotros
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
