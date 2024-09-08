import { frontend, backend, cpp, python, enprac, attendance, climateAPI } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "github",
    title: "",
  },
];

export const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "C++ Developer",
    icon: cpp,
  },
  {
    title: "Python Developer",
    icon: python,
  },
];

export const projects = [
  {
    name: "EnPrac Web Application",
    description:
      "This project was designed using Python and Django. It was an English Practice web application that had questions related to different topics of English grammar. It also had an English dictionary attached to it.",
    tags: [
      {
        name: "python",
        color: "blue",
      },
      {
        name: "django",
        color: "green",
      },
      {
        name: "bootstrap",
        color: "violet",
      },
    ],
    image: enprac,
    source_code_link: "https://github.com/Aakash265/EnPrac-Web-App",
  },
  {
    name: "Attendance Management System",
    description:
      "This is used to store the attendance of the students. The user, as a faculty, could login to his/her account to mark the attendance.",
    tags: [
      {
        name: "php",
        color: "yellow",
      },
      {
        name: "mysql",
        color: "green",
      },
      {
        name: "bootstrap",
        color: "violet",
      },
    ],
    image: attendance,
    source_code_link: "https://github.com/Aakash265/PHP-project",
  },
  {
    name: "Climate API",
    description:
      "This API provides information about the latest climatic conditions by scrapping the data of various Inidan newspaper websites like The Telegraph, The Indian Express, The Times Of India, etc.",
    tags: [
      {
        name: "Express",
        color: "green",
      },
      {
        name: "Cheerio",
        color: "blue",
      },
      {
        name: "WebScrapping",
        color: "orange",
      },
    ],
    image: climateAPI,
    source_code_link: "https://github.com/Aakash265/ClimateNewsAPI",
  },
];
