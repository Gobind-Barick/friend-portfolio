import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mobile Application Developer",
    location: "Work From Home",
    description:
      "I am working as Mobile Application Developer in Recruit NXT  .",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
 ] as const;

export const projectsData = [
  {
    title: "Multiple Disease Prediction System",
    description:
      "I have developed a multiple disease prediction system by using java, streamlit, android studio",
    tags: [ "Java", "Flutter", "Android Studio", "StreamLit"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Weather App",
    description:
      "It helps in prediction of weather",
    tags: ["Java", "Flutter", "Android Studio"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Android Studio",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Flutter",
  "MongoDB",
  
] as const;
