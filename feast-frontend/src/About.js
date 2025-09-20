import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main About Section */}
        <div className="bg-white rounded-lg shadow-md p-6 transition-shadow duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Feast</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Feast is your ultimate companion for culinary exploration, offering a rich collection of recipes tailored to your tastes and dietary needs. Our mission is to inspire home cooks and food enthusiasts to discover, create, and enjoy delicious meals while making informed choices about nutrition and sustainability.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-6 transition-shadow duration-300 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            At Feast, we empower you to explore global cuisines, from American classics to African delights, with detailed recipe information including health labels, calorie counts, and CO2 emissions data. We strive to make cooking accessible, enjoyable, and environmentally conscious.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-md p-6 transition-shadow duration-300 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Choose Feast?</h3>
          <ul className="space-y-2 text-gray-700 text-base">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Comprehensive recipe details, including ingredients, cuisine types, and nutritional data.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Intuitive search to find recipes by meal type, cuisine, or dietary preferences.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Sustainability insights with CO2 emissions class for eco-conscious choices.
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-md p-6 transition-shadow duration-300 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Join the Feast Community</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Start your culinary journey today! Explore our recipes, save your favorites, and share your creations with a community of food lovers. Click the <span className="font-semibold text-green-600">"Recipes"</span> button to dive in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
