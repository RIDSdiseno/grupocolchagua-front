const API_URL = import.meta.env.VITE_API_URL;

export type CategoriaBlog = {
  id: number;
  nombre: string;
  slug: string;
};

export type ArticuloResumen = {
  id: number;
  titulo: string;
  slug: string;
  resumen: string;
  portadaUrl: string | null;
  portadaAlt: string | null;
  minutosLectura: number;
  fechaPublicacion: string;
  categoria: { nombre: string; slug: string };
};

// Bloques del cuerpo del artículo, tal como los guarda la intranet.
export type BloqueArticulo =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "subtitulo"; texto: string }
  | { tipo: "lista"; items: string[] }
  | { tipo: "dato"; titulo: string | null; texto: string }
  | { tipo: "imagen"; url: string; alt: string | null; pie: string | null };

export type AutorArticulo = {
  nombre: string;
  cargo: string | null;
  fotoUrl: string | null;
  linkedinUrl: string | null;
};

export type Articulo = ArticuloResumen & {
  contenido: BloqueArticulo[];
  etiquetas: string[];
  seoTitulo: string | null;
  seoDescripcion: string | null;
  autor: AutorArticulo | null;
};

const obtenerJson = async <T>(ruta: string): Promise<T> => {
  const response = await fetch(`${API_URL}/api/blog/publico${ruta}`);

  if (!response.ok) {
    const error = new Error("No se pudo cargar el blog") as Error & { status?: number };
    error.status = response.status;
    throw error;
  }

  return (await response.json()) as T;
};

export const listarCategoriasBlog = async (): Promise<CategoriaBlog[]> =>
  (await obtenerJson<{ categorias: CategoriaBlog[] }>("/categorias")).categorias;

export const listarArticulos = async (categoria?: string): Promise<ArticuloResumen[]> => {
  const query = categoria ? `?categoria=${encodeURIComponent(categoria)}` : "";
  return (await obtenerJson<{ publicaciones: ArticuloResumen[] }>(`/publicaciones${query}`))
    .publicaciones;
};

export const obtenerArticulo = async (
  slug: string
): Promise<{ publicacion: Articulo; relacionados: ArticuloResumen[] }> =>
  obtenerJson(`/publicaciones/${encodeURIComponent(slug)}`);

// "2026-10-30T12:00:00.000Z" → "30 de octubre de 2026"
export const formatearFechaArticulo = (fecha: string) =>
  new Date(fecha).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Santiago",
  });
