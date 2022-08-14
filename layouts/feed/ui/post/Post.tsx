import React from 'react';
import {Widget} from "../../../../components";
import PostHead from "./PostHead";
import PostImage from "./PostImage";
import PostButtons from "./PostButtons";

const Post = () => {
    return (
        <Widget classNames={'px-0'}>
            <div className={'w-full px-4'}>
                <PostHead/>
                <p className={''}>Unusual weekends! 😊</p>
            </div>
            <PostImage/>
            <PostButtons/>
        </Widget>
    );
};

export default Post;
