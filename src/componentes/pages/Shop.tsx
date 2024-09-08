import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  _id: string;
  name: string;

  description: string;
  price: number;
  imageUrl: string; 
}

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<number | null>(null);

  useEffect(() => {
    axios.get('https://api.pexels.com/v1/search')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let updatedProducts = [...products];

      if (searchTerm) {
        updatedProducts = updatedProducts.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (priceFilter !== null) {
        updatedProducts = updatedProducts.filter(product => product.price <= priceFilter);
      }

      setFilteredProducts(updatedProducts);
    };

    applyFilters();
  }, [searchTerm, priceFilter, products]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Tienda de Rosas</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="priceFilter" className="block text-lg font-medium mb-2">Filtrar por precio máximo:</label>
        <input
          id="priceFilter"
          type="number"
          placeholder="Precio máximo"
          value={priceFilter !== null ? priceFilter : ''}
          onChange={(e) => setPriceFilter(e.target.value ? parseFloat(e.target.value) : null)}
          className="border border-gray-300 p-3 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product._id} className="border border-gray-300 p-4 mb-4 rounded-lg shadow-md bg-white">
              <img src={`http://localhost:5000${product.imageUrl}`} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-md" />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-green-600 text-lg font-bold">${product.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
