import React from 'react';
import Image from "next/image";
import assets from "../../../../assets";

const {images} = assets

const ArticleSnippet = () => {
    return (
        <div className={'flex flex-col space-y-1 text-xs'}>
            <h6 className={'text-gray-500'}>Politics . August 12, 2022</h6>

            <div className={'flex space-x-2'}>
                <p className={'font-semibold text-xs'}>
                    Obama administration records are exclusively held by the National
                    Archives and Records Administration, according to the federal agency
                </p>
                <div className={'w-40'}>
                    <Image
                        src={images.Thenirva}
                        alt={'News'}
                        layout={'responsive'}
                        objectFit={'cover'}
                        className={'rounded-sm'}
                    />
                </div>
            </div>

        </div>
    );
};

export default ArticleSnippet;
