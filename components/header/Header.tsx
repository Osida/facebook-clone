import React from 'react';
import {IHeader} from "../../typings";
import Image from "next/image";
import {icons} from "../../constants";

const {
    FiSearch,
    IoNotifications,
    BsMessenger,
    BsFillPlayCircleFill,
    FiMenu,
    AiFillHome,
    BsPeopleFill,
    BsCollectionPlayFill,
    HiUserGroup,
    BsGridFill
} = icons

const Header = ({logo, search, btn}: IHeader) => {
    return (
        <header className={'flex-items-center sticky top-0 z-50 shadow-md px-4 py-2 justify-between'}>
            <Logo logo={logo}/>
            <MiddleLinks/>
            <RightContent search={search} btn={btn}/>
        </header>
    );
};

const Logo = ({logo}: { logo: IHeader['logo'] }) => (
    <div className={'w-10 h-10 relative cursor-pointer'}>
        <Image src={logo.img} alt={logo.alt} layout={'fill'} objectFit={'cover'}/>
    </div>
)

const MiddleLinks = () => {
    const iconSet = [AiFillHome, BsPeopleFill, BsCollectionPlayFill, HiUserGroup, BsGridFill]

    return (
        <>
            <div className={'flex-items-center pl-4 flex-[2] md:pl-0 md:justify-center lg:justify-end '}>
                <FiMenu className={'icon md:hidden'}/>

                <ul className={'hidden space-x-8 md:flex-items-center lg:space-x-12 xl:space-x-20 2xl:space-x-24'}>
                    {iconSet.map((Icon, index) => (
                        <li key={index}>
                            <Icon className={'icon lg:last:mr-4 xl:last:mr-0'}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const RightContent = ({search, btn}: { search: IHeader['search'], btn: IHeader['btn'], }) => {
    const iconSet = [IoNotifications, BsMessenger, BsFillPlayCircleFill]

    return (
        <>
            <div className={'flex-items-center justify-center space-x-2 flex-[1.5] lg:justify-end lg:space-x-4'}>
                {/* Input w/ Icon */}
                <div className={'flex-items-center bg-input py-1.5 px-2 rounded-full sm:flex-1 sm:max-w-[280px]'}>
                    <FiSearch className={'icon p-0.5 sm:mr-1.5'}/>
                    <input
                        type="text"
                        placeholder={search.placeholder}
                        className={'hidden border-none outline-none bg-transparent flex-1 text-xs sm:inline-flex md:text-sm lg:text-base'}/>
                </div>

                {/* Button */}
                <button
                    className={'rounded-full border-none outline-none bg-accent capitalize text-white text-xs py-2 px-4 hover:opacity-60 md:text-sm'}
                >
                    {btn.text}
                </button>
            </div>

            {/* Links */}
            <ul className={'flex-items-center flex-1 justify-end space-x-3 md:space-x-4 lg:flex-[0.5] xl:space-x-5 2xl:space-x-7'}>
                {iconSet.map((Icon, index) => (
                    <li key={index} className={'last:rotate-90'}>
                        <Icon className={'icon'}/>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Header;
