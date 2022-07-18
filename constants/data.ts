import images from "./images";
import {icons} from "./index";
import {BsFillPlusCircleFill} from "react-icons/bs";

const people = {
    anastasiaPetrenko: {
        name: {first: 'Anastasia', last: 'Petrenko'},
        photo: images.profile
    },
    devonLane: {
        name: {first: 'Devon', last: 'Lane'},
        photo: images.profile1
    },
    annPena: {
        name: {first: 'Ann', last: 'Pena'},
        photo: images.profile2
    },
    kristinWatson: {
        name: {first: 'Kristin', last: 'Watson'},
        photo: images.profile3
    },
    wadeWarren: {
        name: {first: 'Wade', last: 'Warren'},
        photo: images.profile4
    },
}

const titles = {
    messenger: 'Messenger',
    recentlyViewed: 'Recently Viewed',
    events: 'Events',
    recentEvents: 'Recent Events',
    all: 'All',
}

const header = {
    logo: {
        img: images.facebook,
        alt: 'Facebook'
    },
    search: {
        placeholder: 'Search'
    },
    btn: {
        text: 'Create'
    }
}

const sidebar = {
    profiles: {
        one: {...people.devonLane, isOnline: true},
        two: {...people.annPena, isOnline: true},
        three: {...people.kristinWatson, sOnline: false},
        four: {...people.wadeWarren, isOnline: false},
    }, text: {
        messenger: titles.messenger,
        recentlyViewed: titles.recentlyViewed,
        all: titles.all,
    }, recentlyViewed: [
        images.recent1,
        images.recent2,
        images.recent3,
        images.recent4,
        images.recent5,
        images.recent6,
    ],
}

const feed = {
    addStory: {storyImg: images.addStory, name: 'Add Story'},
    stories: [
        {storyImg: images.story1, ...people.devonLane},
        {storyImg: images.story2, ...people.annPena},
        {storyImg: images.story3, ...people.kristinWatson},
        {storyImg: images.story4, ...people.wadeWarren},
    ],
    feedInput: {
        profile: {...people.anastasiaPetrenko},
        placeholder: "what's the latest",
    },
    posts: [
        {
            profile: {...people.wadeWarren},
            post: 'Unusual weekends! 😊',
            location: {
                city: 'Agra',
                state: 'Uttar Pradesh',
                country: 'India'
            },
            timeLaspe: '5 min ago',
        },
    ],
}

const events = {
    text: '',
    recentEvents: [
        {},
    ],
}

export default {
    header,
    sidebar,
    feed,
    events,
}