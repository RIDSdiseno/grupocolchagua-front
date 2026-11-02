import { useEffect, useState } from "react";
import { obtenerAjustesWeb, type AjustesWeb } from "../services/ajustes.service";

// Ajustes de la página pública. `null` mientras carga.
export function useAjustesWeb(): AjustesWeb | null {
  const [ajustes, setAjustes] = useState<AjustesWeb | null>(null);

  useEffect(() => {
    let activo = true;

    obtenerAjustesWeb().then((data) => {
      if (activo) setAjustes(data);
    });

    return () => {
      activo = false;
    };
  }, []);

  return ajustes;
}
