import React from 'react';
import {icons, images} from "../../constants";
import {IFeed} from "../../typings";
import Image from 'next/image'

const {
    BsFillPlusCircleFill, BsThreeDots, FiSmile, MdPhotoLibrary, MdVideoCameraBack, BsFillPlayCircleFill, BiLike,
    GoComment, BiShareAlt,
} = icons

const inputBtns = [
    {text: 'Live video', Icon: MdVideoCameraBack, color: 'text-red-400'},
    {text: 'Photo/video', Icon: MdPhotoLibrary, color: 'text-green-400'},
    {text: 'Feeling/activity', Icon: FiSmile, color: 'text-yellow-400'}
]

function Feed({addStory, feedInput, posts, stories}: IFeed) {
    return (
        <div className={'flex flex-col items-center space-y-5 px-1 h-full scroll-y-hide'}>
            <Stories addStory={addStory} stories={stories}/>
            <FeedInput feed={feedInput}/>
            <Post posts={posts}/>
        </div>
    );
}

const Stories = ({addStory, stories}: { addStory: IFeed['addStory'], stories: IFeed['stories'] }) => (
    <>
        <div className={'flex-items-center justify-center space-x-2 w-full relative left-0 right-0'}>
            {/*Add Story*/}
            <div className={'story-container'}>
                <Image
                    src={addStory.storyImg}
                    alt={'Add Story'}
                    layout={'fill'}
                    objectFit={'cover'}
                    className={'story-bgImg'}/>
                <div
                    className={'absolute w-full h-full rounded-md px-2 py-4 flex flex-col justify-end items-center space-y-2'}>
                    <BsFillPlusCircleFill
                        className={'w-6 h-6 rounded-full border-2 border-accent text-white p-0.5 lg:w-9 lg:h-9'}/>
                    <p className={'story-pText'}>{'Add Story'}</p>
                </div>
            </div>

            {/*Stories*/}
            {stories.map((story, index) => (
                <>
                    <div key={index} className={'story-container'}>
                        <Image
                            src={story.storyImg}
                            alt={`story-${index}`}
                            layout={'fill'}
                            objectFit={'cover'}
                            className={'story-bgImg'}
                        />
                        <div
                            className={'absolute w-full h-full rounded-md px-2 py-4 flex flex-col justify-between'}>

                            <div className="avatar">
                                <div className="w-5 rounded-full border-2 border-accent sm:w-7 md:w-7 lg:w-9">
                                    <Image
                                        src={story.photo}
                                        alt={`${story.name.first}${story.name.last}`}
                                        objectFit={'cover'}
                                        layout={'responsive'}
                                    />
                                </div>
                            </div>

                            <p className={'story-pText'}>{`${story.name.first} ${story.name.last}`}</p>
                        </div>
                    </div>
                </>
            ))}
        </div>
    </>
)

const FeedInput = ({feed}: { feed: IFeed['feedInput'] }) => (
    <>
        <div className={'my-container space-y-3'}>
            <div className={'flex-items-center space-x-3'}>
                {/* Avatar pic */}
                <div className={'avatar cursor-pointer'}>
                    <div className="w-7 rounded-full lg:w-9 xl:w-11">
                        <Image src={feed.profile.photo} alt={feed.profile.name.last} layout={'responsive'}/>
                    </div>
                </div>
                {/*Input*/}
                <div
                    className={'flex-items-center bg-gray-600 rounded-full px-4 flex-1 basic-transition hover:bg-input'}>
                    <input
                        type="text"
                        placeholder={`${feed.profile.name.first}, ${feed.placeholder}?`}
                        className={'outline-none border-none bg-transparent p-2 flex-1'}
                    />
                    <BsFillPlayCircleFill className={'icon rotate-90'}/>
                </div>
                {/*Upload*/}
                <div className={'hidden cursor-pointer relative rounded-md w-10 h-10 sm:inline lg:w-16 xl:h-14 xl:w-20'}>
                    <Image
                        src={images.recent1}
                        alt={'Upload'}
                        layout={'fill'}
                        objectFit={'cover'}
                        className={'rounded-md'}/>
                </div>
            </div>

            {/* Divider */}
            <div className={'w-full h-0.5 bg-input'}/>
            {/*Buttons*/}
            <div className={'flex-items-center justify-evenly flex-1 '}>
                {inputBtns.map((item, index) => (
                    <span className={'cursor-pointer flex-items-center space-x-1.5 px-3 py-1 rounded-full hover:bg-gray-700'}>
                        <item.Icon className={`input-icon ${item.color}`}/>
                        <p className={'hidden sm:inline sm:text-sm lg:text-base'}>{item.text}</p>
                    </span>
                ))}
            </div>
        </div>
    </>
)

const Post = ({posts}: { posts: IFeed['posts'] }) => (
    <>
        {posts.map((post, index) => (
            <div key={index} className={'my-container px-0 space-y-3'}>
                <div className={'px-4 space-y-4'}>
                    {/* Poster Info / icon */}
                    <div className={'flex-items-center '}>
                        {/* Avatar */}
                        <div className={'avatar cursor-pointer'}>
                            <div className="w-7 rounded-full border-2 border-accent lg:w-9 xl:w-11">
                                <Image src={post.profile.photo} alt={'Post avatar'} layout={'responsive'}/>
                            </div>
                        </div>

                        {/* Profile name / Post location */}
                        <div className={'flex flex-col ml-2'}>
                            <p className={'text-sm font-bold md:text-base'}>{`${post.profile.name.first} ${post.profile.name.last}`}</p>
                            <p className={'text-xs font-light text-gray-400'}>{`${post.location.city} ${post.location.state} ${post.location.country}, `}
                                <span>{post.timeLaspe}</span>
                            </p>
                        </div>

                        {/* Icon */}
                        <BsThreeDots className={'cursor-pointer text-gray-400 text-2xl mr-0 ml-auto'}/>
                    </div>

                    {/* Post text */}
                    <p className={''}>{post.post}</p>
                </div>
                {/* Post picture */}
                <div className={'w-full h-auto '}>
                    <Image src={images.post} alt={'Taj Mahal'} layout={'responsive'} objectFit={'cover'}/>
                </div>

                {/* Buttons */}
                <div className={'flex-items-center flex-1 justify-evenly '}>
                    <span className={'post-comments'}>
                        <BiLike className={'post-icon'}/>
                        <p className={'post-text'}>Like</p>
                    </span>
                    <span className={'post-comments'}>
                        <GoComment className={'post-icon'} />
                        <p className={'post-text'}>Comment</p>
                    </span>
                    <span className={'post-comments'}>
                        <BiShareAlt className={'post-icon'} />
                        <p className={'post-text'}>Share</p>
                    </span>
                </div>
            </div>
        ))}
    </>
)

export default Feed;
