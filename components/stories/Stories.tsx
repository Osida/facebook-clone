import React, {FC} from 'react';
import {addStory, userStories} from "./data";
import {PlusCircleIcon} from '@heroicons/react/24/solid';
import {Avatar} from "../index";
import {motion} from "framer-motion";

const hoverProps = {
    scale: [1, 1.05],
    transition: {duration: 0.25, ease: 'easeInOut'}
}

const tapProps = {
    scale: [1, 0.95],
    transition: {duration: 0.25, ease: 'easeInOut'}
}

const Stories: FC<any> = (props) => {
    return (
        <section
            className={`flex flex-1 items-start py-10 px-2 space-x-5 overflow-x-scroll scrollbar-hide mt-7 xl:justify-center bg-gray-7000`}>
            <motion.div
                whileHover={hoverProps}
                whileTap={tapProps}
                className={`cursor-pointer w-20 h-20 rounded-lg relative flex-shrink-0 md:w-24 md:h-28 lg:w-28 lg:h-36`}
            >
                <img src={addStory.imgSrc} alt={addStory.imgAlt} className={`w-full h-full bg-cover rounded-lg`}/>

                <div
                    className={`w-full h-full bg-black absolute top-0 bottom-0 opacity-50 rounded-lg transition-opacity duration-300 ease-in-out hover:opacity-0`}/>

                <PlusCircleIcon
                    className={`w-7 h-7 text-system-blue absolute -bottom-3 left-7 md:w-9 md:h-9 md:left-7 md:-bottom-5 lg:left-9`}/>

                <p className={`text-xs text-gray-300 font-light absolute -bottom-7 left-4 md:left-6 md:-bottom-9 lg:left-7`}>{addStory.name}</p>
            </motion.div>

            {userStories.map((story) => (
                <motion.div
                    whileHover={hoverProps}
                    whileTap={tapProps}
                    key={story.id}
                    className={`cursor-pointer w-20 h-20 rounded-lg relative flex-shrink-0 md:w-24 md:h-28 lg:w-28 lg:h-36`}
                >
                    <img src={story.storyImg} alt={story.imgAlt} className={`w-full h-full bg-cover rounded-lg`}/>

                    <div
                        className={`w-full h-full bg-black absolute top-0 bottom-0 opacity-50 rounded-lg transition-opacity duration-300 ease-in-out hover:opacity-0`}/>

                    <div className={`-bottom-3 left-7 absolute -bottom-4 left-6 md:left-7 md:-bottom-6`}>
                        <Avatar src={story.imgSrc} alt={story.imgAlt} width={'w-7 md:w-9 md:h-9'}/>
                    </div>

                    <p className={`text-xs text-gray-300 font-light absolute -bottom-7 left-6 md:left-8 md:-bottom-9`}>{story.name}</p>
                </motion.div>
            ))}
        </section>
    );
}

export default Stories;