import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/home.css";
import ContactQuick from "../components/ContactQuick";
import PromoPostulacionesModal from "../components/PromoPostulacionesModal";

import heroImage from "../assets/inicio/almacenamiento.png";
import outsourcingImage from "../assets/nuestrosservicios/serviciosout.png";
import transitoryImage from "../assets/inicio/Hombre-vegetales-logo-scaled.png";
import trainingImage from "../assets/nuestrosservicios/formacion.png";
import recruitingImage from "../assets/nuestrosservicios/reclutamiento.png";
import customSolutionsImage from "../assets/nuestrosservicios/soluciones.png";
import alvi from "../assets/marcas/logo_alvi-150x150.png";
import bci from "../assets/marcas/logo_bci-150x150.png";
import dpsChile from "../assets/marcas/logo_dps_chile-150x150.png";
import easy from "../assets/marcas/logo_easy-150x150.png";
import espacioRiesco from "../assets/marcas/logo_espacio_riesco-150x150.png";
import ikea from "../assets/marcas/logo_ikea-150x150.png";
import ironMountain from "../assets/marcas/logo_iron_mountain-150x150.png";
import jumbo from "../assets/marcas/logo_jumbo-150x150.png";
import paris from "../assets/marcas/logo_paris-150x150.png";
import santaIsabel from "../assets/marcas/logo_santa_isabel-150x150.png";
import sodimac from "../assets/marcas/logo_sodimac-150x150.png";
import starken from "../assets/marcas/logo_starken-3-150x150.png";
import vinaUndurraga from "../assets/marcas/logo_vina_undurraga-150x150.png";
import walmart from "../assets/marcas/logo_walmart.png";
import xiaomi from "../assets/marcas/logo_xiaomi-150x150.png";

type IconName = "bolt" | "shield" | "map" | "support";

type Stat = {
  value: number;
  prefix?: string;
  label: string;
};

const SERVICES = [
  {
    image: outsourcingImage,
    title: "Servicios Outsourcing",
  },
  {
    image: heroImage,
    title: "Servicios Transitorios",
  },
  {
    image: trainingImage,
    title: "Formación y Capacitación",
  },
  {
    image: recruitingImage,
    title: "Reclutamiento y Selección",
  },
  {
    image: transitoryImage,
    title: "Reposición Multimarca",
  },
  {
    image: customSolutionsImage,
    title: "Soluciones a tu medida",
  },
];

const DIFFERENTIATORS = [
  {
    icon: "bolt" as IconName,
    title: "Respuesta ágil",
    description:
      "Activamos equipos rápidamente según tus necesidades operativas.",
  },
  {
    icon: "shield" as IconName,
    title: "Cobertura nacional",
    description:
      "Presencia en distintas zonas del país para acompañar tu operación.",
  },
  {
    icon: "map" as IconName,
    title: "Servicios personalizados",
    description:
      "Soluciones adaptadas a cada cliente y tipo de operación.",
  },
  {
    icon: "support" as IconName,
    title: "Acompañamiento continuo",
    description:
      "Seguimiento constante para asegurar continuidad y resultados.",
  },
];

const STATS = [
  { value: 10, label: "Años de experiencia", prefix: "+" },
  { value: 5, label: "Sucursales a nivel nacional", prefix: "" },
  { value: 3500, label: "Trabajadores asociados", prefix: "+" },
  { value: 350, label: "Clientes en Chile", prefix: "+" },
];

const CLIENTS = [
  { name: "Walmart", logo: walmart },
  { name: "Jumbo", logo: jumbo },
  { name: "Sodimac", logo: sodimac },
  { name: "Paris", logo: paris },
  { name: "Easy", logo: easy },
  { name: "IKEA", logo: ikea },
  { name: "BCI", logo: bci },
  { name: "Starken", logo: starken },
  { name: "Alvi", logo: alvi },
  { name: "Xiaomi", logo: xiaomi },
  { name: "DPS Chile", logo: dpsChile },
  { name: "Espacio Riesco", logo: espacioRiesco },
  { name: "Iron Mountain", logo: ironMountain },
  { name: "Santa Isabel", logo: santaIsabel },
  { name: "Viña Undurraga", logo: vinaUndurraga },
];

