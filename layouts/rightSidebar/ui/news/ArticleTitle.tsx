import React from 'react';
import {BsThreeDots} from "react-icons/bs";
import {IconWrap, Text} from "../../../../components";
import RSidebar from "../blueprints/RSidebar";

const ArticleTitle = () => {
    return (
        <RSidebar.ArticleTitleWrap>
            <div className={'flex items-start justify-between'}>
                <div className={'flex flex-col space-y-0.5'}>
                    <Text.Bold className={'font-black text-gray-400 lg:text-[0.65rem]'}>Gaming . Trending</Text.Bold>
                    <Text className={'lg:text-xs'}>Worst Game</Text>
                    <Text.Light className={'lg:text-[0.65rem] text-gray-400'}>2.5K Comments 17K Shares</Text.Light>
                </div>

                <IconWrap.secondary>
                    <BsThreeDots className={'text-lg text-gray-600 xl:text-2xl'}/>
                </IconWrap.secondary>
            </div>
        </RSidebar.ArticleTitleWrap>
    );
};

export default ArticleTitle;
