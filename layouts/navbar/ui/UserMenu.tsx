import React from 'react';
import Nav from "./blueprints/Nav";
import {IconWrap, Text} from "../../../components";
import {FaMoon, FaUserCircle} from "react-icons/fa";
import LineDivider from "../../../components/lineDivider/LineDivider";
import {BsFillGearFill} from "react-icons/bs";
import {MdFeedback, MdHelp} from "react-icons/md";
import {GoSignOut} from "react-icons/go";

const userListItems = [
    {
        Icon: BsFillGearFill,
        text: 'Settings & privacy'
    },
    {
        Icon: MdHelp,
        text: 'Help & support'
    },
    {
        Icon: FaMoon,
        text: 'Display & accessibility'
    },
    {
        Icon: MdFeedback,
        text: 'Give feedback'
    },
    {
        Icon: GoSignOut,
        text: 'Log Out'
    },
]

const UserMenu = () => {
    return (
        <Nav.UserMenuContainer>
            {/* User menu card */}
            <Nav.UserMenuCard>
                <div className={'flex items-center space-x-1'}>
                    <IconWrap.secondary>
                        <FaUserCircle className={'nav-icon'}/>
                    </IconWrap.secondary>
                    <Text className={'text-base'}>User Name</Text>
                </div>
                <LineDivider/>
                <Text className={'text-accentColor text-xs pl-2'}>See all profiles</Text>
            </Nav.UserMenuCard>

            {/* User menu list items */}
            {userListItems.map(({Icon, text}, index) => (
                <IconWrap.secondary key={text} className={'space-x-2'}>
                    <Icon className={'nav-icon'}/>
                    <p>{text}</p>
                </IconWrap.secondary>
            ))}
        </Nav.UserMenuContainer>
    );
};

export default UserMenu;
