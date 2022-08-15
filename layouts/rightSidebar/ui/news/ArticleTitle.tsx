import React from 'react';
import {BsThreeDots} from "react-icons/bs";
import {IconWrap} from "../../../../components";

const ArticleTitle = () => {
    return (
        <>
            <div className={'flex flex-col space-y-1 text-xs'}>

                <div className={'flex items-start justify-between'}>
                    <div className={'flex flex-col space-y-0.5'}>
                        <h6 className={'text-gray-500'}>Gaming . Trending</h6>
                        <p className={'font-semibold text-xs'}>Worst Game</p>
                        <h6 className={'text-gray-500 text-[0.6rem]'}>2.5K Comments 17K Shares</h6>
                    </div>

                    <IconWrap.secondary>
                        <BsThreeDots className={'text-lg text-iconColor'}/>
                    </IconWrap.secondary>
                </div>
            </div>
        </>
    );
};

export default ArticleTitle;
