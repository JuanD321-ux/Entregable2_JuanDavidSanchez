import { useEffect, useState } from "react";
import { obtenerPersonajes } from "../../api/personajesApi";
import TarjetaPersonaje from "../../components/TarjetaPersonaje/TarjetaPersonaje";
import EstadoCarga from "../../components/EstadoCarga/EstadoCarga";
import MensajeError from "../../components/MensajeError/MensajeError";
import "./Inicio.css";

function Inicio() {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  async function cargarPersonajes(nombre = "") {
    try {
      setCargando(true);
      setError("");

      const datos = await obtenerPersonajes(nombre);
      setPersonajes(datos.results);
    } catch (err) {
      setPersonajes([]);
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargarPersonajes();
  }, []);

  function manejarBusqueda(e) {
    e.preventDefault();
    cargarPersonajes(busqueda);
  }

  function limpiarBusqueda() {
    setBusqueda("");
    cargarPersonajes();
  }

  return (
    <section className="inicio">
      <div className="contenedor">
        <div className="hero">
          <div className="hero__texto fade-in">
            <span className="etiqueta">API pública</span>
            <h1>Personajes del multiverso de Rick y Morty</h1>
            <p>
              Busca la información de tus personajes favoritos de la serie animada "Rick y Morty". Utiliza el buscador para encontrar detalles sobre su especie, estado, origen y más. ¡Explora el universo de Rick y Morty!
            </p>

            <form className="buscador" onSubmit={manejarBusqueda}>
              <input
                type="text"
                placeholder="Buscar personaje, por ejemplo: Morty"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <button type="submit">Buscar</button>
              <button type="button" className="btn-limpiar" onClick={limpiarBusqueda}>
                Limpiar
              </button>
            </form>
          </div>
        </div>

        {cargando && <EstadoCarga />}

        {!cargando && error && <MensajeError mensaje={error} />}

        {!cargando && !error && (
          <div className="personajes-grid">
            {personajes.map((personaje) => (
              <TarjetaPersonaje key={personaje.id} personaje={personaje} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Inicio;
