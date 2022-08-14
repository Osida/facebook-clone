import React from 'react';
import Image from "next/image";
import StoryCard from "./StoryCard";
import assets from "../../../../assets";
import {BsFillPlusCircleFill} from "react-icons/bs";

const {images} = assets

const story_cards = [
    {
        image: images.MountTeideSpain,
        alt: 'Card',
        userName: 'Fahnelih',
        profileImg: images.Fahnelih,
    },
    {
        image: images.MountTeideSpain,
        alt: 'Card',
        userName: 'Fahnelih',
        profileImg: images.Fahnelih,
    },
    {
        image: images.MountTeideSpain,
        alt: 'Card',
        userName: 'Fahnelih',
        profileImg: images.Fahnelih,
    },
    {
        image: images.MountTeideSpain,
        alt: 'Card',
        userName: 'Fahnelih',
        profileImg: images.Fahnelih,
    },
]

const Stories = () => {
    return (
        <div className={'flex items-center justify-evenly sm:justify-between'}>
            {/* Add story */}
            <div className={'storyCard-container'}>
                <Image
                    src={images.FanadHeadLighthouse}
                    alt={'Add Story'}
                    layout={'fill'}
                    placeholder={'blur'}
                    objectFit={'cover'}
                    className={'rounded-full lg:rounded-md'}
                />
                <div
                    className={'absolute w-full h-full rounded-md px-2 py-4 flex flex-col justify-end items-center space-y-2'}>
                    <BsFillPlusCircleFill
                        className={'w-6 h-6 rounded-full border border-accentColor text-white p-0.5 lg:w-9 lg:h-9'}/>
                    <p className={'hidden text-sm text-white self-center lg:inline'}>Add Story</p>
                </div>
            </div>

            {/* Stories */}
            {story_cards.map(({image, alt, userName, profileImg}, index) => (
                <StoryCard
                    key={index}
                    image={image}
                    alt={`${alt} ${index}`}
                    userName={userName}
                    profileImg={profileImg}
                />
            ))}
        </div>
    );
};

export default Stories;
