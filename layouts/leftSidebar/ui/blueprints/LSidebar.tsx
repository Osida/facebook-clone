import React, {ReactNode} from 'react';

interface IProps {
    children: ReactNode | ReactNode[],
    className?: string,
}

const LSidebar = ({className, children}: IProps) => {
    return (
        <aside
            className={`${className} hidden flex-col space-y-5 overflow-y-scroll scrollbar-hide sm:basis-1/4 md:flex`}>
            {children}
        </aside>
    );
};

LSidebar.UserContainer = function LSidebarUserContainer({className, children}: IProps) {
    return (
        <div className={`${className} flex items-center space-x-2`}>
            {children}
        </div>
    );
}

LSidebar.RecentGridContainer = function LSidebarRecentGridContainer({className, children}: IProps) {
    return (
        <div className={`${className} grid grid-cols-1 gap-3 lg:grid-cols-2`}>
            {children}
        </div>
    );
}

// LSidebar.x = function LSidebarX({className, children}: IProps) {
//     return (
//         <div className={`${className} `}>
//             {children}
//         </div>
//     );
// }

export default LSidebar;
