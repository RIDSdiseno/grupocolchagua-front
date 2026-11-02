const API_URL = import.meta.env.VITE_API_URL;

export type Marca = {
  id: number;
  nombre: string;
  logoUrl: string;
};

type MarcasResponse = {
  ok: boolean;
  marcas?: Marca[];
};

export const listarMarcasPublicas = async (): Promise<Marca[]> => {
  const response = await fetch(`${API_URL}/api/marcas-web/publicas`);

  if (!response.ok) {
    throw new Error("No se pudieron cargar las marcas");
  }

  const json = (await response.json()) as MarcasResponse;

  return json.marcas ?? [];
};
