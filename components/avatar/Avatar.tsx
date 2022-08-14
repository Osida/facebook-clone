import React from 'react';
import Image, {StaticImageData} from "next/image";

interface IProps {
    image: StaticImageData,
    alt: string,
    classNames?: string,
}

const Avatar = ({image, alt, classNames}: IProps) => {
    return (
        <div className={'avatar cursor-pointer'}>
            <div className={`${classNames} rounded-full`}>
                <Image
                    src={image}
                    alt={alt}
                    layout={'responsive'}
                    objectFit={'cover'}
                    placeholder={'blur'}
                    className={'rounded-full'}/>
            </div>
        </div>
    );
};

export default Avatar;
