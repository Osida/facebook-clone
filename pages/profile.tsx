import React, {FC} from 'react';
import {
    MagnifyingGlassIcon,
    ChevronLeftIcon,
    EllipsisHorizontalCircleIcon,
    ChatBubbleOvalLeftIcon,
    HomeIcon,
    InformationCircleIcon,
    ClockIcon,
} from '@heroicons/react/24/solid'
import {avatar} from "../components/navigation/data";
import {Avatar} from "../components";
import {userStories} from "../components/stories/data";
import Link from "next/link";

const wallpaper = {
    src: `https://wallpapers.com/images/file/4k-aesthetic-anime-train-5zq2v4kn9c949upl.jpg`,
    alt: `wallpaper`,
}

const Profile: FC<any> = (props) => {
    return (
        <div className={`w-full min-h-screen bg-primary`}>
            <main>
                <section className={`relative bg-amber-2000`}>
                    <img src={wallpaper.src} alt={wallpaper.alt}
                         className={`w-full h-full absolute left-0 right-0 z-10`}/>
                    <div className={`w-full h-full absolute left-0 right-0 z-10 bg-black opacity-40`}/>
                    <header>
                        <nav className={`flex flex-1 items-center justify-between px-2 py-4`}>
                            <Link href={'/'} className={`z-20`}>
                                <div className={`p-2 bg-secondary rounded-full cursor-pointer`}>
                                    <ChevronLeftIcon className={`w-4`}/>
                                </div>
                            </Link>
                            <div className={`p-2 bg-secondary rounded-full cursor-pointer z-20`}>
                                <MagnifyingGlassIcon className={`w-4`}/>
                            </div>
                        </nav>
                    </header>

                    <div className={`flex justify-center flex-1 z-20`}>
                        <Avatar src={avatar.src} alt={avatar.alt} width={'w-28'} classes={`z-20`}/>
                    </div>
                </section>

                <div className={`text-center space-y-2 my-3`}>
                    <h1 className={`text-lg font-bold mt-2`}>{avatar.alt}</h1>
                    <h2 className={`text-sm font-semibold`}>Mauricio Lopez | UI/UX | Developer</h2>
                </div>

                <div className={`mx-2 flex flex-1 items-center justify-evenly bg-amber-1000`}>
                    <button className={`flex items-center px-7 py-2 bg-system-blue rounded-full space-x-2`}>
                        <ChatBubbleOvalLeftIcon className={`w-4`}/>
                        <p>Message</p>
                    </button>
                    <button
                        className={`flex items-center px-5 py-2 bg-white text-system-blue border-system-blue border-2 rounded-full`}>
                        Call
                    </button>
                    <EllipsisHorizontalCircleIcon className={`w-10 cursor-pointer`}/>
                </div>

                <hr className={`mx-2 w-full h-[0.5px] border-none outline-none mt-5 mb-7 bg-secondary`}/>

                <div className={`mx-2 space-y-2`}>
                    <span className={`flex flex-1 items-center space-x-2`}>
                        <HomeIcon className={`w-4`}/>
                        <p className={`text-xs font-light`}>New York City, NY, USA</p>
                    </span>
                    <span className={`flex flex-1 items-center space-x-2`}>
                        <ClockIcon className={`w-4`}/>
                        <p className={`text-xs font-light`}>February 13, 2018</p>
                    </span>
                    <span className={`flex flex-1 items-center space-x-2`}>
                        <InformationCircleIcon className={`w-4`}/>
                        <p className={`text-xs font-light`}>Editorial, Street Photography, Travel</p>
                    </span>
                </div>

                <aside className={`mx-2 flex items-start space-x-5 overflow-x-scroll mt-7 bg-red-6000 min-h-[8.5rem]`}>
                    {userStories.map((story) => (
                        <div key={story.id}
                             className={`cursor-pointer w-24 h-28 rounded-2xl relative bg-red-300 flex-shrink-0`}>
                            <img src={story.storyImg} alt={story.imgAlt}
                                 className={`w-full h-full bg-cover rounded-2xl`}/>

                            <p className={`text-xs absolute -bottom-5 left-8`}>{story.name}</p>
                        </div>
                    ))}
                </aside>

                <hr className={`mx-2 w-full h-[0.5px] border-none outline-none mt-7 mb-3 bg-secondary`}/>

                <div className={`mx-2 flex flex-1 items-center justify-between`}>
                    <h3 className={`text-base font-bold`}>
                        Friends <span className={`text-sm font-light text-gray-500`}>(2,004 friends)</span>
                    </h3>
                    <p className={`text-system-blue text-xs cursor-pointer`}>See All</p>
                </div>

                <aside className={`mx-2 flex items-start space-x-5 overflow-x-scroll mt-7 bg-red-6000 min-h-[8.5rem]`}>
                    {userStories.map((story) => (
                        <div key={story.id}
                             className={`cursor-pointer w-20 h-20 rounded-full relative bg-red-3000 flex-shrink-0`}>
                            <img src={story.storyImg} alt={story.imgAlt}
                                 className={`w-full h-full bg-cover rounded-full`}/>

                            <p className={`text-xs absolute -bottom-5 left-5`}>{story.name}</p>
                        </div>
                    ))}
                </aside>
            </main>
        </div>
    );
}

export default Profile;