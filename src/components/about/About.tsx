import { FaHeadset, FaLock, FaPlane, FaUserShield } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">About Visa Bunny</h1>
          <p className="mt-4 text-lg text-gray-600">
            We simplify the visa application process with ease, efficiency, and expertise.
          </p>
        </header>

        <section className="mb-12">
          <h3 className="text-xl text-gray-800 font-semibold text-center">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-600 mx-auto max-w-2xl mb-4">
            <li>High Success Rate: Over 93% visa approval for the USA and Canada.</li>
            <li>End-to-End Support: Comprehensive assistance from application to visa approval.</li>
            <li>Personalized Guidance: Tailored advice to align with your educational goals.</li>
          </ul>
          <p className="text-lg font-bold text-green-600 text-center">GET A FREE CONSULTATION IF YOU SIGN UP THIS MONTH!</p>
        </section>

        <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
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

        <footer className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">STUDY ABROAD WITH EASE!</h2>
          <p className="text-lg text-gray-600 mb-4">Secure Your Future with Our Student Visa Services</p>
          <p className="text-lg text-gray-600 mb-4">MOI Accepted, No Service Fee Required</p>
          <div className="mb-4">
            <p className="text-sm font-bold text-gray-900">CALL NOW</p>
            <a href="tel:09613821515" className="text-lg font-semibold text-green-600">
              09613 821515
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
