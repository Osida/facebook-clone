import React from 'react';
import {IEvents} from "../../../typings";
import {BsThreeDots} from "react-icons/bs";
import Image from "next/image";

const Events = ({text, backgroundImg, recentEvents}: IEvents) => {
    return (
        <div className={'flex-items-center flex-col space-y-5 px-1 h-full scroll-y-hide'}>
            {/*Events Widget*/}
            <div className={'my-container px-0'}>
                {/*Title*/}
                <span className={'flex-items-center justify-between flex-1 mb-4 px-4'}>
                    <h1 className={'sm:text-xs font-semibold md:text-sm'}>{text.events}</h1>
                    <BsThreeDots className={'text-gray-700 text-2xl'}/>
                </span>

                <div className={'flex flex-col w-full h-36 relative'}>
                    {/*Image*/}
                    <div className={'w-full h-full'}>
                        <Image src={backgroundImg} alt={'Great party'} layout={"fill"} objectFit={'cover'} placeholder={'blur'}/>
                    </div>
                    {/*Overlay*/}
                    <div className={'w-full h-full absolute bg-black/30 px-4 py-2 flex flex-col justify-between'}>
                        <p className={'text-sm font-semibold'}>{text.overlay1}</p>
                        <p className={'text-xs text-gray-300 '}>{text.overlay2}</p>
                    </div>
                </div>

                {/* Recent events */}
                <span className={'flex-items-center justify-between flex-1 mt-6 mb-4  px-4'}>
                    <h1 className={'sm:text-xs font-semibold md:text-sm'}>{text.recentEvents}</h1>
                    <p className={'sm:text-xs font-extralight md:text-sm text-accent'}>{text.all}</p>
                </span>

                {recentEvents.map((recent, index) => (
                    <div key={index} className={'flex-items-center px-4 space-x-1 xl:space-x-3'}>
                        <div className={'relative w-16 h-16 xl:w-20 xl:h-20'}>
                            <Image src={recent.photo} alt={recent.title} layout={'fill'} objectFit={'contain'} placeholder={'blur'}
                                   className={'rounded-lg'}/>
                        </div>
                        <div className={'flex flex-col flex-1 space-y-0.5 items-start'}>
                            {/*place*/}
                            <p className={'text-[11px] font-semibold xl:text-sm'}>{recent.title}</p>
                            {/*date*/}
                            <p className={'text-[9px] text-gray-400 xl:text-xs'}>{recent.date}</p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Events;
