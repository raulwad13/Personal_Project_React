import { useEffect, useRef, useState } from "react";
import "./App.css";

// Vite incluye las imágenes del repositorio en la compilación de GitHub Pages.
const imagenes = import.meta.glob("./assets/monsters/*.{webp,png,jpg,jpeg}", { eager: true, query: "?url", import: "default" });
const normalizar = (nombre) => nombre.toLowerCase().replace(/[^a-z0-9]/g, "");
const fotos = Object.fromEntries(Object.entries(imagenes).map(([ruta, url]) => [normalizar(ruta.split("/").pop().replace(/\.[^.]+$/, "")), url]));
const fotoMonstruo = (nombre) => fotos[normalizar(nombre)] || null;

function FotoMonstruo({ nombre, grande = false }) {
  const src = fotoMonstruo(nombre);
  return src ? (
    <img className={grande ? "foto-monstruo foto-grande" : "foto-monstruo"} src={src} alt={`Imagen de ${nombre}`} loading="lazy" />
  ) : (
    <div className={grande ? "foto-faltante foto-grande" : "foto-faltante"} aria-label={`Imagen no disponible de ${nombre}`}>🐉</div>
  );
}


// Mapas ya incluidos en el proyecto: el resto de regiones usa el mapa general.
const mapas = import.meta.glob("./assets/maps/*.{png,PNG,jpg,jpeg,webp}", { eager: true, query: "?url", import: "default" });
const mapaPorArchivo = Object.fromEntries(Object.entries(mapas).map(([ruta, url]) => [ruta.split("/").pop().toLowerCase(), url]));
const mapasBioma = {
  "Ancient Forest": "bosque-primigenio.png",
  "Wildspire Waste": "yermo-de-agujas.png",
  "Rotten Vale": "valle-putrefacto.png",
  "Elder's Recess": "lecho-de-ancianos.png",
};
const mapaGeneral = mapaPorArchivo["mapaglobal.png"];
const imagenBioma = (nombre) => mapaPorArchivo[mapasBioma[nombre]] || mapaGeneral;


const elementos = {
  fire: ["🔥", "Fuego"], water: ["💧", "Agua"], thunder: ["⚡", "Rayo"],
  ice: ["❄️", "Hielo"], dragon: ["🐉", "Dragón"], poison: ["☠️", "Veneno"],
  blast: ["💥", "Explosión"], paralysis: ["⚡", "Parálisis"], sleep: ["🌙", "Sueño"],
};
const nombreElemento = (valor) => elementos[String(valor || "").toLowerCase()] || ["✦", valor || "Desconocido"];

function Debilidades({ datos }) {
  if (!Array.isArray(datos) || datos.length === 0) return <p>No hay debilidades registradas.</p>;
  return <div className="debilidades">{datos.map((dato, indice) => {
    const [icono, nombre] = nombreElemento(dato.element);
    const estrellas = Number(dato.stars);
    return <div className="debilidad" key={`${dato.element}-${indice}`}>
      <span className="elemento-icono" aria-hidden="true">{icono}</span>
      <span className="debilidad-detalle"><strong>{nombre}</strong>{dato.condition && <small>{dato.condition}</small>}</span>
      <span className="estrellas" aria-label={Number.isFinite(estrellas) && estrellas >= 0 ? `${estrellas} de 3 estrellas` : "Valoración no disponible"}>
        {Number.isFinite(estrellas) && estrellas >= 0 ? `${"★".repeat(Math.min(3, estrellas))}${"☆".repeat(Math.max(0, 3 - estrellas))}` : "—"}
      </span>
    </div>;
  })}</div>;
}

// Los biomas se obtienen de los monstruos recibidos de la API.
const API = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? null : `${window.location.protocol}//${window.location.hostname}:3000/api`);

