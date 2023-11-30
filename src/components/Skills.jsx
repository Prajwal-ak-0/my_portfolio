import SkillCard from "./SkillCard";
import { technologies } from "../assets/tech/index";

const Skills = () => {
  return (
    <div className=' items-center justify-center grid sm:gap-4 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 grid-cols-5'>
      {technologies.map((tech, index) => (
        <SkillCard key={index} name={tech.name} image={tech.icon} />
      ))}
    </div>
  );
};

export default Skills;
