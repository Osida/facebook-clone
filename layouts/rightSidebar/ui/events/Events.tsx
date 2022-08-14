import React from 'react';
import {Widget} from "../../../../components";
import EventImage from "./EventImage";
import RecentEvents from "./RecentEvents";
import {BsThreeDots} from "react-icons/bs";

const Events = () => {
    return (
        <>
            <Widget classNames={'px-0 pb-8'}>
                <EventHead/>
                <EventImage/>
                <RecentEventsTitle/>
                <RecentEvents/>
            </Widget>
        </>
    );
};

const EventHead = () => (
    <div className={'flex items-center justify-between text-xs font-medium px-4 mb-2 lg:text-sm'}>
        <h3 className={'font-medium'}>Events</h3>
        <BsThreeDots className={'text-lg text-iconColor'}/>
    </div>
);


const RecentEventsTitle = () => (
    <div className={'flex items-center justify-between text-xs font-medium px-4 mb-2 lg:text-sm'}>
        <h3 className={'font-medium'}>Recent Events</h3>
        <p className={'cursor-pointer text-accentColor'}>All</p>
    </div>
)

export default Events;
