import { useEffect, useState } from "react";
import "./App.css";

// Los biomas se obtienen de los monstruos recibidos de la API.
const API = import.meta.env.VITE_API_URL || `${window.location.protocol}//${window.location.hostname}:3000/api`;

function App() {
  const [monstruos, setMonstruos] = useState([]);
  const [bioma, setBioma] = useState(null);
  const [seleccionado, setSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(API + "/monsters")
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error("No se pudieron cargar los monstruos");
        return respuesta.json();
      })
      .then((datos) => setMonstruos(Array.isArray(datos) ? datos : []))
      .catch(() => setError("No se ha podido conectar con la API. Comprueba que el servidor Express está funcionando."))
      .finally(() => setCargando(false));
  }, []);

  const biomas = [...new Set(monstruos.flatMap((monstruo) =>
    Array.isArray(monstruo.locations)
      ? monstruo.locations.map((lugar) => lugar.name).filter(Boolean)
      : []
  ))].sort();

  const disponibles = monstruos.filter((monstruo) =>
    Array.isArray(monstruo.locations) &&
    monstruo.locations.some((lugar) => lugar.name === bioma)
  );

  // Filtramos solo los monstruos del bioma seleccionado.
  const filtrados = disponibles.filter((monstruo) =>
    monstruo.name.toLowerCase().includes(busqueda.trim().toLowerCase())
  );

  return (
    <div className="app">
      <header className="cabecera">
        <h1>Monster Hunter Maps</h1>
        <p>Selecciona una región y descubre sus monstruos.</p>
      </header>

      {seleccionado ? (
        <section className="panel">
          <button onClick={() => setSeleccionado(null)}>← Volver a {bioma}</button>
          <h2>{seleccionado.name}</h2>
          <p><strong>Especie:</strong> {seleccionado.species || "Desconocida"}</p>
          <p><strong>Tipo:</strong> {seleccionado.type || "Desconocido"}</p>
          <p>{seleccionado.description || "Sin descripción disponible."}</p>
          <h3>Hábitats</h3>
          <p>{seleccionado.locations?.map((lugar) => lugar.name).join(", ") || "Sin datos"}</p>
          <h3>Debilidades</h3>
          <p>{seleccionado.weaknesses?.map((debilidad) => debilidad.element).join(", ") || "Sin datos"}</p>
        </section>
      ) : (
        <>
          <section className="panel">
            <h2>Mapa de biomas</h2>
            {cargando && <p role="status">Cargando biomas y monstruos...</p>}
            {error && <p role="alert">{error}</p>}
            {!cargando && !error && biomas.length === 0 && <p>No hay monstruos disponibles. Comprueba los datos de la API.</p>}
            <div className="mapa" aria-label="Seleccionar bioma">
              {biomas.map((nombre) => (
                <button key={nombre} className={bioma === nombre ? "bioma activo" : "bioma"}
                  onClick={() => { setBioma(nombre); setBusqueda(""); }} aria-pressed={bioma === nombre}>
                  {nombre}
                </button>
              ))}
            </div>
          </section>
          {bioma && (
            <section className="panel">
              <h2>Monstruos de {bioma}</h2>
              {!cargando && !error && disponibles.length === 0 && <p>No hay monstruos disponibles en este bioma.</p>}
              <label className="etiqueta-busqueda" htmlFor="buscar-monstruo">Buscar monstruo</label>
              <input id="buscar-monstruo" className="buscador" type="search"
                placeholder="Escribe el nombre de un monstruo..."
                value={busqueda} onChange={(evento) => setBusqueda(evento.target.value)} />
              {filtrados.length === 0 && disponibles.length > 0 && <p>No hay monstruos que coincidan con la búsqueda.</p>}
              <div className="monstruos">
                {filtrados.map((monstruo) => (
                  <button key={monstruo.name} className="monstruo" onClick={() => setSeleccionado(monstruo)}>
                    <strong>{monstruo.name}</strong>
                    <span>{monstruo.species}</span>
                    <small>Ver ficha →</small>
                  </button>
                ))}
              </div>
            </section>
          )}
        </>
      )}
      <footer>Proyecto educativo · Monster Hunter Maps</footer>
    </div>
  );
}

export default App;
