import Link from 'next/link';
import { FaComments } from 'react-icons/fa';

const Announcement = () => {
    return (
        <div className="fixed bottom-4 right-4 bg-sky-500 bg-opacity-80 backdrop-blur-md px-4 py-2 text-sky-600 flex items-center space-x-2 rounded-full shadow-lg z-40">
            {/* Live Chat Section */}
            <Link
                href="#"
                className="flex items-center space-x-2 hover:text-gray-300"
                aria-label="Live Chat"
            >
                <FaComments size={30} className="text-orange-500" /> {/* Icon size */}
                <span className="text-lg font-semibold hidden md:inline text-white">Live Chat</span> {/* Text hidden on smaller screens */}
            </Link>
        </div>
    );
};

export default Announcement;
