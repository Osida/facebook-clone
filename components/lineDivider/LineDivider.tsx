import React from 'react';

interface IProps {
    classNames?: string,
}

const LineDivider = ({classNames}: IProps) => {
    return (
        <>
            <div className={`w-full h-[0.07px] bg-inputColor ${classNames}`}/>
        </>
    );
};

export default LineDivider;
