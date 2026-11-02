import { Routes, Route } from "react-router-dom";
import Home from "./host/Home";
import Nosotros from "./host/Nosotros";
import Beneficios from "./host/Beneficios";
import Contacto from './host/Contacto';
import Denuncia from './host/DenunciaLeyKarin';
import Cotizar from "./host/Cotizar";
import Trabaja from "./host/Trabaja";
import Servicios from "./host/Servicios";
import ServicioDetalle from "./host/ServicioDetalle";
import BolsaDeTrabajo from "./host/BolsaDeTrabajo";
import Postulaciones from "./host/Postulaciones";
import Blog from "./host/Blog";
import BlogArticulo from "./host/BlogArticulo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/beneficios" element={<Beneficios />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/servicios/:slug" element={<ServicioDetalle />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/cotizar" element={<Cotizar />} />
      <Route path="/trabaja" element={<Trabaja />} />
      <Route path="/denuncia" element={<Denuncia />} />
      <Route path="/bolsa-de-trabajo" element={<BolsaDeTrabajo />} />
      <Route path="/postulaciones" element={<Postulaciones />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/categoria/:categoria" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogArticulo />} />
    </Routes>
  );
}

export default App;
