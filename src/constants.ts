interface NavItem {
  id: number;
  name: string;
  to: string;
}
export const navItems: Array<NavItem> = [
  {
    id: 1,
    name: "About",
    to: "about",
  },
  {
    id: 2,
    name: "Work Experience",
    to: "work-exp",
  },
  {
    id: 3,
    name: "Projects",
    to: "projects",
  },
  {
    id: 4,
    name: "Contact Me",
    to: "contacts",
  },
];
export const aboutText_line1: string =
  "With expertise in React JS, Vue JS, Next JS, Express JS, Node JS, Java Spring Boot, and a solid foundation in Data Structures and Algorithms, I enjoy solving problems and turning ideas into code reality.";
export const aboutText_line2: string =
  "Mongo DB is my playground when it comes to databases, and I'm always up for coding challenges and tech discussions. Check out my portfolio to see some of my projects. If you're seeking a developer who can bring your ideas to life with style and efficiency, let's chat. Together, we can embark on a coding adventure! 🚀👨‍💻";
