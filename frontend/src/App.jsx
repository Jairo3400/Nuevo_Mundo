import { Routes, Route, Link } from 'react-router-dom';
import Cultura from './components/Cultura';
import Inicio from './pages/Inicio';
import Comidas from './components/Comidas';
import Actividades from './components/Actividades';
import Realidad from './components/Realidad';
import Navbar from './pages/Navbar';


function App() {
  return (
    <div className="bg-doomBlack min-h-screen text-white">
      {/* Navegación */}
      <nav className="bg-doomGray p-4 flex justify-center gap-6 border-b border-doomRed text-sm sm:text-base">
        <Link to="/" className="hover:text-doomRed transition">Inicio</Link>
        <Link to="/cultura" className="hover:text-doomRed transition">Cultura</Link>
        <Link to="/comidas" className="hover:text-doomRed transition">Comidas</Link>
        <Link to="/actividades" className="hover:text-doomRed transition">Actividades</Link>
        <Link to="/realidad" className="hover:text-doomRed transition">Realidad</Link>
      </nav>

      {/* Rutas */}
      <Routes>
  <Route path="/" element={<Inicio />} />
  <Route path="/cultura" element={<Cultura />} />
  <Route path="/comidas" element={<Comidas />} />
  <Route path="/actividades" element={<Actividades />} />
  <Route path="/realidad" element={<Realidad />} />
</Routes>

    </div>
  );
}

export default App;
