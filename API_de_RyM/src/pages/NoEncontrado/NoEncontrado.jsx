import { Link } from "react-router-dom";
import "./NoEncontrado.css";

function NoEncontrado() {
  return (
    <section className="no-encontrado">
      <div className="contenedor">
        <div className="no-encontrado__card">
          <span className="etiqueta">Error 404</span>
          <h1>Ruta no encontrada</h1>
          <p>La página que intentas abrir no existe dentro de esta aplicación.</p>
          <Link to="/">Volver al inicio</Link>
        </div>
      </div>
    </section>
  );
}

export default NoEncontrado;
