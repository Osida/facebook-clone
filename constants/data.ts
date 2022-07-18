import images from "./images";

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
    user: people.anastasiaPetrenko,
    profiles: {
        one: {...people.devonLane, isOnline: true},
        two: {...people.annPena, isOnline: true},
        three: {...people.kristinWatson, isOnline: false},
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
    text: {
        events: titles.events,
        all: titles.all,
        recentEvents: titles.recentEvents,
        overlay1: '素晴らしいパーティー',
        overlay2: '針が行くところに、糸が続きます',
    },
    backgroundImg: images.eventParty,
    recentEvents: [
        {title: 'Save the Museum', date: '10 des 2020', photo: images.event1},
        {title: 'Friends meeting', date: '12 des 2020', photo: images.event2},
        {title: 'Tea ceremony', date: '18 des 2020', photo: images.event3},
        {title: 'Breakfast by the sea', date: '28 des 2020', photo: images.event4},
    ],
}

export default {
    header,
    sidebar,
    feed,
    events,
}