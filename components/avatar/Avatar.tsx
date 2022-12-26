import React, {FC} from 'react';
import {avatarInterface} from "./AvatarInterface";

const Avatar: FC<avatarInterface> = (props) => {
    return (
        <div className="avatar">
            <div
                className={`${props.width || 'w-11'} rounded-full ${props.ringColor ? `ring ${props.ringColor}` : ''} ring-offset-base-100 ring-offset-2 ${props.classes}`}>
                <img src={props.src} alt={props.alt || 'avatar'}/>
            </div>
        </div>
    );
}

export default Avatar;