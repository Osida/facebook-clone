import React from 'react';
import Image from "next/image";
import assets from "../../../assets";
import NavbarMiddleLinks from "./NavbarMiddleLinks";
import NavbarRightLinks from "./NavbarRightLinks";
import NavbarMenu from "./NavbarMenu";
import NavbarSearch from "./NavbarSearch";

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
                    <NavbarMenu/>
                    <NavbarMiddleLinks/>
                    <NavbarSearch/>
                    <NavbarRightLinks/>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
