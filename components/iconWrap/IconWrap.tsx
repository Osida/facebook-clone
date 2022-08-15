import React from 'react';
import {motion} from "framer-motion";
import {motionNavbar} from "../../layouts/navbar/ui/Navbar";

interface IProps {
    children: React.ReactNode,
    className?: string,

}

const IconWrap = ({children, className}: IProps) => {
    return (
        <>
            <motion.span
                whileHover={motionNavbar.icon.whileHover}
                whileTap={motionNavbar.icon.whileTap}
                className={`${className} cursor-pointer flex items-center rounded-full p-2`}
            >
                {children}
            </motion.span>
        </>
    );
};

IconWrap.secondary = function ({children, className}: IProps) {
    return (
        <>
            <motion.span
                whileHover={motionNavbar.menuIcon.whileHover}
                whileTap={motionNavbar.icon.whileTap}
                className={`${className} cursor-pointer flex items-center rounded-full p-2`}
            >
                {children}
            </motion.span>
        </>
    );
}

export default IconWrap;
