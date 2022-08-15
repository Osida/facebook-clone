import React from 'react';
import {IconWrap, Widget} from "../../../../components";
import {BsThreeDots} from "react-icons/bs";
import Hashtag from "./Hashtag";
import ArticleTitle from "./ArticleTitle";
import ArticleSnippet from "./ArticleSnippet";

const News = () => {
    return (
        <>
            <Widget className={'space-y-6'}>
                <Widget.TitleWrap>
                    <Widget.Title>What’s happening</Widget.Title>
                    <IconWrap.secondary>
                        <BsThreeDots className={'text-lg text-iconColor'}/>
                    </IconWrap.secondary>
                </Widget.TitleWrap>

                <ArticleSnippet/>
                <ArticleTitle/>
                <Hashtag/>

                <div className={'flex items-center justify-between'}>
                    <IconWrap.secondary>
                        <p className={'cursor-pointer text-accentColor text-xs font-medium'}>Show more</p>
                    </IconWrap.secondary>
                    {/*<div/>*/}
                </div>
            </Widget>
        </>
    );
};

export default News;
