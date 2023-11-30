/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../assets/tech/index";

const SkillCard = ({
    index,
    name,
    image
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px]'
            >
                <div className="rounded-md w-36 h-40">
                    <div className=''>
                        <img
                            src={image}
                            alt='project_image'
                            className=''
                        />
                    </div>

                    <div className=''>
                        <h3 className='text-white font-bold text-center text-[24px]'>{name}</h3>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    )
}

export default SkillCard