import React, {FC} from 'react';
import {avatar, postImg} from "./data";
import {Avatar} from "../index";
// import {} from '@heroicons/react/24/outline'
import {
    EllipsisHorizontalCircleIcon,
    StarIcon,
    GlobeAsiaAustraliaIcon,
    HandThumbUpIcon,
    ChatBubbleBottomCenterIcon,
    ShareIcon,
    HeartIcon,
} from '@heroicons/react/24/solid'


const Post: FC<any> = (props) => {
    return (
        <section className={`mt-7 bg-secondary rounded-md p-2`}>
            {/*post top*/}
            <div className={`flex flex-1 items-center space-x-4`}>
                <Avatar src={avatar.src} alt={avatar.alt} width={'w-8'}/>

                <div className={`flex-1`}>
                    <p className={`text-xs`}>Daniela Ferandez Ramos</p>
                    <div className={`flex flex-1 items-center space-x-1`}>
                        <GlobeAsiaAustraliaIcon className={`w-3`}/>
                        <p className={`text-xs`}>Australia</p>
                    </div>
                </div>

                <div className={`flex items-center space-x-3`}>
                    <StarIcon className={`w-4`}/>
                    <EllipsisHorizontalCircleIcon className={`w-4`}/>
                </div>
            </div>
            {/*post text*/}
            <p className={`text-sm my-2`}>No credit card requiredads via Carbon 🤩🥸</p>
            {/*post image*/}
            <img src={postImg.src} alt={postImg.alt} className={`h-auto rounded-md`}/>
            {/*post comments & shares*/}
            <p className={`text-xs mt-2 mb-4`}>30 comments * 5 shared</p>

            <div className={`flex flex-1 items-center justify-between`}>
                {/*post buttons*/}
                <div className={`flex items-center space-x-7`}>
                    <HandThumbUpIcon className={`w-4`}/>
                    <ChatBubbleBottomCenterIcon className={`w-4`}/>
                    <ShareIcon className={`w-4`}/>
                </div>
                {/*post */}
                <div className={`flex items-center space-x-1 bg-lime-2000`}>
                    <p className={`text-xs`}>Mao Lop y 50 personas mas</p>
                    <div className={`flex items-center`}>
                        <span className={`bg-system-blue p-1 rounded-full`}>
                            <HandThumbUpIcon className={`w-3`}/>
                        </span>
                            <span className={`bg-system-red p-1 rounded-full`}>
                            <HeartIcon className={`w-3`}/>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Post;