import React from 'react';
import UserProfile from "./userProfile/UserProfile";
import FriendsOnline from "./friendsOnline/FriendsOnline";
import RecentlyViewed from "./recentlyViewed/RecentlyViewed";

const LeftSidebar = () => {
    return (
        <>
            <aside className={'hidden flex-col space-y-5 overflow-y-scroll scrollbar-hide sm:basis-1/4 md:flex bg-purple-200/0'}>
                <UserProfile/>
                <FriendsOnline/>
                <RecentlyViewed/>
            </aside>
        </>
    );
};

export default LeftSidebar;
