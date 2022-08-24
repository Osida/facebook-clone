import React from 'react';
import Image, {StaticImageData} from "next/image";
import {Avatar, Text} from "../../../../components";
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
            className={'cursor-pointer relative rounded-full text-white text-sm w-16 h-16 sm:w-20 sm:h-20 lg:w-full lg:h-[10.3rem] xl:h-48 xl:text-base 2xl:h-56'}
        >
            <Image
                src={image}
                alt={alt}
                layout={'fill'}
                objectFit={'fill'}
                className={'rounded-full lg:rounded-md'}
            />

            <div className={'storyCard-overlay'}>
                <Avatar image={profileImg} alt={alt} className={'border border-accentColor w-6 sm:w-8 lg:w-10'}/>

                <Text className={'hidden self-center lg:inline'}>{userName}</Text>
            </div>

        </motion.div>
    );
};

export default StoryCard;
