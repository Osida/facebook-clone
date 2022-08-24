import {useRef, useState} from 'react';

const useMenu = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const onToggleMenu = () => setToggleMenu(prevState => !prevState)

    return {toggleMenu, menuRef, onToggleMenu}
};

export default useMenu;
