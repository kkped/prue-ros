import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">Mi Tienda De Rosas</Link>
        </div>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Hogar
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              Acerca De
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-gray-300">
              Tienda
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
