import React from 'react';
import investing from '../../assets/investing.jpg';
import saving from '../../assets/saving.png';
import group from '../../assets/group.png';
import consulting from '../../assets/consulting.png';

const FeaturesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <img src={investing} alt="Investing" className="w-full mb-3 rounded-lg h-64 object-cover" />
            <h3 className="text-lg font-bold mb-2">Personalized Investments</h3>
            <p className="text-gray-600">
              Grow your wealth with tailored investment plans that meet your financial goals.
            </p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <img src={saving} alt="Saving" className="w-full mb-3 rounded-lg h-64 object-cover" />
            <h3 className="text-lg font-bold mb-2">Smart Savings</h3>
            <p className="text-gray-600">
              Save for your future with high-interest savings accounts that ensure your money works for you.
            </p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <img src={group} alt="Group Saving" className="w-full mb-3 rounded-lg h-64 object-cover" />
            <h3 className="text-lg font-bold mb-2">Group Savings Plans</h3>
            <p className="text-gray-600">
              Join group savings schemes and benefit from collective investments for greater returns.
            </p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <img src={consulting} alt="Consulting" className="w-full mb-3 rounded-lg h-64 object-cover" />
            <h3 className="text-lg font-bold mb-2">Financial Consulting</h3>
            <p className="text-gray-600">
              Get expert advice and strategies to optimize your financial health and achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
