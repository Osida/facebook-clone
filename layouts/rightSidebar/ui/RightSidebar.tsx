import React from 'react';
import Events from "./events/Events";
import News from "./news/News";

const RightSidebar = () => {
    return (
        <>
            <aside
                className={'hidden flex-col space-y-5 overflow-y-scroll scrollbar-hide lg:flex lg:basis-1/4 bg-pink-200/0'}>
                <News/>
                <Events/>
            </aside>
        </>
    );
};


export default RightSidebar;
