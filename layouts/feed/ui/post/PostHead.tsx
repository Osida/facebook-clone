import React from 'react';
import {Avatar, IconWrap} from "../../../../components";
import assets from "../../../../assets";
import {BsThreeDots} from "react-icons/bs";

const {images} = assets

const PostHead = () => {
    return (
        <div className={'flex items-baseline justify-between'}>
            <div className={'flex items-center space-x-2'}>
                <Avatar image={images.Rinira} alt={'User'} className={'border border-accentColor'}/>

                <div className={'flex flex-col space-y-1'}>
                    <p className={''}>Rinira</p>
                    <p className={''}>Karen Blixen Museum in Nairobi</p>
                </div>
            </div>

            <IconWrap.secondary classNames={'space-x-3'}>
                <BsThreeDots className={'text-xl'}/>
            </IconWrap.secondary>
        </div>
    );
};

export default PostHead;
