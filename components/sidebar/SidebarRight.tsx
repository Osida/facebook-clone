import React, {FC} from 'react';
import {ArrowTrendingUpIcon} from '@heroicons/react/24/solid';

const event = {
    src: `https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    alt: `party event`
}

const SidebarRight: FC<any> = (props) => {
    return (
        <aside
            className={`hidden overflow-y-scroll scrollbar-hide flex-col space-y-3 lg:flex lg:basis-1/4 bg-indigo-3000`}>
            {/*Trending*/}
            <section className={`bg-secondary w-full flex flex-col px-2 py-4 mt-16 rounded-md space-y-4 xl:px-4`}>
                <div className={`flex items-center justify-between`}>
                    <p className={`font-semibold text-white xl:text-lg`}>Trending</p>
                </div>

                {[1, 2, 3].map((item, index) => (
                    <div key={index} className={`flex w-full items-start space-x-3 bg-amber-2000`}>
                        <ArrowTrendingUpIcon className={`w-16 text-system-blue`}/>

                        <div className={`flex flex-col space-y-1 items-start`}>
                            <p className={`text-white text-xs font-medium xl:text-sm`}>Genus Bar:</p>
                            <p className={`text-white text-xs font-light xl:text-sm`}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque delectus, ducimus
                                esse harum, illo nesciunt nisi.
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/*Events*/}
            <section className={`bg-secondary w-full flex flex-col py-4 mt-16 rounded-md space-y-4`}>
                <div className={`flex items-center justify-between px-2 lg:px-4`}>
                    <p className={`font-semibold text-white xl:text-lg`}>Events</p>
                </div>

                <div className={`w-full h-full relative`}>
                    <img src={event.src} alt={event.alt} className={`w-full h-36 xl:h-40`}/>
                    <div className={`w-full h-36 bg-black opacity-60 absolute top-0 left-0 right-0 xl:h-40`}/>
                    <div
                        className={`w-full h-full flex flex-col justify-between py-5 px-4 absolute top-0 left-0`}>
                        <p className={`text-sm font-semibold text-white xl:text-base`}>Great Party</p>
                        <p className={`text-xs text-gray-300 xl:text-sm`}>BC Place, Vancouver, Canada</p>
                    </div>
                </div>

                <div className={`px-2 space-y-5 xl:px-4`}>
                    <div className={`flex items-center justify-between mb-3`}>
                        <p className={`font-semibold text-white xl:text-lg`}>Recent Events</p>
                        <p className={`text-sm text-system-blue cursor-pointer xl:text-base`}>All</p>
                    </div>

                    {[1, 2, 3, 4].map((event, index) => (
                        <div key={index} className={`w-full flex items-end space-x-2 bg-lime-3000`}>
                            <img
                                src={`https://media.cnn.com/api/v1/images/stellar/prod/221215080623-02-world-cup-2022-final-preview.jpg?c=16x9&q=h_540,w_960,c_fill`}
                                alt={`World Cup 2022 | Argentina`}
                                className={`w-20 h-auto xl:w-28`}
                            />

                            <div className={`flex flex-col space-y-1 xl: space-y-3`}>
                                <p className={`text-white text-[0.65rem] leading-3 font-medium xl:text-sm`}>Buenos
                                    Aires, Argentina</p>
                                <p className={`text-gray-300 text-[0.65rem] leading-3 font-light xl:text-sm`}>Published
                                    10 days ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </aside>
    );
};

export default SidebarRight;
