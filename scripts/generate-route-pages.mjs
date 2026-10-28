import fs from "fs";
import path from "path";

const OG_IMAGE = "https://grupocolchagua.cl/og-image.png";

const ROUTES = [
  {
    path: "servicios",
    title: "Servicios Transitorios y Outsourcing | Grupo Colchagua y Grupo Santa Cruz",
    description: "Conoce nuestros servicios: personal transitorio, outsourcing, reclutamiento y selección, formación y capacitación, payroll y reposición multimarca.",
  },
  {
    path: "nosotros",
    title: "Quiénes Somos | Grupo Colchagua y Grupo Santa Cruz",
    description: "Más de 10 años acompañando a empresas en Chile con servicios de personal transitorio y outsourcing. Conoce nuestro equipo y valores.",
  },
  {
    path: "contacto",
    title: "Contacto | Grupo Colchagua y Grupo Santa Cruz",
    description: "Contáctanos para cotizar servicios de personal transitorio, outsourcing, reclutamiento y más. Respondemos a la brevedad.",
  },
  {
    path: "bolsa-de-trabajo",
    title: "Bolsa de Trabajo | Grupo Colchagua",
    description: "Encuentra oportunidades laborales con Grupo Colchagua. Postula a nuestras ofertas de trabajo en todo Chile.",
  },
  {
    path: "servicios/servicios-transitorios",
    title: "Servicios Transitorios en Chile | Grupo Colchagua",
    description: "Personal transitorio para cubrir peaks de demanda, reemplazos y proyectos. Más de 10 años y 350 empresas clientes en todo Chile. Cotiza con Grupo Colchagua.",
  },
  {
    path: "servicios/outsourcing",
    title: "Outsourcing de Personal en Chile | Grupo Santa Cruz",
    description: "Outsourcing gerencial, administrativo y operativo para que tu empresa se enfoque en su negocio. Más de 10 años de trayectoria. Cotiza con Grupo Santa Cruz.",
  },
  {
    path: "servicios/reclutamiento-y-seleccion",
    title: "Reclutamiento y Selección de Personal | Grupo Colchagua",
    description: "Encontramos a las personas que tu empresa necesita, desde cargos administrativos hasta operaciones y logística. Procesos ágiles y con respaldo. Conversemos.",
  },
  {
    path: "servicios/formacion-y-capacitacion",
    title: "Formación y Capacitación Laboral | Grupo Colchagua",
    description: "Programas de formación y capacitación para equipos operativos y administrativos, alineados a las necesidades de cada empresa cliente. Conoce cómo trabajamos.",
  },
  {
    path: "servicios/payroll",
    title: "Payroll y Gestión de Remuneraciones | Grupo Colchagua",
    description: "Externaliza el cálculo y pago de remuneraciones con un equipo especializado. Orden, cumplimiento y tranquilidad para tu área de personas. Cotiza aquí.",
  },
  {
    path: "servicios/reposicion-multimarca",
    title: "Reposición Multimarca en Retail | Grupo Colchagua",
    description: "Personal de reposición en punto de venta para una o varias marcas, para que tus productos estén siempre disponibles y bien exhibidos. Cotiza con nosotros.",
  },
  {
    path: "servicios/soluciones-a-tu-medida",
    title: "Soluciones a tu Medida | Grupo Colchagua",
    description: "Diseñamos soluciones flexibles de personal según los requerimientos específicos de cada empresa. Adaptadas a tu operación y objetivos. Conversemos.",
  },
];

const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html no encontrado. Ejecuta vite build primero.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf8");

for (const route of ROUTES) {
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${route.description}" />`
    )
    .replace(
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${route.title}" />`
    )
    .replace(
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${route.description}" />`
    )
    .replace(
      /<meta property="og:image"[^>]*>/,
      `<meta property="og:image" content="${OG_IMAGE}" />`
    );

  const outDir = path.join(distDir, route.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
  console.log(`Generado: dist/${route.path}/index.html`);
}

console.log("Pre-render completado.");
