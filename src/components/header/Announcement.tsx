import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaComments } from 'react-icons/fa'; // Imported FaComments for chat icon
import { MdPhone, MdLocationOn, MdLanguage } from 'react-icons/md';

const Announcement = () => {
    return (
        <div className="bg-white px-4 py-3 hidden text-sky-600 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            {/* Content Section */}
            <div className="flex flex-wrap items-center space-x-4 text-sm font-medium">
                {/* Address 1 */}
                <div className="flex items-center">
                    <MdLocationOn className="mr-1 text-yellow-300" />
                    <p>House no GA -36, Shahjadpur Gulshan, Dhaka, Bangladesh 1212</p>
                </div>

                {/* Address 2 */}
                <div className="flex items-center">
                    <MdLocationOn className="mr-1 text-yellow-300" />
                    <p>Sunnyvale, California USA 94086</p>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                    <MdPhone className="mr-1 text-green-300" />
                    <p>CALL: 09613 821515</p>
                </div>

                {/* Website */}
                <div className="flex items-center">
                    <MdLanguage className="mr-1 text-red-400" />
                    <p>
                        VISA BUNNY -{' '}
                        <a href="https://www.visabunny.com" className="text-sky-400 underline">
                            www.visabunny.com
                        </a>
                    </p>
                </div>
            </div>

            {/* Social Icons Section */}
            <div className="mt-4 flex space-x-3 sm:mt-0">
                <Link href="#" className="hover:text-gray-300">
                    <FaFacebook size={30} className="text-blue-600 sm:size-25" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                    <FaInstagram size={30} className="text-pink-600 sm:size-25" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                    <FaWhatsapp size={30} className="text-green-600 sm:size-25" />
                </Link>
                {/* Chat icon */}
                <Link href="#" className="hover:text-gray-300">
                    <FaComments size={30} className="text-orange-500 sm:size-25" />
                </Link>
            </div>
        </div>
    );
};

export default Announcement;
