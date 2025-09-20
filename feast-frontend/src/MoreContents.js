import { Link } from 'react-router-dom';

const MoreContents = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto text-center transition-shadow duration-300 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Discover More <span className="text-green-600">Recipes</span>
      </h3>
      <p className="text-gray-700 text-base leading-relaxed mb-4">
        Unlock a world of culinary inspiration with our diverse recipe collection. Start exploring now!
      </p>
      <Link
        to="/recipes"
        className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
      >
        Explore Recipes
      </Link>
    </div>
  );
};

export default MoreContents;
