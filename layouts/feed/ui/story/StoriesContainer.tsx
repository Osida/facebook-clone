import React from 'react';
import StoryCard from "./StoryCard";
import assets from "../../../../assets";
import AddStoryCard from "./AddStoryCard";

const {images} = assets

const story_cards = [
    {
        image: images.MoraineLakeCanada,
        alt: 'MoraineLakeCanada',
        userName: 'Rinira',
        profileImg: images.Rinira,
    },
    {
        image: images.TorontoCanadaBuilding,
        alt: 'TorontoCanadaBuilding',
        userName: 'Nelran',
        profileImg: images.Nelran,
    },
    {
        image: images.TorontoCanadaCityShot,
        alt: 'TorontoCanadaCityShot',
        userName: 'Diris',
        profileImg: images.Diris,
    },
    {
        image: images.ViennaAustria,
        alt: 'ViennaAustria',
        userName: 'Kho',
        profileImg: images.Kho,
    },
]

const StoriesContainer = () => {
    return (
        <div className={'flex items-center justify-evenly sm:justify-between'}>
            <AddStoryCard/>

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

export default StoriesContainer;
