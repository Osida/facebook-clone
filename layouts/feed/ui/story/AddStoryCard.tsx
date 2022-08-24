import React from 'react';
import Image from "next/image";
import {BsFillPlusCircleFill} from "react-icons/bs";
import assets from "../../../../assets";
import {motion} from "framer-motion";
import {motionStory} from "./StoryCard";
import {Text} from "../../../../components";

const {images} = assets

const AddStoryCard = () => {
    return (
        <motion.div
            whileHover={motionStory.whileHover}
            whileTap={motionStory.whileTap}
            className={'cursor-pointer relative rounded-full text-sm w-16 h-16 sm:w-20 sm:h-20 lg:w-full lg:h-[10.3rem] xl:h-48 xl:text-base 2xl:h-56'}
        >
            <Image
                src={images.TokyoTowerMinatokuJapan}
                alt={'Add Story'}
                layout={'fill'}
                placeholder={'blur'}
                objectFit={'cover'}
                className={'rounded-full lg:rounded-md'}
            />
            <div className={'storyCard-overlay justify-end items-center space-y-2'}>
                <BsFillPlusCircleFill
                    className={'rounded-full border border-accentColor text-white p-0.5 w-6 h-6 sm:w-8 sm:h-8 xl:w-9 xl:h-9'}
                    // className={'w-6 h-6 rounded-full border border-accentColor text-white p-0.5 lg:w-9 lg:h-9'}
                />

                <Text className={'hidden text-white self-center lg:inline'}>Add Story</Text>
            </div>
        </motion.div>
    );
};

export default AddStoryCard;
