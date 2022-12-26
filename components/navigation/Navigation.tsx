import React, {FC} from 'react';
import {logo, avatar} from './data';
import {MagnifyingGlassIcon, BellAlertIcon, ChatBubbleOvalLeftEllipsisIcon} from '@heroicons/react/24/solid'
import {Avatar} from "../index";
import Link from 'next/link';

const Navigation: FC<any> = (props) => {
    return (
        <nav className={'flex items-center pt-2'}>
            <div className={'w-10 h-10 bg-blue-4000'}>
                <img src={logo} alt={'logo'}/>
            </div>

            <div className={`flex flex-1 items-center justify-end space-x-5 bg-red-4000`}>
                <MagnifyingGlassIcon className={'nav-icon'}/>
                <BellAlertIcon className={'nav-icon'}/>
                <ChatBubbleOvalLeftEllipsisIcon className={'nav-icon'}/>
                <Link href="/profile">
                    <Avatar src={avatar.src} alt={avatar.alt}/>
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;