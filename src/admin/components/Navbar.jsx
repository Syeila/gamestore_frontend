import React from 'react'
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Navbar = () => {
// Mendefinisikan token di luar fungsi
const token = localStorage.getItem('token');
const navigate = useNavigate();

const logoutHandler = async () => {
  try {
    // Mengatur header Authorization untuk semua request axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    // Melakukan request logout ke server
    await axios.delete('http://localhost:5000/logout');
    
    // Menghapus token dari localStorage
    localStorage.removeItem("token");
    
    // Mengarahkan pengguna kembali ke halaman utama atau login
    navigate('/');
  } catch (error) {
    console.error("Error logging out", error);
  }
};

  return (
    <nav className='bg-stone-200 px-4 py-3 flex justify-between items-center ml-64'>
      
      {/* Sebelah kiri */}
      <div className='flex items-center text-xl'>
        <FaBars className='text-black me-4 cursor-pointer' />
        <span className='text-black font-semibold'>GameStore</span>
      </div>

      {/* Sebelah kanan */}
      <div className='flex items-center gap-x-5'>
        <div className='relative md:w-64'>
          <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
            <FaSearch className='w-5 h-5' />
          </span>
          <input
            type='text'
            className='w-full px-4 pl-10 rounded shadow outline-none hidden md:block'
            placeholder='Search...'
          />
        </div>
        <FaBell className='w-6 h-6 cursor-pointer' />
        <div className='relative group'>
          <button className='flex items-center focus:outline-none'>
            <FaUserCircle className='w-6 h-6 m-1' />
          </button>
          {/* Dropdown menu */}
          <div className='hidden group-focus-within:block absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2'>
            <ul className='text-gray-800'>
              <li className='px-4 py-2 hover:bg-gray-200'><a href="#">Profile</a></li>
              <li className='px-4 py-2 hover:bg-gray-200'><a href="#">Settings</a></li>
              <li className='px-4 py-2 hover:bg-gray-200'> 
                <Link onClick={logoutHandler} className="nav-link">
                Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
