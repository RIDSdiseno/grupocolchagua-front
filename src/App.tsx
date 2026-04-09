import { Routes, Route } from "react-router-dom";
import Home from "./host/Home";
import Nosotros from "./host/Nosotros";
import Beneficios from "./host/Beneficios";
import Contacto from './host/Contacto';
import Denuncia from './host/DenunciaLeyKarin';
import Cotizar from "./host/Cotizar";
import Trabaja from "./host/Trabaja";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/beneficios" element={<Beneficios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/cotizar" element={<Cotizar />} />
      <Route path="/trabaja" element={<Trabaja />} />
      <Route path="/denuncia" element={<Denuncia />} />
    </Routes>
  );
}

export default App;
