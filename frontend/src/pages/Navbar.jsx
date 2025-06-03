import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">Códice Chugchilán</h1>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className={`md:flex gap-6 ${open ? 'block' : 'hidden'} md:block`}>          
          <Link to="/" className="hover:text-red-400 transition">Inicio</Link>
          <Link to="/cultura" className="hover:text-red-400 transition">Cultura</Link>
          <Link to="/comidas" className="hover:text-red-400 transition">Comidas</Link>
          <Link to="/actividades" className="hover:text-red-400 transition">Actividades</Link>
          <Link to="/realidad" className="hover:text-red-400 transition">Realidad</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
