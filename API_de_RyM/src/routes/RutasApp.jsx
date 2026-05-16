import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";
import Especies from "../pages/Especies/Especies";
import DetallePersonaje from "../pages/DetallePersonaje/DetallePersonaje";
import NoEncontrado from "../pages/NoEncontrado/NoEncontrado";

function RutasApp() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/especies" element={<Especies />} />
      <Route path="/personaje/:id" element={<DetallePersonaje />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
}

export default RutasApp;
