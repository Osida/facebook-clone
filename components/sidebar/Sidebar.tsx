import React from 'react';
import {icons} from "../../constants";
import {ISidebar} from "../../typings";
import Image from "next/image";

const {GoPrimitiveDot, BsThreeDots} = icons

const Sidebar = ({user, profiles, text, recentlyViewed}: ISidebar) => {
    const profilesArr = Object.values(profiles)
    return (
        <div className={'flex-items-center flex-col space-y-5 px-1 h-full scroll-y-hide'}>
            {/*Profile*/}
            <div className={'my-container'}>

                <div className={'flex-items-center space-x-4'}>
                    <div className="avatar">
                        <div className="w-9 rounded-full border-2 border-accent">
                            <Image
                                src={user.photo}
                                alt={`${user.name.first}${user.name.last}`}
                                objectFit={'cover'}
                                layout={'responsive'}
                            />
                        </div>
                    </div>

                    <p className={'sm:text-xs font-semibold md:text-sm'}>{`${user.name.first} ${user.name.last}`}</p>
                </div>
            </div>

            {/*Messenger*/}
            <div className={'my-container space-y-2'}>
                <span className={'flex-items-center justify-between flex-1 mb-4'}>
                    <h1 className={'sm:text-xs font-semibold md:text-sm'}>{text.messenger}</h1>
                    <p className={'sm:text-xs font-extralight md:text-sm text-accent'}>{text.all}</p>
                </span>

                {profilesArr.map((profile, index) => (
                    <div key={index}
                         className={'flex-items-center'}
                    >
                        <div className="avatar">
                            <div className="w-9 rounded-full border-2 border-accent">
                                <Image
                                    src={profile.photo}
                                    alt={`${profile.name.first}${profile.name.last}`}
                                    objectFit={'cover'}
                                    layout={'responsive'}
                                />
                            </div>
                        </div>

                        <span className={'flex-items-center flex-1 justify-between'}>
                            <p className={'hidden text-[10px] ml-2 sm:inline md:text-sm'}>{profile.name.first} {profile.name.first}</p>
                            <GoPrimitiveDot className={`${profile.isOnline ? 'text-active' : 'text-gray-700'} `}/>
                        </span>
                    </div>
                ))}
            </div>

            {/*Recently viewed*/}
            <div className={'my-container'}>
                <span className={'flex-items-center justify-between flex-1 mb-4'}>
                    <h1 className={'sm:text-xs font-semibold md:text-sm'}>{text.recentlyViewed}</h1>
                    <p className={'sm:text-xs font-extralight md:text-sm text-accent'}>{text.all}</p>
                </span>

                <div className={'grid grid-cols-1 gap-2 md:grid-cols-2'}>
                    {recentlyViewed.map((photo, idx) => (
                        <div key={idx}
                             className={'w-full h-full'}
                        >
                            <Image src={photo} alt={`recent-${idx}`} layout={'responsive'} objectFit={'cover'}
                                   className={'rounded-lg'}/>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
