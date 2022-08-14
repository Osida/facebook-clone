import {useRef, useState} from 'react';

const NavbarLogic = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [toggleUserMenu, setToggleUserMenu] = useState<boolean>(false);

    const dropDownRef = useRef<HTMLUListElement>(null);

    const handleToggleMenu = () => {
        setToggleMenu(prevState => !prevState)
    }

    const handleToggleUserMenu = () => {
        setToggleUserMenu(prevState => !prevState)
    }

    return {toggleMenu, toggleUserMenu, dropDownRef, handleToggleMenu, handleToggleUserMenu}
};

export default NavbarLogic;
