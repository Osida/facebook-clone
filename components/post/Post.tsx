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
        <section className={`mt-7 bg-secondary rounded-md py-2`}>
            {/*post top*/}
            <div className={`flex flex-1 items-center space-x-4 px-2`}>
                <motion.div whileTap={tapProps}>
                    <Link href="/profile"><Avatar src={avatar.src} alt={avatar.alt} width={'w-8'}/></Link>
                </motion.div>

                <div className={`flex-1`}>
                    <p className={`text-xs`}>Daniela Ferandez Ramos</p>
                    <div className={`flex flex-1 items-center space-x-1`}>
                        <GlobeAsiaAustraliaIcon className={`w-3`}/>
                        <p className={`text-xs`}>Australia</p>
                    </div>
                </div>

                <div className={`flex items-center space-x-3`}>
                    {favorite ?
                        <motion.div whileTap={tapProps}>
                            <StarIcon
                                onClick={() => handleButtonChange('favorite')}
                                className={`w-5 cursor-pointer text-system-blue transition-all duration-300 ease-in-out`}/>
                        </motion.div>
                        :
                        <motion.div whileTap={tapProps}>
                            <StarIconOutline
                                onClick={() => handleButtonChange('favorite')}
                                className={`w-5 cursor-pointer transition-all duration-300 ease-in-out`}/>
                        </motion.div>
                    }
                    <motion.div whileTap={tapProps}>
                        <EllipsisHorizontalCircleIcon className={`w-5 cursor-pointer`}/>
                    </motion.div>
                </div>
            </div>
            {/*post text*/}
            <p className={`text-sm my-2 px-2`}>No credit card requiredads via Carbon 🤩🥸</p>

            {/*post image*/}
            <img src={postImg.src} alt={postImg.alt} className={`w-full h-auto object-cover`}/>

            {/*post comments & shares*/}
            <p className={`text-xs mt-2 mb-4 px-2`}>30 comments * 5 shared</p>

            <div className={`flex flex-1 items-center justify-between px-2`}>
                {/*post buttons*/}
                <div className={`flex items-center space-x-7`}>
                    <motion.div whileTap={tapProps} className={`cursor-pointer`}>
                        {like ?
                            <HandThumbUpIcon
                                onClick={() => handleButtonChange('like')}
                                className={`w-4 text-system-yellow`}/> :
                            <HandThumbUpIcon
                                onClick={() => handleButtonChange('like')}
                                className={`w-4`}/>
                        }
                    </motion.div>
                    <motion.div whileTap={tapProps} className={`cursor-pointer`}>
                        <ChatBubbleBottomCenterIcon className={`w-4`}/>
                    </motion.div>
                    <motion.div whileTap={tapProps} className={`cursor-pointer`}>
                        <ShareIcon className={`w-4`}/>
                    </motion.div>
                </div>
                {/*post */}
                <div className={`flex items-center space-x-1`}>
                    <p className={`text-xs`}>Mao Lop y 50 personas mas</p>

                    <div className={`flex items-center`}>
                        <span className={`bg-system-blue p-1 rounded-full`}>
                            <HandThumbUpIcon className={`w-3 text-white`}/>
                        </span>
                        <span className={`bg-system-red p-1 rounded-full`}>
                            <HeartIcon className={`w-3 text-white`}/>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Post;