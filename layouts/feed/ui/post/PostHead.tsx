import React from 'react';
import {Avatar, IconWrap} from "../../../../components";
import assets from "../../../../assets";
import {BsThreeDots} from "react-icons/bs";

const {images} = assets

const PostHead = () => {
    return (
        <div className={'flex items-baseline justify-between'}>
            <div className={'flex items-center space-x-2'}>
                <Avatar image={images.Rinira} alt={'User'} classNames={'border border-accentColor w-7 lg:w-9 xl:w-11'}/>

                <div className={'flex flex-col space-y-1'}>
                    <p className={'font-medium text-white'}>Rinira</p>
                    <p className={'text-gray-500'}>Karen Blixen Museum in Nairobi</p>
                </div>
            </div>

            <IconWrap.li>
                <BsThreeDots className={'text-xl'}/>
            </IconWrap.li>
        </div>
    );
};

export default PostHead;
