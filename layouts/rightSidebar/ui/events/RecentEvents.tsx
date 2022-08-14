import React from 'react';
import Image from "next/image";
import assets from "../../../../assets";

const {images} = assets

const RecentEvents = () => {
    return (
        <div className={'flex flex-col px-4 space-y-8 text-xs'}>
            {Array.from(Array(4).keys()).map((value, index, array) => (
                <div key={index} className={'flex items-center space-x-2'}>
                    <div className={'w-16 h-auto'}>
                        <Image
                            src={images.SantoriniGreece}
                            alt={'Recent'}
                            layout={'responsive'}
                            objectFit={'cover'}
                            className={'rounded-sm'}
                        />
                    </div>

                    <div className={'flex flex-col space-y-1 items-start'}>
                        <p className={'font-medium'}>Save the Museum</p>
                        <p className={'text-gray-500 '}>10 dec 2022</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentEvents;
