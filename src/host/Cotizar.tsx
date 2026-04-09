import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/cotizar.css";

function cleanRut(value: string) {
  return value.replace(/[^0-9kK]/g, "").toUpperCase();
}

function formatRut(value: string) {
  const cleaned = cleanRut(value).slice(0, 9);

  if (cleaned.length <= 1) {
    return cleaned;
  }

  const body = cleaned.slice(0, -1);
  const dv = cleaned.slice(-1);
  const formattedBody = body.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `${formattedBody}-${dv}`;
}

function calculateDv(body: string) {
  let sum = 0;
  let multiplier = 2;

  for (let index = body.length - 1; index >= 0; index -= 1) {
    sum += Number(body[index]) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  const remainder = 11 - (sum % 11);

  if (remainder === 11) {
    return "0";
  }

  if (remainder === 10) {
    return "K";
  }

  return String(remainder);
}

function isValidRut(value: string) {
  const cleaned = cleanRut(value);

  if (cleaned.length < 2) {
    return false;
  }

  const body = cleaned.slice(0, -1);
  const dv = cleaned.slice(-1);

  if (!/^\d+$/.test(body)) {
    return false;
  }

  return calculateDv(body) === dv;
}

export default function Cotizar() {
  const [rut, setRut] = useState("");
  const [rutError, setRutError] = useState("");

  const handleRutChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatRut(event.target.value);
    setRut(formattedValue);
    setRutError("");
  };

  const handleRutBlur = (event: FocusEvent<HTMLInputElement>) => {
    const nextRut = formatRut(event.target.value);
    setRut(nextRut);

    if (!cleanRut(nextRut)) {
      setRutError("");
      return;
    }

    setRutError(isValidRut(nextRut) ? "" : "Ingresa un RUT de empresa válido.");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cleanRut(rut) && !isValidRut(rut)) {
      setRutError("Ingresa un RUT de empresa válido.");
    }
  };

  return (
    <Layout>
      <section className="cotizar-section">
        <div className="home-container">
          <div className="cotizar-header">
            <h1>COTIZA CON NOSOTROS</h1>
            <p>
              Eres una empresa y quieres contratar o saber más de nuestros
              servicios? Llena el formulario y estaremos en contacto contigo a
              la brevedad para satisfacer todas tus necesidades.
            </p>
          </div>

          <form className="cotizar-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Nombre Empresa *"
                  aria-label="Nombre Empresa"
                  required
                />
              </div>

              <div className="form-field">
                <input
                  type="text"
                  name="rut"
                  placeholder="RUT *  "
                  aria-label="RUT"
                  inputMode="text"
                  autoComplete="off"
                  maxLength={12}
                  value={rut}
                  onChange={handleRutChange}
                  onBlur={handleRutBlur}
                  required
                />
                {rutError ? <span className="field-error">{rutError}</span> : null}
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico *"
                  aria-label="Correo electrónico"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <textarea
                  name="message"
                  placeholder="¿En qué podemos ayudarte?"
                  aria-label="¿En qué podemos ayudarte?"
                  rows={1}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = target.scrollHeight + "px";
                  }}
                />
              </div>
            </div>

            <div className="cotizar-actions">
              <button type="submit" className="cotizar-submit">
                Enviar
              </button>

              <Link to="/" className="cotizar-back-inline">
                ← Volver al inicio
              </Link>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
