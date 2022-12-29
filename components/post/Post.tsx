import React, {FC, useState} from 'react';
import {avatar, postImg} from "./data";
import {Avatar} from "../index";
import {StarIcon as StarIconOutline} from '@heroicons/react/24/outline';
import {
    ChatBubbleBottomCenterIcon,
    EllipsisHorizontalCircleIcon,
    GlobeAsiaAustraliaIcon,
    HandThumbUpIcon,
    HeartIcon,
    ShareIcon,
    StarIcon,
} from '@heroicons/react/24/solid';
import {motion} from "framer-motion";
import Link from "next/link";

const tapProps = {
    scale: [1, 0.80],
    transition: {duration: 0.25, ease: 'easeInOut'}
}

const Post: FC<any> = (props) => {
    const [favorite, setFavorite] = useState(false);
    const [like, setLike] = useState(false);

    const handleButtonChange = (id: string) => {
        if (id == 'favorite') setFavorite(prevState => !prevState)
        else if (id == 'like') setLike(prevState => !prevState)
    }

    return (
        <section className={`mt-7 bg-secondary rounded-md py-3`}>
            {/*post top*/}
            <div className={`flex flex-1 items-center space-x-4 px-3`}>
                <motion.div whileTap={tapProps}>
                    <Link href="/profile">
                        <Avatar src={avatar.src} alt={avatar.alt} width={'w-8 xl:w-10s'}/>
                    </Link>
                </motion.div>

                <div className={`flex-1`}>
                    <p className={`text-xs font-semibold xl:text-sm`}>Daniela Fernandez Ramos</p>
                    <div className={`flex flex-1 items-center space-x-1`}>
                        <GlobeAsiaAustraliaIcon className={`w-3 xl:w-5`}/>
                        <p className={`text-xs xl:text-sm`}>Australia</p>
                    </div>
                </div>

                <div className={`flex items-center space-x-3`}>
                    {favorite ?
                        <motion.div whileTap={tapProps}>
                            <StarIcon
                                onClick={() => handleButtonChange('favorite')}
                                className={`w-5 cursor-pointer text-system-blue transition-all duration-300 ease-in-out xl:w-6`}/>
                        </motion.div>
                        :
                        <motion.div whileTap={tapProps}>
                            <StarIconOutline
                                onClick={() => handleButtonChange('favorite')}
                                className={`w-5 cursor-pointer transition-all duration-300 ease-in-out xl:w-6`}/>
                        </motion.div>
                    }
                    <motion.div whileTap={tapProps}>
                        <EllipsisHorizontalCircleIcon className={`w-5 cursor-pointer xl:w-6`}/>
                    </motion.div>
                </div>
            </div>

            {/*post text*/}
            <p className={`text-sm my-2 px-3 xl:text-base`}>No credit card requiredads via Carbon 🤩🥸</p>

            {/*post image*/}
            <img src={postImg.src} alt={postImg.alt} className={`w-full h-auto object-cover`}/>

            {/*post comments & shares*/}
            <p className={`text-xs mt-2 mb-4 px-3 xl:text-sm`}>30 comments * 5 shared</p>

            {/*post bottom*/}
            <div className={`flex flex-1 items-center justify-between px-3`}>
                {/*post buttons*/}
                <div className={`flex items-center space-x-7`}>
                    <motion.div whileTap={tapProps} className={`cursor-pointer`}>
                        {like ?
                            <HandThumbUpIcon
                                onClick={() => handleButtonChange('like')}
                                className={`w-4 text-system-yellow xl:w-5`}/> :
                            <HandThumbUpIcon
                                onClick={() => handleButtonChange('like')}
                                className={`w-4 xl:w-5`}/>
                        }
                    </motion.div>
                    <motion.div whileTap={tapProps} className={`cursor-pointer`}>
                        <ChatBubbleBottomCenterIcon className={`w-4 xl:w-5`}/>
                    </motion.div>
                    <motion.div whileTap={tapProps} className={`cursor-pointer`}>
                        <ShareIcon className={`w-4 xl:w-5`}/>
                    </motion.div>
                </div>

                {/*post hearts & thumbs up*/}
                <div className={`flex items-center space-x-1`}>
                    <p className={`text-xs xl:text-sm`}>Mao Lop y 50 personas mas</p>

                    <div className={`flex items-center`}>
                        <span className={`bg-system-blue p-1 rounded-full`}>
                            <HandThumbUpIcon className={`w-3 text-white xl:w-4`}/>
                        </span>
                        <span className={`bg-system-red p-1 rounded-full`}>
                            <HeartIcon className={`w-3 text-white xl:w-4`}/>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Post;