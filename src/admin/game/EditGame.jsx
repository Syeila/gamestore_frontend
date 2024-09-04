import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditGame = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams(); // Mengambil id game dari URL

  useEffect(() => {
    // Fetch data game yang akan diedit berdasarkan id
    const fetchGame = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/game/edit/${id}`); // Sesuaikan dengan endpoint API
        const game = response.data.game;
        console.log(game);
        setTitle(game.title);
        setPrice(game.price);
        setDesc(game.desc);
        // Anda dapat menyetel file foto yang ada jika diperlukan
      } catch (error) {
        console.error('Error fetching the game:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while fetching the game data',
        });
      }
    };

    fetchGame();
  }, [id]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Membuat FormData untuk mengirimkan data dengan file
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('desc', desc);
    if (selectedFile) {
      formData.append('photo', selectedFile);
    }

    try {
      const response = await axios.put(`http://localhost:5000/game/edit/${id}`, formData, {
        // Header Content-Type multipart/form-data tidak perlu diatur secara manual
      });
      if (response.status === 200) {
        // Tampilkan SweetAlert untuk notifikasi sukses
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Game updated successfully',
        }).then(() => {
          // Navigasi ke halaman /admin/games setelah sukses
          navigate('/admin/games');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: 'Failed to update game',
        });
      }
    } catch (error) {
      console.error('There was an error updating the game:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while updating the game',
      });
    }
  };

  const handleBack = () => {
    navigate('/admin/games');
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Edit Game</h1>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter game title"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter game price"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter game description"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="4"
          ></textarea>
        </div>

        {/* Photo */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
            Upload Photo
          </label>
          <input
            type="file"
            id="photo"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Update Game
          </button>
          <button
            type="button"
            onClick={handleBack} // Navigasi kembali ke halaman /admin/games
            className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Back to Menu
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditGame;
