import "../styles/layout.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-colchagua.png";
import logoFooter from "../assets/logo/logo-colchagua-2.png";

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
            <a href="#">Ir a Talana</a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logoFooter} alt="Grupo Colchagua" />
          </div>

          <div className="footer-column">
            <h3>Información</h3>
            <p>Sobre nosotros</p>
            <p>Nuestros Servicios</p>
            <p>Sucursales</p>
            <p>Beneficios</p>
            <p>Solicitar Ayuda</p>
          </div>

          <div className="footer-column">
            <h3>Atención General</h3>
            <p>Lunes a Viernes de 9:00 a 18:00 Hrs.</p>
            <p>Reclutamiento & Selección.</p>
            <p>Operaciones: Herrera 345, Santiago.</p>
            <p>RRHH & Administración & Finanzas:</p>
            <p>Erasmo Escala 2313, Santiago.</p>
          </div>

          <div className="footer-column">
            <h3>Contacto Comercial</h3>
            <p>+56 2 2764 6300</p>
            <p>contacto@grupocolchagua.cl</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;