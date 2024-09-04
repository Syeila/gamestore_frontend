import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="bg-gray-100">
     <Header />

      {/* Features Section */}
      <div id="features" className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">Wide Selection of Games</h3>
            <p>We offer a vast collection of the latest and most popular games across all genres.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">Affordable Prices</h3>
            <p>Enjoy competitive prices on all games with frequent discounts and promotions.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">Fast & Secure Checkout</h3>
            <p>Experience a seamless and secure purchasing process with multiple payment options.</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto text-center px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-8">About GameStore</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            GameStore is a leading online platform where you can find and purchase the latest and greatest video games. Our mission is to provide a seamless and enjoyable shopping experience for gamers around the world.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
