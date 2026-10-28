import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/servicios.css";

import outsourcingImage from "../assets/nuestrosservicios/servicos.png";
import transitoryImage from "../assets/inicio/almacenamiento.png";
import trainingImage from "../assets/nuestrosservicios/formacion.png";
import recruitingImage from "../assets/nuestrosservicios/reclutamiento.png";
import repositionImage from "../assets/inicio/Hombre-vegetales-logo-scaled.png";
import customSolutionsImage from "../assets/nuestrosservicios/soluciones.png";

type ServicioConfig = {
  titulo: string;
  descripcion: string;
  image: string;
  beneficios: string[];
  seoTitle: string;
  seoDesc: string;
};

const SERVICIOS: Record<string, ServicioConfig> = {
  outsourcing: {
    titulo: "Servicios Outsourcing",
    descripcion:
      "Apoyamos a empresas en la gestión de equipos externos para mejorar la continuidad operacional, eficiencia y productividad.",
    image: outsourcingImage,
    beneficios: [
      "Gestión operativa de equipos externos.",
      "Continuidad para procesos clave del negocio.",
      "Seguimiento y coordinación permanente del servicio.",
    ],
    seoTitle: "Outsourcing de Personal en Chile | Grupo Santa Cruz",
    seoDesc: "Outsourcing gerencial, administrativo y operativo para que tu empresa se enfoque en su negocio. Más de 10 años de trayectoria. Cotiza con Grupo Santa Cruz.",
  },
  "servicios-transitorios": {
    titulo: "Servicios Transitorios",
    descripcion:
      "Entregamos soluciones ágiles para cubrir necesidades temporales de personal, reemplazos, aumentos de demanda o proyectos específicos.",
    image: transitoryImage,
    beneficios: [
      "Respuesta rápida ante necesidades temporales.",
      "Apoyo en reemplazos, temporadas altas y contingencias.",
      "Dotación alineada a los requerimientos de cada operación.",
    ],
    seoTitle: "Servicios Transitorios en Chile | Grupo Colchagua",
    seoDesc: "Personal transitorio para cubrir peaks de demanda, reemplazos y proyectos. Más de 10 años y 350 empresas clientes en todo Chile. Cotiza con Grupo Colchagua.",
  },
  "formacion-y-capacitacion": {
    titulo: "Formación y Capacitación",
    descripcion:
      "Diseñamos programas de capacitación orientados al desarrollo de competencias laborales y mejora del desempeño de los equipos.",
    image: trainingImage,
    beneficios: [
      "Programas ajustados a necesidades laborales concretas.",
      "Desarrollo de competencias para equipos operativos.",
      "Enfoque en desempeño, seguridad y mejora continua.",
    ],
    seoTitle: "Formación y Capacitación Laboral | Grupo Colchagua",
    seoDesc: "Programas de formación y capacitación para equipos operativos y administrativos, alineados a las necesidades de cada empresa cliente. Conoce cómo trabajamos.",
  },
  "reclutamiento-y-seleccion": {
    titulo: "Reclutamiento y Selección",
    descripcion:
      "Acompañamos a las empresas en la búsqueda, evaluación y selección de talento adecuado para sus necesidades operativas y estratégicas.",
    image: recruitingImage,
    beneficios: [
      "Búsqueda de perfiles alineados al cargo.",
      "Evaluación de candidatos según requerimientos del cliente.",
      "Acompañamiento durante el proceso de selección.",
    ],
    seoTitle: "Reclutamiento y Selección de Personal | Grupo Colchagua",
    seoDesc: "Encontramos a las personas que tu empresa necesita, desde cargos administrativos hasta operaciones y logística. Procesos ágiles y con respaldo. Conversemos.",
  },
  payroll: {
    titulo: "Payroll y Remuneraciones",
    descripcion:
      "Externalizamos el cálculo y pago de remuneraciones con un equipo especializado, asegurando orden, cumplimiento y tranquilidad para tu área de personas.",
    image: customSolutionsImage,
    beneficios: [
      "Cálculo preciso y oportuno de remuneraciones.",
      "Cumplimiento de obligaciones laborales y previsionales.",
      "Liberación de carga administrativa para el área de personas.",
    ],
    seoTitle: "Payroll y Gestión de Remuneraciones | Grupo Colchagua",
    seoDesc: "Externaliza el cálculo y pago de remuneraciones con un equipo especializado. Orden, cumplimiento y tranquilidad para tu área de personas. Cotiza aquí.",
  },
  "reposicion-multimarca": {
    titulo: "Reposición Multimarca",
    descripcion:
      "Gestionamos equipos de reposición en distintos puntos de venta, apoyando la correcta exhibición, disponibilidad y presencia de productos.",
    image: repositionImage,
    beneficios: [
      "Cobertura en puntos de venta según operación.",
      "Apoyo en disponibilidad y exhibición de productos.",
      "Coordinación de equipos en terreno.",
    ],
    seoTitle: "Reposición Multimarca en Retail | Grupo Colchagua",
    seoDesc: "Personal de reposición en punto de venta para una o varias marcas, para que tus productos estén siempre disponibles y bien exhibidos. Cotiza con nosotros.",
  },
  "soluciones-a-tu-medida": {
    titulo: "Soluciones a tu medida",
    descripcion:
      "Desarrollamos soluciones flexibles según los requerimientos específicos de cada cliente, adaptándonos a su operación y objetivos.",
    image: customSolutionsImage,
    beneficios: [
      "Diseño de servicios según el contexto del cliente.",
      "Flexibilidad para operaciones de distinta escala.",
      "Acompañamiento para definir la solución más adecuada.",
    ],
    seoTitle: "Soluciones a tu Medida | Grupo Colchagua",
    seoDesc: "Diseñamos soluciones flexibles de personal según los requerimientos específicos de cada empresa. Adaptadas a tu operación y objetivos. Conversemos.",
  },
};

