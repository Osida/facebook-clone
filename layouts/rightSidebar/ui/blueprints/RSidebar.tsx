import React, {ReactNode} from 'react';
import ArticleSnippet from "../news/ArticleSnippet";
import ArticleTitle from "../news/ArticleTitle";
import Hashtag from "../news/Hashtag";
import RecentEvents from "../events/RecentEvents";

interface IProps {
    children: ReactNode | ReactNode[],
    className?: string,
}

const RSidebar = ({className, children}: IProps) => {
    return (
        <aside className={`${className} hidden flex-col space-y-5 overflow-y-scroll scrollbar-hide lg:flex lg:basis-1/4`}>
            {children}
        </aside>
    );
};

RSidebar.ArticleSnippetWrap = function RSidebarArticleSnippetWrap({className, children}: IProps) {
    return (
        <div className={`${className} flex flex-col space-y-1`}>
            {children}
        </div>
    );
}

RSidebar.ArticleTitleWrap = function RSidebarArticleTitleWrap({className, children}: IProps) {
    return (
        <div className={`${className} flex flex-col space-y-1 text-xs`}>
            {children}
        </div>
    );
}

RSidebar.HashtagWrap = function RSidebarHashtagWrap({className, children}: IProps) {
    return (
        <div className={`${className} flex flex-col space-y-1`}>
            {children}
        </div>
    );
}

RSidebar.RecentEventsContainer = function RSidebarRecentEventsContainer({className, children}: IProps) {
    return (
        <div className={`${className} flex flex-col px-4 space-y-8`}>
            {children}
        </div>
    );
}

// RSidebar.x = function RSidebarX({className, children}: IProps) {
//     return (
//         <div className={`${className} `}>
//             {children}
//         </div>
//     );
// }

export default RSidebar;
