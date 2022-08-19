import React from 'react';
import {BsThreeDots} from "react-icons/bs";
import {IconWrap, Text} from "../../../../components";
import RSidebar from "../blueprints/RSidebar";

const Hashtag = () => {
    return (
        <RSidebar.HashtagWrap>
            <div className={'flex items-start justify-between'}>
                <div className={'flex flex-col space-y-0.5'}>
                    <Text.Title className={''}>Trending in Wakanda</Text.Title>
                    <Text className={''}>#shiba</Text>
                    <Text.Title className={''}>23.3K Comments 100K Shares</Text.Title>
                </div>

                <IconWrap.secondary>
                    <BsThreeDots className={'text-lg text-iconColor'}/>
                </IconWrap.secondary>
            </div>
        </RSidebar.HashtagWrap>
    );
};

export default Hashtag;
