// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

//Skill Logo Imports
import react from "@assets/react.png";
import next from "@assets/next.png";
import redux from "@assets/redux.png";
import vue from "@assets/vue.png";
import nuxt from "@assets/nuxt.png";
import pinia from "@assets/pinia.png";
import node from "@assets/node.png";
import express from "@assets/express.png";
import springboot from "@assets/springboot.png";
import mongoDb from "@assets/mongoDb.png";
import cpp from "@assets/cpp.png";
import rest from "@assets/rest.png";
import js from "@assets/js.png";
import ts from "@assets/ts.png";
import jwt from "@assets/jwt.png";
import flutter from "@assets/flutter.png";
import leetcode from "@assets/leetcode.svg";
//Company Logo Imports
import prodo from "@assets/prodo.png";
import sateeq from "@assets/sateeq.png";
import lokal from "@assets/lokal.png";
//Project Thumbnail Imports
import myEcomLandingPage from "@assets/myEcomLandingPage.png";
import fakeflixLandingPage from "@assets/fakeflixLandingPage.png";
import newsFirstLandingPage from "@assets/newsFirstLandingPage.png";
//INTERFACES
interface NavItem {
  id: number;
  name: string;
  to: string;
}
interface ExperienceInterface {
  id: number;
  companyName: string;
  designation: string;
  from: string;
  logo: string;
}
interface SkillInterface {
  id: number;
  name: string;
  type: string;
  logo: string;
}
interface ProjectInterface {
  id: number;
  projectName: string;
  thumbnail: string;
  githubLink: string;
  hostedLink: string;
  techUsed: Array<TechInterface>;
}
interface TechInterface {
  id: number;
  name: string;
  logo: string;
}
interface ContactInterface {
  id: number;
  contactName: string;
  url: string;
  customIcon: boolean;
  icon: // any;
  IconDefinition | string;
}
export const navItems: Array<NavItem> = [
  {
    id: 1,
    name: "About",
    to: "about",
  },
  {
    id: 2,
    name: "Skills",
    to: "skills",
  },
  {
    id: 3,
    name: "Work Experience",
    to: "work-exp",
  },
  {
    id: 4,
    name: "Projects",
    to: "projects",
  },
  {
    id: 5,
    name: "Contact Me",
    to: "contact",
  },
];
export const aboutText_line1: string =
  "With expertise in React JS, Vue JS, Next JS, Express JS, Node JS, Java Spring Boot, and a solid foundation in Data Structures and Algorithms, I enjoy solving problems and turning ideas into code reality.";
export const aboutText_line2: string =
  "If you're seeking a developer who can bring your ideas to life with style and efficiency, let's chat. Together, we can embark on a coding adventure! 🚀👨‍💻";

