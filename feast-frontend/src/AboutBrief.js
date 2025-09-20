import { Link } from 'react-router-dom';

const AboutBrief = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto transition-shadow duration-300 hover:shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        About <span className="text-green-600">Feast</span>
      </h2>
      <p className="text-gray-700 text-base leading-relaxed">
        Feast is a vibrant platform for food enthusiasts, welcoming everyone from seasoned chefs to adventurous home cooks. Join our growing community to explore diverse recipes, share culinary creations, and embrace sustainable cooking.{' '}
        <Link to="/about" className="text-green-600 font-semibold hover:underline">
          Learn More
        </Link>
      </p>
    </div>
  );
};

export default AboutBrief;
