import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import FuentesBlog from "../components/blog/FuentesBlog";
import LlamadosBlog from "../components/blog/LlamadosBlog";
import TarjetaArticulo from "../components/blog/TarjetaArticulo";
import { useAjustesWeb } from "../hooks/useAjustesWeb";
import { useSeo } from "../hooks/useSeo";
import {
  listarArticulos,
  listarCategoriasBlog,
  type ArticuloResumen,
  type CategoriaBlog,
} from "../services/blog.service";
import "../styles/blog.css";

const DESCRIPCION_BLOG =
  "Guías para empresas que gestionan dotación, consejos para quienes buscan trabajo y noticias de Grupo Colchagua y Grupo Santa Cruz.";

// /blog y /blog/categoria/<nombre>. La sección se habilita y sus artículos se
// escriben desde la intranet (Marketing → Herramientas → Blog).
export default function Blog() {
  const ajustes = useAjustesWeb();
  const { categoria: categoriaActiva = "" } = useParams();

  // null mientras cargan.
  const [categorias, setCategorias] = useState<CategoriaBlog[] | null>(null);
  // Resultado de la última carga, con la categoría a la que corresponde.
  const [resultado, setResultado] = useState<{
    categoria: string;
    articulos: ArticuloResumen[];
    error: boolean;
  } | null>(null);

  useEffect(() => {
    let activo = true;

    listarCategoriasBlog()
      .then((data) => {
        if (activo) setCategorias(data);
      })
      .catch(() => {
        if (activo) setCategorias([]);
      });

    return () => {
      activo = false;
    };
  }, []);

  useEffect(() => {
    let activo = true;

    listarArticulos(categoriaActiva || undefined)
      .then((data) => {
        if (activo) setResultado({ categoria: categoriaActiva, articulos: data, error: false });
      })
      .catch(() => {
        if (activo) setResultado({ categoria: categoriaActiva, articulos: [], error: true });
      });

    return () => {
      activo = false;
    };
  }, [categoriaActiva]);

  const categoria = categorias?.find((c) => c.slug === categoriaActiva);

  useSeo(
    categoria
      ? `${categoria.nombre} | Blog Grupo Colchagua`
      : "Blog | Grupo Colchagua y Grupo Santa Cruz",
    DESCRIPCION_BLOG
  );

  if (ajustes && !ajustes.blogVisible) {
    return <Navigate to="/" replace />;
  }

  // Mientras carga no se muestra contenido, para no mostrarlo un instante si está oculta.
  if (!ajustes) {
    return <Layout>{null}</Layout>;
  }

  // null mientras carga la categoría elegida.
  const articulos = resultado?.categoria === categoriaActiva ? resultado.articulos : null;
  const error = resultado?.error ?? false;

  const categoriaInexistente = Boolean(categoriaActiva) && categorias !== null && !categoria;

  // Ya vienen del más nuevo al más antiguo: el primero va destacado y el resto en la grilla.
  const [destacado, ...resto] = articulos ?? [];

  return (
    <Layout>
      <div className="blog-page">
        <FuentesBlog />

        <section className="blog-hero">
          <span className="blog-kicker">Blog</span>
          <h1 className="blog-title">Personas, equipos y trabajo en Chile</h1>
          <p className="blog-copy">
            Guías para empresas que gestionan dotación, consejos para quienes buscan
            trabajo y lo que pasa en Grupo Colchagua y Grupo Santa Cruz.
          </p>
        </section>

        <div className="blog-contenido">
          {categorias && categorias.length > 0 && (
            <nav className="blog-filtros" aria-label="Categorías del blog">
              <Link
                to="/blog"
                className={`blog-filtro${!categoriaActiva ? " is-active" : ""}`}
                aria-current={!categoriaActiva ? "page" : undefined}
              >
                Todos
              </Link>
              {categorias.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/categoria/${item.slug}`}
                  className={`blog-filtro${categoriaActiva === item.slug ? " is-active" : ""}`}
                  aria-current={categoriaActiva === item.slug ? "page" : undefined}
                >
                  {item.nombre}
                </Link>
              ))}
            </nav>
          )}

          {categoriaInexistente ? (
            <div className="blog-vacio">
              <h2>No encontramos esta categoría</h2>
              <p>
                <Link to="/blog">Ver todos los artículos</Link>
              </p>
            </div>
          ) : articulos === null ? (
            <p className="blog-cargando">Cargando artículos...</p>
          ) : !destacado ? (
            <div className="blog-vacio">
              {error ? (
                <>
                  <h2>No pudimos cargar los artículos</h2>
                  <p>Intenta nuevamente en unos minutos.</p>
                </>
              ) : categoriaActiva ? (
                <>
                  <h2>Aún no hay artículos en esta categoría</h2>
                  <p>
                    Revisa las demás categorías o <Link to="/blog">vuelve a ver todos</Link>.
                  </p>
                </>
              ) : (
                <>
                  <h2>Muy pronto</h2>
                  <p>Estamos preparando nuestras primeras publicaciones. ¡Vuelve a visitarnos!</p>
                </>
              )}
            </div>
          ) : (
            <>
              <TarjetaArticulo articulo={destacado} variante="destacado" />

              {resto.length > 0 && (
                <section>
                  <h2 className="blog-seccion-titulo">Últimos artículos</h2>
                  <div className="blog-grilla">
                    {resto.map((articulo) => (
                      <TarjetaArticulo key={articulo.id} articulo={articulo} />
                    ))}
                  </div>
                </section>
              )}
            </>
          )}

          <LlamadosBlog />
        </div>
      </div>
    </Layout>
  );
}
