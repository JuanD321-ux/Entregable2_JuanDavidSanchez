function MensajeError({ mensaje }) {
  return (
    <div className="mensaje-error">
      <h3>Personaje no encontrado</h3>
      <p>{mensaje}</p>
    </div>
  );
}

export default MensajeError;
