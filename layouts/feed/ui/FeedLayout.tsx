import React from 'react';
import Input from "./input/Input";
import PostLayout from "./post/PostLayout";
import Feed from "./blueprints/Feed";
import AddStoryCard from "./story/AddStoryCard";
import StoryCard from "./story/StoryCard";
import assets from "../../../assets";

const {images} = assets

const storyCards = [
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

const FeedLayout = () => {
    return (
        <Feed>
            {/* Stories Container */}
            <Feed.StoriesContainer>
                <AddStoryCard/>
                {storyCards.map(({image, alt, userName, profileImg}, index) => (
                    <StoryCard key={index} image={image} alt={`${alt}`} userName={userName} profileImg={profileImg}/>
                ))}
            </Feed.StoriesContainer>

            <Input/>
            <PostLayout/>
        </Feed>
    );
};

export default FeedLayout;
