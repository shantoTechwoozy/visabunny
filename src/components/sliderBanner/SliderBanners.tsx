import { images } from '@/utils/images';
import Image from 'next/image';
import React from 'react';

const SliderBanners = () => {
    return (
        <div className="relative min-w-full h-64 md:h-[650px] overflow-hidden">
            <Image
                src={images.banner1}// Ensure this path is correct
                alt="Banner Image"
                priority // Ensures the image is prioritized for loading
                className="rounded-lg min-w-full h-full object-cover object-center" // Add rounded corners
            />
        </div>
    );
};

export default SliderBanners;
