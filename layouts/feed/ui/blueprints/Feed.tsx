import React, {ReactNode} from 'react';

interface IProps {
    children: ReactNode | ReactNode[],
    className?: string,
}

const Feed = ({className, children}: IProps) => {
    return (
        <section
            className={`${className} text-white z-10 flex flex-col basis-full space-y-8 md:basis-3/4 lg:basis-1/2 overflow-y-scroll scrollbar-hide`}>
            {children}
        </section>
    );
};

Feed.StoriesContainer = function FeedStoriesContainer({className, children}: IProps) {
    return (
        <div className={`${className} flex items-center justify-evenly sm:justify-between`}>
            {children}
        </div>
    );
}

Feed.TopInputContainer = function FeedTopInputContainer({className, children}: IProps) {
    return (
        <div className={`${className} flex items-center space-x-2`}>
            {children}
        </div>
    );
}

Feed.TopInput = function FeedTopInput({className, children}: IProps) {
    return (
        <div className={`${className} flex items-center bg-inputColor rounded-full pl-4 py-0.5 flex-1 transition-all ease-in-out duration-200 hover:bg-inputColor/50`}>
            {children}
        </div>
    );
}


Feed.BottomInputContainer = function FeedBottomInputContainer({className, children}: IProps) {
    return (
        <div className={`${className} flex items-center justify-evenly space-x-1 px-3 py-1 rounded-full`}>
            {children}
        </div>
    );
}

Feed.x = function FeedX({className, children}: IProps) {
    return (
        <div className={`${className} `}>
            {children}
        </div>
    );
}

export default Feed;
