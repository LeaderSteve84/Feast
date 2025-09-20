import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center mb-4">
             <img
               src={require('./assets/feast_logo.jpg')}
               alt="Feast Logo"
               className="h-10 w-auto"
             /> 
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover, cook, and savor delicious recipes tailored to your tastes. Join our community of food enthusiasts and explore sustainable culinary delights.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/" className="hover:text-green-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-green-300 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="hover:text-green-300 transition-colors">
                  Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Connect With Us</h4>
            <p className="text-gray-300 text-sm mb-4">
              Email: <a href="mailto:support@feastapp.com" className="hover:text-green-300 transition-colors">support@feastapp.com</a>
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-300 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-300 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-300 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          &copy; 2024 Feast. All rights reserved.
          {/* &copy; {new Date().getFullYear()} Feast. All rights reserved. */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
