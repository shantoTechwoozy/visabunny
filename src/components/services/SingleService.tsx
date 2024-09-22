import { AiFillStar } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';
import { MdAccessTime, MdSchool } from 'react-icons/md';

const SingleService = () => {
    return (
        <div className="p-5 max-w-full mx-auto bg-white shadow-lg">
            <h1 className="text-3xl bg-sky-400 text-center font-bold mb-6 px-8 py-8 text-white">STUDY ABROAD WITH EASE!</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">Secure Your Future with Our Student Visa Services</h2>
                <p className="text-gray-700 mb-4">MOI accepted, no service fee required!</p>
                <div className="flex items-center mb-4">
                    <FaPhoneAlt className="text-blue-500 mr-2" />
                    <span className="font-semibold text-black">CALL NOW: <span className="text-blue-600">09613 821515</span></span>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">Why Choose Us?</h2>
                <ul className="list-disc text-slate-600 list-inside space-y-2">
                    <li className="flex items-center"><AiFillStar className="text-yellow-500 mr-2" /><strong>High Success Rate:</strong> Over 93% visa approval for the USA and Canada.</li>
                    <li className="flex items-center"><MdAccessTime className="text-blue-500 mr-2" /><strong>End-to-End Support:</strong> Comprehensive assistance from application to visa approval.</li>
                    <li className="flex items-center"><MdSchool className="text-green-500 mr-2" /><strong>Personalized Guidance:</strong> Tailored advice to align with your educational goals.</li>
                </ul>
                <p className="mt-4 font-bold text-green-600">GET A FREE CONSULTATION IF YOU SIGN UP THIS MONTH!</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">Unlock Study Opportunities In The USA!</h2>
                <p className="text-gray-700 mb-4">{`Visabunny.com is your trusted partner, providing complete guidance and support for pursuing your Bachelors, Master's, or PhD degree in the USA, turning your dream into reality.`}</p>
                <h3 className="text-xl font-semibold text-black mb-4">Discover Why Studying In The USA Offers Unparalleled Opportunities:</h3>
                <ul className="list-disc text-slate-600 list-inside space-y-2">
                    <li className="flex items-center"><GiGraduateCap className="text-green-500 mr-2" />5-year multiple entry visa</li>
                    <li className="flex items-center"><GiGraduateCap className="text-green-500 mr-2" />Prestigious and globally recognized universities</li>
                    <li className="flex items-center"><GiGraduateCap className="text-green-500 mr-2" />Low/reasonable tuition fees</li>
                    <li className="flex items-center"><GiGraduateCap className="text-green-500 mr-2" />Scholarship opportunities up to 80%</li>
                    <li className="flex items-center"><GiGraduateCap className="text-green-500 mr-2" />Bring your spouse and kids</li>
                    <li className="flex items-center"><GiGraduateCap className="text-green-500 mr-2" />Career advancement and networking</li>
                    <li className="flex items-center"><GiGraduateCap className="text-green-500 mr-2" />OPT/Permanent residency after study</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">Key Points:</h2>
                <ul className="list-disc text-slate-600 list-inside space-y-2">
                    <li className="flex items-center"><BiSupport className="text-blue-500 mr-2" />Apply with MOI, no IELTS required.</li>
                    <li className="flex items-center"><BiSupport className="text-blue-500 mr-2" />Accept low CGPA.</li>
                    <li className="flex items-center"><BiSupport className="text-blue-500 mr-2" />Guaranteed admission.</li>
                    <li className="flex items-center"><BiSupport className="text-blue-500 mr-2" />Affordable tuition fees and scholarship opportunities.</li>
                    <li className="flex items-center"><BiSupport className="text-blue-500 mr-2" />Student loan support available at a low cost.</li>
                    <li className="flex items-center"><BiSupport className="text-blue-500 mr-2" />No service fee before visa approval.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-4">Fast-track Your Canadian Academic Journey!</h2>
                <p className="text-slate-600 mb-4">Streamline your visa application, so you can focus on achieving your educational goals in Canada.</p>
                <h3 className="text-xl font-semibold text-black mb-4">Higher Education in Canada:</h3>
                <ul className="list-disc text-slate-600 list-inside space-y-2">
                    <li className="flex items-center"><MdSchool className="text-green-500 mr-2" />Apply with IELTS/MOI/Duolingo/PTE.</li>
                    <li className="flex items-center"><MdSchool className="text-green-500 mr-2" />Comprehensive support services available.</li>
                    <li className="flex items-center"><MdSchool className="text-green-500 mr-2" />Eligibility Check: Assess your eligibility for admission based on your qualifications.</li>
                    <li className="flex items-center"><MdSchool className="text-green-500 mr-2" />Scholarship Search: Identify scholarships that align with your profile.</li>
                    <li className="flex items-center"><MdSchool className="text-green-500 mr-2" />Admission Guidance: Step-by-step guidance throughout the admission process.</li>
                    <li className="flex items-center"><MdSchool className="text-green-500 mr-2" />Free Counseling: Schedule a consultation with our experienced counselors from anywhere.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-black mb-4">Our Services:</h2>
                <ul className="list-disc text-slate-600 list-inside space-y-2">
                    <li className="flex items-center"><BiSupport className="text-blue-500 mr-2" />Support in finding part-time job opportunities.</li>
                    <li className="flex items-center"><BiSupport className="text-blue-500 mr-2" />Secure your I-20 in just 7 days.</li>
                    <li className="flex items-center"><BiSupport className="text-blue-500 mr-2" />Assistance in finding suitable accommodation.</li>
                    <li className="flex items-center"><BiSupport className="text-blue-500 mr-2" />Expert guidance on selecting the right course.</li>
                    <li className="flex items-center"><BiSupport className="text-blue-500 mr-2" />Comprehensive support with the visa application (DS-160) process.</li>
                    <li className="flex items-center"><BiSupport className="text-blue-500 mr-2" />Pre-departure session and post-departure facilities.</li>
                    <li className="flex items-center"><BiSupport className="text-blue-500 mr-2" />Ticket booking assistance.</li>
                </ul>
            </section>
        </div>
    );
};

export default SingleService;
