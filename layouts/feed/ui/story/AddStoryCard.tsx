import React from 'react';
import Image from "next/image";
import {BsFillPlusCircleFill} from "react-icons/bs";
import assets from "../../../../assets";
import {motion} from "framer-motion";
import {motionStory} from "./StoryCard";

const {images} = assets

const AddStoryCard = () => {
    return (
        <motion.div
            whileHover={motionStory.whileHover}
            whileTap={motionStory.whileTap}
            className={'storyCard-container'}
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
                    className={'w-6 h-6 rounded-full border border-accentColor text-white p-0.5 lg:w-9 lg:h-9'}/>

                <p className={'hidden text-sm text-white self-center lg:inline'}>Add Story</p>
            </div>
        </motion.div>
    );
};

export default AddStoryCard;
