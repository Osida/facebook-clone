import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import assets from "../../../assets";
import LSidebar from "./blueprints/LSidebar";
import {Avatar, IconWrap, Text, Widget} from "../../../components";
import {GoPrimitiveDot} from "react-icons/go";
import {BsThreeDots} from "react-icons/bs";


const {images} = assets

export const motionRecent = {
    whileHover: {
        scale: [1, 1.03],
        transition: {duration: 0.2, ease: 'easeInOut'}
    },
    whileTap: {
        scale: [1, 0.95],
        transition: {duration: 0.2, ease: 'easeInOut'}
    }
}

const friendsOnline = [
    {text: 'Rinira', image: images.Rinira, online: true},
    {text: 'Nelran', image: images.Nelran, online: false},
    {text: 'Diris', image: images.Diris, online: true},
    {text: 'Kho', image: images.Kho, online: true},
]

const recentlyViewed = [
    {text: 'Jeans', image: images.Jeans},
    {text: 'JewelryModel', image: images.JewelryModel},
    {text: 'SantoriniGreece', image: images.SantoriniGreece},
    {text: 'Veya', image: images.Veya},
    {text: 'YellowLamborghini', image: images.YellowLamborghini},
    {text: 'Sunglasses', image: images.Sunglasses},
]

const LeftSidebar = () => {
    return (
        <LSidebar>
            {/* User profile */}
            <Widget>
                <LSidebar.UserContainer>
                    <Avatar image={images.Pithorn} alt={'User'} className={'border border-success'}/>
                    <Text.Title>Pithorn</Text.Title>
                </LSidebar.UserContainer>
            </Widget>

            {/* Friends online */}
            <Widget>
                <Text.TitleWrap>
                    <Text.Title>Messenger</Text.Title>
                    <IconWrap.secondary>
                        <Text className={'cursor-pointer text-accentColor'}>All</Text>
                    </IconWrap.secondary>
                </Text.TitleWrap>

                {friendsOnline.map((friend, index) => (
                    <IconWrap.secondary
                        key={index}
                        className={'flex items-center justify-between space-x-3'}
                    >
                        <div className={'flex items-center space-x-2'}>
                            <Avatar image={friend.image} alt={friend.text} className={'border border-accentColor'}/>
                            <Text>{friend.text}</Text>
                        </div>

                        <GoPrimitiveDot className={'text-inputColor'}/>
                    </IconWrap.secondary>
                ))}

            </Widget>

            {/* Recently viewed */}
            <Widget>
                <Text.TitleWrap>
                    <Text.Title>Recently Viewed</Text.Title>
                    <IconWrap.secondary>
                        <BsThreeDots className={'text-lg text-iconColor'}/>
                    </IconWrap.secondary>
                </Text.TitleWrap>

                <LSidebar.RecentGridContainer>
                    {recentlyViewed.map((recent, index) => (
                        <motion.div
                            whileTap={motionRecent.whileTap}
                            key={index}
                            className={'cursor-pointer flex items-center justify-between space-x-3'}>
                            <div className={'w-full h-full'}>
                                <Image
                                    src={recent.image}
                                    alt={recent.text}
                                    layout={'responsive'}
                                    objectFit={'cover'}
                                    className={'rounded-sm'}
                                />
                            </div>
                        </motion.div>
                    ))}
                </LSidebar.RecentGridContainer>
            </Widget>
        </LSidebar>
    );
};

export default LeftSidebar;
