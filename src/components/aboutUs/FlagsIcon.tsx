import { images } from '@/utils/images';
import Image from 'next/image';
import { FaGlobe } from 'react-icons/fa';

const FlagsIcon = () => {
    const countries = [
        { name: 'USA', flag: images.usaFlag },
        { name: 'Canada', flag: images.canadaFlag },
        { name: 'Australia', flag: images.australiaFlag },
        { name: 'UK', flag: images.ukFlag },
        { name: 'Denmark', flag: images.denmarkFlag },
        { name: 'Finland', flag: images.finlandFlag },
        { name: 'Sweden', flag: images.swedenFlag },
    ];

    return (
        <div className="mt-8">
            <div className="flex flex-row items-center gap-2">
                <FaGlobe className="text-blue-700" title="Global" size={20} />
                <h3 className="text-xl font-bold text-gray-500">
                    Processing Countries</h3>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {countries.map((country) => (
                    <div key={country.name} className="flex flex-col items-start">
                        <Image
                            src={country.flag}
                            alt={`${country.name} Flag`}
                            width={60}
                            height={40}
                            className="object-contain"
                        />
                        <span className="mt-1 text-sm text-gray-700">{country.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FlagsIcon;
