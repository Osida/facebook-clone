import React from 'react';
import {AiFillBell} from "react-icons/ai";
import {FaFacebookMessenger, FaMoon, FaUserCircle} from "react-icons/fa";
import {BsFillGearFill} from "react-icons/bs";
import NavbarLogic from "../hooks/NavbarLogic";
import {MdFeedback, MdHelp} from "react-icons/md";
import {GoSignOut} from "react-icons/go";
import {IconWrap, LineDivider} from "../../../components";

const listItems = [
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

const RightLinks = () => {
    const {toggleUserMenu, handleToggleUserMenu} = NavbarLogic();

    return (
        <>
            <div className={'flex items-center space-x-0.5 xl:space-x-2 bg-neutral-500/0'}>
                <IconWrap>
                    <AiFillBell className={'nav-icon'}/>
                </IconWrap>
                <IconWrap>
                    <FaFacebookMessenger className={'nav-icon'}/>
                </IconWrap>
                <IconWrap>
                    <FaUserCircle onClick={handleToggleUserMenu} className={'nav-icon'}/>
                </IconWrap>

                {toggleUserMenu && (
                    <ul
                        className={'z-[100] bg-secondaryColor py-3 px-5 rounded-lg absolute top-14 right-10 text-sm space-y-4 w-[350px]'}
                    >
                        <div className={'bg-primaryColor rounded-lg shadow-lg space-y-4 p-3'}>
                            <div className={'flex items-center space-x-1'}>
                                <IconWrap.li>
                                    <FaUserCircle className={'nav-icon'}/>
                                </IconWrap.li>
                                <p className={'text-base'}>User Name</p>
                            </div>

                            <LineDivider/>

                            <p className={'cursor-pointer text-accentColor'}>See all profiles</p>
                        </div>

                        {listItems.map(({Icon, text}, index) => (
                            <IconWrap.li key={text}>
                                <Icon className={'nav-icon'}/>
                                <p>{text}</p>
                            </IconWrap.li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default RightLinks;
