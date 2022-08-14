import React from 'react';
import {Avatar, IconWrap, Widget} from "../../../../components";
import assets from "../../../../assets";
import {GoPrimitiveDot} from "react-icons/go";

const {images} = assets

const FriendsOnline = () => {
    return (
        <Widget>
            <div className={'flex items-center justify-between text-xs font-medium mb-2 lg:text-sm'}>
                <h3 className={'font-medium'}>Messenger</h3>
                <p className={'cursor-pointer text-accentColor'}>All</p>
            </div>

            {Array.from(Array(4).keys()).map((value, index, array) => (
                <IconWrap.li key={index} classNames={'flex items-center justify-between text-xs lg:text-sm'}>
                    {/*<div className={''}>*/}
                        <div className={'flex items-center space-x-2'}>
                            <Avatar image={images.Lillie} alt={'User'}
                                    classNames={'w-7 lg:w-9 xl:w-11 border border-accentColor'}/>
                            <p>User Name</p>
                        </div>

                        <GoPrimitiveDot className={'text-inputColor'}/>
                    {/*</div>*/}
                </IconWrap.li>
            ))}
        </Widget>
    );
};

export default FriendsOnline;
