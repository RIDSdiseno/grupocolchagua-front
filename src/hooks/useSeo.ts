import { useEffect } from "react";

// Pone `contenido` en la <meta> indicada (la crea si index.html no la trae) y
// devuelve cómo dejarla como estaba.
const fijarMeta = (atributo: "name" | "property", clave: string, contenido: string) => {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${atributo}="${clave}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(atributo, clave);
    meta.content = contenido;
    document.head.appendChild(meta);

    const creada = meta;
    return () => creada.remove();
  }

  const anterior = meta.content;
  const existente = meta;
  existente.content = contenido;

  return () => {
    existente.content = anterior;
  };
};

// Título y descripción de la página para Google y para compartir en redes.
// Modifica las etiquetas de index.html en vez de agregar duplicados (si se
// renderizan <title>/<meta> en JSX, quedan dos y Google toma la de
// index.html) y las restaura al salir de la página. `null` = aún no se sabe.
export function useSeo(titulo: string | null, descripcion: string | null) {
  useEffect(() => {
    if (titulo === null) return;

    const anterior = document.title;
    document.title = titulo;
    const restaurarOg = fijarMeta("property", "og:title", titulo);

    return () => {
      document.title = anterior;
      restaurarOg();
    };
  }, [titulo]);

  useEffect(() => {
    if (descripcion === null) return;

    const restaurar = fijarMeta("name", "description", descripcion);
    const restaurarOg = fijarMeta("property", "og:description", descripcion);

    return () => {
      restaurar();
      restaurarOg();
    };
  }, [descripcion]);
}
