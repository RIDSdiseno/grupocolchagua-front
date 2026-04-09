import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/trabaja.css";

export default function Trabaja() {
  const [phone, setPhone] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const digits = event.target.value.replace(/\D/g, "").slice(0, 9);

    if (!digits) {
      setPhone("");
      return;
    }

    if (digits.length <= 1) {
      setPhone(digits);
      return;
    }

    if (digits.length <= 5) {
      setPhone(`${digits.slice(0, 1)} ${digits.slice(1)}`);
      return;
    }

    setPhone(`${digits.slice(0, 1)} ${digits.slice(1, 5)} ${digits.slice(5)}`);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextFile = event.target.files?.[0] ?? null;
    setCvFile(nextFile);
  };

  const removeFile = () => {
    setCvFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <section className="trabaja-section">
        <div className="home-container">
          <div className="trabaja-header">
            <h1>TRABAJA CON NOSOTROS</h1>
            <p>
              Postula a una gran cantidad de trabajos que tenemos para ti, solo
              rellena el formulario, adjunta tu Curriculum Vitae y estaremos en
              contacto contigo lo más rápido posible para ver si eres compatible
              con los cargos que tenemos a disposición.
            </p>
          </div>

          <form className="trabaja-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field floating-field">
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder=" "
                  required
                />
                <label htmlFor="firstName">Nombre *</label>
              </div>

              <div className="form-field floating-field">
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder=" "
                  required
                />
                <label htmlFor="lastName">Apellido *</label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field floating-field floating-field--email">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder=" "
                  required
                />
                <label htmlFor="email">Correo electrónico *</label>
              </div>

              <div className="form-field phone-group">
                <label htmlFor="phone" className="phone-label">
                  Teléfono *
                </label>
                <div className="phone-field">
                  <span className="phone-prefix">+56</span>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="9 1234 5678"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    maxLength={11}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field floating-field floating-field--textarea">
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  rows={1}
                  onInput={(event) => {
                    const target = event.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = `${target.scrollHeight}px`;
                  }}
                />
                <label htmlFor="message">¿En qué podemos ayudarte?</label>
              </div>
            </div>

            <div className="trabaja-file">
              <label htmlFor="cv">Adjunta tu Curriculum Vitae *</label>
              <div className="trabaja-file-row">
                <input
                  id="cv"
                  ref={fileInputRef}
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="trabaja-file-input"
                  onChange={handleFileChange}
                />

                <label htmlFor="cv" className="trabaja-file-button">
                  Seleccionar archivo
                </label>

                <span className="trabaja-file-name">
                  {cvFile ? cvFile.name : "Ningún archivo seleccionado"}
                </span>

                {cvFile ? (
                  <button
                    type="button"
                    className="trabaja-file-remove"
                    onClick={removeFile}
                  >
                    Eliminar
                  </button>
                ) : null}
              </div>
            </div>

            <div className="trabaja-actions">
              <button type="submit" className="trabaja-submit">
                Enviar
              </button>

              <Link to="/" className="trabaja-back-inline">
                ← Volver al inicio
              </Link>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
