import Link from 'next/link';
import FlagsIcon from './FlagsIcon';
import ImageGrid from './ImageGrid';

const AboutUs = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Text Content */}
                    <div className="bg-white p-8 md:p-12 lg:px-16 lg:py-8">
                        <div className="max-w-xl">
                            <h2 className="text-2xl font-bold text-sky-500 md:text-3xl text-left">
                                The Journey Of VisaBunny
                            </h2>
                            <p className="text-gray-700 mt-4">
                                {` At VisaBunny, we specialize in making the visa process easy and accessible for everyone. Whether you're a student looking to study abroad or a traveler planning your next adventure, our team is here to provide personalized and reliable services.`}
                            </p>
                            <p className="text-gray-700 mt-4">
                                We offer a full range of visa services, including student visas for those pursuing international education and visit visas for tourists and short-term stays. Our experienced team works closely with you to ensure a smooth, hassle-free process from start to finish, so you can focus on your plans while we handle the paperwork.
                            </p>
                            <p className="text-gray-700 mt-4">
                                With years of expertise and a global network, VisaBunny.com is your trusted partner for navigating the complexities of visa applications. Let us help you make your dreams of studying or traveling abroad a reality.
                            </p>



                            <div className="mt-8">
                                <Link
                                    href="#"
                                    className="inline-block rounded border border-blue-500 bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-500 focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Get Started Today
                                </Link>
                            </div>

                            {/* Flag Icons */}
                            <FlagsIcon />
                        </div>
                    </div>

                    {/* Image Grid */}
                    <ImageGrid />
                </div>
            </div>
        </section>
    );
};


export default AboutUs;
