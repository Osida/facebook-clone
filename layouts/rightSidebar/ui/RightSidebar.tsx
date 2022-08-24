import React from 'react';
import RSidebar from "./blueprints/RSidebar";
import {IconWrap, Text, Widget} from "../../../components";
import {BsThreeDots} from "react-icons/bs";
import ArticleSnippet from "./news/ArticleSnippet";
import ArticleTitle from "./news/ArticleTitle";
import Hashtag from "./news/Hashtag";
import EventImage from "./events/EventImage";
import RecentEvents from "./events/RecentEvents";

const RightSidebar = () => {
    return (
        <RSidebar>
            {/* News */}
            <Widget className={'space-y-6'}>
                <Text.TitleWrap>
                    <Text.Title>What’s happening</Text.Title>
                    <IconWrap.secondary>
                        <BsThreeDots className={'text-lg text-gray-600 xl:text-2xl'}/>
                    </IconWrap.secondary>
                </Text.TitleWrap>

                <ArticleSnippet/>
                <ArticleTitle/>
                <Hashtag/>

                <div className={'flex items-center justify-between'}>
                    <IconWrap.secondary>
                        <Text className={'cursor-pointer text-accentColor'}>Show more</Text>
                    </IconWrap.secondary>
                </div>
            </Widget>

            {/* Events */}
            <Widget className={'px-0 pb-8'}>
                <Widget.TitleWrap className={'px-4'}>
                    <Text.Title>Events</Text.Title>
                    <IconWrap.secondary>
                        <BsThreeDots className={'text-lg text-gray-600 xl:text-2xl'}/>
                    </IconWrap.secondary>
                </Widget.TitleWrap>

                <EventImage/>

                <Widget.TitleWrap className={'px-4'}>
                    <Text.Title>Recent Events</Text.Title>
                    <IconWrap.secondary>
                        <Text className={'cursor-pointer text-accentColor'}>All</Text>
                    </IconWrap.secondary>
                </Widget.TitleWrap>

                <RecentEvents/>
            </Widget>
        </RSidebar>
    );
};


export default RightSidebar;
