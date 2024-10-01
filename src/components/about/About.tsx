import Image from "next/image";
import { aboutData } from "./AboutData";
import { nanoid } from "nanoid";

const About = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* About Section */}
      <div className="sm:flex items-center max-w-screen-xl mx-auto mb-12">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image
              src={aboutData.bannerImage}
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
              {`   Visa Bunny is a renowned visa consulting company committed to assisting people and families in navigating the challenging world of international migration. We offer thorough, knowledgeable solutions to match your demands, regardless of the kind of immigration process you're pursuing.`}
            </p>
            <p className="text-gray-700 mt-4">
              By working with Visa Bunny, you can be sure that every stage of your trip will be managed with the highest level of skill and attention.
            </p>
          </div>
        </div>
      </div>

      {/* Visa Bunny Description and Process Overview */}
      <section className="max-w-3xl mx-auto mb-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {aboutData.sections.map((section, index) => (
          <div key={nanoid()} className="bg-gray-200 rounded-lg p-6 text-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
            <h3 className="text-xl text-gray-800 font-semibold">{section.title}</h3>
            <p className="mt-4 text-gray-600">{section.description}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-3xl mx-auto mb-12">
        <div className="bg-gray-200 shadow rounded-lg p-6 text-center">
          <h3 className="text-xl text-gray-800 font-semibold">{aboutData.whyChooseUs.title}</h3>
          <ul className="list-disc list-inside text-gray-600 mx-auto max-w-2xl mb-4">
            {aboutData.whyChooseUs.points.map((point, index) => (
              <li key={nanoid()}>{point}</li>
            ))}
          </ul>
          <p className="text-lg font-bold text-green-600">{aboutData.whyChooseUs.promotion}</p>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aboutData.services.map((service, index) => (
          <div key={nanoid()} className="bg-white  shadow-md border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 rounded-lg p-6 text-center">
            <service.icon className={`text-4xl ${service.color} mx-auto mb-4`} />
            <h2 className="text-2xl font-semibold text-gray-900">{service.title}</h2>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
