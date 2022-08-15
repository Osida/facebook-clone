import React from 'react';
import {BsThreeDots} from "react-icons/bs";
import {IconWrap} from "../../../../components";

const Hashtag = () => {
    return (
        <>
            <div className={'flex flex-col space-y-1 text-xs'}>

                <div className={'flex items-start justify-between'}>
                    <div className={'flex flex-col space-y-0.5'}>
                        <h6 className={'text-gray-500'}>Trending in Wakanda</h6>
                        <p className={'font-semibold text-xs'}>#shiba</p>
                        <h6 className={'text-gray-500 text-[0.6rem]'}>23.3K Comments 100K Shares</h6>
                    </div>

                    <IconWrap.secondary>
                        <BsThreeDots className={'text-lg text-iconColor'}/>
                    </IconWrap.secondary>
                </div>
            </div>
        </>
    );
};

export default Hashtag;
