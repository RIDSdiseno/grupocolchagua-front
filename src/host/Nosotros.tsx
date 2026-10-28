import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import "../styles/nosotros.css";

const heroNosotros = "https://res.cloudinary.com/dvqpmttci/image/upload/v1792429202/adam-young-90iwrl5pm70-unsplash_3_kj2ghc.jpg";
import transitoryImage from "../assets/inicio/almacenamiento.png";
import outsourcingImage from "../assets/nuestrosservicios/serviciosout.png";

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

const STATS = [
  { target: 10,   label: "años de trayectoria",      prefix: "+", dotted: false },
  { target: 350,  label: "empresas clientes",         prefix: "+", dotted: false },
  { target: 3500, label: "trabajadores asociados",    prefix: "+", dotted: true  },
  { target: 5,    label: "sucursales en Chile",       prefix: "",  dotted: false },
];

function StatCounter({ target, prefix, dotted, started }: { target: number; prefix: string; dotted: boolean; started: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, started]);
  const formatted = dotted ? count.toLocaleString("es-CL") : String(count);
  return <>{prefix}{formatted}</>;
}

const COMO_TRABAJAMOS = [
  {
    title: "Selección rigurosa",
    description:
      "Evaluamos a cada persona más allá de su currículum, para que el perfil calce con lo que realmente necesita cada empresa.",
  },
  {
    title: "Acompañamiento constante",
    description:
      "Hacemos seguimiento a trabajadores y clientes durante todo el servicio, no solo al inicio.",
  },
  {
    title: "Seguridad en terreno",
    description:
      "Contamos con equipo propio de prevención de riesgos, que trabaja junto a cada cliente en sus instalaciones.",
  },
  {
    title: "Orden y cumplimiento",
    description:
      "Contratos, remuneraciones y documentación al día, con el respaldo de un equipo administrativo con más de 10 años de experiencia.",
  },
  {
    title: "Perfiles de todas las áreas",
    description:
      "Desde gerentes y jefes administrativos hasta bodegueros, conductores, operadores de grúa horquilla y técnicos del área de la salud.",
  },
];

const VALORES = [
  { title: "Confianza", description: "Cumplimos lo que prometemos, a clientes y trabajadores." },
  { title: "Orden", description: "Procesos claros y documentación al día." },
  { title: "Cercanía", description: "Conocemos a nuestros clientes y acompañamos a nuestra gente." },
  { title: "Seguridad", description: "El cuidado de cada trabajador es parte del servicio." },
  { title: "Compromiso", description: "Respondemos con rapidez cuando la operación lo necesita." },
];

