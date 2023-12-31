/* eslint-disable react/no-unescaped-entities */
import Resume from "../assets/Resume.pdf";
import { Button } from "@nextui-org/react";
import { Download } from "lucide-react"
import Skills from "../components/Skills";

const About = () => {
  const handleDownload = async () => {
    const response = await fetch(Resume);
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
    <div className="z-10 mb-4 md:mx-16 sm:mx-10 mx-2 bg-transparent text-white ">
      <h1 className="md:text-[70px] sm:text-[60px] text-[50px] font-bold">
        About
      </h1>
      <div className="bg-gradient-to-tr from-[#024296] to-[#021e42] sm:p-4  p-2 rounded-md">
        <div>
          <h2 className=" sm:text-[40px] text-[30px]  font-semibold">
            Introduction :
          </h2>
          <p className="text-justify sm:tracking-wide text-sm md:text-lg">
            Hello, I'm Prajwal A K, a second-year Computer Science Engineering student at MS Ramaiah Institute of Technology. My journey in the world of technology began with Data Structures and Algorithms in C++. Over the past 1.5 years, I've mastered DSA concepts and continually practice to sharpen my skills.

            Moving forward, I ventured into web development, starting with HTML, CSS, and JavaScript. Building on my foundation, I transitioned to React and developed various projects. Expanding into full-stack development, I explored the MERN stack, incorporating technologies like Tailwind CSS and integrating OpenAI APIs.

            In the dynamic web landscape, I embraced the rise of Next.js, mastering its concepts and applying them to real-world projects. To add a creative touch, I delved into Three.js and related libraries, crafting immersive 3D experiences. My proficiency extends to utilizing APIs and cloud services.

            As I progress in my academic and coding journey, I'm excited about the endless possibilities technology offers. Join me on this exploration as we dive into innovation and create meaningful solutions.
          </p>
        </div>
        <div className="sm:my-2 max-sm:mt-2">
          <h2 className="text-[40px] font-semibold">Skills :</h2>
          <div className="flex items-center sm:my-4 max-sm:mt-4 justify-center">
            <Skills />
          </div>
        </div>
        <div className="my-2">
          <h2 className="sm:text-[40px] text-[22px] font-semibold">Download Resume :</h2>
          <div className="flex items-center my-4 justify-center">
            <Button onClick={handleDownload} radius="full" className="bg-gradient-to-tr text-xl font-semibold items-center from-pink-500 to-yellow-500 text-white hover:shadow-md py-2 hover:shadow-yellow-500 sm:w-[275px] sm:h-[75px]">
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
