
// SUBPAGE
import Hero from './../assets/hero.png';
import Create from './../assets/create.png';
import Collect from './../assets/collect.png';
import Curate from './../assets/curate.png';
import CreateCard from './../assets/create-card-pic.png';
import CollectCard from './../assets/collect-card-pic.png';
import CurateCard from './../assets/curate-card-pic.png';
import T_ICON from './../assets/twitter_icon.svg';
import M_ICON from './../assets/m_icon.svg';
import D_ICON from './../assets/discord_icon.svg';


export const SubPageInfo = [
    {
        id: 0,
        title: 'About (;)',
        description1: "abo",
        description2: "abo",
        source: 'https://google.com',
        bg: Hero,
    },
    {
        id: 1,
        title: 'Create (;)',
        description1: "A visual poem generation tool and deployment feature to allow poets to focus on their art and allow them to continue harnessing their craft.",
        description2: "Converts text to an NFT poetry collection.",
        source: 'https://google.com',
        bg: Create,
    },
    {
        id: 2,
        title: 'Collect (;)',
        description1: "Own a piece of your favourite poet work & give back to the community. Represent yourself by showcasing your collection through your personal pinboard.",
        description2: "NFT poetry marketplace & poetry pinboard.",
        source: 'https://google.com',
        bg: Collect,
    },
    {
        id: 3,
        title: 'Curate (;)',
        description1: "Become a founder and help direct the future of poetry on the blockchain. To become a founder, purchase/mint a Founder's Featherpen.",
        description2: "PoetryDAO Curated & Diary Collections.",
        source: 'https://google.com',
        bg: Curate,
    },
];

export const CardInfo = [
    {
        id: 0,
        title: 'Create (;)',
        description: "Write alongside world-renown poets, create & publish your very own NFT poetry collection and build a following around your work.",
        button_source: [
            {source: '/Create', text: 'Create', is_external: false}
        ],
        photo: CreateCard,
    },
    {
        id: 1,
        title: 'Collect (;)',
        description: "Collect poetry NFTs through our specialized poetry NFT marketplace, as well as represent your profile by displaying chosen pieces on your poetry pinboard.",
        button_source: [
            {source: '/Collect', text: 'Collect' , is_external: false}
        ],
        photo: CollectCard,
    },
    {
        id: 2,
        title: 'Curate (;)',
        description: "Decide the future of poetry on the blockchain and build relationships with publishers, curators and world-renowned poets.",
        button_source: [
            {source: '/Create', text: 'Curate' , is_external: false},
            {source: 'https://canva.com', text: 'Be a Founder', is_external: true}
        ],
        photo: CurateCard,
    }
];

export const NavElements = ['About', 'Create', 'Collect', 'Curate'];

export const Icons = [
    {pathname: "https://twitter.com/PoetryDAO", icon: T_ICON, alt:"Twitter Icon"},
    {pathname: "https://medium.com/@PoetryDAO", icon: M_ICON , alt:"Medium Icon"},
    {pathname: "https://discord.gg/qd4aGZufvq", icon: D_ICON , alt:"Discord Icon"}
];

export const TimeLineData = [
    { year: 2017, text: 'Started my journey', },
    { year: 2018, text: 'Worked as a freelance developer', },
    { year: 2019, text: 'Founded JavaScript Mastery', },
    { year: 2020, text: 'Shared my projects with the world', },
    { year: 2021, text: 'Started my own platform', },
];