import React, {ReactNode} from 'react';

interface IProps {
    children: ReactNode | ReactNode[],
    className?: string,
}

const Post = ({className, children}: IProps) => {
    return (
        <section
            className={`${className} `}>
            {children}
        </section>
    );
};

Post.HeadWrap = function PostPostHeadWrap({className, children}: IProps) {
    return (
        <div className={`${className} w-full px-4`}>
            {children}
        </div>
    );
}

Post.Head = function PostPostHead({className, children}: IProps) {
    return (
        <div className={`${className} flex items-baseline justify-between`}>
            {children}
        </div>
    );
}

Post.ButtonsContainer = function PostButtonsContainer({className, children}: IProps) {
    return (
        <div className={`${className} flex items-center justify-evenly`}>
            {children}
        </div>
    );
}

Post.X = function PostX({className, children}: IProps) {
    return (
        <div className={`${className} `}>
            {children}
        </div>
    );
}

export default Post;