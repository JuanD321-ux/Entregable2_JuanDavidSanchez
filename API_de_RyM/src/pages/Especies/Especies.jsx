import { useEffect, useState } from "react";
import { obtenerPersonajesPorEspecie } from "../../api/personajesApi";
import TarjetaPersonaje from "../../components/TarjetaPersonaje/TarjetaPersonaje";
import EstadoCarga from "../../components/EstadoCarga/EstadoCarga";
import MensajeError from "../../components/MensajeError/MensajeError";
import "./Especies.css";

const especies = [
  "Human",
  "Alien",
  "Robot",
  "Mythological Creature",
  "Animal",
  "Humanoid",
  "Poopybutthole",
];

function Especies() {
  const [especieActual, setEspecieActual] = useState("Human");
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  async function cargarPorEspecie(especie) {
    try {
      setCargando(true);
      setError("");

      const datos = await obtenerPersonajesPorEspecie(especie);
      setPersonajes(datos.results);
    } catch (err) {
      setPersonajes([]);
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargarPorEspecie(especieActual);
  }, [especieActual]);

  return (
    <section className="especies">
      <div className="contenedor">
        <div className="cabecera-pagina fade-in">
          <span className="etiqueta">Filtro por especie</span>
          <h1>Consulta personajes por categoría</h1>
          <p>
            Selecciona una especie para cargar personajes desde la API pública.
            Este filtro usa peticiones con parámetros en la URL.
          </p>
        </div>

        <div className="filtros-especies">
          {especies.map((especie) => (
            <button
              key={especie}
              className={especieActual === especie ? "activo" : ""}
              onClick={() => setEspecieActual(especie)}
            >
              {especie}
            </button>
          ))}
        </div>

        <div className="resultado-especie">
          <h2>Especie seleccionada: {especieActual}</h2>
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

export default Especies;
