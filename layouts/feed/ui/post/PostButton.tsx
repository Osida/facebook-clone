import React from 'react';
import {IconWrap, Text} from "../../../../components";

interface IPostButton {
    handleClick: () => void,
    state: boolean,
    text: string,
    IconSolid: (props: React.ComponentProps<"svg">) => JSX.Element,
    IconOutline: (props: React.ComponentProps<"svg">) => JSX.Element,
}

const PostButton = ({handleClick, state, text, IconSolid, IconOutline}: IPostButton) => {
    return (
        <div onClick={() => handleClick()} className={'flex items-center space-x-2'}>
            <IconWrap.secondary className={'space-x-3'}>
                {
                    state ?
                        <IconSolid className={'h-5 w-5 xl:h-7 xl:w-7'}/>
                        :
                        <IconOutline className={'h-5 w-5 xl:h-7 xl:w-7'}/>
                }
                <Text>{text}</Text>
            </IconWrap.secondary>
        </div>
    );
}


export default PostButton;
