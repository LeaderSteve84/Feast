import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AboutBrief from './AboutBrief';
import DisplayFood from './DisplayFood';
import MoreContents from './MoreContents';
// import heroBg from './assets/stefan-vladimirov-Q_Moi2xjieU-unsplash.jpg';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay; replace with actual async logic if needed
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Enhanced Hero Section */}
      <section
        style={{
          backgroundImage: `url(${require("./assets/stefan-vladimirov-Q_Moi2xjieU-unsplash.jpg")})`,
        }}
        className="bg-cover bg-center text-white py-16 px-4 relative"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative z-10 text-center">
          {isLoading ? (
            <div className="animate-pulse bg-gray-300 h-16 w-16 mx-auto mb-4 rounded-full"></div>
          ) : (
            <img
              src={require('./assets/feast_logo.jpg')}
              alt="Feast Logo"
              className="h-16 w-auto mx-auto mb-4"
            />
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Delicious Recipes with Feast</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Explore curated recipes tailored to your tastes and dietary needs. Cook sustainably today!
          </p>
          <Link
            to="/recipes"
            className="inline-block bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
          >
            Browse Recipes
          </Link>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-12 px-4">
        <AboutBrief />
      </section>

      {/* Trust Elements Section */}
      <section className="py-12 px-4 text-center bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Community</h2>
        <p className="text-gray-700 text-lg mb-6">Over 100 food lovers are exploring Feast daily!</p>
        {/* Placeholder for testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-gray-600 italic">"Feast made meal planning so easy!"</p>
            <p className="text-gray-800 font-semibold mt-2">- Morgan Rich</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-gray-600 italic">"Love the sustainability focus."</p>
            <p className="text-gray-800 font-semibold mt-2">- Patient Ngumbau</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-gray-600 italic">"Great recipes for all diets!"</p>
            <p className="text-gray-800 font-semibold mt-2">- Ifeoluwa Tope</p>
          </div>
        </div>
      </section>

      {/* Food Display Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Explore Our Recipes</h2>
          <DisplayFood />
        </div>
      </section>

      {/* More Contents Section */}
      <section className="py-12 px-4 bg-gray-50">
        <MoreContents />
      </section>
    </div>
  );
};

export default Home;
