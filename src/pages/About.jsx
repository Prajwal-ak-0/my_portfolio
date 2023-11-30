import React from "react";
import { technologies } from "../assets/tech";
import BallCanvas from "../components/Skills";
import BlankPDF from "../assets/blank.pdf";
import { Button } from "@nextui-org/react";
import { Download } from "lucide-react"
import Skills from "../components/Skills";

const About = () => {
  const handleDownload = async () => {
    const response = await fetch(BlankPDF);
    const projectFile = await response.blob();

    const url = URL.createObjectURL(projectFile);

    const a = document.createElement("a");
    a.href = url;
    a.download = "prajwal's_resume.pdf";
    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
  };

  return (
    <div className="z-10 mb-4 md:mx-16 mx-10 bg-transparent text-white ">
      <h1 className="text-[70px] font-bold">
        About
      </h1>
      <div className="bg-gradient-to-tr from-[#024296] to-[#021e42] p-4 rounded-md">
        <div>
          <h2 className=" text-[40px]  font-semibold">
            Introduction :
          </h2>
          <p className="text-justify sm:tracking-wide md:text-lg">
            Hello, I'm Prajwal A K, a second-year Computer Science Engineering student at MS Ramaiah Institute of Technology. My journey in the world of technology began with Data Structures and Algorithms in C++. Over the past 1.5 years, I've mastered DSA concepts and continually practice to sharpen my skills.

            Moving forward, I ventured into web development, starting with HTML, CSS, and JavaScript. Building on my foundation, I transitioned to React and developed various projects. Expanding into full-stack development, I explored the MERN stack, incorporating technologies like Tailwind CSS and integrating OpenAI APIs.

            In the dynamic web landscape, I embraced the rise of Next.js, mastering its concepts and applying them to real-world projects. To add a creative touch, I delved into Three.js and related libraries, crafting immersive 3D experiences. My proficiency extends to utilizing APIs and cloud services.

            As I progress in my academic and coding journey, I'm excited about the endless possibilities technology offers. Join me on this exploration as we dive into innovation and create meaningful solutions.
          </p>
        </div>
        <Skills/>
        <div className="my-2">
          <h2 className="text-[40px] font-semibold">Download Resume :</h2>
          <div className="flex items-center my-4 justify-center">
            <Button onClcik={handleDownload} radius="full" className="bg-gradient-to-tr text-xl font-semibold items-center from-pink-500 to-yellow-500 text-white hover:shadow-md hover:shadow-yellow-500 w-[275px] h-[75px]">
              <Download />
              Download
            </Button>
          </div>
        </div>
      </div>
      </div>
      );
};

      export default About;
