import { nanoid } from 'nanoid';
import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaHome, FaBook, FaPassport, FaPlane, FaSuitcase, FaTicketAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaBriefcase className="text-3xl text-gray-900" />,
    bgColor: 'bg-blue-200',
    title: 'Part-Time Job Opportunities',
    description: 'Support in finding part-time job opportunities.',
  },
  {
    icon: <FaCalendarAlt className="text-3xl text-gray-900" />,
    bgColor: 'bg-green-200',
    title: 'Secure 1-20 in 7 Days',
    description: 'Get your 1-20 secured in just 7 days.',
  },
  {
    icon: <FaHome className="text-3xl text-gray-900" />,
    bgColor: 'bg-yellow-200',
    title: 'Accommodation Assistance',
    description: 'Help in finding suitable accommodation.',
  },
  {
    icon: <FaBook className="text-3xl text-gray-900" />,
    bgColor: 'bg-red-200',
    title: 'Course Selection Guidance',
    description: 'Expert guidance on choosing the right course.',
  },
  {
    icon: <FaPassport className="text-3xl text-gray-900" />,
    bgColor: 'bg-purple-200',
    title: 'Visa Application (DS-160)',
    description: 'Comprehensive support for your DS-160 visa application.',
  },
  {
    icon: <FaPlane className="text-3xl text-gray-900" />,
    bgColor: 'bg-teal-200',
    title: 'Pre-Departure & Post-Departure',
    description: 'Pre-departure session and post-departure facilities.',
  },
  {
    icon: <FaSuitcase className="text-3xl text-gray-900" />,
    bgColor: 'bg-orange-200',
    title: 'Visa Assistance',
    description: 'Complete visa application assistance.',
  },
  {
    icon: <FaTicketAlt className="text-3xl text-gray-900" />,
    bgColor: 'bg-pink-200',
    title: 'Ticket Booking',
    description: 'Assistance with booking tickets for your travel.',
  },
];

const ServiceCard: React.FC = () => {
  return (
    <section id="services" className="py-8 bg-white sm:py-10 lg:py-12">
      <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8 ">
        <div className="text-center ">
          <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            Our Comprehensive Services
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Empowering your journey with our expert support and visa assistance.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-8 text-center gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={nanoid()} className="flex flex-col items-center p-4 bg-white shadow-sm rounded-lg">
              <div className={`w-14 h-14 rounded-full ${service.bgColor} flex justify-center items-center`}>
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
