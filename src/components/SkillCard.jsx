/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../assets/tech/index";

const SkillCard = ({ index, name, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary sm:pb-4 rounded-2xl '
      >
        <div className="rounded-md max-md:w-25 max-sm:h-20 md:w-30 md:h-30">
          <div className=''>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover'
            />
          </div>
          <div className=''>
            <h3 className='text-white sm:font-bold font-semibold text-center text-[10px] sm:text-[24px]'>{name}</h3>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default SkillCard;
