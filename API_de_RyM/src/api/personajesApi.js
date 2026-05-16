const API_URL = "https://rickandmortyapi.com/api/character";

export async function obtenerPersonajes(nombre = "") {
  const parametroNombre = nombre ? `?name=${encodeURIComponent(nombre)}` : "";
  const respuesta = await fetch(`${API_URL}${parametroNombre}`);

  if (!respuesta.ok) {
    throw new Error("No se encontraron personajes con esa búsqueda.");
  }

  return await respuesta.json();
}

export async function obtenerPersonajesPorEspecie(especie) {
  const respuesta = await fetch(`${API_URL}?species=${encodeURIComponent(especie)}`);

  if (!respuesta.ok) {
    throw new Error("No se encontraron personajes de esa especie.");
  }

  return await respuesta.json();
}

export async function obtenerPersonajePorId(id) {
  const respuesta = await fetch(`${API_URL}/${id}`);

  if (!respuesta.ok) {
    throw new Error("No se pudo cargar la información del personaje.");
  }

  return await respuesta.json();
}
