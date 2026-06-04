import { useState, useEffect } from "react";
import { enviarPostulacion } from "../services/postulaciones.service";
import { type Empleo } from "../services/empleos.service";
import "../styles/postulacion-modal.css";

function formatRut(value: string): string {
  const clean = value.replace(/[^0-9kK]/g, "").toUpperCase().slice(0, 9);
  if (clean.length <= 1) return clean;
  const body = clean.slice(0, -1);
  const dv = clean.slice(-1);
  const bodyWithDots = body.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${bodyWithDots}-${dv}`;
}

interface Props {
  empleo: Empleo;
  onClose: () => void;
}

export default function PostulacionModal({ empleo, onClose }: Props) {
  const [paso, setPaso] = useState<1 | 2>(1);
  const [enviado, setEnviado] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    rut: "",
    telefono: "",
    correo: "",
    comuna: "",
    cargo: empleo.cargo ?? empleo.titulo,
    turno: "",
    cv: null as File | null,
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, rut: formatRut(e.target.value) }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, cv: e.target.files?.[0] ?? null }));
  };

  const formatFecha = (fecha: string) =>
    new Date(fecha).toLocaleDateString("es-CL", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const nombre = form.nombre.trim();
    const apellido = form.apellido.trim();
    const email = form.correo.trim();
    const telefono = form.telefono.trim();
    const cargoPostula = form.cargo.trim();

    if (!nombre) {
      setSubmitError("El nombre es requerido");
      return;
    }

    if (!apellido) {
      setSubmitError("El apellido es requerido");
      return;
    }

    if (!form.rut.trim()) {
      setSubmitError("El RUT es requerido");
      return;
    }

    if (!email) {
      setSubmitError("El correo electrónico es requerido");
      return;
    }

    if (!telefono) {
      setSubmitError("El teléfono es requerido");
      return;
    }

    if (!cargoPostula) {
      setSubmitError("El cargo al que postula es requerido");
      return;
    }

    if (!form.cv) {
      setSubmitError("El CV es requerido");
      return;
    }

    const postulacionFormData = new FormData();
    postulacionFormData.append("empleoId", String(empleo.id));
    postulacionFormData.append("nombre", nombre);
    postulacionFormData.append("apellido", apellido);
    postulacionFormData.append("rut", form.rut.trim());
    postulacionFormData.append("email", email);
    postulacionFormData.append("telefono", telefono);
    postulacionFormData.append("cargoPostula", cargoPostula);
    postulacionFormData.append("comuna", form.comuna.trim());
    postulacionFormData.append("region", "");
    postulacionFormData.append("experiencia", "");
    postulacionFormData.append("disponibilidad", form.turno.trim());
    postulacionFormData.append("mensaje", "");
    postulacionFormData.append("cv", form.cv);

    try {
      setIsSubmitting(true);
      await enviarPostulacion(postulacionFormData);
      setEnviado(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "No se pudo enviar la postulación"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const location = empleo.comuna ?? empleo.region ?? empleo.ubicacion;

  return (
    <div className="pm-backdrop" onClick={handleBackdropClick}>
      <div
        className="pm-card"
        role="dialog"
        aria-modal="true"
        aria-label={`Postulación ${empleo.empresa ?? empleo.titulo}`}
      >

        <button className="pm-close" onClick={onClose} aria-label="Cerrar modal">
          ✕
        </button>

        {/* ── PASO 1: Detalle oferta ── */}
        {paso === 1 && (
          <>
            <div className="pm-header">
              <div className="pm-header__deco" aria-hidden="true" />
              <div className="pm-header__content">
                <span className="pm-header__eyebrow">Grupo Colchagua</span>
                <p className="pm-header__slogan">TU EMPLEO,<br />NUESTRO COMPROMISO</p>
              </div>
            </div>

            <div className="pm-body">
              <h2 className="pm-title">
                {(empleo.empresa ?? empleo.titulo).toUpperCase()} – POSTULACIÓN
              </h2>
              <p className="pm-sub">{empleo.titulo}</p>
              <div className="pm-pills">
                {empleo.modalidad && <span className="pm-pill">{empleo.modalidad}</span>}
                {empleo.jornada && <span className="pm-pill pm-pill--cargo">{empleo.jornada}</span>}
              </div>
              {empleo.descripcion && (
                <p className="pm-sub" style={{ textAlign: "left", marginTop: "12px", fontSize: "13px" }}>
                  {empleo.descripcion}
                </p>
              )}
              {empleo.requisitos && (
                <div style={{ textAlign: "left", marginTop: "10px" }}>
                  <strong style={{ fontSize: "13px", color: "#333" }}>Requisitos:</strong>
                  <p className="pm-sub" style={{ textAlign: "left", marginTop: "4px", fontSize: "13px" }}>
                    {empleo.requisitos}
                  </p>
                </div>
              )}
              {empleo.beneficios && (
                <div style={{ textAlign: "left", marginTop: "10px" }}>
                  <strong style={{ fontSize: "13px", color: "#333" }}>Beneficios:</strong>
                  <p className="pm-sub" style={{ textAlign: "left", marginTop: "4px", fontSize: "13px" }}>
                    {empleo.beneficios}
                  </p>
                </div>
              )}
              <div className="pm-pills" style={{ marginTop: "12px" }}>
                {location && <span className="pm-pill">{location}</span>}
                {empleo.vacantes != null && (
                  <span className="pm-pill">
                    {empleo.vacantes} vacante{empleo.vacantes !== 1 ? "s" : ""}
                  </span>
                )}
                {empleo.fechaCierre && (
                  <span className="pm-pill">Cierra: {formatFecha(empleo.fechaCierre)}</span>
                )}
              </div>
              <button className="pm-btn-primary" onClick={() => setPaso(2)}>
                Empezar ahora
              </button>
            </div>
          </>
        )}

        {/* ── PASO 2: Formulario ── */}
        {paso === 2 && !enviado && (
          <>
            <div className="pm-header pm-header--compact">
              <div className="pm-header__deco" aria-hidden="true" />
              <div className="pm-header__content">
                <div className="pm-header__logo-row">
                  <span className="pm-header__empresa">{empleo.empresa ?? empleo.titulo}</span>
                </div>
                <p className="pm-header__slogan pm-header__slogan--sm">
                  Formulario de postulación
                </p>
              </div>
            </div>

            <div className="pm-body pm-body--form">
              <h2 className="pm-title pm-title--sm">Completa tus datos</h2>
              <form className="pm-form" onSubmit={handleSubmit} noValidate>

                <div className="pm-form__row">
                  <label className="pm-form__label">
                    Nombre
                    <input
                      className="pm-form__input"
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Ej: Juan"
                      required
                    />
                  </label>
                  <label className="pm-form__label">
                    Apellido
                    <input
                      className="pm-form__input"
                      type="text"
                      name="apellido"
                      value={form.apellido}
                      onChange={handleChange}
                      placeholder="Ej: Pérez"
                      required
                    />
                  </label>
                </div>

                <div className="pm-form__row">
                  <label className="pm-form__label">
                    RUT
                    <input
                      className="pm-form__input"
                      type="text"
                      name="rut"
                      value={form.rut}
                      onChange={handleRutChange}
                      placeholder="12.345.678-9"
                      required
                    />
                  </label>
                  <label className="pm-form__label">
                    Teléfono
                    <input
                      className="pm-form__input"
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+56 9 1234 5678"
                      required
                    />
                  </label>
                </div>

                <div className="pm-form__row">
                  <label className="pm-form__label">
                    Correo electrónico
                    <input
                      className="pm-form__input"
                      type="email"
                      name="correo"
                      value={form.correo}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </label>
                  <label className="pm-form__label">
                    Comuna de residencia
                    <input
                      className="pm-form__input"
                      type="text"
                      name="comuna"
                      value={form.comuna}
                      onChange={handleChange}
                      placeholder="Ej: Providencia"
                      required
                    />
                  </label>
                </div>

                <label className="pm-form__label pm-form__label--full">
                  Disponibilidad
                  <input
                    className="pm-form__input"
                    type="text"
                    name="turno"
                    value={form.turno}
                    onChange={handleChange}
                    placeholder="Ej: Inmediata, desde el lunes, turnos rotativos"
                  />
                </label>

                <label className="pm-form__label pm-form__label--full">
                  Cargo al que postula
                  <input
                    className="pm-form__input"
                    type="text"
                    name="cargo"
                    value={form.cargo}
                    readOnly
                    style={{ background: "#f5f5f5", cursor: "default" }}
                  />
                </label>

                <label className="pm-form__label pm-form__label--full">
                  Adjuntar CV
                  <div className="pm-form__file-wrap">
                    <span className="pm-form__file-text">
                      {form.cv ? form.cv.name : "Seleccionar archivo (PDF, DOC)"}
                    </span>
                    <span className="pm-form__file-btn">Buscar</span>
                    <input
                      className="pm-form__file-input"
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFile}
                    />
                  </div>
                </label>

                {submitError ? <p role="alert">{submitError}</p> : null}

                <div className="pm-form__actions">
                  <button
                    type="button"
                    className="pm-btn-ghost"
                    onClick={() => setPaso(1)}
                    disabled={isSubmitting}
                  >
                    ← Volver
                  </button>
                  <button type="submit" className="pm-btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar postulación"}
                  </button>
                </div>

              </form>
            </div>
          </>
        )}

        {/* ── PASO 2: Éxito ── */}
        {paso === 2 && enviado && (
          <div className="pm-body pm-body--success">
            <div className="pm-success-icon" aria-hidden="true">✓</div>
            <h2 className="pm-title">Postulación enviada correctamente</h2>
            <p className="pm-sub">
              Hemos recibido tu información. Nuestro equipo de selección se
              pondrá en contacto contigo a la brevedad.
            </p>
            <button className="pm-btn-primary" onClick={onClose}>
              Cerrar
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
