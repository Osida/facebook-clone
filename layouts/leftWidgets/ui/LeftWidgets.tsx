import React from 'react';
import UserProfile from "./userProfile/UserProfile";
import FriendsOnline from "./friendsOnline/FriendsOnline";
import RecentlyViewed from "./recentlyViewed/RecentlyViewed";

const LeftWidgets = () => {
    return (
        <>
            <aside className={'hidden flex-col space-y-5 md:flex sm:basis-1/4 bg-purple-200/0 overflow-y-scroll scrollbar-hide'}>
                <UserProfile/>
                <FriendsOnline/>
                <RecentlyViewed/>
            </aside>
        </>
    );
};

export default LeftWidgets;
