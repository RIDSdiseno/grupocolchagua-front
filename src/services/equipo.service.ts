const API_URL = import.meta.env.VITE_API_URL;

export type MiembroEquipo = {
  id: number;
  nombre: string;
  cargo: string;
  resumen: string | null;
  fotoUrl: string | null;
  linkedinUrl: string | null;
};

export type AreaEquipo = {
  id: number;
  nombre: string;
  descripcion: string | null;
  miembros: MiembroEquipo[];
};

type EquipoResponse = {
  ok: boolean;
  areas?: AreaEquipo[];
};

// Áreas visibles de "Nuestro equipo", cada una con sus personas visibles.
export const listarEquipoPublico = async (): Promise<AreaEquipo[]> => {
  const response = await fetch(`${API_URL}/api/equipo-web/publicos`);

  if (!response.ok) {
    throw new Error("No se pudo cargar el equipo");
  }

  const json = (await response.json()) as EquipoResponse;

  return json.areas ?? [];
};
