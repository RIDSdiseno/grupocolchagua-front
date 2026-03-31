import { Routes, Route } from "react-router-dom";
import Home from "./host/Home";
import Nosotros from "./host/Nosotros";
import Beneficios from "./host/Beneficios";
import Contacto from './host/Contacto';
import Denuncia from './host/DenunciaLeyKarin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/beneficios" element={<Beneficios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/denuncia" element={<Denuncia />} />
    </Routes>
  );
}

export default App;