import React, {ReactNode} from 'react';

interface IProps {
    children: ReactNode | ReactNode[],
    className?: string,
}

const Header = ({className, children}: IProps) => {
    return (
        <header
            className={`${className} z-50 fixed left-0 right-0 top-0 flex items-center py-3 px-5 shadow-md bg-primaryColor`}
        >
            {children}
        </header>
    );
};

Header.Logo = function HeaderLogo ({className, children}: IProps) {
    return (
        <div className={`${className} relative w-10 h-10 rounded-full`}>
            {children}
        </div>
    );
}


export default Header;
