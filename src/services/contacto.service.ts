const API_URL = import.meta.env.VITE_API_URL as string;

export interface ContactoPayload {
  nombre: string;
  empresa?: string;
  email: string;
  telefono?: string;
  servicio?: string;
  mensaje: string;
}

export interface CotizarPayload {
  companyName: string;
  rut?: string;
  email: string;
  message?: string;
}

export async function enviarContacto(payload: ContactoPayload): Promise<void> {
  const response = await fetch(`${API_URL}/api/contacto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error((data as { message?: string }).message ?? "Error al enviar el mensaje.");
  }
}

export async function enviarCotizacion(payload: CotizarPayload): Promise<void> {
  const response = await fetch(`${API_URL}/api/contacto/cotizar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error((data as { message?: string }).message ?? "Error al enviar la cotización.");
  }
}
