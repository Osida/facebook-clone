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
        <section className={`flex items-start pt-4 space-x-5 overflow-x-scroll scrollbar-hide h-36 mt-7`}>
            <motion.div
                whileHover={hoverProps}
                whileTap={tapProps}
                className={`cursor-pointer w-20 h-20 rounded-lg relative flex-shrink-0`}
            >
                <img src={addStory.imgSrc} alt={addStory.imgAlt} className={`w-full h-full bg-cover rounded-lg`}/>

                <div
                    className={`w-full h-full bg-black absolute top-0 bottom-0 opacity-50 rounded-lg transition-opacity duration-300 ease-in-out hover:opacity-0`}/>

                <PlusCircleIcon className={`w-7 h-7 text-system-blue absolute -bottom-3 left-7`}/>

                <p className={`text-xs text-gray-300 font-light absolute -bottom-7 left-4`}>{addStory.name}</p>
            </motion.div>

            {userStories.map((story) => (
                <motion.div
                    whileHover={hoverProps}
                    whileTap={tapProps}
                    key={story.id}
                    className={`cursor-pointer w-20 h-20 rounded-lg relative flex-shrink-0`}
                >
                    <img src={story.storyImg} alt={story.imgAlt} className={`w-full h-full bg-cover rounded-lg`}/>

                    <div
                        className={`w-full h-full bg-black absolute top-0 bottom-0 opacity-50 rounded-lg transition-opacity duration-300 ease-in-out hover:opacity-0`}/>

                    <div className={`-bottom-3 left-7 absolute -bottom-4 left-6`}>
                        <Avatar src={story.imgSrc} alt={story.imgAlt} width={'w-7'}/>
                    </div>

                    <p className={`text-xs text-gray-300 font-light absolute -bottom-7 left-6`}>{story.name}</p>
                </motion.div>
            ))}
        </section>
    );
}

export default Stories;