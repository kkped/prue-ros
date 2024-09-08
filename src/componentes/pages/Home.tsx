import React from 'react';
import blanca from "../../assets/blanca.jpg"
import coleccion from "../../assets/coleccion.jpg"
import red from "../../assets/red.jpg"
import cactus from "../../assets/cactus.jpg"
import planta from "../../assets/plant.jpg"
import cactusf from "../../assets/cactusf.jpg"



const Home: React.FC = () => {
  return (
    
    <div className="bg-white">
      {/* Sección de héroes*/}
      <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">
        Hermosas rosas para cada ocasión, Aprovecha el momento y sorpréndela
        </h1>
        <p className="text-xl text-gray-700 mb-8">
        Descubre las rosas más elegantes y frescas aquí en tu tienda de confianza        </p>
        <button className="px-8 py-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300">
        COMPRAR AHORA
        </button>
        
      </div>

      {/* Seccion Productos */}
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Nuestras Rosas Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={red}
              alt="Red Rose Bouquet"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">Ramo de rosas rojas</h3>
              <p className="text-gray-600">$45.000</p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300">
                Cómpralo ahora
              </button>
            </div>
          </div>

          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={blanca} 
              alt="White Rose Arrangement"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">Arreglo de Rosa Blanca</h3>
              <p className="text-gray-600">$75.000</p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300">
              Cómpralo ahora
              </button>
            </div>
          </div>

          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={coleccion} 
              alt="Pink Rose Collection"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">Colección Rosa</h3>
              <p className="text-gray-600">$38.560</p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300">
              Cómpralo ahora
              </button>
            </div>
          </div>
        </div>
      </div>

    {/*  2 Seccion Productos */}
    <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={planta}
              alt="Red Rose Bouquet"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">Planta</h3>
              <p className="text-gray-600">$35.000</p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300">
                Cómpralo ahora
              </button>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={cactus} 
              alt="White Rose Arrangement"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">Cactus</h3>
              <p className="text-gray-600">$20.000</p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300">
              Cómpralo ahora
              </button>
            </div>
          </div>

          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={cactusf} 
              alt="Pink Rose Collection"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">Cactus Flor</h3>
              <p className="text-gray-600">$32.987</p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300">
              Cómpralo ahora
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Home;