export const skills: Array<SkillInterface> = [
  {
    id: 1,
    name: "React JS",
    type: "FRAMEWORK",
    logo: react,
  },
  {
    id: 2,
    name: "Next JS",
    type: "FRAMEWORK",
    logo: next,
  },
  {
    id: 3,
    name: "Redux",
    type: "LIBRARY",
    logo: redux,
  },
  {
    id: 4,
    name: "Vue JS",
    type: "FRAMEWORK",
    logo: vue,
  },
  {
    id: 5,
    name: "Nuxt JS",
    type: "FRAMEWORK",
    logo: nuxt,
  },
  {
    id: 6,
    name: "Pinia",
    type: "LIBRARY",
    logo: pinia,
  },
  {
    id: 7,
    name: "Node JS",
    type: "LANGUAGE",
    logo: node,
  },
  {
    id: 8,
    name: "Express Js",
    type: "FRAMEWORK",
    logo: express,
  },
  {
    id: 9,
    name: "Springboot",
    type: "FRAMEWORK",
    logo: springboot,
  },
  {
    id: 10,
    name: "MongoDB",
    type: "DATABASE",
    logo: mongoDb,
  },
  {
    id: 11,
    name: "C++",
    type: "LANGUAGE",
    logo: cpp,
  },
  {
    id: 12,
    name: "REST APIs",
    type: "CONCEPT",
    logo: rest,
  },
  {
    id: 13,
    name: "Javascript",
    type: "LANGUAGE",
    logo: js,
  },
  {
    id: 14,
    name: "Typescript",
    type: "LANGUAGE",
    logo: ts,
  },
  {
    id: 15,
    name: "JWT Auth",
    type: "CONCEPT",
    logo: jwt,
  },
  {
    id: 16,
    name: "Flutter",
    type: "FRAMEWORK",
    logo: flutter,
  },
];
export const experience: Array<ExperienceInterface> = [
  {
    id: 1,
    companyName: "Prodo Technologies",
    designation: "Software Development Engineer",
    from: "April 2023",
    logo: prodo,
  },
  {
    id: 2,
    companyName: "Sateeq",
    designation: "Software Development Engineer Intern",
    from: "March 2023",
    logo: sateeq,
  },
  {
    id: 3,
    companyName: "Prodo Technologies",
    designation: "Software Development Engineer Intern",
    from: "December 2022",
    logo: prodo,
  },
  {
    id: 4,
    companyName: "Lokal Entrepreneurs Empowerment Pvt. Ltd.",
    designation: "Software Development Engineer Intern",
    from: "October 2022",
    logo: lokal,
  },
];
export const projects: Array<ProjectInterface> = [
  {
    id: 1,
    projectName: "My E-com",
    thumbnail: myEcomLandingPage,
    githubLink: "https://github.com/prtkjha01/my-ecom",
    hostedLink: "",
    techUsed: [
      {
        id: 1,
        name: "Next JS",
        logo: next,
      },
      {
        id: 2,
        name: "Redux",
        logo: redux,
      },
      {
        id: 3,
        name: "Express JS",
        logo: express,
      },
      {
        id: 4,
        name: "Mongo DB",
        logo: mongoDb,
      },
      {
        id: 5,
        name: "Typescript",
        logo: ts,
      },
    ],
  },
  {
    id: 2,
    projectName: "FakeFlix",
    thumbnail: fakeflixLandingPage,
    githubLink: "https://github.com/prtkjha01/movie-app",
    hostedLink: "https://fake-flix.netlify.app/",
    techUsed: [
      {
        id: 1,
        name: "Vue JS",
        logo: vue,
      },
      {
        id: 2,
        name: "Pinia",
        logo: pinia,
      },
      {
        id: 3,
        name: "REST Apis",
        logo: rest,
      },
    ],
  },
  {
    id: 3,
    projectName: "NewsFirst",
    thumbnail: newsFirstLandingPage,
    githubLink: "https://github.com/prtkjha01/newsapp",
    hostedLink:
      "https://www.youtube.com/watch?v=VLtuqkbu1RU&ab_channel=PrateekJha",
    techUsed: [
      {
        id: 1,
        name: "React JS",
        logo: react,
      },
      {
        id: 2,
        name: "REST Apis",
        logo: rest,
      },
    ],
  },
];
export const contacts: Array<ContactInterface> = [
  {
    id: 1,
    contactName: "Linked In",
    url: "https://www.linkedin.com/in/prateekjha01",
    customIcon: false,
    icon: faLinkedin,
  },
  {
    id: 2,
    contactName: "Github",
    url: "https://github.com/prtkjha01",
    customIcon: false,
    icon: faGithub,
  },
  {
    id: 3,
    contactName: "Email",
    url: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=prtkjha01@gmail.com",
    customIcon: false,
    icon: faEnvelope,
  },
  {
    id: 4,
    contactName: "Leetcode",
    url: "https://leetcode.com/Prateek01/",
    customIcon: true,
    //icon: "https://thanhtaile.me/wp-content/uploads/2022/11/Leetcode-icon-white-with-transparent-background.png",
    icon: leetcode,
  },
];
