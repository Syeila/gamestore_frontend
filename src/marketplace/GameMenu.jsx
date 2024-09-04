import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';

const GameMenu = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('http://localhost:5000/game');
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="bg-gray-100">
      <Header />

      {/* Game Cards Section */}
      <div className="container mx-auto py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Available Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <div key={game.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={`http://localhost:5000/uploads/${game.photo}`}
                alt={game.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
              <p className="text-gray-600 mb-4">RP. {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(game.price)}</p>
              <p className="text-gray-600 mb-4">{game.desc}</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GameMenu;
