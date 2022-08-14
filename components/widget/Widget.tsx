import React from 'react';

interface IProps {
    children: React.ReactNode,
    classNames?: string,
}

const Widget = ({classNames, children}: IProps) => {
    return (
        <div
            className={`flex flex-col w-full bg-secondaryColor rounded-lg p-4 space-y-3 text-xs text-gray-300 ${classNames}`}>
            {children}
        </div>
    );
};

export default Widget;
