import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
       {/* Navbar */}
       <nav className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">
            GameStore
          </div>
          <div className="space-x-6">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="#" className="hover:text-gray-200">Login/Register</a>
            <a href="#features" className="hover:text-gray-200">Games</a>
            <a href="#about" className="hover:text-gray-200">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to GameStore</h1>
        <p className="text-xl mb-8">Discover and buy the latest games!</p>
        <Link to="/game">
        <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gray-200">
          Explore Now
        </button>
        </Link>
      </div>
    </div>

    
  )
}

export default Header
