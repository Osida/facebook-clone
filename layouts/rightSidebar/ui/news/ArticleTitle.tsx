import React from 'react';
import {BsThreeDots} from "react-icons/bs";
import {IconWrap, Text} from "../../../../components";
import RSidebar from "../blueprints/RSidebar";

const ArticleTitle = () => {
    return (
        <RSidebar.ArticleTitleWrap>
            <div className={'flex items-start justify-between'}>
                <div className={'flex flex-col space-y-0.5'}>
                    <Text.Title className={''}>Gaming . Trending</Text.Title>
                    <Text className={''}>Worst Game</Text>
                    <Text.Title className={''}>2.5K Comments 17K Shares</Text.Title>
                </div>

                <IconWrap.secondary>
                    <BsThreeDots className={'text-lg text-iconColor'}/>
                </IconWrap.secondary>
            </div>
        </RSidebar.ArticleTitleWrap>
    );
};

export default ArticleTitle;