function App() {
  const [monstruos, setMonstruos] = useState([]);
  const [bioma, setBioma] = useState(null);
  const [seleccionado, setSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);
  const seccionMonstruos = useRef(null);
  const seccionFicha = useRef(null);
  const irA = (referencia) => window.requestAnimationFrame(() => referencia.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  const elegirBioma = (nombre) => { setBioma(nombre); setBusqueda(""); irA(seccionMonstruos); };
  const abrirFicha = (monstruo) => { setSeleccionado(monstruo); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const volver = () => { setSeleccionado(null); irA(seccionMonstruos); };

  useEffect(() => {
    fetch(API ? API + "/monsters" : import.meta.env.BASE_URL + "monsters.json")
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error("No se pudieron cargar los monstruos");
        return respuesta.json();
      })
      .then((datos) => setMonstruos(Array.isArray(datos) ? datos : []))
      .catch(() => setError("No se pudieron cargar los datos de monstruos. Recarga la página o comprueba la conexión."))
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
        {!API && <p className="demo-notice">Demo pública · 58 monstruos · Consulta sin servidor</p>}
      </header>

      {seleccionado ? (
        <section className="panel">
          <button className="volver-ficha" onClick={() => setSeleccionado(null)}>← Volver a {bioma || "los biomas"}</button>
          <h2>{seleccionado.name}</h2>
          <FotoMonstruo nombre={seleccionado.name} grande />
          <p><strong>Especie:</strong> {seleccionado.species || "Desconocida"}</p>
          <p><strong>Tipo:</strong> {seleccionado.type || "Desconocido"}</p>
          <p>{seleccionado.description || "Sin descripción disponible."}</p>
          <h3>Hábitats</h3>
          <p>{seleccionado.locations?.map((lugar) => lugar.name).join(", ") || "Sin datos"}</p>
          <h3>Debilidades</h3>
          <Debilidades datos={seleccionado.weaknesses} />
        </section>
      ) : (
        <>
          <section className="panel">
            <h2>Mapa de biomas</h2>
            {cargando && <p role="status">Cargando biomas y monstruos...</p>}
            {error && <p role="alert">{error}</p>}
            {!cargando && !error && biomas.length === 0 && <p>No hay monstruos disponibles. Comprueba los datos de la API.</p>}
            <p className="mapa-ayuda">Elige una región para descubrir qué monstruos viven allí.</p>
            <div className="mapa" aria-label="Seleccionar bioma">
              {biomas.map((nombre) => (
                <button key={nombre} className={bioma === nombre ? "bioma activo" : "bioma"}
                  onClick={() => elegirBioma(nombre)} aria-pressed={bioma === nombre}>
                  {imagenBioma(nombre) && <img className="bioma-imagen" src={imagenBioma(nombre)} alt="" loading="lazy" />}
                  <span className="bioma-info"><strong>{nombre}</strong><small>{monstruos.filter((m) => m.locations?.some((l) => l.name === nombre)).length} monstruos</small></span>
                </button>
              ))}
            </div>
          </section>
          {bioma && (
            <section className="panel">
              <h2>Monstruos de {bioma}</h2>
              {imagenBioma(bioma) && <img className="mapa-seleccionado" src={imagenBioma(bioma)} alt={`Mapa ilustrado de ${bioma}`} /> }
              {!cargando && !error && disponibles.length === 0 && <p>No hay monstruos disponibles en este bioma.</p>}
              <label className="etiqueta-busqueda" htmlFor="buscar-monstruo">Buscar monstruo</label>
              <input id="buscar-monstruo" className="buscador" type="search"
                placeholder="Escribe el nombre de un monstruo..."
                value={busqueda} onChange={(evento) => setBusqueda(evento.target.value)} />
              {filtrados.length === 0 && disponibles.length > 0 && <p>No hay monstruos que coincidan con la búsqueda.</p>}
              <div className="monstruos">
                {filtrados.map((monstruo) => (
                  <button key={monstruo.name} className="monstruo" onClick={() => abrirFicha(monstruo)}>
                    <FotoMonstruo nombre={monstruo.name} />
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
