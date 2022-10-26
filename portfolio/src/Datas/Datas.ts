import AQI from '../img/wip.png';
import AQIWireframes from '../img/wireframes.png';
import AQIDesign from '../img/inspiration.png';
import RestHome from '../img/restcountry1.png';
import RestSearch from '../img/restcountry2.png';
import RestModal from '../img/restcountry3.png';
import Working from "../img/Working.png";
import Movie1 from '../img/moviebrowser1.png';
import Movie2 from '../img/moviebrowser2.png';
import Movie3 from '../img/moviebrowser3.png';
import { faPhone, faAt, faLocationDot, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export enum DataType {
  EMAIL,
  PHONE,
  LOCATION,
}

export interface InfosDatas {
  Infos: [
    {
      Contact: [
        {
          icon: IconDefinition;
          link: string;
          text: string;
          type: DataType;
        },
        {
          icon: IconDefinition;
          link: string;
          text: string;
          type: DataType;
        }
      ];
      Socials: [
        {
          icon: IconDefinition;
          link: string;
          text: string;
        },
        {
          icon: IconDefinition;
          link: string;
          text: string;
        }
      ];
    }
  ];
}
//['fat-solid fa-at', "fa-solid fa-phone",'fa-solid fa-location-dot', ],
export const personnalInfos: InfosDatas[] = [
  {
    Infos: [
      {
        Contact: [
          {
            icon: faPhone,
            link: '+32475942987',
            text: 'Want to talk ?',
            type: DataType.PHONE,
          },
          {
            icon: faLocationDot,
            link: 'https://goo.gl/maps/WeDwnM9AJ8W3yykF6',
            text: 'I live here !',
            type: DataType.LOCATION,
          },
        ],
        Socials: [
          {
            icon: faLinkedin,
            link: 'https://www.linkedin.com/in/aurélien-freyling/',
            text: 'Want to know my story ?',
          },
          {
            icon: faGithub,
            link: 'https://github.com/Freyaln',
            text: 'And my projects ?',
          },
        ],
      },
    ],
  },
];

interface SkillContent {
  title: string;
  list: string[];
}
export interface SkillDetail {
  Skills: [
    {
      Languages: SkillContent;
      Frameworks: SkillContent;
      Libraries: SkillContent;
    }
  ];
  Methodology: SkillContent;
}
export const skillsDatas: SkillDetail[] = [
  {
    Skills: [
      {
        Languages: {
          title: 'Languages',
          list: ['Javascript es6', ' Typescript 4.x', ' PHP 8', ' SQL', ' CSS', ' SCSS'],
        },
        Frameworks: {
          title: 'Frameworks',
          list: [' Reactjs 16.14 / 18', 'Vuejs 3'],
        },
        Libraries: {
          title: 'Libraries',
          list: ['MaterialUI', ' HeadlessUI', ' TailwindCSS', 'Axios'],
        },
      },
    ],
    Methodology: {
      title: 'Methodologies',
      list: ['Atomic Design, B.E.M'],
    },
  },
];

export interface navbarDatas {
  title: string;
  path: string;
}
export const navbarProps: navbarDatas[] = [
  { title: 'Home', path: 'header' },
  { title: 'About', path: 'about' },
  { title: 'Projects', path: 'projects' },
  { title: 'Contact', path: 'contact' },
];

export interface ImageListDatas {
  id?: number;
  col?: number;
  row?: number;
  img: string[];
  title?: string;
  link?: string;
  langUsed?: string;
  client?: string;
  year?: number;
  collab?: string;
  collabLink?: string;
  finished?: boolean;
  steps?: string[];
  about?: string;
  description?: string[];
}

export const projectsImageList: ImageListDatas[] = [
  {
    id: 1,
    img: [AQI, AQIWireframes, AQIDesign],
    col: 2,
    title: 'AQI',
    langUsed: 'Vuejs (SFC) + SCSS + Mapbox-GL + Aqicn',
    client: 'Myself & Kiril',
    year: 2022,
    collab: 'Kiril Bernard Tucker',
    collabLink: 'https://github.com/Kirilbt',
    finished: false,
    steps: ['Userflow & Wireframes', 'Design'],
    about: 'Kiril and I know each other for a long time... We eventually talked about doing a project together and decided to give it a go. We wanted a project that could be displayed on our own portfolio and that it needed to be functionnal. \n\n'+
           'We brainstormed a lot and did some research to finally chose to build an app that will allow users to see the Air Quality from anywhere in the world in real-time based on an API.\n\n' +
    'And here we are, working on this, it is still a work in progress and I will update the infos and description the same time the app evolve.',
    description: ['We decided to experiment the UX brainstorming part because this is not always (may I dare say never ?) our job  as front-end developers. \n' +
                  'This was a really nice experience, apprehending the user flow, user journey and being able to guide them in our app\n' +
                  '                      ', 'After days passed talking and taking place as a user we decided that we were good and moved on to the designing table. ' +
                                                                         'We began to search inspiration everywhere and then started to build something on our own.'],

  },
  {
    id: 2,
    img: [RestHome, RestSearch, RestModal],
    col: 1,
    title: 'Country list',
    link: 'https://restapicountry.netlify.app/',
    langUsed: 'Reactjs + axios',
    client: 'Me',
    steps: ['The hardest part', 'The discovery' ],
    about: 'We are in February, two or three weeks prior my internship and I feel completely lost. \n' +
            'Lost because I know that my internship will be in React and I don\'t feel confident enough to be calm.. \n\n' +
            'So what did I do ? \n' +
            'I chose to practice and practice and practice, I started by scrapping the grass at React mountain feet and began to actually like it so I climbed that mountain and I searched for a project to make and found this one : \n\n' +
            'A simple country list app that I made using Axios and MaterialUI, this project was my first time doing a Modal, Light & Dark mode and a dynamic search.',
    description: ['The hardest part was definitely the dynamic search, how many hours did I spent thinking and experimenting or searching the internets in order to find a way to do it and what joy did I felt when I finally did it ! ',
      'The discovery was nothing big or anything but a new one to me, implementing dynamic datas inside a modal'],
    year: 2021,
    finished: true,
  },
  {
    id: 3,
    img: [Movie1, Movie2, Movie3],
    col: 3,
    row: 1,
    title: 'MovieBrowser (WIP)',
    link: 'https://freyaln-moviebrowser.netlify.app/',
    langUsed: 'Reactjs + Typescript + HeadlessUI + Axios + TMDb API',
    client: 'Me',
    steps: ['The image grid', 'The modal'],
    about: 'I started this website when I still was in Becode and the goal was to build it in reactjs with tons of MaterialUI components. At the time it felt like a enormous cliff to climb on and with my internship approaching I dropped the project.\n\n' +
      'But in October 2022 I decided to give it a go but harder, by harder I meant that I would build it in Reactjs, yes, but with Typescript and without as much as libs possible. And so I did !\n\n' +
      'It is still a work in progress and will be enhanced (especialy the responsive design).',
    description: ['The most fun part was this one, building an ImageGrid like component in the MaterialUI style but from scratch. I though that I would bang my head in the wall multiple times but all in all, juste once. Juste once to realise that I should go for a grid layout.',
    'This was a bit more tricky, I wanted for some times to test the HeadlessUI lib. I choose their modal to do so and gosh that was not simple to comprehend for a newbie. But hey, I finally did it !'],
    year: 2022,
    finished: false,
  },
  {
    id: 4,
    img: [Working],
    col: 1,
    row: 1,
    title: 'Coming soon',
    langUsed: 'To be announced',
    client: 'Me',
    year: 2022,
  },
  {
    id: 5,
    img: [Working],
    col: 2,
    row: 1,
    title: 'Coming soon',
    langUsed: 'To be announced',
    client: 'Me',
    year: 2022,
  },
];
