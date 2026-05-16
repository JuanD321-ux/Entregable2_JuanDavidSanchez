import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { obtenerPersonajePorId } from "../../api/personajesApi";
import EstadoCarga from "../../components/EstadoCarga/EstadoCarga";
import MensajeError from "../../components/MensajeError/MensajeError";
import "./DetallePersonaje.css";

function DetallePersonaje() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarDetalle() {
      try {
        setCargando(true);
        setError("");

        const datos = await obtenerPersonajePorId(id);
        setPersonaje(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    cargarDetalle();
  }, [id]);

  if (cargando) {
    return (
      <section className="detalle">
        <div className="contenedor">
          <EstadoCarga />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="detalle">
        <div className="contenedor">
          <MensajeError mensaje={error} />
        </div>
      </section>
    );
  }

  return (
    <section className="detalle">
      <div className="contenedor">
        <Link to="/" className="volver">
          ← Volver al inicio
        </Link>

        <article className="detalle-card fade-in">
          <img src={personaje.image} alt={personaje.name} />

          <div className="detalle-card__info">
            <span className="etiqueta">Detalle del personaje</span>
            <h1>{personaje.name}</h1>

            <div className="detalle-lista">
              <p><strong>Estado:</strong> {personaje.status}</p>
              <p><strong>Especie:</strong> {personaje.species}</p>
              <p><strong>Género:</strong> {personaje.gender}</p>
              <p><strong>Origen:</strong> {personaje.origin.name}</p>
              <p><strong>Ubicación:</strong> {personaje.location.name}</p>
              <p><strong>Episodios:</strong> {personaje.episode.length}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default DetallePersonaje;
