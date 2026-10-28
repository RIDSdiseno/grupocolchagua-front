import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/contacto.css";
import ContactQuick from "../components/ContactQuick";
import { enviarContacto } from "../services/contacto.service";

import heroContacto from "../assets/logo/fondo_pagina_contacto.png";
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

const SERVICIOS = [
  "Servicios Transitorios",
  "Outsourcing",
  "Reclutamiento y Selección",
  "Formación y Capacitación",
  "Payroll",
  "Reposición Multimarca",
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contacto() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      await enviarContacto({
        nombre: data.get("nombre") as string,
        empresa: (data.get("empresa") as string) || undefined,
        email: data.get("email") as string,
        telefono: (data.get("telefono") as string) || undefined,
        servicio: (data.get("servicio") as string) || undefined,
        mensaje: data.get("mensaje") as string,
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error al enviar el mensaje.");
    }
  };

  return (
    <>
      <title>Contacto | Grupo Colchagua y Grupo Santa Cruz</title>
      <meta name="description" content="Contáctanos para cotizar servicios transitorios, outsourcing, reclutamiento y selección o formación y capacitación para tu empresa." />
      <meta property="og:title" content="Contacto | Grupo Colchagua y Grupo Santa Cruz" />
      <meta property="og:description" content="Contáctanos para cotizar servicios transitorios, outsourcing, reclutamiento y selección o formación y capacitación para tu empresa." />
      <meta property="og:image" content="https://grupocolchagua.cl/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    <Layout>
      <section className="contacto-hero">
        <img
          src={heroContacto}
          alt="Contacto Grupo Colchagua"
          className="contacto-hero-image"
        />

        <div className="contacto-overlay" />

        <div className="contacto-content">
          <h1 className="contacto-hero-title">CONTÁCTANOS</h1>
          <div className="contacto-actions">
            <Link to="/postulaciones" className="contacto-btn">
              TRABAJA CON NOSOTROS
            </Link>

            <Link to="/cotizar" className="contacto-btn">
              COTIZA CON NOSOTROS
            </Link>
          </div>
        </div>
      </section>

      <section className="contacto-intro">
        <div className="contacto-intro-container">
          <h2 className="contacto-intro-title">
            CONTACTATE CON
            <br />
            GRUPO COLCHAGUA
          </h2>
          <p className="contacto-intro-text">
            ¿Quieres contactarte con Grupo Colchagua? ven a nuestras oficinas en el
            horario y los días de atención señalados, puedes escribirnos a nuestro
            correo o llamarnos a nuestro teléfono. Si tienes alguna duda como
            postulante o empresa, también puedes llenar el formulario que esta al
            final de la página y te contestaremos a la brevedad.
          </p>
        </div>
      </section>

      <section className="contacto-info-box">
        <div className="contacto-info-box__inner">
          <div className="contacto-info-box__left">
            <p className="contacto-info-box__lead">
              Envianos tu solicitud completando el formulario de contacto
              <br />
              Trabajaremos en la mejor propuesta para cumplir tus objetivo,
              nosotros nos haremos cargo del resto.
            </p>
            <h3 className="contacto-info-box__schedule">
              Lunes a Viernes 09:00 A 18:00
            </h3>
            <div className="contacto-info-box__content">
              <p>
                <strong>Casa matriz</strong>
                <br />
                Reclutamiento &amp; Selección &amp; Operaciones,
                <br />
                Herrera 345, Santiago.
              </p>
              <p>
                <strong>Santiago Centro</strong>
                <br />
                RRHH &amp; Administración &amp; Finanzas, Erasmo
                <br />
                Escala 2313, Santiago.
              </p>
              <p>Contacto@grupocolchagua.cl</p>
            </div>
          </div>

          <div className="contacto-info-box__right">
            <div className="contacto-map-card">
              <iframe
                title="Mapa Herrera 345 Santiago"
                src="https://www.google.com/maps?q=Herrera+345,+Santiago,+Chile&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contacto-map-card">
              <iframe
                title="Mapa Erasmo Escala 2313 Santiago"
                src="https://www.google.com/maps?q=Erasmo+Escala+2313,+Santiago,+Chile&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contacto-brands section-spacing clients-section">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-kicker">Clientes</span>
            <h2 className="section-title">
              Marcas que confían en nuestro trabajo
            </h2>
          </div>

          <div
            className="clients-marquee"
            aria-label="Marcas clientes"
          >
            <div className="clients-marquee__track">
              <div className="clients-marquee__group">
                {BRANDS.map((logo, index) => (
                  <div
                    key={`brand-${index}`}
                    className="client-logo-card"
                  >
                    <img
                      src={logo}
                      alt={`Marca ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="clients-marquee__group" aria-hidden="true">
                {BRANDS.map((logo, index) => (
                  <div
                    key={`brand-duplicate-${index}`}
                    className="client-logo-card"
                  >
                    <img src={logo} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing final-cta-section">
        <div className="home-container">
          <div className="final-cta-card">
            <div>
              <h2 className="final-cta-title">Contáctanos</h2>
              <p className="final-cta-text">
                Contáctanos eligiendo la opción que mas se ajuste a tus
                necesidades.
              </p>
            </div>

            <div className="cta-buttons">
              <Link to="/cotizar" className="home-button home-button--white">
                Cotiza con nosotros
              </Link>

              <Link to="/postulaciones" className="home-button home-button--white">
                Trabaja con nosotros
              </Link>
            </div>
            <ContactQuick />
          </div>
        </div>
      </section>

      <section className="contacto-form-section section-spacing">
        <div className="home-container">
          <div className="contacto-form-header">
            <span className="section-kicker">Escríbenos</span>
            <h2 className="section-title">Envíanos tu consulta</h2>
            <p className="contacto-form-lead">
              Completa el formulario y te responderemos a la brevedad.
            </p>
          </div>

          {status === "success" ? (
            <div className="contacto-form-success" role="status">
              <strong>¡Mensaje enviado!</strong> Nos contactaremos contigo pronto.
            </div>
          ) : (
            <form className="cotizar-form contacto-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre *"
                    aria-label="Nombre"
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Empresa"
                    aria-label="Empresa"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    aria-label="Email"
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    aria-label="Teléfono"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <select name="servicio" aria-label="Servicio de interés" className="contacto-select">
                    <option value="">Servicio de interés</option>
                    {SERVICIOS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <textarea
                    name="mensaje"
                    placeholder="Mensaje *"
                    aria-label="Mensaje"
                    rows={3}
                    required
                    onInput={(e) => {
                      const t = e.target as HTMLTextAreaElement;
                      t.style.height = "auto";
                      t.style.height = t.scrollHeight + "px";
                    }}
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="field-error" role="alert">{errorMsg}</p>
              )}

              <div className="cotizar-actions">
                <button
                  type="submit"
                  className="cotizar-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Enviando…" : "Enviar mensaje"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </Layout>
    </>
  );
}
