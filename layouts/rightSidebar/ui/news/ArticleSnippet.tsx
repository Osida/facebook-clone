import React from 'react';
import Image from "next/image";
import assets from "../../../../assets";
import {Text} from "../../../../components";
import RSidebar from "../blueprints/RSidebar";

const {images} = assets

const ArticleSnippet = () => {
    return (
        <RSidebar.ArticleSnippetWrap>
            <Text className={'font-black text-gray-400 lg:text-[0.65rem]'}>Politics . August 12, 2022</Text>

            <div className={'flex space-x-2 items-start'}>
                <Text className={'lg:text-xs'}>
                    Obama administration records are exclusively held by the National
                    Archives and Records Administration, according to the federal agency
                </Text>

                <div className={'w-48 h-auto'}>
                    <Image
                        src={images.Thenirva}
                        alt={'News'}
                        layout={'responsive'}
                        objectFit={'cover'}
                        className={'rounded-sm'}
                    />
                </div>
            </div>
        </RSidebar.ArticleSnippetWrap>
    );
};

export default ArticleSnippet;
