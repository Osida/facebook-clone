import React, {FC} from 'react';
import {avatar, logo} from './data';
import {BellAlertIcon, ChatBubbleOvalLeftEllipsisIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import {Avatar} from "../index";
import Link from 'next/link';

const Navigation: FC<any> = (props) => {
    return (
        <nav className={'flex items-center pt-2'}>
            <div className={'w-10 h-10 bg-blue-4000'}>
                <img src={logo} alt={'logo'}/>
            </div>

            <div className={`flex flex-1 items-center justify-end space-x-4 bg-red-4000`}>
                <div className={`rounded-full p-2 bg-gray-800`}>
                    <MagnifyingGlassIcon className={'nav-icon'}/>
                </div>
                <div className={`rounded-full p-2 bg-gray-800`}>
                    <BellAlertIcon className={'nav-icon'}/>
                </div>
                <div className={`rounded-full p-2 bg-gray-800`}>
                    <ChatBubbleOvalLeftEllipsisIcon className={'nav-icon'}/>
                </div>
                <Link href="/profile">
                    <Avatar src={avatar.src} alt={avatar.alt}/>
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;