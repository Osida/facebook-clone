import React from 'react';
import {IconWrap, Text} from "../../../../components";
import Image from "next/image";
import assets from "../../../../assets";

import data from '@emoji-mart/data'
// @ts-ignore
import Picker from '@emoji-mart/react'
import {EmojiMarket} from "../../../../typings";
import Feed from "../blueprints/Feed";

interface IProps {
    onSelectFile: () => void,
    onEmojiInput: (emoji: EmojiMarket) => void,
    fileRef: React.RefObject<HTMLInputElement>,
    addImageToPost: (event: any) => void,
    isPickerShown: boolean,
    onIsPickerShown: () => void

}

const {images} = assets

const BottomInput = ({onSelectFile, onEmojiInput, fileRef, addImageToPost, isPickerShown, onIsPickerShown}: IProps) => {

    return (
        <Feed.BottomInputContainer className={'text-xs xl:text-base'}>
            <IconWrap.secondary className={'flex items-center px-4 space-x-3'}>
                <div className={'w-5'}>
                    <Image src={images.camera} alt={'Live video'} layout={'responsive'}/>
                </div>

                <Text className={'hidden lg:text-xs sm:inline'}>Live video</Text>
            </IconWrap.secondary>

            <div onClick={onSelectFile}>
                <IconWrap.secondary className={'flex items-center px-4 space-x-3'}>
                    <div className={'w-5'}>
                        <Image src={images.cards} alt={'Photo/video'} layout={'responsive'}/>
                    </div>

                    <Text className={'hidden lg:text-xs sm:inline'}>Photo/video</Text>
                </IconWrap.secondary>

                <input type="file" hidden ref={fileRef} onChange={addImageToPost}/>
            </div>

            <div className={'relative'}>
                <div onClick={onIsPickerShown}>
                    <IconWrap.secondary className={'flex items-center px-4 space-x-3'}>
                        <div className={'w-5'}>
                            <Image src={images.smile} alt={'Feeling/activity'} layout={'responsive'}/>
                        </div>

                        <Text className={'hidden lg:text-xs sm:inline'}>Feeling/activity</Text>
                    </IconWrap.secondary>
                </div>

                {isPickerShown && (
                    <div className={'z-50 absolute top-10 -right-12 bg-violet-100/0'}>
                        <Picker
                            data={data}
                            onEmojiSelect={onEmojiInput}
                            emojiSize={18}
                            perLine={7}
                            set={'Facebook'}
                        />
                    </div>
                )}
            </div>
        </Feed.BottomInputContainer>
    );
};

export default BottomInput;
