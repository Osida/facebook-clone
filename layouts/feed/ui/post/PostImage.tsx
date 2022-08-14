import React from 'react';
import assets from "../../../../assets";
import Image from "next/image";

const {images} = assets

const PostImage = () => {
    return (
        <div className={'w-full h-auto'}>
            <Image src={images.ItalianAlps} alt={'Post image'} layout={'responsive'} objectFit={'cover'}/>
        </div>
    );
};

export default PostImage;
