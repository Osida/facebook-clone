import React from 'react';
import {Widget} from "../../../../components";
import {BsThreeDots} from "react-icons/bs";
import Hashtag from "./Hashtag";
import ArticleTitle from "./ArticleTitle";
import ArticleSnippet from "./ArticleSnippet";

const News = () => {
    return (
        <>
            <Widget classNames={'space-y-6'}>
                <NewsTitle/>
                <ArticleSnippet/>
                <ArticleTitle/>
                <Hashtag/>
                <p className={'cursor-pointer text-accentColor text-xs font-medium'}>Show more</p>
            </Widget>
        </>
    );
};

const NewsTitle = () => (
    <div className={'flex items-center justify-between text-xs font-medium mb-2 lg:text-sm'}>
        <h3 className={'text-base'}>What’s happening</h3>
        <BsThreeDots className={'text-lg text-iconColor'}/>
    </div>
);

export default News;
