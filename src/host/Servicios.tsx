import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/servicios.css";
import ContactQuick from "../components/ContactQuick";

import outsourcingImage from "../assets/nuestrosservicios/servicos.png";
import transitoryImage from "../assets/inicio/almacenamiento.png";
import trainingImage from "../assets/nuestrosservicios/formacion.png";
import recruitingImage from "../assets/nuestrosservicios/reclutamiento.png";
import repositionImage from "../assets/inicio/Hombre-vegetales-logo-scaled.png";
import customSolutionsImage from "../assets/nuestrosservicios/soluciones.png";
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

const HERO_SLIDE_INTERVAL_MS = 6000;

const SERVICE_SLIDES = [
  {
    image: outsourcingImage,
    title: "SERVICIOS\nOUTSOURCING",
  },
  {
    image: transitoryImage,
    title: "SERVICIOS\nTRANSITORIOS",
  },
  {
    image: trainingImage,
    title: "FORMACIÓN Y\nCAPACITACIÓN",
  },
  {
    image: recruitingImage,
    title: "RECLUTAMIENTO\nY SELECCIÓN",
  },
  {
    image: repositionImage,
    title: "REPOSICIÓN\nMULTIMARCA",
  },
  {
    image: customSolutionsImage,
    title: "SOLUCIONES A\nTU MEDIDA",
  },
];

const STATS = [
  { value: "+10", label: "Años de experiencia" },
  { value: "5", label: "Sucursales a nivel nacional" },
  { value: "+3.500", label: "Trabajadores asociados" },
  { value: "+350", label: "Clientes en Chile" },
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
  { name: "Viña Undurraga", logo: vinaundurraga },
  { name: "Xiaomi", logo: xiaomi },
];

export default function Servicios() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) =>
        (currentIndex + 1) % SERVICE_SLIDES.length
      );
    }, HERO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToPreviousSlide = () => {
    setActiveSlideIndex((currentIndex) =>
      currentIndex === 0 ? SERVICE_SLIDES.length - 1 : currentIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveSlideIndex((currentIndex) =>
      (currentIndex + 1) % SERVICE_SLIDES.length
    );
  };

  const activeSlide = SERVICE_SLIDES[activeSlideIndex];

  const renderClientLogo = (
    client: (typeof CLIENTS)[number],
    keyPrefix = ""
  ) => (
    <div key={`${keyPrefix}${client.name}`} className="servicios-client-card">
      <img src={client.logo} alt={client.name} loading="lazy" />
    </div>
  );

  return (
    <Layout>
      <div className="servicios-page">
        <section className="servicios-hero" aria-label="Servicios Grupo Colchagua">
          <div className="servicios-hero-slider" aria-hidden="true">
            {SERVICE_SLIDES.map((slide, index) => (
              <img
                key={slide.title}
                src={slide.image}
                alt=""
                className={`servicios-hero-image${
                  index === activeSlideIndex
                    ? " servicios-hero-image--active"
                    : ""
                }`}
              />
            ))}
          </div>

          <div className="servicios-overlay" />

          <button
            type="button"
            className="servicios-slider-arrow servicios-slider-arrow--prev"
            onClick={goToPreviousSlide}
            aria-label="Servicio anterior"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 5L8 12l7 7" />
            </svg>
          </button>

          <button
            type="button"
            className="servicios-slider-arrow servicios-slider-arrow--next"
            onClick={goToNextSlide}
            aria-label="Servicio siguiente"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5l7 7l-7 7" />
            </svg>
          </button>

          <div className="servicios-content">
            <h1 className="servicios-title">
              {activeSlide.title.split("\n").map((line, index) => (
                <span key={index} className="servicios-title-line">
                  {line}
                </span>
              ))}
            </h1>

            <div className="servicios-actions">
              <Link to="/trabaja" className="servicios-btn">
                TRABAJA CON NOSOTROS
              </Link>

              <Link
                to="/cotizar"
                className="servicios-btn servicios-btn--secondary"
              >
                COTIZA CON NOSOTROS
              </Link>
            </div>
          </div>
        </section>

        <section className="servicios-difference-section">
          <div className="servicios-container">
            <div className="servicios-difference-card">
              <h2 className="servicios-section-title">
                ¿En qué nos diferenciamos?
              </h2>

              <div className="servicios-difference-copy">
                <p>
                  En un mundo empresarial cada vez más competitivo, optimizar
                  recursos y centrarse en las actividades principales es
                  fundamental para alcanzar el éxito. Nuestro servicio de
                  outsourcing ofrece la solución perfecta para liberar la carga
                  de tareas secundarias y permitirles concentrarse en lo que
                  realmente importa.
                </p>

                <p>
                  Contamos con un equipo altamente capacitado y especializado en
                  una amplia gama de áreas, desde atención al cliente y soporte
                  técnico hasta la gestión administrativa y procesamiento de
                  datos. Nuestra experiencia y conocimiento nos permiten ofrecer
                  servicios de outsourcing personalizados y adaptados a las
                  necesidades específicas de su negocio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="servicios-stats-section">
          <div className="servicios-container">
            <div className="servicios-section-heading">
              <span className="servicios-kicker">Los números hablan</span>
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

        <section className="servicios-clients-section">
          <div className="servicios-container">
            <div className="servicios-section-heading">
              <span className="servicios-kicker">Clientes</span>
              <h2 className="servicios-section-title">Confían en nosotros</h2>
            </div>

            <div className="servicios-clients-marquee" aria-label="Marcas clientes">
              <div className="servicios-clients-marquee__track">
                <div className="servicios-clients-marquee__group">
                  {CLIENTS.map((client) => renderClientLogo(client))}
                </div>

                <div
                  className="servicios-clients-marquee__group"
                  aria-hidden="true"
                >
                  {CLIENTS.map((client) =>
                    renderClientLogo(client, "duplicate-")
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="servicios-team-section">
          <div className="servicios-container">
            <div className="servicios-team-header">
              <span className="servicios-kicker servicios-kicker--light">
                Personas
              </span>
              <h2 className="servicios-section-title servicios-section-title--light">
                NUESTRO EQUIPO
              </h2>
            </div>

            <div className="servicios-team-grid">
              {TEAM_MEMBERS.map((member) => (
                <article key={member.name} className="servicios-team-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="servicios-team-card__image"
                    loading="lazy"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="servicios-final-cta">
          <div className="servicios-container">
            <div className="servicios-final-cta-card">
              <div>
                <h2 className="servicios-final-cta-title">Contáctanos</h2>
                <p className="servicios-final-cta-text">
                  Contáctanos eligiendo la opción que más se ajuste a tus
                  necesidades.
                </p>
              </div>

              <div className="servicios-final-cta-actions">
                <Link to="/cotizar" className="servicios-final-cta-btn">
                  Cotiza con nosotros
                </Link>

                <Link to="/trabaja" className="servicios-final-cta-btn">
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
