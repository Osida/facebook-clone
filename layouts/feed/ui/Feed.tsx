import React from 'react';
import Stories from "./story/Stories";
import FeedInput from "./FeedInput";
import Post from "./post/Post";

const Feed = () => {
    return (
        <>
            <section
                className={'text-white z-10 flex flex-col basis-full space-y-8 md:basis-3/4 lg:basis-1/2 bg-neutral-200/0 overflow-y-scroll scrollbar-hide'}>
                <Stories/>
                <FeedInput/>
                <Post/>
            </section>
        </>
    );
};

export default Feed;
