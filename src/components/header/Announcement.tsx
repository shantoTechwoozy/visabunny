import Link from 'next/link';
import { FaComments } from 'react-icons/fa';

const Announcement = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md px-1 py-2 text-sky-600 flex items-center justify-end sm:px-6 lg:px-2 z-40">
            {/* Live Chat Section */}
            <Link href="#" className="flex items-center space-x-2 hover:text-gray-300">
                <FaComments size={40} className="text-orange-500" /> {/* Enlarged icon */}
                <span className="text-lg font-semibold">Live Chat</span> {/* Enlarged text */}
            </Link>
        </div>
    );
};

export default Announcement;
