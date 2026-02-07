// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
// import angularLogo from './assets/tech_logo/angular.png';
// import reduxLogo from './assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
// import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
// import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import w3grade from "./assets/company_logo/w3grade.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";

import aisLogo from "./assets/education_logo/Ais_logo.png";

// Project Section Logo's
// import githubdetLogo from "./assets/work_logo/github_det.png";
import weatherAppLogo from "./assets/work_logo/weatherAppLogo.png";
import snakeGameLogo from "./assets/work_logo/snakeGameLogo.png";
import wanderlustLogo from "./assets/work_logo/wanderlustLogo.png";
import portfolioLogo from "./assets/work_logo/portfolioLogo.png";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: w3grade, // or w3gradsLogo / glaLogo (use what you prefer)
    role: "Mobile App Development Trainee",
    company: "JOVAC’25 (W3Grads x GLA University)",
    date: "June 2025 - July 2025",
    desc: "Successfully completed a 45-day summer training program in Mobile App Development using Flutter. Gained hands-on experience in building cross-platform mobile applications, implementing responsive UI, managing state, integrating Firebase services, and following best practices for clean and scalable app architecture.",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "UI Development",
      "State Management",
      "REST API Integration",
      "Mobile App Architecture",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "GLA University, Mathura",
    date: "Aug 2023 - July 2027",
    grade: "7.79 CGPA",
    desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering from GLA University, Mathura. During my academic journey, I built a strong foundation in computer science fundamentals, programming, and software development. My coursework included Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, and Web Technologies. Through academic projects and hands-on learning, I developed problem-solving skills, logical thinking, and a practical understanding of modern development practices. My experience at GLA University has played a key role in strengthening my technical expertise and preparing me for real-world engineering challenges.",
    degree: "Bachelor of Technology (B.Tech) – Computer Science and Engineering",
  },
  {
    id: 1,
    img: aisLogo,
    school: "Archisha International School Baghauli, Hardoi",
    date: "Apr 2021 - March 2022",
    grade: "76.2%",
    desc: "I completed my class 12 education from Archisha International School, Baghauli, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 2,
    img: aisLogo,
    school: "Archisha International School Baghauli, Hardoi",
    date: "Apr 2019 - March 2020",
    grade: "74.8%",
    desc: "I completed my class 10 education from Archisha International School, Baghauli, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
  id: 0,
  title: "Weather Forecast App",
  description:
    "A modern and responsive React.js weather application that provides real-time weather updates for any location worldwide. Users can search by city name to instantly view current temperature, weather conditions, humidity, wind speed, and forecasts. Powered by a reliable weather API, the app delivers accurate data with a clean and intuitive user interface for a smooth user experience.",
  image: weatherAppLogo,
  tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
  github:
    "https://github.com/Deepak-17-code/REACT-MINI-Project",
  webapp: "https://react-mini-project-lilac.vercel.app/",
},

  {
  id: 1,
  title: "Modern Snake Game",
  description:
    "A sleek and interactive modern version of the classic Snake game built using pure JavaScript. The game features smooth animations, responsive controls, real-time score tracking, and increasing difficulty as the snake grows. Designed with a clean UI and optimized performance, this project demonstrates strong fundamentals of JavaScript logic, DOM manipulation, and game development concepts.",
  image: snakeGameLogo,
  tags: ["HTML", "CSS", "JavaScript"],
  github:
    "https://github.com/Deepak-17-code/modern-snake-game",
  webapp: "https://modern-snake-game-three.vercel.app/",
}
,
  
  {
  id: 2,
  title: "Wanderlust – Airbnb Clone",
  description:
    "A full-stack Airbnb-inspired web application that allows users to explore, list, and book travel accommodations. Built without React, the project focuses on strong backend logic and server-side rendering, featuring user authentication, property listings, image uploads, booking management, and secure data handling. This project demonstrates practical experience in building scalable web applications using modern backend technologies and RESTful APIs.",
  image: wanderlustLogo,
  tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  github:
    "https://github.com/Deepak-17-code/Major-Project-WanderLust-/tree/main",
  webapp: "https://major-project-wanderlust-ry5y.onrender.com/listings",
}
,
{
  id: 3,
  title: "Personal Portfolio Website",
  description:
    "A modern, responsive personal portfolio website built using React.js and Tailwind CSS to showcase projects, technical skills, and professional experience. The portfolio features a clean component-based architecture, smooth navigation, and optimized performance. Designed with a minimal and accessible UI, it provides recruiters and collaborators with a clear overview of my work and an easy way to connect.",
  image: portfolioLogo,
  tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
  github:
    "https://github.com/Deepak-17-code/portfolio",
  webapp: "https://portfolio-ivory-theta-in9ynl8qzk.vercel.app/",
}
,
];
