import { useState } from "react";
import Layout from "../components/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/denuncia.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function DenunciaLeyKarin() {
  const [fechaDenuncia, setFechaDenuncia] = useState<Date | null>(null);

  return (
    <Layout>
      <section className="denuncia-page">
        <div className="denuncia-card">
          <h1 className="denuncia-title">FORMULARIO DENUNCIA LEY KARIN</h1>

          <div className="denuncia-form">
            <div className="denuncia-field">
              <label htmlFor="nombre">Nombre y apellido</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Ejemplo: Juan Pérez"
              />
            </div>

            <div className="denuncia-field">
              <label htmlFor="rut">RUT</label>
              <input
                id="rut"
                name="rut"
                type="text"
                placeholder="Ejemplo: 11.111.111-1"
              />
            </div>

            <div className="denuncia-field"> 
                <label htmlFor="cargo">Cargo</label>
                 <input id="cargo" name="cargo" type="text"
                  placeholder="Ejemplo: Auxiliar" /> 
            </div>
            
            <div className="denuncia-field"> 
                <label htmlFor="cpntacto">Medio de contacto</label>
                 <input id="contacto" name="contacto" type="text"
                  placeholder="Ejemplo: Telefono/correo" /> 
            </div>

            <div className="denuncia-field">
              <label>Fecha de denuncia</label>
              <div className="datepicker-wrapper">
              <span className="datepicker-icon">
                <FaCalendarAlt />
              </span>

              <DatePicker
                selected={fechaDenuncia}
               onChange={(date: Date | null) => setFechaDenuncia(date)}
                placeholderText="Elegir fecha"
                dateFormat="dd/MM/yyyy"
                className="denuncia-datepicker-input"
                calendarClassName="denuncia-datepicker-calendar"
                showPopperArrow={false}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
              </div>
            </div>

            
            <div className="denuncia-field"> 
                <label htmlFor="cargo">Nombre y apellidos del denunciante</label>
                 <input id="denunciante" name="denunciante" type="text"
                  placeholder="Ejemplo: Juan Pérez" /> 
            </div>

            <div className="denuncia-field"> 
                <label htmlFor="cargo">Cargo de la persona denunciada</label>
                 <input id="cargoDenunciado" name="cargoDenunciado" type="text"
                 /> 
            </div>

            <div className="denuncia-field"> 
                <label htmlFor="cargo">RUT de la persona denunciada</label>
                 <input id="rutDenunciado" name="rutDenunciado" type="text"
                  placeholder="Ejemplo: 11.111.111-1" /> 
            </div>

            <div className="denuncia-field"> 
                <label htmlFor="cargo">Dpto. / Gcia. / Área de la persona denunciada</label>
                 <input id="areaDenunciado" name="areaDenunciado" type="text"
                 /> 
            </div>

            <div className="denuncia-field denuncia-field--radio-group">
                <label className="denuncia-group-label">
                    La persona que realiza la denuncia es la presunta víctima
                    de lo denunciado
                </label>
                <label className="denuncia-radio">
                    <input type="radio" name="esVictima" value="si" />
                    <span>Sí</span>
                </label>
                <label className="denuncia-radio">
                    <input type="radio" name="esVictima" value="no" />
                    <span>No</span>
                </label>

                <p className="denuncia-help">si la respuesta anterior es no,
                    registrar la siguiente información de la pesunta víctima
                </p>
            </div>

            <div className="denuncia-field"> 
                <label htmlFor="victimaNombre">Nombres y apellidos de la presunta víctima</label>
                 <input id="victimaNombre" name="victimaNombre" type="text"
                 placeholder="Ejemplo: Juan Pérez"
                 /> 
            </div>

            <div className="denuncia-field"> 
                <label htmlFor="victimaRut">Rut de la presunta víctima</label>
                 <input id="victimaRut" name="victimaRut" type="text"
                 placeholder="Ejemplo: 11.111.111-1"
                 /> 
            </div>

            <div className="denuncia-field"> 
                <label htmlFor="victimaCargo">Cargo de la presunta víctima</label>
                 <input id="victimaCargo" name="victimaCargo" type="text"
                 /> 
            </div>

            <div className="denuncia-field"> 
                <label htmlFor="victimaArea">Dpto. / Gcia. / Área de la presunta víctima</label>
                 <input id="victimaArea" name="victimaArea" type="text"
                 /> 
            </div>

            <div className="denuncia-field denuncia-field--radio-group">
                <label className="denuncia-group-label">
                    Situaciones que se denuncia
                </label>
                <label className="denuncia-radio">
                    <input
                    type="radio"
                    name="situacionDenunciada"
                    value="acoso-laboral"
                    />
                    <span>Acoso laboral</span>
                </label>
                <label className="denuncia-radio">
                    <input
                    type="radio"
                    name="situacionDenunciada"
                    value="acoso-sexual"
                    />
                    <span>Acoso sexual</span>
              </label>
              <label className="denuncia-radio">
                    <input
                    type="radio"
                    name="situacionDenunciada"
                    value="maltrato-laboral"
                    />
                    <span>Maltrato laborak</span>
              </label>
              <label className="denuncia-radio">
                <input
                  type="radio"
                  name="situacionDenunciada"
                  value="otra-situacion-de-violencia-laboral"
                />
                <span>Otra situación de violencia laboral</span>
              </label>
              <label className="denuncia-radio">
                <input
                  type="radio"
                  name="situacionDenunciada"
                  value="todas-las-opciones"
                />
                <span>Todas las opciones</span>
              </label>
            </div>

            <div className="denuncia-field denuncia-field--radio--group">
                <label className="denuncia-group-label">
                    Sobre la relación entre victima y denunciado/a
                </label>

                <label className="denuncia-radio denuncia-radio--long">
                    <input
                    type="radio"
                    name="relacionVictima"
                    value="asimetrica-victima"
                    />
                    <span>
                    Existe una relación asimétrica en que la víctima tiene
                    dependencia directa o indirecta de el/la denunciado/a.
                    </span>
              </label>
              <label className="denuncia-radio denuncia-radio--long">
                    <input
                    type="radio"
                    name="relacionVictima"
                    value="asimetrica-denunciado"
                    />
                    <span>
                    Existe una relación asimetrica en que el/la denunciado/a tiene
                    dependencia directa o indirecta de la víctima
                    </span>
              </label>
              <label className="denuncia-radio denuncia-radio--long">
                <input
                  type="radio"
                  name="relacionVictima"
                  value="simetrica-misma-area"
                />
                <span>
                  Existe una relación simétrica en que el/la denunciado/a y la
                  víctima no tienen una dependencia directa ni indirecta, pero
                  se desempeñan en la misma área o equipo.
                </span>
              </label>
              <label className="denuncia-radio denuncia-radio--long">
                <input
                  type="radio"
                  name="relacionVictima"
                  value="simetrica-distinta-area"
                />
                <span>
                  Existe una relación simétrica en que el/la denunciado/a y la
                  víctima no tienen una dependencia directa ni indirecta, y no
                  se desempeñan en la misma área o equipo.
                </span>
              </label>
              <label className="denuncia-radio denuncia-radio--long">
                <input type="radio" name="relacionVictima" value="todos" />
                <span>Todos los anteriores</span>
              </label>
            </div>

            <div className="denuncia-field denuncia-field--radio-group">
                <label className="denuncia-group-label">
                Sobre las presuntas situaciones denunciadas
              </label>
              <label className="denuncia-radio denuncia-radio--long">
                <input type="radio" name="situacionInfo" value="evidencia" />
                <span>
                  Existe evidencia de lo denunciado (correos electrónicos,
                  fotos, etc.).
                </span>
              </label>
              <label className="denuncia-radio denuncia-radio--long">
                <input
                  type="radio"
                  name="situacionInfo"
                  value="antecedentes"
                />
                <span>
                  Existe conocimiento de otros antecedentes de índole similar.
                </span>
              </label>
              <label className="denuncia-radio denuncia-radio--long">
                <input type="radio" name="situacionInfo" value="informada" />
                <span>
                  La situación denunciada fue informada previamente en otra
                  instancia similar (jefatura, superior, mediación laboral,
                  etc.).
                </span>
              </label>
            </div>

            <div className="denuncia-field">
                <label htmlFor="testigos">
                Ingresar datos en caso de existir testigos de lo denunciado:
                Nombre, cargo y lugar de trabajo de los testigos
              </label>
              <input
                id="testigos"
                name="testigos"
                type="text"
              />
            </div>

            <div className="denuncia-field denuncia-field--full">
                <label htmlFor="relato">
                Relato de los hechos que se denuncian
              </label>
              <textarea
                id="relato"
                name="relato"
                rows={6}
              />
            </div>

            <div className="denuncia-actions">
                <button
                type="button"
                className="denuncia-btn denuncia-btn--square"
              >
                Crear entrada
              </button>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}