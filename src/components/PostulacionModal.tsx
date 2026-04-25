import { useState, useEffect } from "react";
import "../styles/postulacion-modal.css";

interface Oferta {
  logo: string;
  empresa: string;
  tipo: string;
  cargo: string;
  turnos: string[];
  comunas: string[];
}

interface Props {
  oferta: Oferta;
  onClose: () => void;
}

export default function PostulacionModal({ oferta, onClose }: Props) {
  const [paso, setPaso] = useState<1 | 2>(1);
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    rut: "",
    telefono: "",
    correo: "",
    comuna: "",
    cargo: oferta.cargo,
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

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, cv: e.target.files?.[0] ?? null }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="pm-backdrop" onClick={handleBackdropClick}>
      <div className="pm-card" role="dialog" aria-modal="true" aria-label={`Postulación ${oferta.empresa}`}>

        <button className="pm-close" onClick={onClose} aria-label="Cerrar modal">
          ✕
        </button>

        {/* ── PASO 1: Landing ── */}
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
              <div className="pm-logo-wrap">
                <img src={oferta.logo} alt={oferta.empresa} className="pm-logo" />
              </div>
              <h2 className="pm-title">
                {oferta.empresa.toUpperCase()} – POSTULACIÓN
              </h2>
              <p className="pm-sub">
                Te invitamos a ser parte de esta nueva oportunidad laboral
              </p>
              <div className="pm-pills">
                <span className="pm-pill">{oferta.tipo}</span>
                <span className="pm-pill pm-pill--cargo">{oferta.cargo}</span>
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
                  <div className="pm-header__logo-wrap">
                    <img src={oferta.logo} alt={oferta.empresa} />
                  </div>
                  <span className="pm-header__empresa">{oferta.empresa}</span>
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
                    Nombre completo
                    <input
                      className="pm-form__input"
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Ej: Juan Pérez"
                      required
                    />
                  </label>
                  <label className="pm-form__label">
                    RUT
                    <input
                      className="pm-form__input"
                      type="text"
                      name="rut"
                      value={form.rut}
                      onChange={handleChange}
                      placeholder="12.345.678-9"
                      required
                    />
                  </label>
                </div>

                <div className="pm-form__row">
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
                </div>

                <div className="pm-form__row">
                  <label className="pm-form__label">
                    Comuna
                    <input
                      className="pm-form__input"
                      type="text"
                      name="comuna"
                      value={form.comuna}
                      onChange={handleChange}
                      placeholder="Ej: Santiago"
                      required
                    />
                  </label>
                  <label className="pm-form__label">
                    Turno disponible
                    <select
                      className="pm-form__input pm-form__select"
                      name="turno"
                      value={form.turno}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccionar turno</option>
                      {oferta.turnos.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="pm-form__label pm-form__label--full">
                  Cargo al que postula
                  <input
                    className="pm-form__input"
                    type="text"
                    name="cargo"
                    value={form.cargo}
                    onChange={handleChange}
                    required
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
                      accept=".pdf,.doc,.docx"
                      onChange={handleFile}
                    />
                  </div>
                </label>

                <div className="pm-form__actions">
                  <button
                    type="button"
                    className="pm-btn-ghost"
                    onClick={() => setPaso(1)}
                  >
                    ← Volver
                  </button>
                  <button type="submit" className="pm-btn-primary">
                    Enviar postulación
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
            <h2 className="pm-title">¡Postulación enviada!</h2>
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
