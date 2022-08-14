import React from 'react';
import PostButtonLogic from "../../hooks/PostButtonLogic";
import {
    ChatAltIcon as ChatAltIconSolid,
    ShareIcon as ShareIconSolid,
    ThumbUpIcon as ThumbUpIconSolid
} from "@heroicons/react/solid"
import {
    ChatAltIcon as ChatAltIconOutline,
    ShareIcon as ShareIconOutline,
    ThumbUpIcon as ThumbUpIconOutline
} from "@heroicons/react/outline"
import PostButton from "./PostButton";


const PostButtons = () => {
    const {isLiked, isCommented, isShared, handleIsLiked, handleIsCommented, handleIsShared} = PostButtonLogic();

    return (
        <div className={'flex items-center justify-evenly text-sm font-semibold'}>
            <PostButton
                handleClick={handleIsLiked}
                state={isLiked}
                text={'Like'}
                IconSolid={ThumbUpIconSolid}
                IconOutline={ThumbUpIconOutline}
            />
            <PostButton
                handleClick={handleIsCommented}
                state={isCommented}
                text={'Comment'}
                IconSolid={ChatAltIconSolid}
                IconOutline={ChatAltIconOutline}
            />
            <PostButton
                handleClick={handleIsShared}
                state={isShared}
                text={'Share'}
                IconSolid={ShareIconSolid}
                IconOutline={ShareIconOutline}
            />
        </div>
    );
};


export default PostButtons;
