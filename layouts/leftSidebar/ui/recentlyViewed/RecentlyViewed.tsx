import React from 'react';
import {IconWrap, Widget} from "../../../../components";
import assets from "../../../../assets";
import {BsThreeDots} from "react-icons/bs";
import Image from "next/image";
import {motion} from "framer-motion";

const {images} = assets

export const motionRecent = {
    whileHover: {
        scale: [1, 1.03],
        transition: {duration: 0.2, ease: 'easeInOut'}
    },
    whileTap: {
        scale: [1, 0.95],
        transition: {duration: 0.2, ease: 'easeInOut'}
    }
}

const recently_viewed = [
    {name: 'TenerifeSpain', image: images.TenerifeSpain},
    {name: 'MountTeideSpain', image: images.MountTeideSpain},
    {name: 'FanadHeadLighthouse', image: images.FanadHeadLighthouse},
    {name: 'KirkjufellMountain', image: images.KirkjufellMountain},
    {name: 'SantoriniGreece', image: images.SantoriniGreece},
    {name: 'TokyoTowerMinatokuJapan', image: images.TokyoTowerMinatokuJapan},
]

const RecentlyViewed = () => {
    return (
        <Widget>
            <Widget.TitleWrap>
                <Widget.Title>Recently Viewed</Widget.Title>
                <IconWrap.secondary>
                    <BsThreeDots className={'text-lg text-iconColor'}/>
                </IconWrap.secondary>
            </Widget.TitleWrap>

            <div className={'grid grid-cols-1 gap-3 lg:grid-cols-2'}>
                {recently_viewed.map((recent, index) => (
                    <motion.div
                        // whileHover={motionRecent.whileHover}
                        whileTap={motionRecent.whileTap}
                        key={index}
                        className={'cursor-pointer flex items-center justify-between text-xs space-x-3 lg:text-sm'}>
                        <div className={'w-full h-full'}>
                            <Image
                                src={recent.image}
                                alt={recent.name}
                                layout={'responsive'}
                                objectFit={'cover'}
                                className={'rounded-sm'}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </Widget>
    );
};

export default RecentlyViewed;