function HomeIcon({ name }: { name: IconName }) {
  switch (name) {
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13 2L5 13h5l-1 9l8-11h-5l1-9Z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l7 3v5c0 4.5-2.7 7.7-7 10c-4.3-2.3-7-5.5-7-10V6l7-3Zm-3 9l2 2l4-4" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Zm0-7.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 13v-1a8 8 0 0 1 16 0v1M7 15a2 2 0 0 1-2 2H4v-4h1a2 2 0 0 1 2 2Zm10 0a2 2 0 0 0 2 2h1v-4h-1a2 2 0 0 0-2 2Zm-9 3c1.1 1 2.5 1.5 4 1.5s2.9-.5 4-1.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  const statsRef = useRef<HTMLElement | null>(null);
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    STATS.map(() => 0)
  );

  useEffect(() => {
    const target = statsRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimateStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldAnimateStats) {
      return;
    }

    let frameId = 0;
    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues(
        STATS.map((stat) => Math.round(stat.value * eased))
      );

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [shouldAnimateStats]);

  const formatStatValue = (stat: Stat, index: number) =>
    `${stat.prefix ?? ""}${animatedValues[index].toLocaleString("es-CL")}`;

  const renderClientLogo = (client: (typeof CLIENTS)[number], keyPrefix = "") => (
    <div key={`${keyPrefix}${client.name}`} className="client-logo-card">
      <img src={client.logo} alt={client.name} loading="lazy" />
    </div>
  );

  return (
    <Layout>
      <PromoPostulacionesModal />
      <div className="home">
        <section
          className="hero"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="hero-overlay" />

          <div className="home-container hero-content">
            <div className="hero-copy">
              <h1 className="hero-title">Grupo Colchagua</h1>

              <p className="hero-subtitle">Talento confiable para tu operación</p>

              <p className="hero-description">
                Apoyamos a empresas con servicios transitorios, outsourcing y
                reclutamiento.
              </p>

              <div className="hero-actions">
                <Link to="/cotizar" className="home-button home-button--primary">
                  Cotiza con nosotros
                </Link>

                <Link to="/trabaja" className="home-button home-button--secondary">
                  Trabaja con nosotros
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing services-section" id="services">
          <div className="home-container">
            <div className="services-heading">
              <h2 className="section-title services-title">Nuestros servicios</h2>
            </div>

            <div className="services-grid">
              {SERVICES.map((service) => (
                <Link
                  key={service.title}
                  to="/servicios"
                  className="service-card"
                >
                  <div className="service-card__image-wrap">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-card__image"
                    />
                  </div>

                  <div className="service-card__body">
                    <h3>{service.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing differentiators-section">
          <div className="home-container">
            <div className="section-heading">
              <h2 className="section-title">¿Por qué elegirnos?</h2>
            </div>

            <div className="differentiators-list">
              {DIFFERENTIATORS.map((item) => (
                <article key={item.title} className="differentiator-item">
                  <div className="icon-badge icon-badge--soft">
                    <HomeIcon name={item.icon} />
                  </div>

                  <div className="differentiator-item__content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={statsRef} className="section-spacing stats-section">
          <div className="home-container">
            <div className="section-heading">
              <span className="section-kicker">Los números hablan</span>
              <h2 className="section-title">
                Experiencia operativa convertida en resultados medibles
              </h2>
            </div>

            <div className="stats-grid">
              {STATS.map((stat, index) => (
                <article key={stat.label} className="stat-card">
                  <strong className="stat-card__value">
                    {formatStatValue(stat, index)}
                  </strong>
                  <p className="stat-card__label">{stat.label}</p>
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
          <div className="home-container">
            <div className="final-cta-card">
              <div>
                <h2 className="final-cta-title">
                  Contáctanos
                </h2>
                <p className="final-cta-text">
                  Contáctanos eligiendo la opción que mas se ajuste
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
