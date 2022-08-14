import React from 'react';
import UserProfileWidget from "./userProfile/UserProfileWidget";
import FriendsOnlineWidget from "./friendsOnline/FriendsOnlineWidget";
import RecentlyViewedWidget from "./recentlyViewed/RecentlyViewedWidget";

const LeftSidebar = () => {
    return (
        <>
            <aside className={'hidden flex-col space-y-5 overflow-y-scroll scrollbar-hide sm:basis-1/4 md:flex bg-purple-200/0'}>
                <UserProfileWidget/>
                <FriendsOnlineWidget/>
                <RecentlyViewedWidget/>
            </aside>
        </>
    );
};

export default LeftSidebar;
