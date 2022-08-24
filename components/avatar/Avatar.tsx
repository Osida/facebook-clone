import React from 'react';
import Image, {StaticImageData} from "next/image";

interface IProps {
    image: StaticImageData,
    alt: string,
    className?: string,
}

const Avatar = ({image, alt, className}: IProps) => {
    return (
        <div className={'avatar cursor-pointer'}>
            <div className={`${className} rounded-full w-7 lg:w-9 xl:w-11`}>
                <Image
                    src={image}
                    alt={alt}
                    layout={'responsive'}
                    objectFit={'cover'}
                    placeholder={'blur'}
                    className={'rounded-full'}
                />
            </div>
        </div>
    );
};

export default Avatar;
