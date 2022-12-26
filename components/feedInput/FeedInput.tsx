import React, {FC} from 'react';
import {FeedInputInterface} from "./FeedInputInterface";
import {avatar} from "../navigation/data";
import {Avatar} from "../index";
import {PlayCircleIcon, VideoCameraIcon, PhotoIcon, FaceSmileIcon} from '@heroicons/react/24/solid'
import {postImage, inputPlaceholder, buttonText} from "./data";


const FeedInput: FC<any> = (props) => {
    return (
        <section className={`flex flex-col space-y-3 bg-secondary rounded-md px-1 py-2 mt-8`}>
            <div className={`flex flex-1 items-center pt-5`}>
                <Avatar src={avatar.src} alt={avatar.alt} width={'w-8'}/>

                <div
                    className={`rounded-full bg-gray-600 cursor-pointer px-2 text-primary flex flex-1 mx-2 items-center`}>
                    <input type="text"
                           className={`bg-transparent border-none outline-none text-xs text-black w-full h-full p-2 flex flex-1 items-center`}
                           placeholder={inputPlaceholder}/>
                    <PlayCircleIcon className={`w-6 h-6 rotate-90 text-primary`}/>
                </div>

                <img src={postImage.src} alt={postImage.alt} className={`cursor-pointer w-8 h-8 rounded-full`}/>
            </div>

            <div className={`flex items-center justify-evenly pt-2`}>
                <span
                    className={`flex items-center space-x-2 cursor-pointer text-gray-400 bg-transparent transition-all duration-1 hover:bg-gray-800 rounded-md py-1 px-4 hover:bg-tertiary`}>
                    <VideoCameraIcon className={`w-5 h-5 text-system-red`}/>
                    <button>{buttonText.live}</button>
                </span>
                <span className={`flex items-center space-x-2 cursor-pointer text-gray-400 bg-transparent transition-all duration-1 hover:bg-gray-800  rounded-md py-1 px-4`}>
                    <PhotoIcon className={`w-5 h-5 text-system-green`}/>
                 <button>{buttonText.photo}</button>
                </span>
                <span className={`flex items-center space-x-2 cursor-pointer text-gray-400 bg-transparent transition-all duration-1 hover:bg-gray-800  rounded-md py-1 px-4`}>
                    <FaceSmileIcon className={`w-5 h-5 text-system-yellow`}/>
                 <button>{buttonText.feeling}</button>
                </span>
            </div>
        </section>
    );
}

export default FeedInput;