import React, {RefObject} from 'react';
import Nav from "./blueprints/Nav";
import {IconWrap, Text} from "../../../components";
import {BsArrowLeftShort, BsCollectionPlayFill, BsFillGridFill, BsSearch} from "react-icons/bs";
import LineDivider from "../../../components/lineDivider/LineDivider";
import {motion} from "framer-motion";
import {FaUserCircle} from "react-icons/fa";
import {motionNavbar} from "./Navbar";
import {AiFillHome} from "react-icons/ai";
import {MdPeopleAlt} from "react-icons/md";
import {HiUserGroup} from "react-icons/hi";

interface IProps {
    ref: RefObject<HTMLDivElement>,
    onToggleMenu: () => void,
}

const menuListItems = [
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
        text: 'Menu'
    },
]

const Menu = ({ref, onToggleMenu}: IProps) => {
    return (
        <Nav.MenuContainer ref={ref}>
            {/* Back arrow & Searchbar */}
            <Nav.MenuSearchContainer>
                <IconWrap>
                    <BsArrowLeftShort onClick={() => onToggleMenu()} className={'nav-icon w-8 h-8'}/>
                </IconWrap>
                <Nav.MenuInputContainer>
                    <BsSearch className={'cursor-pointer w-3.5 h-3.5 '}/>
                    <input
                        type="text"
                        placeholder={'Search Facebook'}
                        className={'bg-transparent border-none outline-none flex flex-1 w-full'}
                    />
                </Nav.MenuInputContainer>
            </Nav.MenuSearchContainer>

            <LineDivider/>

            {/* User Profile */}
            <Nav.MenuProfileContainer>
                <motion.span
                    whileHover={motionNavbar.menuIcon.whileHover}
                    whileTap={motionNavbar.icon.whileTap}
                    className={`cursor-pointer flex items-center rounded-full p-2`}
                >
                    <FaUserCircle className={'cursor-pointer w-7 h-7'}/>
                </motion.span>

                <div className={'flex flex-col space-y-1'}>
                    <Text>User Name</Text>
                    <Text>View your profile</Text>
                </div>
            </Nav.MenuProfileContainer>

            <LineDivider/>

            {/* Menu items */}
            {menuListItems.map(({Icon, text}, index) => (
                <IconWrap.secondary key={text} className={'space-x-3'}>
                    <Icon className={'nav-icon w-5 h-5'}/>
                    <Text>{text}</Text>
                </IconWrap.secondary>
            ))}
        </Nav.MenuContainer>
    );
};

export default Menu;
