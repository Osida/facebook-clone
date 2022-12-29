import React, {FC} from 'react';
import {avatar} from "../navigation/data";
import {Avatar} from "../index";
import {FaceSmileIcon, PhotoIcon, PlayCircleIcon, VideoCameraIcon} from '@heroicons/react/24/solid';
import {buttonText, inputPlaceholder, postImage} from "./data";
import {motion} from "framer-motion";

const tapProps = {
    scale: [1, 0.80],
    transition: {duration: 0.05, ease: 'easeIn'}
}

const tapPropsInputBtns = {
    scale: [1, 0.80],
    transition: {duration: 0.05, ease: 'easeIn'}
}

const FeedInput: FC<any> = (props) => {
    return (
        <section className={`flex flex-col space-y-3 bg-secondary rounded-md px-3 py-2 mt-8`}>
            <div className={`flex flex-1 items-center pt-5`}>
                <Avatar src={avatar.src} alt={avatar.alt} width={'w-8'}/>

                <div
                    className={`rounded-full bg-gray-700 cursor-pointer px-2 text-primary flex flex-1 mx-2 items-center lg:h-11`}>
                    <input
                        id={'feedInput'}
                        type="text"
                        placeholder={inputPlaceholder}
                        className={`bg-transparent border-none outline-none text-xs text-white w-full h-full p-2 flex flex-1 items-center xl:text-sm`}
                    />
                    <motion.div
                        whileTap={tapProps}
                    >
                        <PlayCircleIcon className={`w-6 h-6 rotate-90 text-gray-300`}/>
                    </motion.div>
                </div>

                <motion.div
                    whileTap={tapProps}
                >
                    <img src={postImage.src} alt={postImage.alt} className={`cursor-pointer w-8 h-8 rounded-full`}/>
                </motion.div>
            </div>

            <div className={`flex items-center justify-evenly pt-2`}>
                <motion.span
                    whileTap={tapPropsInputBtns}
                    className={`flex items-center space-x-2 cursor-pointer bg-transparent rounded-md py-1 px-4 transition-all duration-300 ease-in-out hover:bg-gray-700`}>
                    <VideoCameraIcon className={`w-5 h-5 text-system-red`}/>
                    <button className={`text-white`}>{buttonText.live}</button>
                </motion.span>
                <motion.span
                    whileTap={tapPropsInputBtns}
                    className={`flex items-center space-x-2 cursor-pointer bg-transparent rounded-md py-1 px-4 transition-all duration-300 ease-in-out hover:bg-gray-700`}
                >
                    <PhotoIcon className={`w-5 h-5 text-system-green`}/>
                    <button className={`text-white`}>{buttonText.photo}</button>
                </motion.span>
                <motion.span
                    whileTap={tapPropsInputBtns}
                    className={`flex items-center space-x-2 cursor-pointer bg-transparent rounded-md py-1 px-4 transition-all duration-300 ease-in-out hover:bg-gray-700`}
                >
                    <FaceSmileIcon className={`w-5 h-5 text-system-yellow`}/>
                    <button className={`text-white`}>{buttonText.feeling}</button>
                </motion.span>
            </div>
        </section>
    );
}

export default FeedInput;