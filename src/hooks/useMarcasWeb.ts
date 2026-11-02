import { useEffect, useState } from "react";
import { listarMarcasPublicas } from "../services/marcas.service";

import alvi from "../assets/marcas/logo_alvi-150x150.png";
import bci from "../assets/marcas/logo_bci-150x150.png";
import dpsChile from "../assets/marcas/logo_dps_chile-150x150.png";
import easy from "../assets/marcas/logo_easy-150x150.png";
import espacioRiesco from "../assets/marcas/logo_espacio_riesco-150x150.png";
import ikea from "../assets/marcas/logo_ikea-150x150.png";
import ironMountain from "../assets/marcas/logo_iron_mountain-150x150.png";
import jumbo from "../assets/marcas/logo_jumbo-150x150.png";
import paris from "../assets/marcas/logo_paris-150x150.png";
import santaIsabel from "../assets/marcas/logo_santa_isabel-150x150.png";
import sodimac from "../assets/marcas/logo_sodimac-150x150.png";
import starken from "../assets/marcas/logo_starken-3-150x150.png";
import vinaUndurraga from "../assets/marcas/logo_vina_undurraga-150x150.png";
import walmart from "../assets/marcas/logo_walmart.png";
import xiaomi from "../assets/marcas/logo_xiaomi-150x150.png";

export type Client = { name: string; logo: string };

// Respaldo si la API no responde. Las marcas se administran desde la intranet
// (Marketing → Herramientas → Marcas).
const CLIENTS_RESPALDO: Client[] = [
  { name: "Walmart", logo: walmart },
  { name: "Jumbo", logo: jumbo },
  { name: "Sodimac", logo: sodimac },
  { name: "Paris", logo: paris },
  { name: "Easy", logo: easy },
  { name: "IKEA", logo: ikea },
  { name: "BCI", logo: bci },
  { name: "Starken", logo: starken },
  { name: "Alvi", logo: alvi },
  { name: "Xiaomi", logo: xiaomi },
  { name: "DPS Chile", logo: dpsChile },
  { name: "Espacio Riesco", logo: espacioRiesco },
  { name: "Iron Mountain", logo: ironMountain },
  { name: "Santa Isabel", logo: santaIsabel },
  { name: "Viña Undurraga", logo: vinaUndurraga },
];

// Marcas del carrusel de clientes. `null` mientras carga.
export function useMarcasWeb(): Client[] | null {
  const [clients, setClients] = useState<Client[] | null>(null);

  useEffect(() => {
    let activo = true;

    listarMarcasPublicas()
      .then((marcas) => {
        if (activo) {
          setClients(marcas.map((marca) => ({ name: marca.nombre, logo: marca.logoUrl })));
        }
      })
      .catch(() => {
        if (activo) setClients(CLIENTS_RESPALDO);
      });

    return () => {
      activo = false;
    };
  }, []);

  return clients;
}
