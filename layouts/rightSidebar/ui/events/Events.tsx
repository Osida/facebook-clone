import React from 'react';
import {IconWrap, Widget} from "../../../../components";
import EventImage from "./EventImage";
import RecentEvents from "./RecentEvents";
import {BsThreeDots} from "react-icons/bs";

const Events = () => {
    return (
        <>
            <Widget className={'px-0 pb-8'}>
                <Widget.TitleWrap className={'px-4'}>
                    <Widget.Title>Events</Widget.Title>
                    <IconWrap.secondary>
                        <BsThreeDots className={'text-lg text-iconColor'}/>
                    </IconWrap.secondary>
                </Widget.TitleWrap>

                <EventImage/>

                <Widget.TitleWrap className={'px-4'}>
                    <Widget.Title>Recent Events</Widget.Title>
                    <IconWrap.secondary>
                        <p className={'cursor-pointer text-accentColor'}>All</p>
                    </IconWrap.secondary>
                </Widget.TitleWrap>

                <RecentEvents/>
            </Widget>
        </>
    );
};

// const NewsTitle = () => (
//     <div className={'flex items-center justify-between text-xs font-medium mb-2 lg:text-sm'}>
//         <h3 className={'text-base'}>What’s happening</h3>
//         <BsThreeDots className={'text-lg text-iconColor'}/>
//     </div>
// );

// const RecentEventsTitle = () => (
//     <div className={'flex items-center justify-between text-xs font-medium px-4 mb-2 lg:text-sm'}>
//         <h3 className={'font-medium'}>Recent Events</h3>
//         <p className={'cursor-pointer text-accentColor'}>All</p>
//     </div>
// )

export default Events;
