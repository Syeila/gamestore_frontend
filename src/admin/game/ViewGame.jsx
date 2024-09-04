import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios'; // Tambahkan import axios untuk panggilan API
import Swal from 'sweetalert2';

const GameList = () => {
  // State untuk data game, pencarian, halaman, dan jumlah item per halaman
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  // Filter games berdasarkan pencarian
  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hitung total halaman
  const totalPages = Math.ceil(filteredGames.length / itemsPerPage);

  // Ambil data game untuk halaman saat ini
  const paginatedGames = filteredGames.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const deleteGame = async (id) => {
    try {
      // Tampilkan konfirmasi penghapusan dengan SweetAlert2
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
  
      // Jika pengguna mengkonfirmasi, lakukan penghapusan
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:5000/game/delete/${id}`);
        
        // Setelah game dihapus, perbarui state games
        setGames(games.filter(game => game.id !== id));
        
        // Tampilkan notifikasi sukses
        Swal.fire('Deleted!', 'Your game has been deleted.', 'success');
      }
    } catch (error) {
      // Tampilkan notifikasi kesalahan jika terjadi error
      Swal.fire('Error!', 'There was a problem deleting the game.', 'error');
      console.error('Error deleting game:', error);
    }
  };
  
  

  return (
    <div className="p-6 bg-gray-50 border border-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Game List</h1>
        <div className="w-full sm:w-1/2">
          <nav className="flex justify-end">
            <ol className="flex space-x-2 text-gray-700">
              <li>
                <a href="#" className="text-blue-500 hover:underline">Home</a>
              </li>
              <li>/</li>
              <li className="text-gray-600">Game List</li>
            </ol>
          </nav>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-2" />
      {/* Button Add Game */}
      <div className="mb-4 flex justify-between">
        <Link to="/admin/games/create">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            <FaPlus className="inline mr-2" />
            Add Game
          </button>
        </Link>
      </div>

      {/* Input pencarian */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-lg w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">No</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Title</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Desc</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Photo</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {paginatedGames.map((game, index) => (
              <tr
                key={game.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-4 text-sm font-medium">{index + 1}</td>
                <td className="px-6 py-4 text-sm">{game.title}</td>
                <td className="px-6 py-4 text-sm">{game.price}</td>
                <td className="px-6 py-4 text-sm">{game.desc}</td>
                <td className="px-6 py-4 text-sm">
                  <img src={`http://localhost:5000/uploads/${game.photo}`} alt={game.title} className="w-16 h-16 object-cover" />
                </td>
                <td className="px-6 py-4 text-sm flex space-x-2">
                  <Link to={`/admin/games/edit/${game.id}`}>
                    <button className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 transition">
                      <FaEdit className="w-5 h-5" />
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteGame(game.id)}  // Panggil fungsi deleteGame saat tombol ditekan
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition"
                  >
                      <FaTrash className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-800">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default GameList;
