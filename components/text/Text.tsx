import React, {ReactNode} from 'react';
import Widget from "../widget/Widget";

interface IProps {
    children: ReactNode | ReactNode[],
    className?: string,
}

const Text = ({className, children}: IProps) => {
    return (
        <p className={`${className}`}>
            {children}
        </p>
    );
};

Text.Light = function TextLight({className, children}: IProps) {
    return (
        <p className={`${className}`}>
            {children}
        </p>
    );
}

Text.Bold = function TextBold({className, children}: IProps) {
    return (
        <p className={`${className}`}>
            {children}
        </p>
    );
}

Text.TitleWrap = function TextTitle({className, children}: IProps) {
    return (
        <div className={`${className} flex items-center justify-between mb-2`}>
            {children}
        </div>
    );
}

Text.Title = function TextTitle({className, children}: IProps) {
    return (
        <h3 className={`${className}`}>
            {children}
        </h3>
    );
}

export default Text;
