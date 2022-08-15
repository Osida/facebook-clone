import React from 'react';
import {BsSearch} from "react-icons/bs";
import {motion} from "framer-motion";
import {motionNavbar} from "./Navbar";

const NavbarSearch = () => {
    return (
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
    );
};

export default NavbarSearch;
