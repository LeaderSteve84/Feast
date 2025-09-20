import React from 'react';
import AboutBrief from './AboutBrief';
import DisplayFood from './DisplayFood';
import MoreContents from './MoreContents';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Feast</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover a world of flavors with our curated recipes, tailored to your tastes and dietary needs. Explore, cook, and savor sustainable meals today!
          </p>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-12 px-4">
        <AboutBrief />
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
