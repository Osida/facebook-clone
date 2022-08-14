import React from 'react';
import {Avatar, Widget} from "../../../../components";
import assets from "../../../../assets";

const {images} = assets

const UserProfileWidget = () => {
    return (
        <>
            <Widget>
                <div className={'flex items-center space-x-2 text-xs font-medium lg:text-sm'}>
                    <Avatar image={images.Lillie} alt={'User'} classNames={'w-7 lg:w-9 xl:w-11 border border-success'}/>
                    <p>User Name</p>
                </div>
            </Widget>
        </>
    );
};

export default UserProfileWidget;
