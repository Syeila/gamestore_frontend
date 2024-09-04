import React from 'react'

const Footer = () => {
  return (
    <div>
         {/* Call to Action */}
         <div id="contact" className="text-center py-16 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Join Our Gaming Community</h2>
        <p className="text-lg mb-6">Sign up now and start exploring our vast game library!</p>
        <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gray-200">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Footer
