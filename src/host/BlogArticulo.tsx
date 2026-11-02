import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import FuentesBlog from "../components/blog/FuentesBlog";
import LlamadosBlog from "../components/blog/LlamadosBlog";
import TarjetaArticulo from "../components/blog/TarjetaArticulo";
import { useAjustesWeb } from "../hooks/useAjustesWeb";
import { useSeo } from "../hooks/useSeo";
import {
  formatearFechaArticulo,
  obtenerArticulo,
  type Articulo,
  type ArticuloResumen,
  type AutorArticulo,
  type BloqueArticulo,
} from "../services/blog.service";
import "../styles/blog.css";

const obtenerIniciales = (nombre: string) =>
  nombre
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0]?.toUpperCase())
    .join("");

function Autor({ autor }: { autor: AutorArticulo | null }) {
  const nombre = autor?.nombre ?? "Grupo Colchagua";

  const avatar = autor?.fotoUrl ? (
    <img src={autor.fotoUrl} alt="" className="blog-autor-avatar" />
  ) : (
    <span className="blog-autor-avatar" aria-hidden="true">
      {obtenerIniciales(nombre)}
    </span>
  );

  return (
    <div className="blog-autor">
      {autor?.linkedinUrl ? (
        <a href={autor.linkedinUrl} target="_blank" rel="noopener noreferrer"
          aria-label={`LinkedIn de ${nombre}`}>
          {avatar}
        </a>
      ) : (
        avatar
      )}
      <div>
        <p className="blog-autor-nombre">{nombre}</p>
        {autor?.cargo && <p className="blog-meta">{autor.cargo}</p>}
      </div>
    </div>
  );
}

function Bloque({ bloque }: { bloque: BloqueArticulo }) {
  switch (bloque.tipo) {
    case "parrafo":
      return <p>{bloque.texto}</p>;

    case "subtitulo":
      return <h2>{bloque.texto}</h2>;

    case "lista":
      return (
        <ul>
          {bloque.items.map((item, indice) => (
            <li key={indice}>{item}</li>
          ))}
        </ul>
      );

    case "dato":
      return (
        <aside className="blog-dato">
          <p className="blog-dato-titulo">{bloque.titulo ?? "Dato clave"}</p>
          <p>{bloque.texto}</p>
        </aside>
      );

    case "imagen":
      return (
        <figure>
          <img src={bloque.url} alt={bloque.alt ?? ""} loading="lazy" />
          {bloque.pie && <figcaption>{bloque.pie}</figcaption>}
        </figure>
      );

    default:
      return null;
  }
}

export default function BlogArticulo() {
  const ajustes = useAjustesWeb();
  const { slug = "" } = useParams();

  // Resultado de la última carga, con el slug al que corresponde.
  const [resultado, setResultado] = useState<{
    slug: string;
    estado: "listo" | "no-encontrado" | "error";
    articulo: Articulo | null;
    relacionados: ArticuloResumen[];
  } | null>(null);

  useEffect(() => {
    let activo = true;

    obtenerArticulo(slug)
      .then((data) => {
        if (!activo) return;
        setResultado({
          slug,
          estado: "listo",
          articulo: data.publicacion,
          relacionados: data.relacionados,
        });
        window.scrollTo({ top: 0 });
      })
      .catch((err: { status?: number }) => {
        if (!activo) return;
        setResultado({
          slug,
          estado: err.status === 404 ? "no-encontrado" : "error",
          articulo: null,
          relacionados: [],
        });
      });

    return () => {
      activo = false;
    };
  }, [slug]);

  const estado = resultado?.slug === slug ? resultado.estado : "cargando";
  const articulo = resultado?.articulo ?? null;
  const relacionados = resultado?.relacionados ?? [];

  useSeo(
    articulo ? `${articulo.seoTitulo ?? articulo.titulo} | Blog Grupo Colchagua` : null,
    articulo ? articulo.seoDescripcion ?? articulo.resumen : null
  );

  if (ajustes && !ajustes.blogVisible) {
    return <Navigate to="/" replace />;
  }

  if (!ajustes || estado === "cargando") {
    return <Layout>{null}</Layout>;
  }

  if (estado !== "listo" || !articulo) {
    return (
      <Layout>
        <div className="blog-page">
          <FuentesBlog />
          <div className="blog-contenido">
            <div className="blog-vacio">
              <h2>
                {estado === "no-encontrado"
                  ? "No encontramos este artículo"
                  : "No pudimos cargar el artículo"}
              </h2>
              <p>
                <Link to="/blog">Volver al blog</Link>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="blog-page">
        <FuentesBlog />

        <article className="blog-articulo">
          <header className="blog-articulo-header">
            <nav className="blog-migas" aria-label="Ruta">
              <Link to="/blog">Blog</Link>
              <span aria-hidden="true">/</span>
              <Link to={`/blog/categoria/${articulo.categoria.slug}`}>
                {articulo.categoria.nombre}
              </Link>
            </nav>

            <span className="blog-chip">{articulo.categoria.nombre}</span>
            <h1 className="blog-articulo-titulo">{articulo.titulo}</h1>
            <p className="blog-articulo-resumen">{articulo.resumen}</p>

            <div className="blog-articulo-meta">
              <Autor autor={articulo.autor} />
              <p className="blog-meta">
                {formatearFechaArticulo(articulo.fechaPublicacion)} · {articulo.minutosLectura} min
                de lectura
              </p>
            </div>
          </header>

          {articulo.portadaUrl && (
            <img
              src={articulo.portadaUrl}
              alt={articulo.portadaAlt ?? ""}
              className="blog-articulo-portada"
            />
          )}

          <div className="blog-articulo-cuerpo">
            {articulo.contenido.map((bloque, indice) => (
              <Bloque key={indice} bloque={bloque} />
            ))}

            {articulo.etiquetas.length > 0 && (
              <ul className="blog-etiquetas" aria-label="Etiquetas">
                {articulo.etiquetas.map((etiqueta) => (
                  <li key={etiqueta}>#{etiqueta}</li>
                ))}
              </ul>
            )}
          </div>
        </article>

        <div className="blog-contenido">
          <LlamadosBlog />

          {relacionados.length > 0 && (
            <section>
              <h2 className="blog-seccion-titulo">También te puede interesar</h2>
              <div className="blog-grilla">
                {relacionados.map((relacionado) => (
                  <TarjetaArticulo key={relacionado.id} articulo={relacionado} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
}
