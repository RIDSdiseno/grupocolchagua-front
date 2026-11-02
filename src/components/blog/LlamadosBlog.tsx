import { Link } from "react-router-dom";

type Props = {
  // Título del llamado a empresas; en un artículo puede adaptarse al tema.
  tituloEmpresas?: string;
};

// Los dos llamados al final del blog: cotizar (empresas) y ver ofertas (postulantes).
export default function LlamadosBlog({ tituloEmpresas = "¿Necesitas reforzar tu equipo?" }: Props) {
  return (
    <section className="blog-llamados">
      <div className="blog-llamado">
        <span className="blog-llamado-kicker">Para empresas</span>
        <h2>{tituloEmpresas}</h2>
        <p>
          Servicios transitorios con Grupo Colchagua y outsourcing con Grupo Santa Cruz. Dos
          especialidades, un mismo aliado.
        </p>
        <Link to="/cotizar" className="blog-boton blog-boton--claro">
          Cotizar servicio
        </Link>
      </div>

      <div className="blog-llamado blog-llamado--postulantes">
        <span className="blog-llamado-kicker">Para postulantes</span>
        <h2>¿Buscas trabajo?</h2>
        <p>Revisa las ofertas abiertas en bodega, retail, logística, administración y más.</p>
        <Link to="/bolsa-de-trabajo" className="blog-boton blog-boton--claro">
          Ver ofertas
        </Link>
      </div>
    </section>
  );
}
