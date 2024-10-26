import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-teal-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Contact Us Section */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p className="mb-1">Email: <a href="mailto:support@lendmaster.com" className="hover:underline">support@lendmaster.com</a></p>
            <p className="mb-1">Phone: <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a></p>
            <p>Address: 123 Finance St, Money City, 12345</p>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-2">Join Us in Making a Difference</h3>
            <p className="mb-6">Secure your financial future with our trusted banking solutions.</p>
            <div className="space-x-4 mb-6">
              <Link to="/register">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg">
                  Register Now
                </button>
              </Link>
              <Link to="/signin">
                <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg text-lg">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="text-sm text-center">
          <p>&copy; 2024 LendMaster. All rights reserved.</p>
          <p>
            <Link to="/" className="hover:underline">
              Privacy Policy
            </Link>
            {' | '}
            <Link to="/" className="hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
