import { useEffect, useState } from 'react';

function Cultura() {
  const [personas, setPersonas] = useState([]);
  const [loading, setLoading] = useState(true);

  const [parroquia, setParroquia] = useState('');
  const [tema, setTema] = useState('');
  const [historia, setHistoria] = useState('');
  const [generando, setGenerando] = useState(false);

  useEffect(() => {
    // Simulamos la carga de datos de personas (simulación de API)
    setLoading(false);
    setPersonas([
      { id: 1, nombre: 'Juan Pérez', edad: 45, comunidad: 'Chugchilán', descripcion: 'Líder de la comunidad, apasionado por la cultura.' },
      { id: 2, nombre: 'Ana López', edad: 30, comunidad: 'Chugchilán', descripcion: 'Historiadora local, amante de las tradiciones ancestrales.' },
      // Puedes agregar más personas aquí
    ]);
  }, []);

  const generarHistoria = () => {
    if (!parroquia || !tema) return;

    setGenerando(true);

    // Simulación de generación de historia de IA
    setTimeout(() => {
      const historiaGenerada = `
        En la parroquia de ${parroquia}, la cultura y las tradiciones siempre han jugado un papel fundamental. 
        El tema de "${tema}" ha sido un aspecto importante de la vida diaria de la comunidad.
        Las personas como Juan Pérez y Ana López han dedicado su vida a preservar esta rica herencia cultural, 
        transmitiendo el conocimiento a las nuevas generaciones.
        
        Con la llegada de nuevas tecnologías y la migración, la parroquia ha logrado adaptarse, 
        pero sin perder el toque único que la hace especial. La cultura de ${parroquia} sigue viva, 
        gracias a personas como ellos que siguen luchando por mantener su legado.
      `;
      setHistoria(historiaGenerada);
      setGenerando(false);
    }, 2000); // Simulación de un retraso de 2 segundos como si fuera una IA
  };

  return (
    <div className="max-w-7xl w-full px-4 mx-auto">
      <h1 className="text-4xl text-doomRed mb-10 border-b-4 border-doomRed pb-4 text-center tracking-wider">
         CÓDICE DE CHUGCHILÁN 
      </h1>

      {/* Sección para generar historia */}
      <div className="bg-doomGray p-6 rounded-xl border border-doomRed mb-10 shadow-lg transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-2xl text-doomRed mb-4">Generar historia cultural</h2>
        <input
          type="text"
          placeholder="Parroquia..."
          value={parroquia}
          onChange={e => setParroquia(e.target.value)}
          className="mb-3 p-3 w-full rounded bg-doomBlack text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-doomRed"
        />
        <input
          type="text"
          placeholder="Tema cultural..."
          value={tema}
          onChange={e => setTema(e.target.value)}
          className="mb-4 p-3 w-full rounded bg-doomBlack text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-doomRed"
        />
        <button
          onClick={generarHistoria}
          className="bg-doomRed px-4 py-2 rounded hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-doomRed"
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
