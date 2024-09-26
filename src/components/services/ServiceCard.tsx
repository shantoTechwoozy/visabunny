"use client";
import { nanoid } from 'nanoid';
import React from 'react';
import { ServiceData } from './ServiceData';

const ServiceCard: React.FC = () => {
  return (
    <section id="services" className="py-8 bg-white sm:py-10 lg:py-12 overflow-hidden">
      <div className="px-4 w-full sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            Our Comprehensive Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering your journey with our expert support and visa assistance.
          </p>
        </div>

        {/* Directly using a flex container for the cards */}
        <div className="flex flex-wrap justify-center mt-10">
          {ServiceData.map((service) => (
            <div
              key={nanoid()}
              className="flex flex-col items-center p-4 bg-white"
              style={{ minWidth: '200px', maxWidth: '250px' }} // Set smaller min and max width
            >
              <div className={`w-12 h-12 rounded-full ${service.bgColor} flex justify-center items-center`}>
                {service.icon}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-gray-800 text-center">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600 text-center leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
