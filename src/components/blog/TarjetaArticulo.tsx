import { Link } from "react-router-dom";
import { formatearFechaArticulo, type ArticuloResumen } from "../../services/blog.service";

type Props = {
  articulo: ArticuloResumen;
  // "destacado" = tarjeta grande al inicio del blog.
  variante?: "normal" | "destacado";
};

export default function TarjetaArticulo({ articulo, variante = "normal" }: Props) {
  const destacado = variante === "destacado";

  return (
    <article className={`blog-card${destacado ? " blog-card--destacado" : ""}`}>
      <Link to={`/blog/${articulo.slug}`} className="blog-card-imagen" tabIndex={-1} aria-hidden="true">
        {articulo.portadaUrl ? (
          <img src={articulo.portadaUrl} alt={articulo.portadaAlt ?? ""} loading="lazy" />
        ) : (
          <span className="blog-card-sin-imagen">{articulo.categoria.nombre}</span>
        )}
      </Link>

      <div className="blog-card-cuerpo">
        <div className="blog-card-etiquetas">
          {destacado && <span className="blog-chip blog-chip--destacado">Destacado</span>}
          <span className="blog-chip">{articulo.categoria.nombre}</span>
        </div>

        <h3 className="blog-card-titulo">
          <Link to={`/blog/${articulo.slug}`}>{articulo.titulo}</Link>
        </h3>

        <p className="blog-card-resumen">{articulo.resumen}</p>

        <p className="blog-meta">
          {formatearFechaArticulo(articulo.fechaPublicacion)} · {articulo.minutosLectura} min
          {destacado && " de lectura"}
        </p>

        {destacado && (
          <Link to={`/blog/${articulo.slug}`} className="blog-boton">
            Leer artículo
          </Link>
        )}
      </div>
    </article>
  );
}
