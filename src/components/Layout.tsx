import "../styles/layout.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-colchagua.png";
import logoFooter from "../assets/logo/logo-colchagua-2.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Grupo Colchagua" />
            </Link>
          </div>

          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/beneficios">Beneficios</Link>
            <Link to="/contacto">Contacto</Link>
            <a href="/denuncia" className="header-button">Denuncia Ley Karin</a>
            <a href="https://talana.com/es/remuneraciones/login-vue?next=/es/remuneraciones/#/">Ir a Talana</a>

            <div className="social-icons">
              <a href="https://www.linkedin.com/company/grupo-colchagua-est/"
                target="_blank"
                rel="noreferer">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/grupo_colchaguaoficial/"
                  target="_blank"
                  rel="noreferrer">
                    <FaInstagram />  
                </a>
            </div>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-logo">
            <Link to="/">
              <img src={logoFooter} alt="Grupo Colchagua" />
            </Link>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h3>Información</h3>
              <Link to="/nosotros" className="footer-link">
                Sobre nosotros
              </Link>
              <Link to="/servicios" className="footer-link">
                Nuestros Servicios
              </Link>
              <Link to="/contacto" className="footer-link">
                Sucursales
              </Link>
              <Link to="/beneficios" className="footer-link">
                Beneficios
              </Link>
              <a
                href="https://wa.me/56939326442"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Solicitar Ayuda
              </a>
            </div>

            <div className="footer-column">
              <h3>Atención General</h3>
              <p>Lunes a Viernes de 9:00 a 18:00 Hrs.</p>
              <p>Reclutamiento & Selección.</p>
              <p>Operaciones: </p>
              <a
                href="https://www.google.com/maps?q=Herrera+345,+Santiago,+Chile"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Herrera 345, Santiago.
              </a>

              <p>RRHH & Administración & Finanzas:</p>
              <a
                href="https://www.google.com/maps?q=Erasmo+Escala+2313,+Santiago,+Chile"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Erasmo Escala 2313, Santiago
              </a>
            </div>

            <div className="footer-column">
              <h3>Contacto Comercial</h3>
              <a href="tel:+56227646300" className="footer-link">
                +56 2 2764 6300
              </a>
              <a
                href="mailto:contacto@grupocolchagua.cl"
                className="footer-link"
              >
                contacto@grupocolchagua.cl
              </a>
              <a
                href="https://wa.me/56939326442"
                target="_blank"
                rel="noreferrer"
                className="footer-whatsapp"
              >
                WhatsApp: +56 9 3932 6442
              </a>
            </div>
          </div>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/company/grupo-colchagua-est/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Grupo Colchagua"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/grupo_colchaguaoficial/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Grupo Colchagua"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
      <a
        href="https://wa.me/56939326442"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Hablar por WhatsApp con Grupo Colchagua"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default Layout;