export default function ServicioDetalle() {
  const { slug } = useParams();
  const servicio = slug ? SERVICIOS[slug] : null;

  if (!servicio) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <>
      <title>{servicio.seoTitle}</title>
      <meta name="description" content={servicio.seoDesc} />
      <meta property="og:title" content={servicio.seoTitle} />
      <meta property="og:description" content={servicio.seoDesc} />
      <meta property="og:image" content="https://grupocolchagua.cl/og-image.png" />
    <Layout>
      <div className="servicios-page servicio-detalle-page">
        <section className="servicio-detalle-hero">
          <img
            src={servicio.image}
            alt={servicio.titulo}
            className="servicio-detalle-hero__image"
          />
          <div className="servicio-detalle-hero__overlay" />
          <div className="servicios-container servicio-detalle-hero__content">
            <span className="servicios-hero-kicker">Servicio</span>
            <h1 className="servicios-title">
              <span className="servicios-title-line">{servicio.titulo}</span>
            </h1>
            <p className="servicios-hero-copy">{servicio.descripcion}</p>
          </div>
        </section>

        <section className="servicio-detalle-section">
          <div className="servicios-container servicio-detalle-layout">
            <div className="servicio-detalle-copy">
              <span className="servicios-kicker">Enfoque</span>
              <h2 className="servicios-section-title">
                Un servicio pensado para empresas
              </h2>
              <p>
                Trabajamos con una mirada práctica y cercana, orientada a
                responder a los requerimientos de cada cliente con orden,
                coordinación y continuidad.
              </p>
            </div>

            <div className="servicio-detalle-benefits">
              {servicio.beneficios.map((beneficio) => (
                <article key={beneficio} className="servicio-detalle-benefit">
                  <span aria-hidden="true" />
                  <p>{beneficio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="servicios-final-cta">
          <div className="servicios-container">
            <div className="servicios-final-cta-card">
              <div>
                <h2 className="servicios-final-cta-title">
                  ¿Necesitas este servicio para tu empresa?
                </h2>
                <p className="servicios-final-cta-text">
                  Conversemos sobre tus requerimientos y encontremos la mejor
                  solución para tu operación.
                </p>
              </div>

              <div className="servicios-final-cta-actions">
                <Link to="/contacto" className="servicios-final-cta-btn">
                  Cotiza con nosotros
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
    </>
  );
}
