import Image from 'next/image';
import React from 'react';

const SliderBanners = () => {
    return (
        <div className="relative w-full h-64 md:h-[500px]">
            <Image
                src='/banner/b1.jpg'  // Correct path from the root of the public folder
                alt="Banner 4"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
            />
        </div>
    );
}

export default SliderBanners;
