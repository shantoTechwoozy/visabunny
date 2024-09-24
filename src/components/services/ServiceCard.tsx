"use client";
import { nanoid } from 'nanoid';
import React from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion
import { ServiceData } from './ServiceData';

const ServiceCard: React.FC = () => {
  const slideVariants = {
    animate: {
      x: ['0%', '-100%'], // Slide entire row from 0% to -100%
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, // Duration for the entire cycle (adjust for speed)
          ease: 'linear',
        },
      },
    },
  };

  return (
    <section id="services" className="py-8 bg-white sm:py-10 lg:py-12 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            Our Comprehensive Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering your journey with our expert support and visa assistance.
          </p>
        </div>

        {/* Wrapping the service cards in motion.div for continuous animation */}
        <motion.div
          className="flex mt-10 space-x-4 sm:space-x-6 md:space-x-8" // Use flex for horizontal layout with responsive spacing
          variants={slideVariants}
          animate="animate"
        >
          {/* First set of cards */}
          {ServiceData.map((service) => (
            <div
              key={nanoid()}
              className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out"
              style={{ minWidth: '250px', maxWidth: '300px' }} // Set min and max width for better responsiveness
            >
              <div className={`w-16 h-16 rounded-full ${service.bgColor} flex justify-center items-center`}>
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800 text-center">{service.title}</h3>
              <p className="mt-3 text-sm text-gray-600 text-center leading-relaxed">{service.description}</p>
            </div>
          ))}

          {/* Duplicate set of cards for infinite loop */}
          {ServiceData.map((service) => (
            <div
              key={nanoid()}
              className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out"
              style={{ minWidth: '250px', maxWidth: '300px' }} // Set min and max width for better responsiveness
            >
              <div className={`w-16 h-16 rounded-full ${service.bgColor} flex justify-center items-center`}>
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800 text-center">{service.title}</h3>
              <p className="mt-3 text-sm text-gray-600 text-center leading-relaxed">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCard;
