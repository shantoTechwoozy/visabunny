import { images } from '@/utils/images';
import Image from 'next/image';
import React from 'react';

const SliderBanners = () => {
    return (
        <div className="relative min-w-full h-64 md:h-[650px] overflow-hidden">
            <Image
                src={images.banner1}// Ensure this path is correct
                alt="Banner Image"
                layout="fill"
                objectFit="contain"
                className="absolute w-full h-full inset-0"
            />
        </div>
    );
};

export default SliderBanners;
