import React from 'react';
import Image from "next/image";
import assets from "../../../../assets";
import {Text} from "../../../../components";

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

            <div className={'absolute w-full h-full px-4 py-4 flex flex-col justify-between bg-black/40'}>
                <Text className={''}>Great Party</Text>
                <Text className={''}>針が行くところに、糸が続きます</Text>
            </div>
        </div>
    );
};

export default EventImage;
