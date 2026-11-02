const API_URL = import.meta.env.VITE_API_URL;

export type AjustesWeb = {
  blogVisible: boolean;
};

type AjustesResponse = {
  ok: boolean;
  ajustes?: Partial<AjustesWeb>;
};

// Si la API no responde, todo queda en su valor más conservador (oculto).
const AJUSTES_RESPALDO: AjustesWeb = {
  blogVisible: false,
};

let pendiente: Promise<AjustesWeb> | null = null;

// Ajustes administrados desde la intranet (Marketing → Herramientas).
// Se piden una sola vez por visita: el menú y las páginas comparten la respuesta.
export const obtenerAjustesWeb = (): Promise<AjustesWeb> => {
  if (!pendiente) {
    pendiente = fetch(`${API_URL}/api/ajustes-web/publicos`)
      .then(async (response) => {
        if (!response.ok) throw new Error("No se pudieron cargar los ajustes");

        const json = (await response.json()) as AjustesResponse;

        return { ...AJUSTES_RESPALDO, ...json.ajustes };
      })
      .catch(() => AJUSTES_RESPALDO);
  }

  return pendiente;
};
