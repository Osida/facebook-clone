import React from 'react';
import Image from "next/image";
import assets from "../../../../assets";

const {images} = assets

const EventImage = () => {
    return (
        <div className={'relative flex flex-col w-full h-40'}>
            <Image
                src={images.NightClub}
                alt={'Event'}
                layout={'fill'}
                objectFit={'cover'}
            />

            <div className={'absolute w-full h-full bg-black/40 px-4 py-4 flex flex-col justify-between'}>
                <p className={'text-base font-semibold'}>Great Party</p>
                <p className={'text-xs text-iconColor'}>針が行くところに、糸が続きます</p>
            </div>
        </div>
    );
};

export default EventImage;
