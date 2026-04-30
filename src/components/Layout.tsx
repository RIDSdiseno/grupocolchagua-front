import "../styles/layout.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo-colchagua.png";
import logoFooter from "../assets/logo/logo-colchagua-2.png";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";

type LayoutProps = {
  children: React.ReactNode;
};

const SERVICE_LINKS = [
  { label: "Outsourcing", href: "/servicios/outsourcing" },
  { label: "Servicios Transitorios", href: "/servicios/servicios-transitorios" },
  { label: "Formación y Capacitación", href: "/servicios/formacion-capacitacion" },
  { label: "Reclutamiento y Selección", href: "/servicios/reclutamiento-seleccion" },
  { label: "Reposición Multimarca", href: "/servicios/reposicion-multimarca" },
  { label: "Soluciones a tu medida", href: "/servicios/soluciones-a-tu-medida" },
];

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

          <nav className="main-nav" aria-label="Navegación principal">
            <NavLink to="/">Home</NavLink>

            <div className="nav-dropdown">
              <NavLink to="/servicios" className="nav-dropdown__trigger">
                Servicios
              </NavLink>
              <div className="nav-dropdown__menu" aria-label="Servicios">
                {SERVICE_LINKS.map((service) => (
                  <Link key={service.href} to={service.href}>
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/postulaciones">Trabaja con nosotros</NavLink>
            <NavLink to="/nosotros">Nosotros</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
            <a
              href="https://talana.com/es/remuneraciones/login-vue?next=/es/remuneraciones/#/"
              target="_blank"
              rel="noreferrer"
            >
              Ir a Talana
            </a>

            <div className="social-icons">
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
                Nuestros servicios
              </Link>
              <Link to="/postulaciones" className="footer-link">
                Trabaja con nosotros
              </Link>
              <Link to="/contacto" className="footer-link">
                Contacto
              </Link>
              <Link to="/denuncia" className="footer-link">
                Canal de denuncias / Ley Karin
              </Link>
            </div>

            <div className="footer-column">
              <h3>Atención General</h3>
              <p>Lunes a Viernes de 9:00 a 18:00 Hrs.</p>
              <p>Reclutamiento & Selección.</p>
              <p>Operaciones:</p>
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
                Erasmo Escala 2313, Santiago.
              </a>
            </div>

            <div className="footer-column">
              <h3>Contacto</h3>
              <a href="mailto:contacto@grupocolchagua.cl" className="footer-link">
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
