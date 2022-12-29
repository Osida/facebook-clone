import React, {FC} from 'react';
import {avatar, logo} from './data';
import {
    BellAlertIcon,
    ChatBubbleOvalLeftIcon,
    Cog8ToothIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    UsersIcon
} from '@heroicons/react/24/solid'
import {Avatar} from "../index";
import Link from 'next/link';
import {motion} from "framer-motion";
import MyInput from "../input/ui/MyInput";
import useForm from "../input/hooks/useForm";

const tapProps = {
    scale: [1, 0.80],
    transition: {duration: 0.2, ease: 'easeInOut'}
}

const Navigation: FC<any> = (props) => {
    const {search, handleInputChange} = useForm();


    return (
        <nav className={'flex items-center pt-2'}>
            {/*Logo*/}
            <div className={'w-10 lg:w-12 lg:h-12 md:mr-7 xl:w-12 bg-blue-4000'}>
                <img src={logo} alt={'logo'}/>
            </div>

            {/*Search bar*/}
            <div className={`hidden items-center flex-1 max-w-lg md:flex bg-lime-4000`}>
                <MyInput
                    id={'search'}
                    type={'text'}
                    placeholder={`Search`}
                    value={search}
                    onChange={handleInputChange}
                    divClasses={`lg:w-full md:rounded-full`}
                    trailingIcon={MagnifyingGlassIcon}
                    trailingIconClasses={`w-5 cursor-pointer`}
                />
            </div>

            {/*Middle buttons*/}
            <div className={`hidden flex-auto items-center space-x-4 justify-center lg:flex lg:space-x-6 xl:space-x-8 bg-orange-4000`}>
                <motion.div
                    whileTap={tapProps}
                    className={`rounded-full p-2 bg-gray-800`}
                >
                    <HomeIcon className={'nav-icon'}/>
                </motion.div>
                <motion.div
                    whileTap={tapProps}
                    className={`rounded-full p-2 bg-gray-800`}
                >
                    <ChatBubbleOvalLeftIcon className={'nav-icon'}/>
                </motion.div>
                <motion.div
                    whileTap={tapProps}
                    className={`rounded-full p-2 bg-gray-800`}
                >
                    <UsersIcon className={'nav-icon'}/>
                </motion.div>
            </div>

            {/*Right stuff*/}
            <div className={`flex flex-auto items-center justify-end space-x-5 lg:flex-1 xl:space-x-7 bg-red-4000`}>
                {/*Right buttons*/}
                <div className={`flex items-center space-x-4 xl:space-x-6`}>
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
                        <QuestionMarkCircleIcon className={'nav-icon'}/>
                    </motion.div>
                    <motion.div
                        whileTap={tapProps}
                        className={`rounded-full p-2 bg-gray-800`}
                    >
                        <Cog8ToothIcon className={'nav-icon'}/>
                    </motion.div>
                </div>

                {/*Avatar*/}
                <motion.div
                    whileTap={tapProps}
                >
                    <Link href="/profile">
                        <Avatar src={avatar.src} alt={avatar.alt} classes={'xl:w-12'}/>
                    </Link>
                </motion.div>
            </div>
        </nav>
    );
}

export default Navigation;