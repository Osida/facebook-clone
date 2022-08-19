import React from 'react';
import Image from "next/image";
import assets from "../../../assets";
import {motion} from "framer-motion";
import Nav from "./blueprints/Nav";
import Menu from "./Menu";
import Header from "./blueprints/Header";
import UserMenu from "./UserMenu";
import {IconWrap} from "../../../components";
import {HiUserGroup} from "react-icons/hi";
import {AiFillBell, AiFillHome} from "react-icons/ai";
import {MdOutlineMenu, MdPeopleAlt} from "react-icons/md";
import {FaFacebookMessenger, FaUserCircle} from "react-icons/fa";
import {BsFillCollectionPlayFill, BsFillGridFill, BsSearch} from "react-icons/bs";
import useUserMenu from "../hooks/useUserMenu";
import useMenu from "../hooks/useMenu";

const {images} = assets

export const motionNavbar = {
    icon: {
        whileHover: {
            backgroundColor: "#1A1C20", // secondaryColor
            transition: {duration: 0.1, ease: 'easeInOut'}
        },
        whileTap: {
            scale: [1, 0.9],
            transition: {duration: 0.1, ease: 'easeInOut'}
        }
    },
    menuIcon: {
        whileHover: {
            backgroundColor: "#0F0F13", // primaryColor
            transition: {duration: 0.1, ease: 'easeInOut'}
        },
    }
}

const middleLinks = [AiFillHome, MdPeopleAlt, BsFillCollectionPlayFill, HiUserGroup, BsFillGridFill]

const Navbar = () => {
    const {toggleMenu, menuRef, onToggleMenu} = useMenu();
    const {onToggleUserMenu, toggleUserMenu} = useUserMenu();

    return (
        <Header>
            {/* Logo */}
            <Header.Logo>
                <Image src={images.facebook_f_logo} alt={'Facebook logo'} layout={'fill'} objectFit={'cover'}/>
            </Header.Logo>

            <Nav>
                {/* Menu button */}
                <motion.button
                    onClick={() => onToggleMenu()}
                    whileHover={motionNavbar.icon.whileHover}
                    whileTap={motionNavbar.icon.whileTap}
                    className={'flex items-center rounded-full p-2 ml-2 lg:hidden'}
                >
                    <MdOutlineMenu className={'nav-icon'}/>
                </motion.button>

                {/* Menu container */}
                {toggleMenu && <Menu ref={menuRef} onToggleMenu={onToggleMenu}/>}

                {/* Nav middle links */}
                <Nav.MiddleLinksContainer>
                    {middleLinks.map((Icon, index) => (
                        <IconWrap key={index}>
                            <Icon className={'nav-icon'}/>
                        </IconWrap>
                    ))}
                </Nav.MiddleLinksContainer>

                {/* Nav search */}
                <Nav.SearchContainer>
                    <Nav.Search>
                        <BsSearch className={'cursor-pointer w-3.5 h-3.5 '}/>
                        <input
                            type="text"
                            placeholder={'Search'}
                            className={'hidden bg-transparent border-none outline-none sm:flex flex-1 w-full'}
                        />
                    </Nav.Search>
                    <motion.button
                        whileHover={motionNavbar.icon.whileHover}
                        whileTap={motionNavbar.icon.whileTap}
                        className={'py-2 px-4 bg-accentColor text-white text-sm rounded-full'}
                    >
                        Create
                    </motion.button>
                </Nav.SearchContainer>

                {/* Nav right links */}
                <Nav.RightLinksContainer>
                    <IconWrap>
                        <AiFillBell className={'nav-icon'}/>
                    </IconWrap>
                    <IconWrap>
                        <FaFacebookMessenger className={'nav-icon'}/>
                    </IconWrap>
                    <IconWrap>
                        <FaUserCircle onClick={onToggleUserMenu} className={'nav-icon'}/>
                    </IconWrap>

                    {/* User menu container */}
                    {toggleUserMenu && <UserMenu/>}
                </Nav.RightLinksContainer>
            </Nav>
        </Header>
    );
};

export default Navbar;
