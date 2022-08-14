import React, {useRef, useState} from 'react';
import assets from "../../../assets";
import {Avatar, IconWrap, LineDivider, Widget} from "../../../components";
import {BsFillPlayCircleFill} from "react-icons/bs";
import Image from "next/image";

import data from '@emoji-mart/data'
// @ts-ignore
import Picker from '@emoji-mart/react'
import {EmojiMarket} from "../../../typings";

const {images} = assets

const FeedInput = () => {
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const [input, setInput] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState(null);

    const inputFileRef = useRef<HTMLInputElement>(null);

    const handleInputEmoji = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleEmojiAdd = (emoji: EmojiMarket) => {
        // console.log(`emoji {}`, emoji)
        setInput(prevState => `${prevState}${emoji?.native}`)
    }

    const handleFilePicker = () => {
        inputFileRef.current?.click()
    }

    const addImageToPost = () => {
    }

    return (
        <Widget>
            {/* FeedInput */}
            <div className={'flex items-center space-x-2'}>
                <Avatar image={images.Rinira} alt={'User'} classNames={'w-7 lg:w-9 xl:w-11'}/>

                <div
                    className={'flex items-center bg-inputColor rounded-full pl-4 py-0.5 flex-1 transition-all ease-in-out duration-200 hover:bg-inputColor/50'}>
                    <input
                        type="text"
                        value={input}
                        // onChange={(e) => setInput(e.target.value)}
                        onChange={handleInputEmoji}
                        placeholder={`User, what's the latest?`}
                        className={'outline-none border-none bg-transparent p-2 flex-1'}
                    />
                    <IconWrap>
                        <BsFillPlayCircleFill className={'nav-icon rotate-90'}/>
                    </IconWrap>
                </div>

                <div className={'w-11 rounded-md'}>
                    <Image src={images.ItalianAlps} alt={'Post'} layout={'responsive'} objectFit={'cover'}
                           className={'rounded-md'}/>
                </div>
            </div>

            <LineDivider/>

            {/* FeedInput buttons */}
            <div className={'flex items-center justify-evenly space-x-1 px-3 py-1 rounded-full'}>
                <IconWrap.li classNames={'flex items-center px-4 '}>
                    <div className={'w-5'}>
                        <Image src={images.camera} alt={'Live video'} layout={'responsive'}/>
                    </div>
                    <p className={'hidden sm:inline xl:text-base'}>{'Live video'}</p>
                </IconWrap.li>

                <div onClick={handleFilePicker}>
                    <IconWrap.li classNames={'flex items-center px-4 '}>
                        <div className={'w-5'}>
                            <Image src={images.cards} alt={'Photo/video'} layout={'responsive'}/>
                        </div>
                        <p className={'hidden sm:inline xl:text-base'}>{'Photo/video'}</p>
                    </IconWrap.li>
                    <input type="file" hidden ref={inputFileRef} onChange={addImageToPost}/>
                </div>

                <div className={'relative'}>
                    <div onClick={() => setShowPicker(prevState => !prevState)}>
                        <IconWrap.li classNames={'flex items-center px-4 '}>
                            <div className={'w-5'}>
                                <Image src={images.smile} alt={'Feeling/activity'} layout={'responsive'}/>
                            </div>
                            <p className={'hidden sm:inline xl:text-base'}>{'Feeling/activity'}</p>
                        </IconWrap.li>
                    </div>

                    {showPicker && (
                        <div className={'z-50 absolute top-10 -right-12 bg-violet-100/0'}>
                            <Picker
                                data={data}
                                onEmojiSelect={handleEmojiAdd}
                                emojiSize={18}
                                perLine={7}
                                set={'Facebook'}
                            />
                        </div>
                    )}
                </div>
            </div>

        </Widget>
    );
};

export default FeedInput;
