import React, {FC, useState} from 'react';
import {messengerContacts, recentlyViewed} from "./data";
import {Avatar} from "../index";
import {PowerIcon} from '@heroicons/react/24/solid';

const SidebarLeft: FC<any> = (props) => {
    return (
        <aside
            className={`hidden overflow-y-scroll scrollbar-hide flex-1 flex-col space-y-3 md:flex md:basis-1/4 bg-cyan-3000`}>
            {/*Messenger*/}
            <section className={`bg-secondary w-full flex flex-col px-2 py-4 mt-16 rounded-md space-y-4 lg:px-4`}>
                <div className={`flex items-center justify-between mb-3`}>
                    <p className={`font-semibold text-white xl:text-lg`}>Messenger</p>
                    <p className={`text-sm text-system-blue cursor-pointer xl:text-base`}>All</p>
                </div>

                {messengerContacts.map(contact => (
                    <div key={contact.id} className={`cursor-pointer flex items-center justify-between`}>
                        <div className={`flex items-center space-x-2`}>
                            <Avatar src={contact.imageSrc} alt={contact.imageAlt} width={'w-7 xl:w-9'}/>
                            <p className={`text-white text-xs xl:text-sm`}>{contact.name}</p>
                        </div>

                        {contact.online ?
                            <PowerIcon className={`w-3 text-system-green xl:w-4`}/> :
                            <PowerIcon className={`w-3 xl:w-4`}/>}
                    </div>
                ))}
            </section>

            {/*Recently Viewed*/}
            <section className={`bg-secondary flex flex-col px-2 py-4 mt-16 rounded-md space-y-4 lg:px-4`}>
                <div className={`flex items-center justify-between mb-3`}>
                    <p className={`font-semibold text-white xl:text-lg`}>RecentlyViewed</p>
                    <p className={`text-sm text-system-blue cursor-pointer xl:text-base`}>All</p>
                </div>

                <div className={`w-full h-full grid grid-cols-2 gap-2`}>
                    {recentlyViewed.map(item => (
                        <div key={item.id} className={`cursor-pointer rounded-md w-20 h-20 lg:w-[90%] lg:h-24 xl:w-32 xl:h-32`}>
                            <img src={item.imageSrc} alt={item.imageAlt}
                                 className={`object-cover h-full w-full rounded-md`}/>
                        </div>
                    ))}
                </div>
            </section>
        </aside>
    );
};

export default SidebarLeft;
