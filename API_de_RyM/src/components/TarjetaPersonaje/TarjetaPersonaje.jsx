import { Link } from "react-router-dom";
import "./TarjetaPersonaje.css";

function TarjetaPersonaje({ personaje }) {
  const claseEstado = personaje.status.toLowerCase();

  return (
    <article className="tarjeta fade-in">
      <img src={personaje.image} alt={personaje.name} className="tarjeta__imagen" />

      <div className="tarjeta__contenido">
        <div className="tarjeta__encabezado">
          <h3>{personaje.name}</h3>
          <span className={`estado estado--${claseEstado}`}>{personaje.status}</span>
        </div>

        <p>
          <strong>Especie:</strong> {personaje.species}
        </p>
        <p>
          <strong>Género:</strong> {personaje.gender}
        </p>

        <Link to={`/personaje/${personaje.id}`} className="tarjeta__boton">
          Ver detalle
        </Link>
      </div>
    </article>
  );
}

export default TarjetaPersonaje;
