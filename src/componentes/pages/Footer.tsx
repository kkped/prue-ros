import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sección Acerca de */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Sobre Nosotros</h2>
            <p className="text-gray-400">
            Ofrecemos la mejor selección de rosas frescas para cada ocasión. Con una variedad de colores y arreglos, hacemos que tus momentos sean especiales.
            </p>
          </div>

          {/* Seccion de enlaces */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Enlaces</h2>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white transition duration-300">Hogar</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-gray-400 hover:text-white transition duration-300">Sobre Nosotros</a>
              </li>
              <li className="mb-2">
                <a href="/shop" className="text-gray-400 hover:text-white transition duration-300">Tienda</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contáctenos</a>
              </li>
            </ul>
          </div>

          {/* Seccion Contacto */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contáctenos</h2>
            <p className="text-gray-400 mb-2">Calle 24 A 5-45</p>
            <p className="text-gray-400 mb-2">Phone: +57 3218873321</p>
            <p className="text-gray-400">Email: floresdam12@gmail.com</p>

            {/* Redes Sociales */}
            <div className="flex mt-4">
              <a href="#" className="text-gray-400 hover:text-white mr-4 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.5c0-.3 0-.5-.1-.8-.4-.1-1-.1-1.5-.1-1.3 0-2.4.6-3 1.6-.4.6-.5 1.3-.5 2v1H16v2.6h2v8.3h3.1v-8.3H24V8.9h-2.5V7.9c0-.3.1-.5.3-.7s.5-.3.9-.3h1.3v-2z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.5c-.8.4-1.7.7-2.6.8.9-.6 1.6-1.5 2-2.5-.9.5-1.8.9-2.8 1.1C17.6 3.8 16.5 3 15 3c-2.7 0-4.9 2.3-4.9 5v.5c-4-.2-7.5-2.3-9.9-5.4C.1 5.7.5 8.1 2 9.4c-.7 0-1.5-.2-2.1-.6v.1c0 2.4 1.6 4.4 3.7 4.8-.7.2-1.5.2-2.2.1.6 1.9 2.4 3.3 4.4 3.4-1.6 1.3-3.7 2-5.9 2-.4 0-.7 0-1-.1 2.1 1.5 4.6 2.3 7.3 2.3 8.7 0 13.5-7.3 13.5-13.5v-.6c.9-.7 1.7-1.5 2.3-2.4-.7.3-1.6.5-2.5.7z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.1c-5.5 0-9.9 4.5-9.9 9.9 0 5 3.7 9.1 8.6 9.8v-6.9H7.5v-2.9h3.2v-2.1c0-3.2 1.9-5 4.7-5 1.4 0 2.7.3 2.7.3v3H16c-1.3 0-1.7.9-1.7 1.7v2h2.9l-.5 2.9h-2.4v6.9c5-.7 8.7-4.8 8.7-9.8 0-5.5-4.5-9.9-9.9-9.9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 Desarrollado por KIKE.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
