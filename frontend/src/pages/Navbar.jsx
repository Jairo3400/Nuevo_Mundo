
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './estrilo.css';  // Importa el archivo CSS


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-yellow-300 hover:text-white cursor-pointer transition-all duration-300">
          Códice Chugchilán
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none transition-all duration-300 transform hover:scale-110"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className={`md:flex gap-6 ${open ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="text-lg text-white hover:text-yellow-300 transition-all duration-300">
            Inicio
          </Link>
          <Link to="/cultura" className="text-lg text-white hover:text-yellow-300 transition-all duration-300">
            Cultura
          </Link>
          <Link to="/comidas" className="text-lg text-white hover:text-yellow-300 transition-all duration-300">
            Comidas
          </Link>
          <Link to="/actividades" className="text-lg text-white hover:text-yellow-300 transition-all duration-300">
            Actividades
          </Link>
          <Link to="/realidad" className="text-lg text-white hover:text-yellow-300 transition-all duration-300">
            Realidad
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;