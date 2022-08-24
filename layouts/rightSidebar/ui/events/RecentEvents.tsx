import React from 'react';
import Image from "next/image";
import assets from "../../../../assets";
import {motion} from "framer-motion";
import {motionRecent} from "../../../leftSidebar/ui/LeftSidebar";
import {Text} from "../../../../components";
import RSidebar from "../blueprints/RSidebar";

const {images} = assets

const events = [
    {text: 'Tenerife Spain Hills', date: '01 Aug 2022', image: images.TenerifeSpain},
    {text: 'MountTeide Spain Mountain', date: '20 Sep 2022', image: images.MountTeideSpain},
    {text: 'FanadHead Lighthouse', date: '31 Dec 2022', image: images.FanadHeadLighthouse},
    {text: 'Kirkjufell Mountain', date: '15 Feb 2022', image: images.KirkjufellMountain},
]

const RecentEvents = () => {
    return (
        <RSidebar.RecentEventsContainer>
            {events.map((event, index, array) => (
                <motion.div
                    whileTap={motionRecent.whileTap}
                    key={index}
                    className={'cursor-pointer flex items-center space-x-3 cursor-pointer'}>
                    <div className={'w-16 h-auto'}>
                        <Image
                            src={event.image}
                            alt={event.text}
                            layout={'responsive'}
                            objectFit={'cover'}
                            className={'rounded-sm'}
                        />
                    </div>

                    <div className={'flex flex-col space-y-1 items-start'}>
                        <Text className={''}>{event.text}</Text>
                        <Text className={''}>{event.date}</Text>
                    </div>
                </motion.div>
            ))}
        </RSidebar.RecentEventsContainer>
    );
};

export default RecentEvents;
