import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/postulaciones-cyber.css";
import "../styles/home.css";
import ContactQuick from "../components/ContactQuick";
import HeroPostulaciones from "../components/HeroPostulaciones";
import PostulacionModal from "../components/PostulacionModal";
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

const OFERTAS = [
  {
    logo: walmart,
    empresa: "Walmart",
    tipo: "Servicio Transitorio",
    cargo: "Operarios(as) de Bodega",
    turnos: ["Día", "Noche"],
    comunas: ["Cerrillos", "San Bernardo", "Pudahuel"],
  },
  {
    logo: jumbo,
    empresa: "Jumbo",
    tipo: "Servicio Transitorio",
    cargo: "Reponedores(as) y Cajeros(as)",
    turnos: ["Mañana", "Tarde", "Nocturno"],
    comunas: ["Las Condes", "Providencia", "Ñuñoa"],
  },
  {
    logo: sodimac,
    empresa: "Sodimac",
    tipo: "Outsourcing",
    cargo: "Asesores(as) de Ventas",
    turnos: ["Día", "Tarde"],
    comunas: ["Maipú", "Santiago Centro", "La Florida"],
  },
  {
    logo: paris,
    empresa: "Paris",
    tipo: "Servicio Transitorio",
    cargo: "Vendedores(as) de Sala",
    turnos: ["Mañana", "Tarde"],
    comunas: ["Santiago Centro", "La Florida", "Quilicura"],
  },
  {
    logo: easy,
    empresa: "Easy",
    tipo: "Outsourcing",
    cargo: "Asesores(as) de Ferretería y Jardín",
    turnos: ["Día", "Tarde"],
    comunas: ["Maipú", "Puente Alto", "Pudahuel"],
  },
  {
    logo: ikea,
    empresa: "IKEA",
    tipo: "Servicio Transitorio",
    cargo: "Colaboradores(as) de Tienda",
    turnos: ["Mañana", "Tarde", "Noche"],
    comunas: ["Pudahuel", "Cerrillos", "Maipú"],
  },
  {
    logo: bci,
    empresa: "BCI",
    tipo: "Outsourcing",
    cargo: "Ejecutivos(as) de Atención al Cliente",
    turnos: ["Mañana", "Tarde"],
    comunas: ["Providencia", "Las Condes", "Santiago Centro"],
  },
  {
    logo: starken,
    empresa: "Starken",
    tipo: "Servicio Transitorio",
    cargo: "Operadores(as) de Logística",
    turnos: ["Día", "Noche"],
    comunas: ["San Bernardo", "Pudahuel", "Quilicura"],
  },
  {
    logo: alvi,
    empresa: "Alvi",
    tipo: "Servicio Transitorio",
    cargo: "Reponedores(as) y Auxiliares de Bodega",
    turnos: ["Mañana", "Tarde", "Nocturno"],
    comunas: ["Maipú", "La Florida", "Puente Alto"],
  },
  {
    logo: xiaomi,
    empresa: "Xiaomi",
    tipo: "Outsourcing",
    cargo: "Promotores(as) de Tecnología",
    turnos: ["Mañana", "Tarde"],
    comunas: ["Santiago Centro", "Las Condes", "Providencia"],
  },
  {
    logo: dpsChile,
    empresa: "DPS Chile",
    tipo: "Outsourcing",
    cargo: "Técnicos(as) de Terreno",
    turnos: ["Día"],
    comunas: ["Santiago Centro", "Ñuñoa", "La Reina"],
  },
  {
    logo: espacioRiesco,
    empresa: "Espacio Riesco",
    tipo: "Servicio Transitorio",
    cargo: "Auxiliares de Eventos y Montaje",
    turnos: ["Día", "Noche"],
    comunas: ["Huechuraba", "Vitacura", "Las Condes"],
  },
  {
    logo: ironMountain,
    empresa: "Iron Mountain",
    tipo: "Outsourcing",
    cargo: "Operarios(as) de Gestión Documental",
    turnos: ["Día"],
    comunas: ["Quilicura", "Pudahuel", "Cerrillos"],
  },
  {
    logo: santaIsabel,
    empresa: "Santa Isabel",
    tipo: "Servicio Transitorio",
    cargo: "Cajeros(as) y Reponedores(as)",
    turnos: ["Mañana", "Tarde", "Nocturno"],
    comunas: ["San Miguel", "Macul", "Peñalolén"],
  },
  {
    logo: vinaUndurraga,
    empresa: "Viña Undurraga",
    tipo: "Servicio Transitorio",
    cargo: "Operarios(as) de Producción Vitivinícola",
    turnos: ["Día", "Tarde"],
    comunas: ["Talagante", "Peñaflor", "El Monte"],
  },
];

