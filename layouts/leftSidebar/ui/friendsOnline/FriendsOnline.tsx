import React from 'react';
import {Avatar, IconWrap, Widget} from "../../../../components";
import assets from "../../../../assets";
import {GoPrimitiveDot} from "react-icons/go";

const {images} = assets

const friends_online = [
    {name: 'Rinira', image: images.Rinira, online: true},
    {name: 'Nelran', image: images.Nelran, online: false},
    {name: 'Diris', image: images.Diris, online: true},
    {name: 'Kho', image: images.Kho, online: true},
]

const FriendsOnline = () => {
    return (
        <Widget>
            <Widget.TitleWrap>
                <Widget.Title>Messenger</Widget.Title>
                <IconWrap.secondary>
                    <p className={'cursor-pointer text-accentColor'}>All</p>
                </IconWrap.secondary>
            </Widget.TitleWrap>

            {friends_online.map((friend, index) => (
                <IconWrap.secondary
                    key={index}
                    className={'flex items-center justify-between text-xs space-x-3 lg:text-sm'}
                >
                    <div className={'flex items-center space-x-2'}>
                        <Avatar image={friend.image} alt={friend.name} className={'border border-accentColor'}/>
                        <p>{friend.name}</p>
                    </div>

                    <GoPrimitiveDot className={'text-inputColor'}/>
                </IconWrap.secondary>
            ))}

        </Widget>
    );
};

export default FriendsOnline;
