import React from 'react';
import about from '../../assets/about.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          At our bank, we believe in making your money work for you. 
          Whether you're an individual or part of a group, we provide 
          solutions that help you invest and save with confidence. 
          Join thousands who trust us to secure their financial future.
        </p>

        <p className="text-lg md:text-xl text-gray-600 mt-8">
          Our team of experts is dedicated to providing personalized 
          financial advice and support. We are committed to helping 
          you achieve your financial goals with innovative solutions 
          and exceptional service.
        </p>
        
        <img src={about} alt="About Us" className="mx-auto rounded-lg shadow-lg mt-8 mb-8" />
        <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-300 ease-in-out">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