const PASOS = [
  {
    num: "01",
    title: "Revisa las oportunidades",
    desc: "Conoce las posiciones disponibles y encuentra la que mejor se adapta a tu perfil.",
  },
  {
    num: "02",
    title: "Completa tus datos",
    desc: "Contáctanos con tu información y CV actualizado para iniciar el proceso.",
  },
  {
    num: "03",
    title: "Nuestro equipo te contactará",
    desc: "Un ejecutivo de selección coordinará una entrevista contigo a la brevedad.",
  },
  {
    num: "04",
    title: "Avanza en el proceso laboral",
    desc: "Ingresa a trabajar en una empresa reconocida respaldada por Grupo Colchagua.",
  },
];


function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

type Oferta = (typeof OFERTAS)[0];

export default function Postulaciones() {
  const [ofertaActiva, setOfertaActiva] = useState<Oferta | null>(null);

  return (
    <Layout>
      <div className="lp-page">

        <HeroPostulaciones />

        {/* ── Ofertas destacadas ── */}
        <section className="lp-section lp-ofertas-section" id="ofertas">
          <div className="lp-container">
            

            <div className="lp-ofertas-list" id="oportunidades">
              {OFERTAS.map((oferta) => (
                <div key={oferta.empresa} className="lp-oferta-card">
                  <div className="lp-oferta-card__header">
                    <div className="lp-oferta-card__logo-group">
                      <div className="lp-oferta-card__logo-wrap">
                        <img
                          src={oferta.logo}
                          alt={oferta.empresa}
                          className="lp-oferta-card__logo"
                        />
                      </div>
                      <span className="lp-oferta-card__tipo">{oferta.tipo}</span>
                    </div>
                    <button
                      className="lp-btn-postular"
                      onClick={() => setOfertaActiva(oferta)}
                    >
                      Postular
                    </button>
                  </div>

                  <div className="lp-oferta-card__body">
                    <div className="lp-oferta-card__info">
                      <span className="lp-oferta-card__buscando">Estamos buscando</span>
                      <h3 className="lp-oferta-card__cargo">{oferta.cargo}</h3>
                      <div className="lp-oferta-card__turnos">
                        <span className="lp-oferta-card__sub-label">Turnos</span>
                        <ul className="lp-oferta-card__turnos-list">
                          {oferta.turnos.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lp-oferta-card__zona">
                      <span className="lp-oferta-card__zona-label">
                        <PinIcon />
                        Zona de trabajo
                      </span>
                      <ul className="lp-oferta-card__comunas">
                        {oferta.comunas.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* ── Pasos ── */}
        <section className="lp-section lp-pasos-section">
          <div className="lp-container">
            <div className="lp-section-head">
              <span className="lp-label">¿Cómo postular?</span>
              <h2 className="lp-section-title">
                Cuatro pasos para iniciar tu camino
              </h2>
            </div>
            <div className="lp-pasos">
              {PASOS.map((paso) => (
                <div key={paso.num} className="lp-paso">
                  <div className="lp-paso__num-wrap">
                    <span className="lp-paso__num">{paso.num}</span>
                  </div>
                  <h3 className="lp-paso__title">{paso.title}</h3>
                  <p className="lp-paso__desc">{paso.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Final ── */}
        <section className="section-spacing final-cta-section" id="postular">
          <div className="home-container">
            <div className="final-cta-card">
              <div>
                <h2 className="final-cta-title">Contáctanos</h2>
                <p className="final-cta-text">
                  Contáctanos eligiendo la opción que más se ajuste a tus necesidades.
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

      {ofertaActiva && (
        <PostulacionModal
          oferta={ofertaActiva}
          onClose={() => setOfertaActiva(null)}
        />
      )}
    </Layout>
  );
}
