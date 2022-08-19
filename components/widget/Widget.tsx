import React, {ReactNode} from 'react';

interface IProps {
    children: ReactNode | ReactNode[],
    className?: string,
}

const Widget = ({className, children}: IProps) => {
    return (
        <div
            className={`${className} flex flex-col w-full bg-secondaryColor rounded-lg p-4 space-y-3 text-xs`}
        >
            {children}
        </div>
    );
};


Widget.TitleWrap = function WidgetTitle({className, children}: IProps) {
    return (
        <div className={`${className} flex items-center justify-between mb-2`}>
            {children}
        </div>
    );
}

Widget.Title = function WidgetTitle({className, children}: IProps) {
    return (
        <h3 className={`${className}`}>
            {children}
        </h3>
    );
}


export default Widget;
