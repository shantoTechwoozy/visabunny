import { images } from '@/utils/images';
import Image from 'next/image';
import { FaPlane, FaLock, FaUserShield, FaHeadset } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* About Section */}
      <div className="sm:flex items-center max-w-screen-xl mx-auto mb-12">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image
              src={images.aboutBanner}
              alt="Background Image"
              layout="responsive"
              width={700}
              height={475}
              className="rounded-md"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About Us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              STUDY ABROAD<span className="text-indigo-600"> WITH EASE!</span>
            </h2>
            <p className="text-gray-700">
              {`Visa Bunny is a renowned visa consulting company committed to assisting people and families in navigating the challenging world of international migration. We offer thorough, knowledgeable solutions to match your demands, regardless of the kind of immigration process you're pursuing.`}
            </p>
            <p className="text-gray-700 mt-4">
              By working with Visa Bunny, you can be sure that every stage of your trip will be managed with the highest level of skill and attention.
            </p>
          </div>
        </div>
      </div>

      {/* Visa Bunny Description and Process Overview */}
      <section className="max-w-3xl mx-auto mb-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Bringing Visions to Reality Worldwide Card */}
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl text-gray-800 font-semibold">
            Bringing Visions to Reality Worldwide
          </h3>
          <p className="mt-4 text-gray-600">
            Visa Bunny is a dependable global partner for our clients, offering knowledgeable assistance at every stage of the process, from choosing the appropriate visa category to successfully submitting your application.
          </p>
        </div>

        {/* Visa Bunny Process Overview Card */}
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl text-gray-800 font-semibold">
            Visa Bunny Process Overview
          </h3>
          <p className="mt-4 text-gray-600">
            We provide comprehensive help with visa applications, which includes document preparation, interview coaching, and legal documentation from immigration lawyers. Our expert team ensures your visa application stands out, improving your chances of approval.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-3xl mx-auto mb-12">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl text-gray-800 font-semibold">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-600 mx-auto max-w-2xl mb-4">
            <li>High Success Rate: Over 93% visa approval for the USA and Canada.</li>
            <li>End-to-End Support: Comprehensive assistance from application to visa approval.</li>
            <li>Personalized Guidance: Tailored advice to align with your educational goals.</li>
          </ul>
          <p className="text-lg font-bold text-green-600">
            GET A FREE CONSULTATION IF YOU SIGN UP THIS MONTH!
          </p>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <FaPlane className="text-4xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900">Easy Travel</h2>
          <p className="mt-2 text-gray-600">
            Streamline your travel plans with our quick and efficient visa solutions.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 text-center">
          <FaLock className="text-4xl text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900">Secure Processing</h2>
          <p className="mt-2 text-gray-600">
            Your personal information is handled with the highest level of security.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 text-center">
          <FaUserShield className="text-4xl text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900">Expert Guidance</h2>
          <p className="mt-2 text-gray-600">
            Our experts provide personalized guidance to ensure your visa application is successful.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 text-center">
          <MdOutlineAttachMoney className="text-4xl text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900">Affordable Rates</h2>
          <p className="mt-2 text-gray-600">
            We offer competitive pricing without compromising on quality.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 text-center">
          <FaHeadset className="text-4xl text-purple-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900">24/7 Support</h2>
          <p className="mt-2 text-gray-600">
            Our support team is available round the clock to assist you with any queries.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
