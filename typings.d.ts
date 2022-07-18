import {StaticImageData} from "next/image";

export interface IHeader {
    logo: { img: any, alt: string },
    search: { placeholder: string },
    btn: { text: string }
}

export interface IFeed {
    addStory: { storyImg: StaticImageData, name: string },
    stories: {
        name: { first: string, last: string },
        photo: StaticImageData,
        storyImg: StaticImageData
    }[],
    feedInput: {
        profile: {
            name: { first: string, last: string },
            photo: StaticImageData
        },
        placeholder: string
    },
    posts: {
        profile: {
            name: { first: string, last: string },
            photo: StaticImageData
        },
        post: string,
        location: { city: string, state: string, country: string },
        timeLaspe: string
    }[]
}

export interface ISidebar {
    user: {name: {first: string, last: string}, photo: StaticImageData},
    profiles: {
        one: { isOnline: boolean, name: { first: string, last: string }, photo: StaticImageData },
        two: { isOnline: boolean, name: { first: string, last: string }, photo: StaticImageData },
        three: {isOnline: boolean, name: { first: string, last: string }, photo: StaticImageData},
        four: {isOnline: boolean, name: { first: string, last: string }, photo: StaticImageData}
    },
    text: {
        messenger: string,
        recentlyViewed: string,
        all: string,
    },
    recentlyViewed: StaticImageData[]
}