import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600">
          <img
            src={require('./assets/feast_logo.jpg')}
            alt="Feast Logo"
            className="h-10 w-auto"
          /> 
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/features"
            className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            to="/recipes"
            className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
          >
            Recipes
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/features"
            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            to="/recipes"
            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
            onClick={toggleMenu}
          >
            Recipes
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
