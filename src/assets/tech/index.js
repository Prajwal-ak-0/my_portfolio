import css from "./css.png";
import figma from "./figma.png";
import git from "./git.png";
import html from "./html.png";
import javascript from "./javascript.png";
import mongodb from "./mongodb.png";
import nodejs from "./nodejs.png";
import reactjs from "./reactjs.png";
import tailwind from "./tailwind.png";
import typescript from "./typescript.png";
import threejs from "./threejs.png";
import next from "./next.png";
import openai from "./openai.jpg";
import c from "./c++.png";
import selenium from "./selenium.png";
import aws from "./aws.png";

export const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Open AI API",
        icon: openai,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Next JS",
        icon: next,
    },
    {
        name: "C++",
        icon: c,
    },
    {
        name: "Selenium",
        icon: selenium,
    },
    {
        name: "AWS",
        icon: aws,
    },
];

export const textVariant = (delay) => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay,
            },
        },
    };
};

export const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};