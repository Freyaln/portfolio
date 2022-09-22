import AQI from '../img/wip.png';
import AQIWireframes from '../img/wireframes.png';
import AQIDesign from '../img/inspiration.png';
import RestHome from '../img/restcountry1.png';
import RestSearch from '../img/restcountry2.png';
import RestModal from '../img/restcountry3.png';
import ProjectImage2 from '../img/proj2.png';
import ProjectImage3 from '../img/proj3.png';
import ProjectImage4 from '../img/proj5.png';
import ProjectImage5 from '../img/proj4.png';
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
          list: ['Vuejs 3', ' Reactjs 16.14 / 18', ' Symphony'],
        },
        Libraries: {
          title: 'Libraries',
          list: ['MaterialUI', ' HeadlessUI', ' TailwindCSS'],
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

export const projectsImageList = [
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
    img: [ProjectImage4],
    col: 3,
    title: 'Project 3',
    detail: 'link',
    langUsed: 'Vuejs + SCSS',
    client: 'Me',
    year: 2022,
  },
  {
    id: 4,
    img: [ProjectImage3],
    col: 1,
    row: 2,
    title: 'Project 4',
    detail: 'link',
    client: 'Me',
    year: 2022,
  },
  {
    id: 5,
    img: [ProjectImage5],
    col: 2,
    row: 2,
    title: 'Project 5',
    detail: 'link',
    client: 'Me',
    year: 2022,
  },
];
