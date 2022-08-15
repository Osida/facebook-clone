import React from 'react';
import {motion} from "framer-motion";
import {MdOutlineMenu, MdPeopleAlt} from "react-icons/md";
import {motionNavbar} from "./Navbar";
import {BsArrowLeftShort, BsCollectionPlayFill, BsFillGridFill, BsSearch} from "react-icons/bs";
import {FaUserCircle} from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";
import {HiUserGroup} from "react-icons/hi";
import NavbarLogic from "../hooks/NavbarLogic";
import {IconWrap} from "../../../components";
import LineDivider from "../../../components/lineDivider/LineDivider";

const listItems = [
    {
        Icon: AiFillHome,
        text: 'Home'
    },
    {
        Icon: MdPeopleAlt,
        text: 'People'
    },
    {
        Icon: BsCollectionPlayFill,
        text: 'TV'
    },
    {
        Icon: HiUserGroup,
        text: 'Groups'
    },
    {
        Icon: BsFillGridFill,
        text: 'NavbarMenu'
    },
]

interface IMenuButton {
    handleToggleMenu: () => void
}

const NavbarMenu = () => {
    const {toggleMenu, handleToggleMenu, dropDownRef} = NavbarLogic();

    return (
        <>
            <MenuButton handleToggleMenu={handleToggleMenu}/>

            {/* Dropdown menu */}
            {toggleMenu && (
                <div ref={dropDownRef}
                     className={'z-[100] bg-secondaryColor w-9/10 min-h-screen py-3 px-5 absolute top-0 left-0 space-y-6 text-sm'}
                >
                    <MenuArrowSearchbar handleToggleMenu={handleToggleMenu}/>
                    <LineDivider/>
                    <MenuProfile/>
                    <LineDivider/>

                    {listItems.map(({Icon, text}, index) => (
                        <IconWrap.secondary key={text} classNames={'space-x-3'}>
                            <Icon className={'nav-icon w-5 h-5'}/>
                            <p>{text}</p>
                        </IconWrap.secondary>
                    ))}
                </div>
            )}
        </>
    );
};


const MenuButton = ({handleToggleMenu}: IMenuButton) => (
    <motion.button
        onClick={() => handleToggleMenu()}
        whileHover={motionNavbar.icon.whileHover}
        whileTap={motionNavbar.icon.whileTap}
        className={'flex items-center rounded-full p-2 ml-2 lg:hidden'}
    >
        <MdOutlineMenu className={'nav-icon'}/>
    </motion.button>
)

const MenuArrowSearchbar = ({handleToggleMenu}: IMenuButton) => (
    <div className={'flex items-center space-x-4 w-full bg-sky-200/0'}>
        <IconWrap>
            <BsArrowLeftShort onClick={() => handleToggleMenu()} className={'nav-icon w-8 h-8'}/>
        </IconWrap>

        <div
            className={'flex flex-1 items-center justify-center bg-inputColor rounded-full text-iconColor p-3 space-x-2'}>
            <BsSearch className={'cursor-pointer w-3.5 h-3.5 '}/>
            <input
                type="text"
                placeholder={'Search Facebook'}
                className={'bg-transparent border-none outline-none flex flex-1 w-full'}
            />
        </div>
    </div>
)

const MenuProfile = () => (
    <div className={'flex items-center w-full space-x-2'}>
        <motion.span
            whileHover={motionNavbar.menuIcon.whileHover}
            whileTap={motionNavbar.icon.whileTap}
            className={`cursor-pointer flex items-center rounded-full p-2`}
        >
            <FaUserCircle className={'cursor-pointer w-7 h-7'}/>
        </motion.span>

        <div className={'flex flex-col space-y-1'}>
            <p>User Name</p>
            <p>View your profile</p>
        </div>
    </div>
)

export default NavbarMenu;
