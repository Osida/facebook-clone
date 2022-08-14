import React from 'react';
import Image from "next/image";
import assets from "../../../assets";
import {motion} from 'framer-motion';
import {BsSearch} from "react-icons/bs";
import MiddleLinks from "./MiddleLinks";
import RightLinks from "./RightLinks";
import Menu from "./Menu";

const {images: {facebook_f_logo}} = assets

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

const Navbar = () => {
    return (
        <>
            <header className={'z-50 fixed left-0 right-0 top-0 flex items-center py-3 px-5 shadow-md bg-primaryColor'}>
                <div className={'relative w-10 h-10 rounded-full'}>
                    <Image src={facebook_f_logo} alt={'Facebook logo'} layout={'fill'} objectFit={'cover'}/>
                </div>

                <nav className={'text-iconColor flex items-center flex-1'}>
                    {/* Menu button */}
                    <Menu/>

                    {/* Middle icons */}
                    <MiddleLinks/>

                    {/* FeedInput & Button */}
                    <div className={'flex items-center space-x-2 mr-2 min-h-full flex-1 justify-end bg-violet-500/0'}>
                        <div
                            className={'flex items-center bg-inputColor rounded-full text-iconColor p-3 space-x-2 max-w-[11rem] max-h-[2.4rem] md:max-w-[14rem] lg:max-w-full'}>
                            <BsSearch className={'cursor-pointer w-3.5 h-3.5 '}/>
                            <input
                                type="text"
                                placeholder={'Search'}
                                className={'hidden bg-transparent border-none outline-none sm:flex flex-1 w-full'}
                            />
                        </div>

                        <motion.button
                            whileHover={motionNavbar.icon.whileHover}
                            whileTap={motionNavbar.icon.whileTap}
                            className={'py-2 px-4 bg-accentColor text-white text-sm rounded-full'}
                        >
                            Create
                        </motion.button>
                    </div>

                    {/* Right icons */}
                    <RightLinks/>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
