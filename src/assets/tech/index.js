/* eslint-disable no-unused-vars */
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
import openai from "./openai.png";
import c from "./c++.png";
import selenium from "./selenium.png";
import aws from "./aws.png";
import ai from "./ai.jpeg"
import lms from "./lms.png"
import saas from "./saas.webp"
import web from "./web.jpeg"

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

export const projects = [
    {
        name:
        {
            name: "LMS",
            image: lms,
        },

        description: " Our Learning Management System is a Full stack Next.js project provides a comprehensive platform for educational content creation, file management, and video tutorials. Admins have the power to create courses, upload files, and integrate video tutorials seamlessly. The system includes robust authentication features for secure access. Additionally, administrators can create and manage courses with the added functionality of Stripe integration for payment processing.",
        tags: [
            {
                name: "Nextjs",
                color: "text-neutral-700"
            },
            {
                name: "MongoDB",
                color: "text-pink-700"
            },
            {
                name: "Stripe",
                color: "text-indigo-700"
            }
        ],
        image: lms,
        github_link: "https://github.com/Prajwal-ak-0/learning_management"
    },
    {
        name:
        {
            name: "Automation",
            image: web,
        },

        description: "Experience real - time stock market data with our Web Scraping Automation project.Hosted on a server, our Python code utilizes Selenium for web scraping.Users can set personalized goals such as monitoring new IPO listings and Nifty crossing monthly highs.The scraping code, hosted on the server, sends real - time data to our web page, where users can view and track market events.For added convenience, users receive SMS notifications when their specified goals are met.",
        tags: [
            {
                name: "Nextjs",
                color: "text-blue-700"
            },
            {
                name: "Selenium",
                color: "text-green-700"
            },
            {
                name: "Tailwind",
                color: "text-red-700"
            }
        ],
        github_link: "https://github.com/Prajwal-ak-0/web_automation"
    },
    {
        name:
        {
            name: "SAAS",
            image: ai,
        },

        description: "Explore the power of AI with our project showcasing integration with various OpenAI APIs.Leveraging GPT, DALL - E, voice - to - text, and text - to - voice models, our project demonstrates the capabilities of cutting - edge artificial intelligence.Users can experience natural language processing, generate unique images, and convert text to voice or vice versa.The seamless integration of OpenAI APIs brings a new dimension to your applications and services.Additionally, this project is offered as Software as a Service(SaaS).",
        tags: [
            {
                name: "Nextjs",
                color: "text-neutral-700",
            },
            {
                name: "Oen AI Api",
                color: "text-orange-700"
            },
            {
                name: "Stripe",
                color: "text-pink-700"
            }
        ],
        github_link: "https://github.com/Prajwal-ak-0/saas"
    },
]