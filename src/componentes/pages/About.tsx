import React from 'react';
import rosebla from "../../assets/rosebla.jpg"
import mision from "../../assets/mision.jpg"

const About: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 h-full">
      <h1 className="text-4xl font-bold mb-4">Acerca de la página</h1>
       
      <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Sobre nuestra tienda de rosas
        </h1>
        <p className="text-lg text-center text-gray-600 mb-6">
        Bienvenido a nuestra tienda de rosas, donde nos especializamos en ofrecer las rosas más exquisitas para cada ocasión. Nuestra misión es proporcionar rosas frescas, vibrantes y hermosas que alegrarán el día de cualquier persona.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="text-center">
            <img
              src={rosebla}
              alt="Hermosas Rosas"
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-gray-700">Nuestras Rosas</h2>
            <p className="text-gray-600">
            Nuestras rosas provienen de los mejores productores de todo el mundo para garantizar la máxima calidad y frescura.
            </p>
          </div>

          <div className="text-center">
            <img
              src={mision}
              alt="Nuestra Mision"
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-gray-700">Nuestra Misión</h2>
            <p className="text-gray-600">
            Nos esforzamos por ofrecer no solo las mejores rosas, sino también un excelente servicio al cliente. 
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default About;
