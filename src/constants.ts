// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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

export const experience: Array<ExperienceInterface> = [
  {
    id: 1,
    companyName: "Prodo Technologies",
    designation: "Software Development Engineer",
    from: "April 2023",
    logo: "prodo.png",
  },
  {
    id: 2,
    companyName: "Sateeq",
    designation: "Software Development Engineer Intern",
    from: "March 2023",
    logo: "sateeq.png",
  },
  {
    id: 3,
    companyName: "Prodo Technologies",
    designation: "Software Development Engineer Intern",
    from: "December 2022",
    logo: "prodo.png",
  },
  {
    id: 4,
    companyName: "Lokal Entrepreneurs Empowerment Pvt. Ltd.",
    designation: "Software Development Engineer Intern",
    from: "October 2022",
    logo: "lokal.png",
  },
];
export const skills: Array<SkillInterface> = [
  {
    id: 1,
    name: "React JS",
    type: "FRAMEWORK",
    logo: "react.png",
  },
  {
    id: 2,
    name: "Next JS",
    type: "FRAMEWORK",
    logo: "next.png",
  },
  {
    id: 3,
    name: "Redux",
    type: "LIBRARY",
    logo: "redux.png",
  },
  {
    id: 4,
    name: "Vue JS",
    type: "FRAMEWORK",
    logo: "vue.png",
  },
  {
    id: 5,
    name: "Nuxt JS",
    type: "FRAMEWORK",
    logo: "nuxt.png",
  },
  {
    id: 6,
    name: "Pinia",
    type: "LIBRARY",
    logo: "pinia.png",
  },
  {
    id: 7,
    name: "Node JS",
    type: "LANGUAGE",
    logo: "node.png",
  },
  {
    id: 8,
    name: "Express Js",
    type: "FRAMEWORK",
    logo: "express.png",
  },
  {
    id: 9,
    name: "Springboot",
    type: "FRAMEWORK",
    logo: "springboot.png",
  },
  {
    id: 10,
    name: "MongoDB",
    type: "DATABASE",
    logo: "mongoDb.png",
  },
  {
    id: 11,
    name: "C++",
    type: "LANGUAGE",
    logo: "cpp.png",
  },
  {
    id: 12,
    name: "REST APIs",
    type: "CONCEPT",
    logo: "rest.png",
  },
  {
    id: 13,
    name: "Javascript",
    type: "LANGUAGE",
    logo: "js.png",
  },
  {
    id: 14,
    name: "Typescript",
    type: "LANGUAGE",
    logo: "ts.png",
  },
  {
    id: 15,
    name: "JWT Auth",
    type: "CONCEPT",
    logo: "jwt.png",
  },
  {
    id: 16,
    name: "Flutter",
    type: "FRAMEWORK",
    logo: "flutter.png",
  },
];
export const projects: Array<ProjectInterface> = [
  {
    id: 1,
    projectName: "My E-com",
    thumbnail: "myEcomLandingPage.png",
    githubLink: "https://github.com/prtkjha01/my-ecom",
    hostedLink: "",
    techUsed: [
      {
        id: 1,
        name: "Next JS",
        logo: "next.png",
      },
      {
        id: 2,
        name: "Redux",
        logo: "redux.png",
      },
      {
        id: 3,
        name: "Express JS",
        logo: "express.png",
      },
      {
        id: 4,
        name: "Mongo DB",
        logo: "mongoDb.png",
      },
      {
        id: 5,
        name: "Typescript",
        logo: "ts.png",
      },
    ],
  },
  {
    id: 2,
    projectName: "FakeFlix",
    thumbnail: "fakeflixLandingPage.png",
    githubLink: "https://github.com/prtkjha01/movie-app",
    hostedLink: "https://fake-flix.netlify.app/",
    techUsed: [
      {
        id: 1,
        name: "Vue JS",
        logo: "vue.png",
      },
      {
        id: 2,
        name: "Pinia",
        logo: "pinia.png",
      },
      {
        id: 3,
        name: "REST Apis",
        logo: "rest.png",
      },
    ],
  },
  {
    id: 3,
    projectName: "NewsFirst",
    thumbnail: "newsFirstLandingPage.png",
    githubLink: "https://github.com/prtkjha01/newsapp",
    hostedLink:
      "https://www.youtube.com/watch?v=VLtuqkbu1RU&ab_channel=PrateekJha",
    techUsed: [
      {
        id: 1,
        name: "React JS",
        logo: "react.png",
      },
      {
        id: 2,
        name: "REST Apis",
        logo: "rest.png",
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
    icon: "https://thanhtaile.me/wp-content/uploads/2022/11/Leetcode-icon-white-with-transparent-background.png",
  },
];
