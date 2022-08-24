import {useState} from 'react';

const UseUserMenu = () => {
    const [toggleUserMenu, setToggleUserMenu] = useState<boolean>(false);

    const onToggleUserMenu = () => setToggleUserMenu(prevState => !prevState)

    return {toggleUserMenu, onToggleUserMenu}
};

export default UseUserMenu;
