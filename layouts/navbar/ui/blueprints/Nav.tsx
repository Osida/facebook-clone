import React, {ReactNode} from 'react';

interface IProps {
    children: ReactNode | ReactNode[],
    className?: string,
    ref?: React.RefObject<HTMLDivElement>,
}

const Nav = ({className, children}: IProps) => {
    return (
        <nav className={`${className} text-iconColor flex items-center flex-1`}>
            {children}
        </nav>
    );
};

Nav.MenuContainer = function NavMenu({className, children, ref}: IProps) {
    return (
        <div
            ref={ref}
            className={`${className} z-[100] text-base bg-secondaryColor w-9/10 min-h-screen py-3 px-5 absolute top-0 left-0 space-y-6`}>
            {children}
        </div>
    );
}

Nav.MenuSearchContainer = function NavMenuSearchContainer({className, children, ref}: IProps) {
    return (
        <div className={`${className} flex items-center space-x-4 w-full`}>
            {children}
        </div>
    );
}

Nav.MenuInputContainer = function NavMenuInput({className, children, ref}: IProps) {
    return (
        <div
            className={`${className} flex flex-1 items-center justify-center bg-inputColor rounded-full text-iconColor py-3 px-4 space-x-4`}>
            {children}
        </div>
    );
}

Nav.MenuProfileContainer = function NavMenuProfileContainer({className, children, ref}: IProps) {
    return (
        <div
            className={`${className} flex items-center w-full space-x-2`}>
            {children}
        </div>
    );
}

Nav.MiddleLinksContainer = function NavMiddleLinksContainer({className, children, ref}: IProps) {
    return (
        <div
            className={`${className} hidden items-center min-h-full flex-2 space-x-10 justify-end mr-8 lg:flex xl:space-x-12 2xl:space-x-16 `}>
            {children}
        </div>
    );
}

Nav.SearchContainer = function NavSearchContainer({className, children, ref}: IProps) {
    return (
        <div
            className={`${className} flex items-center space-x-2 mr-2 min-h-full flex-1 justify-end`}>
            {children}
        </div>
    );
}

Nav.Search = function NavSearchContainer({className, children, ref}: IProps) {
    return (
        <div
            className={`${className} flex items-center bg-inputColor rounded-full text-iconColor p-3 space-x-2 max-w-[11rem] max-h-[2.4rem] md:max-w-[14rem] lg:max-w-full'`}>
            {children}
        </div>
    );
}

Nav.RightLinksContainer = function NavRightLinksContainer({className, children, ref}: IProps) {
    return (
        <div
            className={`${className} flex items-center space-x-0.5 xl:space-x-2`}>
            {children}
        </div>
    );
}

Nav.UserMenuContainer = function NavUserMenuContainer({className, children, ref}: IProps) {
    return (
        <div
            className={`${className} z-[100] bg-secondaryColor py-3 px-5 rounded-lg absolute top-14 right-10 text-sm space-y-4 w-[350px]`}>
            {children}
        </div>
    );
}

Nav.UserMenuCard = function NavUserMenuCard({className, children, ref}: IProps) {
    return (
        <div
            className={`${className} bg-primaryColor rounded-lg shadow-lg space-y-4 p-3`}>
            {children}
        </div>
    );
}

// Nav.x = function NavX({className, children, ref}: IProps) {
//     return (
//         <div
//             className={`${className} `}>
//             {children}
//         </div>
//     );
// }


export default Nav;
