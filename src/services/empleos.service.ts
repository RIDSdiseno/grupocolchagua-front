const API_URL = import.meta.env.VITE_API_URL;

export type Empleo = {
  id: number;
  titulo: string;
  empresa: string | null;
  cargo: string | null;
  ubicacion: string | null;
  comuna: string | null;
  region: string | null;
  modalidad: string | null;
  jornada: string | null;
  sueldo: string | null;
  descripcion: string | null;
  requisitos: string | null;
  beneficios: string | null;
  vacantes: number | null;
  estado: string;
  fechaCierre: string | null;
  publicadoEn: string | null;
  createdAt: string;
  updatedAt: string;
};

type EmpleosResponse = {
  ok: boolean;
  data?: Empleo[];
  empleos?: Empleo[];
};

export const listarEmpleosPublicos = async (): Promise<Empleo[]> => {
  const response = await fetch(`${API_URL}/api/empleos/publicos`);

  if (!response.ok) {
    throw new Error("No se pudieron cargar las ofertas laborales");
  }

  const json = (await response.json()) as EmpleosResponse;

  const lista = json.data ?? json.empleos;

  if (!json.ok || !Array.isArray(lista)) {
    throw new Error("Respuesta inesperada del servidor");
  }

  return lista;
};
