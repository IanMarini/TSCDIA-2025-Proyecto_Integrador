import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './Evidencia 01/ProductList';
import StatsPanel from './Evidencia 01/StatsPanel';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        const renamed = res.data.products.map((prod, i) => ({
          ...prod,
          title: customTitles[i % customTitles.length],
          price: (Math.random() * 450 + 50).toFixed(2),
        }));
        setProducts(renamed);
        setFiltered(renamed);
      });
  }, []);

  useEffect(() => {
    if (search.trim() === '') {
      setFiltered(products);
    } else {
      setFiltered(products.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      ));
    }
  }, [search, products]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        Catálogo de Productos
      </h1>

      <input
        type="text"
        className="w-full p-2 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Buscar por título..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <StatsPanel products={filtered} />
      <ProductList products={filtered} />
    </div>
  );
};

const customTitles = [
  "Auriculares LunaStorm", "EcoBotella Prisma", "Reloj Solar NovaTime",
  "Lámpara Boreal", "Teclado Fantasma", "Café del Alba", "Pulsera Viento Norte",
  "Drone Zafiro", "Guitarra LavaRock", "Cámara Bruma", "Sudadera Dragón Rojo",
  "Vinilo Aurora", "Zapatillas Eclipse", "Mochila Nebulosa", "Mouse Ónix",
  "Agenda Vértigo", "Tablet Estelar", "Micrófono Eclipse Pro", "Pintura Cósmica", "Libro Lumen"
];

export default App;
