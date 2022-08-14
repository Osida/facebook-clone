import React from 'react';
import assets from "../../../assets";
import {Avatar, IconWrap, LineDivider, Widget} from "../../../components";
import {BsFillPlayCircleFill} from "react-icons/bs";
import Image from "next/image";

const {images} = assets

const input_icons = [
    {
        image: images.camera,
        text: 'Live video',
    },
    {
        image: images.cards,
        text: 'Photo/video',
    },
    {
        image: images.smile,
        text: 'Feeling/activity',
    },
]

const FeedInput = () => {
    return (
        <Widget>
            {/* FeedInput */}
            <div className={'flex items-center space-x-2'}>
                <Avatar image={images.Rinira} alt={'User'} classNames={'w-7 lg:w-9 xl:w-11'}/>

                <div
                    className={'flex items-center bg-inputColor rounded-full pl-4 py-0.5 flex-1 transition-all ease-in-out duration-200 hover:bg-inputColor/50'}>
                    <input
                        type="text"
                        placeholder={`User, what's the latest?`}
                        className={'outline-none border-none bg-transparent p-2 flex-1'}
                    />
                    <IconWrap>
                        <BsFillPlayCircleFill className={'nav-icon rotate-90'}/>
                    </IconWrap>
                </div>

                <div className={'w-9 rounded-md'}>
                    <Image src={images.ItalianAlps} alt={'Post'} layout={'responsive'} objectFit={'cover'}
                           className={'rounded-md'}/>
                </div>
            </div>

            <LineDivider/>

            {/* FeedInput buttons */}
            <div className={'flex items-center justify-evenly space-x-1 px-3 py-1 rounded-full'}>

                {input_icons.map(({image, text}, index) => (
                    <IconWrap.li key={index} classNames={'flex items-center px-4 '}>
                        <div className={'w-5'}>
                            <Image src={image} alt={text} layout={'responsive'}/>
                        </div>
                        <p className={'hidden sm:inline xl:text-base'}>{text}</p>
                    </IconWrap.li>
                ))}

            </div>

        </Widget>
    );
};

export default FeedInput;
