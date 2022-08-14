import React from 'react';
import Image, {StaticImageData} from "next/image";
import {Avatar} from "../../../../components";


interface IProps {
    image: StaticImageData,
    alt: string,
    userName: string,
    profileImg: StaticImageData
}

const StoryCard = ({image, alt, userName, profileImg}: IProps) => {
    return (
        <>
            {/* Story card container */}
            <div className={'storyCard-container'}>
                {/* Story image */}
                <Image
                    src={image}
                    alt={alt}
                    layout={'fill'}
                    objectFit={'cover'}
                    placeholder={'blur'}
                    className={'rounded-full lg:rounded-md'}
                />

                {/* Story overlay container */}
                <div className={'absolute w-full h-full rounded-md px-2 py-4 flex flex-col justify-between'}>
                    {/* Story avatar */}
                    <Avatar image={profileImg} alt={alt} classNames={'w-5 border border-accentColor sm:w-7 md:w-7 lg:w-9'}/>

                    {/*Story text*/}
                    <p className={'hidden text-sm text-white self-center lg:inline'}>{userName}</p>
                </div>

            </div>
        </>
    );
};

export default StoryCard;
