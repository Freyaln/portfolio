import ProjectImage1 from '../img/proj1.png';
import ProjectImage2 from '../img/proj2.png';
import ProjectImage3 from '../img/proj3.png';
import ProjectImage4 from '../img/proj5.png';
import ProjectImage5 from '../img/proj4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            icon: faAt,
            link: 'freyling.aurelien@gmail.com',
            text: 'Want to be (T)extual ?',
            type: DataType.EMAIL,
          },
          {
            icon: faPhone,
            link: '+32475942987',
            text: 'Or just talk ?',
            type: DataType.PHONE,
          },
          {
            icon: faLocationDot,
            link: 'https://goo.gl/maps/WeDwnM9AJ8W3yykF6',
            text: 'I live there !',
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

export const aboutMeText =
  'Hello ! I am Aurélien (still) young junior developer eager to learn more. \n' +
  ' At this moment you are visiting my' +
  ' portfolio writing exclusively in Reactjs with Typescript' +
  '\n' +
  '\n' +
  'I am where I am today thanks to @Becode.org and @Eonix SA. \n' +
  'Becode is a bootcamp-like in development where I learned the basics of Javascript, PHP, CSS and Reactjs ' +
  ' and is the place that taught me to love the code and gave me the will to exercice, experiment and go further.' +
  '\n' +
  '\n' +
  "The internship I made at Eonix is where I learn Typescript, the hard way. Since then I can't code without it.";

export const projectsImageList = [
  {
    id: 1,
    img: ProjectImage1,
    col: 2,
    title: 'Project 1',
    langUsed: 'Javascript + SCSS',
  },
  {
    id: 2,
    img: ProjectImage2,
    title: 'Project 2',
    detail: 'link',
    langUsed: 'Reactjs + Typescript + TailwindCss',
  },
  {
    id: 3,
    img: ProjectImage4,
    col: 3,
    title: 'Project 3',
    detail: 'link',
    langUsed: 'Vuejs + SCSS',
  },
  {
    id: 4,
    img: ProjectImage3,
    row: 2,
    title: 'Project 4',
    detail: 'link',
  },
  {
    id: 5,
    img: ProjectImage5,
    col: 2,
    row: 2,
    title: 'Project 5',
    detail: 'link',
  },
];
