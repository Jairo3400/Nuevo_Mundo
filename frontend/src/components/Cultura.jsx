import { useEffect, useState } from 'react';
import axios from 'axios';

function Cultura() {
  const [personas, setPersonas] = useState([]);
  const [loading, setLoading] = useState(true);

  const [parroquia, setParroquia] = useState('');
  const [tema, setTema] = useState('');
  const [historia, setHistoria] = useState('');
  const [generando, setGenerando] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/api/personas')
      .then(res => {
        setPersonas(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar personas:', err);
        setLoading(false);
      });
  }, []);

  const generarHistoria = () => {
    if (!parroquia || !tema) return;

    setGenerando(true);
    axios.post('http://localhost:3001/api/generar-historia', { parroquia, tema })
      .then(res => {
        setHistoria(res.data.historia);
        setGenerando(false);
      })
      .catch(err => {
        console.error('Error generando historia:', err);
        setGenerando(false);
      });
  };

  return (
    <div className="max-w-7xl w-full px-4 mx-auto">
      <h1 className="text-4xl text-doomRed mb-10 border-b-4 border-doomRed pb-4 text-center tracking-wider">
        ☠ CÓDICE DE CHUGCHILÁN ☠
      </h1>

      {/* Sección para generar historia */}
      <div className="bg-doomGray p-6 rounded-xl border border-doomRed mb-10 shadow-lg">
        <h2 className="text-2xl text-doomRed mb-4">Generar historia cultural</h2>
        <input
          type="text"
          placeholder="Parroquia..."
          value={parroquia}
          onChange={e => setParroquia(e.target.value)}
          className="mb-3 p-2 w-full rounded bg-doomBlack text-white border border-gray-700"
        />
        <input
          type="text"
          placeholder="Tema cultural..."
          value={tema}
          onChange={e => setTema(e.target.value)}
          className="mb-4 p-2 w-full rounded bg-doomBlack text-white border border-gray-700"
        />
        <button
          onClick={generarHistoria}
          className="bg-doomRed px-4 py-2 rounded hover:bg-red-700 transition"
          disabled={generando}
        >
          {generando ? 'Generando...' : 'Crear Historia'}
        </button>

        {historia && (
          <p className="mt-4 text-gray-200 text-left italic border-t border-gray-700 pt-4">
            {historia}
          </p>
        )}
      </div>

      {/* Sección de tarjetas del códice */}
      {loading ? (
        <p className="text-gray-400 text-xl text-center mt-20 animate-pulse">
          Cargando códice ancestral...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {personas.map(p => (
            <div
              key={p.id}
              className="bg-doomGray p-5 rounded-xl shadow-lg border-2 border-doomRed transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={p.foto_url}
                alt={p.nombre}
                className="w-full h-52 object-cover rounded mb-4 border border-white"
              />
              <h2 className="text-xl text-doomRed mb-1">{p.nombre}</h2>
              <p className="text-sm text-gray-300 italic">Edad: {p.edad} · Comunidad: {p.comunidad}</p>
              <p className="mt-3 text-gray-400 text-xs text-justify">{p.descripcion}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cultura;
