/* eslint-disable react/no-unescaped-entities */

import { technologies } from "../assets/tech"
import BallCanvas from "../components/Skills"


const About = () => {
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
        <div className="mt-2">
          <h2 className=" text-[40px]  font-semibold">
            Skills :
          </h2>
          <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About