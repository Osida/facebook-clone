import React from 'react';
import {Avatar, Widget} from "../../../../components";
import assets from "../../../../assets";

const {images} = assets

const UserProfile = () => {
    return (
        <Widget>
            <div className={'flex items-center space-x-2'}>
                <Avatar image={images.Pithorn} alt={'User'} className={'border border-success'}/>
                <Widget.Title>Pithorn</Widget.Title>
            </div>
        </Widget>
    );
};

export default UserProfile;
