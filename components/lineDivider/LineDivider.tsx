import React from 'react';

interface IProps {
    className?: string,
}

const LineDivider = ({className}: IProps) => {
    return (
        <div className={`${className} w-full h-[0.07px] bg-inputColor`}/>
    );
};

export default LineDivider;
