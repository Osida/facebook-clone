import React from 'react';
import EventImage from "./eventImage/EventImage";
import RecentEvents from "./recentEvents/RecentEvents";
import {Widget} from "../../../components";
import {BsThreeDots} from "react-icons/bs";

const RightWidgets = () => {
    return (
        <>
            <aside
                className={'hidden flex-col space-y-5 lg:flex lg:basis-1/4 bg-pink-200/0 overflow-y-scroll scrollbar-hide'}>
                <Widget classNames={'px-0'}>
                    <div className={'flex items-center justify-between text-xs font-medium px-4 mb-2 lg:text-sm'}>
                        <h3 className={'font-medium'}>Events</h3>
                        <BsThreeDots className={'text-sm text-iconColor'}/>
                    </div>

                    <EventImage/>

                    <div className={'flex items-center justify-between text-xs font-medium px-4 mb-2 lg:text-sm'}>
                        <h3 className={'font-medium'}>Recent Events</h3>
                        <p className={'cursor-pointer text-accentColor'}>All</p>
                    </div>

                    <RecentEvents/>
                </Widget>
            </aside>
        </>
    );
};

export default RightWidgets;
