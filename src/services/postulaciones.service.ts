const API_URL = import.meta.env.VITE_API_URL;

type BackendResponse = {
  message?: string;
  error?: string;
};

const getResponseMessage = async (response: Response) => {
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const data = (await response.json()) as BackendResponse;
    return data.message ?? data.error;
  }

  const text = await response.text();
  return text || undefined;
};

export const enviarPostulacion = async (formData: FormData) => {
  const response = await fetch(`${API_URL}/api/postulaciones`, {
    method: "POST",
    body: formData,
  });

  const message = await getResponseMessage(response);

  if (!response.ok) {
    throw new Error(message ?? "No se pudo enviar la postulación");
  }

  return message;
};
