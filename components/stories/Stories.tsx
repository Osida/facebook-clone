import React, {FC} from 'react';
import {addStory, userStories} from "./data";
import {PlusCircleIcon} from '@heroicons/react/24/solid';
import {avatar} from "../navigation/data";
import {Avatar} from "../index";

const Stories: FC<any> = (props) => {
    return (
        <section className={`bg-teal-3000 flex items-start space-x-5 overflow-x-scroll h-32`}>
            <div className={`w-20 h-20 rounded-2xl relative bg-red-300 flex-shrink-0`}>
                <img src={addStory.imgSrc} alt={addStory.imgAlt} className={`w-full h-full bg-cover rounded-2xl`}/>

                <div className={`w-full h-full bg-black absolute top-0 bottom-0 opacity-50 rounded-2xl`}/>

                <PlusCircleIcon className={`w-7 h-7 text-system-blue absolute -bottom-3 left-7`}/>

                <p className={`text-xs font-light absolute -bottom-7 left-4`}>{addStory.name}</p>
            </div>

            {userStories.map((story) => (
                <div key={story.id} className={`cursor-pointer w-20 h-20 rounded-2xl relative bg-red-300 flex-shrink-0`}>
                    <img src={story.storyImg} alt={story.imgAlt} className={`w-full h-full bg-cover rounded-2xl`}/>

                    <div className={`w-full h-full bg-black absolute top-0 bottom-0 opacity-50 rounded-2xl`}/>

                    <div className={`-bottom-3 left-7 absolute -bottom-4 left-6`}>
                        <Avatar src={story.imgSrc} alt={story.imgAlt} width={'w-7'}/>
                    </div>

                    <p className={`text-xs font-light absolute -bottom-7 left-6`}>{story.name}</p>
                </div>
            ))}

        </section>
    );
}

export default Stories;