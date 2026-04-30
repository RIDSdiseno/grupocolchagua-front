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
import Postulaciones from "./host/Postulaciones";

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
      <Route path="/postulaciones" element={<Postulaciones />} />
    </Routes>
  );
}

export default App;
