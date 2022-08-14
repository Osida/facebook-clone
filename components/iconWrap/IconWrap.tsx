import React from 'react';
import {motion} from "framer-motion";
import {motionNavbar} from "../../layouts/navbar/ui/Navbar";

interface IProps {
    children: React.ReactNode,
    classNames?: string,

}

const IconWrap = ({children, classNames}: IProps) => {
    return (
        <>
            <motion.span
                whileHover={motionNavbar.icon.whileHover}
                whileTap={motionNavbar.icon.whileTap}
                className={`${classNames} cursor-pointer flex items-center rounded-full p-2`}
            >
                {children}
            </motion.span>
        </>
    );
};

IconWrap.li = function ({children, classNames}: IProps) {
    return (
        <>
            <motion.li
                whileHover={motionNavbar.menuIcon.whileHover}
                whileTap={motionNavbar.icon.whileTap}
                className={`${classNames} cursor-pointer flex items-center space-x-3 rounded-full p-2`}
            >
                {children}
            </motion.li>
        </>
    );
}

export default IconWrap;
