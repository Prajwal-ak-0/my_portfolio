import SkillCard from "./SkillCard";
import { technologies } from "../assets/tech/index";

const Skills = () => {
  return (
    <div className='sm:mt-10 items-center justify-center grid sm:gap-4 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-5'>
      {technologies.map((tech, index) => (
        <SkillCard key={index} name={tech.name} image={tech.icon} />
      ))}
    </div>
  );
};

export default Skills;
