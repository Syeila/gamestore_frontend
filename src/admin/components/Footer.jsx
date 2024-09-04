import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-200 px-4 py-3 flex justify-between items-center ml-64 pb-100">
       <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg text-black font-semibold">My Website</h3>
            <p className="text-sm text-black font-semibold">© 2024 All Rights Reserved</p>
          </div>
          <div className="space-x-4">
            <a href="#" className="text-gray-400 hover:text-black font-semibold transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-black font-semibold transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-black font-semibold transition">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
