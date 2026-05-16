import { NavLink } from "react-router-dom";
import "./BarraNavegacion.css";

function BarraNavegacion() {
  return (
    <header className="barra">
      <div className="barra__contenedor">
        <NavLink to="/" className="barra__marca">
          <div className="barra__icono">
            <img src="/images/iconoRyM.jpg" alt="Logo Rick y Morty" />
          </div>
          
          <div>
            <strong> API de Rick y Morty</strong>
            <span>Buscador de personajes</span>
          </div>
        </NavLink>

        <nav className="barra__menu">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/especies">Filtrar por especie</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default BarraNavegacion;
