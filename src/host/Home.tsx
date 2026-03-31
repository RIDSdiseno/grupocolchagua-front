import { useEffect, useState, useRef } from "react";
import Layout from "../components/Layout";
import "../styles/home.css";

import slide1 from "../assets/inicio/almacenamiento.png";
import slide2 from "../assets/inicio/Hombre-vegetales-logo-scaled.png";
import slide3 from "../assets/inicio/Hombres-cafe.png";
import outsourcing from "../assets/nuestrosservicios/serviciosout.png";
import transitorios from "../assets/inicio/almacenamiento.png";
import capacitacion from "../assets/nuestrosservicios/formacion.png";
import reclutamiento from "../assets/nuestrosservicios/reclutamiento.png";
import reposicion from "../assets/inicio/Hombre-vegetales-logo-scaled.png";
import medida from "../assets/nuestrosservicios/soluciones.png";
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
import persona from "../assets/inicio/loquenosdiferencia.png";
import equipo1 from "../assets/nuestroequipo/image_testimonio_david-300x267-1.png";
import equipo2 from "../assets/nuestroequipo/image_testimonio_ornella-300x267.png";
import equipo3 from "../assets/nuestroequipo/image_testimonio_jonathan-300x267.png";
import equipo4 from "../assets/nuestroequipo/image_testimonio_lillian-300x267.png";
import contactoImg from "../assets/nuestroequipo/fondo_imagen_contactanos_formulario.png";

const SERVICES = [
  {
    id: 1,
    title: "Servicios Outsourcing",
    img: outsourcing,
  },
  {
    id: 2,
    title: "Servicios Transitorios",
    img: transitorios,
  },
  {
    id: 3,
    title: "Formación y Capacitación",
    img: capacitacion,
  },
  {
    id: 4,
    title: "Reclutamiento y selección",
    img: reclutamiento,
  },
  {
    id: 5,
    title: "Reposición Multimarca",
    img: reposicion,
  },
  {
    id: 6,
    title: "Soluciones a tu medida",
    img: medida,
  },
];

const TEAM_IMAGES = [
  { id: 1, image: equipo1, alt: "David Ruz - Gerente de negocios" },
  { id: 2, image: equipo2, alt: "Ornella González - Asistente Contable" },
  { id: 3, image: equipo3, alt: "Jonathan Fernandez - Gerente RRHH" },
  { id: 4, image: equipo4, alt: "Liliana Ulloa - Operaria Paris CD Renca" },
];

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

const STATS = [
  { value: 10, prefix: "+", label: "AÃ±os de experiencia" },
  { value: 5, prefix: "", label: "Sucursales a nivel nacional" },
  { value: 3500, prefix: "+", label: "Trabajadores asociados" },
  { value: 350, prefix: "+", label: "Clientes en Chile" },
];

export default function Home() {
  const slides = [slide1, slide2, slide3];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const [animatedValues, setAnimatedValues] = useState<number[]>(
    STATS.map(() => 0)
  );

  const [hasStartedStats, setHasStartedStats] = useState(false);
  const statsRef = useRef<HTMLElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setHasMoved(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || hasMoved) return;

    const diff = e.clientX - startX;

    if (Math.abs(diff) > 80) {
      if (diff < 0) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }

      setHasMoved(true);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStartedStats) {
          setHasStartedStats(true);
          observer.disconnect();

          const duration = 2000;
          const frameRate = 16;

          const timers = STATS.map((stat, index) => {
            const increment = stat.value / (duration / frameRate);
            let current = 0;

            const timer = window.setInterval(() => {
              current += increment;

              setAnimatedValues((prev) => {
                const updated = [...prev];
                updated[index] =
                  current >= stat.value ? stat.value : Math.ceil(current);
                return updated;
              });

              if (current >= stat.value) {
                clearInterval(timer);
              }
            }, frameRate);

            return timer;
          });

          return () => {
            timers.forEach((timer) => clearInterval(timer));
          };
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasStartedStats]);

  return (
    <Layout>
      <div className="home">
        <section
          className={`hero ${isDragging ? "dragging" : ""}`}
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="hero__overlay" />

          <div className="hero__content">
            <p className="hero__subtitle">
              En Grupo Colchagua ayudamos a las personas a encontrar empleo y a
              las empresas hallar nuevos talentos. Somos la solución más integral
              en Recursos Humanos para tu organización.
            </p>

            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary">
                TRABAJA CON NOSOTROS
              </a>

              <a href="#services" className="btn btn--primary">
                COTIZA CON NOSOTROS
              </a>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">Nuestros Servicios</h2>
              <p className="section-header__desc">
                Contamos con un equipo multidisciplinario listo para acompañarte
                en cada etapa de tu negocio.
              </p>
            </div>

            <div className="services__grid">
              {SERVICES.map((s) => (
                <div key={s.id} className="service-card">
                  <h3 className="service-card__title">{s.title}</h3>

                  <div
                    className="service-card__img"
                    style={{ backgroundImage: `url(${s.img})` }}
                  >
                    <button className="btn-ver">Ver más</button>
                  </div>
                </div>
              ))}
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

        <section ref={statsRef} className="home-stats-section">
          <div className="home-stats-container">
            <h2 className="home-stats-title">LOS NUMEROS HABLAN</h2>

            <div className="home-stats-pill">
              {STATS.map((stat, index) => (
                <div className="home-stat-item" key={index}>
                  <h3 className="home-stat-value">
                    {stat.prefix}
                    {animatedValues[index]}
                  </h3>
                  <p className="home-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="difference-section">
          <div className="difference-container">
            <div className="difference-content">
              <h2 className="difference-title">LO QUE NOS</h2>
              <h2 className="difference-title">DIFERENCIA</h2>

              <h3 className="difference-subtitle">
                Compromiso con la mejora y
                <br />
                la atención a nuestros clientes
              </h3>
            </div>

            <div className="difference-visual">
              <img
                src={persona}
                alt="Trabajador"
                className="difference-person"
              />
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="team-container">
            <div className="team-header">
              <h2 className="team-title">NUESTRO EQUIPO</h2>
            </div>

            <div className="team-grid">
              {TEAM_IMAGES.map((member) => (
                <div className="team-card" key={member.id}>
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="team-card-image"
                  />
                </div>
              ))}
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
      </div>
    </Layout>
  );
}
