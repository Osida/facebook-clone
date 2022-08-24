import React from 'react';
import {Avatar, IconWrap, Text, Widget} from "../../../../components";
import Post from "../blueprints/Post";
import {BsThreeDots} from "react-icons/bs";
import assets from "../../../../assets";
import Image from "next/image";
import PostButton from "./PostButton";
import {
    ChatAltIcon as ChatAltIconSolid,
    ShareIcon as ShareIconSolid,
    ThumbUpIcon as ThumbUpIconSolid
} from "@heroicons/react/solid";
import {
    ChatAltIcon as ChatAltIconOutline,
    ShareIcon as ShareIconOutline,
    ThumbUpIcon as ThumbUpIconOutline
} from "@heroicons/react/outline";
import UsePostButtons from "../../hooks/usePostButtons";

const {images} = assets

const PostLayout = () => {
    const {isLiked, isCommented, isShared, onLike, onComment, onShare} = UsePostButtons();

    return (
        <Widget className={'px-0 text-xs lg:text-sm 2xl:text-base'}>
            {/* Post head wrapper */}
            <Post.HeadWrap className={'w-full px-4'}>
                {/* Post head */}
                <Post.Head className={'flex items-baseline justify-between'}>
                    <div className={'flex items-center space-x-4'}>
                        <Avatar image={images.Rinira} alt={'User'} className={'border border-accentColor w-9'}/>

                        <div className={'flex flex-col space-y-1'}>
                            <Text.Bold>Rinira</Text.Bold>
                            <Text.Light className={'text-gray-400'}>Karen Blixen Museum in Nairobi</Text.Light>
                        </div>
                    </div>

                    <IconWrap.secondary className={'space-x-3'}>
                        <BsThreeDots className={'text-2xl lg:text-3xl text-gray-600'}/>
                    </IconWrap.secondary>
                </Post.Head>

                {/* Post text */}
                <Text className={'text-gray-300 mt-2 pl-[3.2rem]'}>Unusual weekends! 😊</Text>
            </Post.HeadWrap>

            {/* Post image */}
            <div className={'w-full h-auto'}>
                <Image src={images.ItalianAlps} alt={'PostLayout image'} layout={'responsive'} objectFit={'cover'}/>
            </div>

            {/*<PostButtons/>*/}
            <Post.ButtonsContainer>
                <PostButton
                    handleClick={onLike}
                    state={isLiked}
                    text={'Like'}
                    IconSolid={ThumbUpIconSolid}
                    IconOutline={ThumbUpIconOutline}
                />
                <PostButton
                    handleClick={onComment}
                    state={isCommented}
                    text={'Comment'}
                    IconSolid={ChatAltIconSolid}
                    IconOutline={ChatAltIconOutline}
                />
                <PostButton
                    handleClick={onShare}
                    state={isShared}
                    text={'Share'}
                    IconSolid={ShareIconSolid}
                    IconOutline={ShareIconOutline}
                />
            </Post.ButtonsContainer>
        </Widget>
    );
};

export default PostLayout;
