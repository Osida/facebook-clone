import React, {FC} from 'react';
import {avatar, logo} from './data';
import {BellAlertIcon, ChatBubbleOvalLeftEllipsisIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import {Avatar} from "../index";
import Link from 'next/link';
import {motion} from "framer-motion";

const tapProps = {
    scale: [1, 0.80],
    transition: {duration: 0.2, ease: 'easeInOut'}
}

const Navigation: FC<any> = (props) => {
    return (
        <nav className={'flex items-center pt-2'}>
            <div className={'w-10 h-10 bg-blue-4000'}>
                <img src={logo} alt={'logo'}/>
            </div>

            <div className={`flex flex-1 items-center justify-end space-x-4 bg-red-4000`}>
                <motion.div
                    whileTap={tapProps}
                    className={`rounded-full p-2 bg-gray-800`}
                >
                    <MagnifyingGlassIcon className={'nav-icon'}/>
                </motion.div>


                <motion.div
                    whileTap={tapProps}
                    className={`rounded-full p-2 bg-gray-800`}
                >
                    <BellAlertIcon className={'nav-icon'}/>
                </motion.div>

                <motion.div
                    whileTap={tapProps}
                    className={`rounded-full p-2 bg-gray-800`}
                >
                    <ChatBubbleOvalLeftEllipsisIcon className={'nav-icon'}/>
                </motion.div>

                <motion.div
                    whileTap={tapProps}
                >
                    <Link href="/profile">
                        <Avatar src={avatar.src} alt={avatar.alt}/>
                    </Link>
                </motion.div>
            </div>
        </nav>
    );
}

export default Navigation;