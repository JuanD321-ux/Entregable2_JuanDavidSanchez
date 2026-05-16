import BarraNavegacion from "./components/BarraNavegacion/BarraNavegacion";
import RutasApp from "./routes/RutasApp";

function App() {
  return (
    <>
      <BarraNavegacion />

      <main>
        <RutasApp />
      </main>

      <footer className="footer">
        <p>API de Rick y Morty</p>
        <span>Hecho por: Juan David Sanchez Chantre - Programación Web</span>
      </footer>
    </>
  );
}

export default App;
