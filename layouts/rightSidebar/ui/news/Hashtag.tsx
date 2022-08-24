import React from 'react';
import {BsThreeDots} from "react-icons/bs";
import {IconWrap, Text} from "../../../../components";
import RSidebar from "../blueprints/RSidebar";

const Hashtag = () => {
    return (
        <RSidebar.HashtagWrap>
            <div className={'flex items-start justify-between'}>
                <div className={'flex flex-col space-y-0.5'}>
                    <Text className={'font-black text-gray-400 lg:text-[0.65rem]'}>Trending in Wakanda</Text>
                    <Text className={'lg:text-xs'}>#shiba</Text>
                    <Text.Light className={'lg:text-[0.65rem] text-gray-400'}>23.3K Comments 100K Shares</Text.Light>
                </div>

                <IconWrap.secondary>
                    <BsThreeDots className={'text-lg text-gray-600 xl:text-2xl'}/>
                </IconWrap.secondary>
            </div>
        </RSidebar.HashtagWrap>
    );
};

export default Hashtag;
