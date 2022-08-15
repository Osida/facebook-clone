import React from 'react';
import Image, {StaticImageData} from "next/image";
import {Avatar} from "../../../../components";
import {motion} from "framer-motion";

interface IProps {
    image: StaticImageData,
    alt: string,
    userName: string,
    profileImg: StaticImageData
}

export const motionStory = {
    whileHover: {
        scale: [1, 1.03],
        transition: {duration: 0.2, ease: 'easeInOut'}
    },
    whileTap: {
        scale: [1, 0.95],
        transition: {duration: 0.2, ease: 'easeInOut'}
    }
}

const StoryCard = ({image, alt, userName, profileImg}: IProps) => {
    return (
        <motion.div
            whileHover={motionStory.whileHover}
            whileTap={motionStory.whileTap}
            className={'cursor-pointer relative rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-36 xl:w-[7.4rem] xl:h-48 2xl:w-36 2xl:h-52 text-white'}>
            <Image
                src={image}
                alt={alt}
                layout={'fill'}
                objectFit={'fill'}
                className={'rounded-full lg:rounded-md'}
            />

            <div className={'storyCard-overlay'}>
                <Avatar image={profileImg} alt={alt} className={'border border-accentColor w-5 sm:w-7 lg:w-9 xl:w-9'}/>

                <p className={'hidden self-center lg:inline'}>{userName}</p>
            </div>

        </motion.div>
    );
};

export default StoryCard;
