import React from 'react';
import {IconWrap, Widget} from "../../../../components";
import assets from "../../../../assets";
import {BsThreeDots} from "react-icons/bs";
import Image from "next/image";

const {images} = assets

const RecentlyViewed = () => {
    return (
        <Widget>
            <div className={'flex items-center justify-between text-xs font-medium mb-2 lg:text-sm'}>
                <h3 className={'font-medium'}>Recently Viewed</h3>
                <BsThreeDots className={'text-sm text-iconColor'}/>
            </div>

            <div className={'grid grid-cols-1 gap-2 lg:grid-cols-2'}>
                {Array.from(Array(6).keys()).map((value, index, array) => (
                    <IconWrap.li key={index} classNames={'flex items-center justify-between text-xs lg:text-sm'}>
                        <div className={'w-full h-full'}>
                            <Image
                                src={images.TenerifeSpain}
                                alt={'Recent'}
                                layout={'responsive'}
                                objectFit={'cover'}
                                className={'rounded-sm'}
                            />
                        </div>
                    </IconWrap.li>
                ))}
            </div>
        </Widget>
    );
};

export default RecentlyViewed;