const AREAS_EQUIPO = [
  { area: "Dirección", descripcion: "Conducción estratégica del grupo y las decisiones que guían el servicio a clientes y trabajadores." },
  { area: "Comercial", descripcion: "Tu primer contacto para cotizar y diseñar la solución que necesita tu empresa." },
  { area: "Operaciones", descripcion: "El equipo que está en terreno, junto a cada cliente, asegurando que el servicio funcione todos los días." },
  { area: "Reclutamiento y Selección", descripcion: "Buscamos, evaluamos y elegimos a las personas que llegan a cada empresa." },
  { area: "Prevención de Riesgos", descripcion: "Cuidamos la seguridad de nuestros trabajadores en cada instalación." },
  { area: "Gestión de Personas", descripcion: "Contratos, remuneraciones y todo lo que nuestros trabajadores necesitan resolver." },
  { area: "Administración y Finanzas", descripcion: "Gestión contable, presupuestaria y financiera de ambas marcas del grupo." },
  { area: "Logística y Servicios Generales", descripcion: "Uniformes, implementos y la atención en nuestras oficinas." },
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

export default function Nosotros() {
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <title>Quiénes Somos | Grupo Colchagua y Grupo Santa Cruz</title>
      <meta name="description" content="Más de 10 años entregando soluciones de personal a empresas en Chile. Grupo Colchagua en Servicios Transitorios y Grupo Santa Cruz en Outsourcing." />
      <meta property="og:title" content="Quiénes Somos | Grupo Colchagua y Grupo Santa Cruz" />
      <meta property="og:description" content="Más de 10 años entregando soluciones de personal a empresas en Chile. Grupo Colchagua en Servicios Transitorios y Grupo Santa Cruz en Outsourcing." />
      <meta property="og:image" content="https://grupocolchagua.cl/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    <Layout>
      <div className="nosotros-page">

        {/* 1. Hero */}
        <section className="nosotros-hero">
          <img src={heroNosotros} alt="Equipo Grupo Colchagua" className="nosotros-hero-image" />
          <div className="nosotros-overlay" />
          <div className="nosotros-content">
            <span className="nosotros-hero-kicker">Nosotros</span>
            <h1 className="nosotros-title">Dos especialidades.<br />Un mismo aliado.</h1>
            <p className="nosotros-hero-copy">
              Somos Grupo Colchagua y Grupo Santa Cruz, dos marcas de un mismo grupo empresarial chileno que, desde hace más de 10 años, ayuda a las empresas a contar con las personas que su operación necesita.
            </p>
          </div>
        </section>

        {/* 2. Quiénes somos */}
        <section className="historia-section">
          <div className="nosotros-container nosotros-info-layout">
            <article className="historia-card">
              <span className="section-kicker">Quiénes somos</span>
              <h2 className="section-title">Un grupo, dos especialidades</h2>
              <div className="historia-copy">
                <p>
                  Nacimos con un propósito simple: que las empresas puedan confiar en un aliado serio para gestionar a las personas que hacen funcionar su operación.
                </p>
                <p>
                  Hoy trabajamos a través de dos marcas, cada una especializada en una forma distinta de apoyar a nuestros clientes. Grupo Colchagua se dedica a los Servicios Transitorios, y Grupo Santa Cruz al Outsourcing gerencial, administrativo y operativo. Son parte del mismo grupo y comparten equipo, estándares y forma de trabajar, así que cada cliente encuentra en un solo lugar la solución que mejor se ajusta a lo que necesita.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* 3. Cifras */}
        <section className="nosotros-stats-section" ref={statsRef}>
          <div className="nosotros-stats-grid">
            {STATS.map((stat) => (
              <article key={stat.label} className="nosotros-stat-card">
                <strong className="nosotros-stat-value">
                  <StatCounter target={stat.target} prefix={stat.prefix} dotted={stat.dotted} started={statsStarted} />
                </strong>
                <p className="nosotros-stat-label">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Dos especialidades */}
        <section className="nosotros-especialidades-section">
          <div className="nosotros-container">
            <div className="section-heading">
              <span className="section-kicker">Nuestras dos especialidades</span>
            </div>
            <div className="nosotros-especialidades-grid">
              <article className="nosotros-especialidad-card">
                <div className="nosotros-especialidad-image-wrap">
                  <img src={transitoryImage} alt="Servicios Transitorios" className="nosotros-especialidad-image" />
                  <div className="nosotros-especialidad-overlay" />
                </div>
                <div className="nosotros-especialidad-body">
                  <span className="section-kicker">Grupo Colchagua</span>
                  <h3 className="nosotros-especialidad-title">Servicios Transitorios</h3>
                  <p className="nosotros-especialidad-desc">
                    Personal para cubrir peaks de demanda, reemplazos, temporadas altas y proyectos específicos, con la rapidez y el respaldo legal que exige la normativa vigente.
                  </p>
                  <Link to="/servicios/servicios-transitorios" className="nosotros-btn nosotros-especialidad-btn">
                    Conoce Servicios Transitorios
                  </Link>
                </div>
              </article>

              <article className="nosotros-especialidad-card">
                <div className="nosotros-especialidad-image-wrap">
                  <img src={outsourcingImage} alt="Outsourcing" className="nosotros-especialidad-image" />
                  <div className="nosotros-especialidad-overlay" />
                </div>
                <div className="nosotros-especialidad-body">
                  <span className="section-kicker">Grupo Santa Cruz</span>
                  <h3 className="nosotros-especialidad-title">Outsourcing</h3>
                  <p className="nosotros-especialidad-desc">
                    Externalización de funciones gerenciales, administrativas y operativas, para que tu empresa se concentre en su negocio mientras nosotros gestionamos los procesos y las personas.
                  </p>
                  <Link to="/servicios/outsourcing" className="nosotros-btn nosotros-especialidad-btn">
                    Conoce Outsourcing
                  </Link>
                </div>
              </article>
            </div>
            <p className="nosotros-especialidades-cierre">
              Además, complementamos ambas especialidades con Reclutamiento y Selección, Formación y Capacitación, Payroll y Reposición Multimarca.
            </p>
          </div>
        </section>

        {/* 5. Cómo trabajamos */}
        <section className="nosotros-como-section">
          <div className="nosotros-container">
            <div className="nosotros-como-inner">
              <div className="section-heading">
                <span className="section-kicker">Cómo trabajamos</span>
                <h2 className="section-title">Lo que nos distingue</h2>
              </div>
              <div className="nosotros-como-grid">
                {COMO_TRABAJAMOS.map((item, i) => (
                  <article key={item.title} className="nosotros-como-card">
                    <span className="nosotros-como-num">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="nosotros-como-title">{item.title}</h3>
                    <p className="nosotros-como-desc">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Misión, Visión y Valores */}
        <section className="nosotros-mvv-section">
          <div className="nosotros-container">
            <div className="section-heading">
              <span className="section-kicker">Propósito</span>
              <h2 className="section-title">Misión, visión y valores</h2>
            </div>
            <div className="nosotros-mvv-grid">
              <article className="nosotros-purpose-card">
                <span className="section-kicker">Misión</span>
                <p className="nosotros-mvv-text">
                  Conectar a las empresas con las personas que su operación necesita, con un servicio serio, ordenado y cercano, que dé tranquilidad tanto al cliente como al trabajador.
                </p>
              </article>
              <article className="nosotros-purpose-card">
                <span className="section-kicker">Visión</span>
                <p className="nosotros-mvv-text">
                  Ser el aliado de referencia en gestión de personas para las empresas en Chile, reconocido por la confianza y la continuidad de sus relaciones.
                </p>
              </article>
              <article className="nosotros-purpose-card nosotros-valores-card">
                <span className="section-kicker">Valores</span>
                <div className="nosotros-valores-grid">
                  {VALORES.map((v) => (
                    <div key={v.title} className="nosotros-valor-item">
                      <strong>{v.title}</strong>
                      <p>{v.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 7. Nuestro equipo */}
        <section className="nosotros-equipo-section">
          <div className="nosotros-container">
            <div className="section-heading">
              <span className="section-kicker">Nuestro equipo</span>
              <h2 className="section-title">Nuestro equipo</h2>
              <p className="difference-text">
                Detrás de cada trabajador que llega a una empresa hay un equipo que lo selecciona, lo acompaña y lo cuida.
              </p>
            </div>
            <div className="nosotros-areas-grid">
              {AREAS_EQUIPO.map((item) => (
                <article key={item.area} className="nosotros-area-card">
                  <h3 className="nosotros-area-name">{item.area}</h3>
                  {item.descripcion && <p className="nosotros-area-desc">{item.descripcion}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Presencia */}
        <section className="nosotros-presencia-section">
          <div className="nosotros-container">
            <div className="nosotros-presencia-card">
              <span className="section-kicker section-kicker--light">Presencia</span>
              <h2 className="section-title section-title--light">Estamos cerca de tu operación</h2>
              <p className="nosotros-presencia-text">
                Contamos con 5 sucursales para atender a nuestros clientes a lo largo de Chile.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Clientes */}
        <section className="brands-section">
          <div className="nosotros-container">
            <div className="brands-heading">
              <span className="section-kicker">Clientes</span>
              <h2 className="section-title">Empresas que confían en nosotros</h2>
            </div>
            <div className="clients-marquee" aria-label="Marcas clientes">
              <div className="clients-marquee__track">
                <div className="clients-marquee__group">
                  {CLIENTS.map((c) => (
                    <div key={c.name} className="client-logo-card">
                      <img src={c.logo} alt={c.name} loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="clients-marquee__group" aria-hidden="true">
                  {CLIENTS.map((c) => (
                    <div key={`dup-${c.name}`} className="client-logo-card">
                      <img src={c.logo} alt={c.name} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Cierre CTA */}
        <section className="section-spacing final-cta-section">
          <div className="nosotros-container">
            <div className="final-cta-card">
              <h2 className="final-cta-title">¿Conversamos?</h2>
              <div className="nosotros-cta-split">
                <div className="nosotros-cta-col">
                  <p className="nosotros-cta-col-text">¿Necesitas personal o quieres externalizar procesos?</p>
                  <Link to="/contacto" className="nosotros-btn nosotros-cta-btn">
                    Cotiza aquí
                  </Link>
                </div>
                <div className="nosotros-cta-divider" aria-hidden="true" />
                <div className="nosotros-cta-col">
                  <p className="nosotros-cta-col-text">¿Buscas trabajo?</p>
                  <Link to="/bolsa-de-trabajo" className="nosotros-btn nosotros-cta-btn">
                    Ver ofertas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
    </>
  );
}
