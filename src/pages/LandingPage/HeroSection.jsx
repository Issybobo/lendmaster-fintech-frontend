import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero.png';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-teal-600 to-teal-800 text-white w-full h-screen flex flex-col md:flex-row justify-between items-center pt-20 md:pt-0 px-8 md:px-16">
      {/* Left Side - Text */}
      <div className="flex flex-col justify-center items-start space-y-6 md:w-1/2 animate-fadeIn">
        <br></br>
        <br></br>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Invest & Save for a Brighter Future
        </h1>
        <br></br>
        <p className="text-xl md:text-3xl leading-relaxed max-w-lg">
          Secure your financial future with personalized investment and savings plans tailored to your needs. Join us today and take the first step towards financial freedom.
        </p>
        <br></br>
        <br></br>
        <div className="space-x-4 mt-8">
          <Link to="/register">
            <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-xl transition duration-300 shadow-xl transform hover:scale-105">
              Get Started
            </button>
          </Link>
          <Link to="/signin">
            <button 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600
             text-white px-10 py-4 rounded-full text-xl transition duration-300 shadow-xl transform hover:scale-105">
              Sign In
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-end animate-slideInRight">
        <img src={hero} alt="Hero Image" className="w-full max-w-lg rounded-lg shadow-2xl transform hover:scale-105 transition duration-300" />
      </div>
    </section>
  );
};

export default HeroSection;
