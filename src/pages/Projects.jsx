
const Projects = () => {
  return (
    <div className="z-10 mb-4 md:mx-16 sm:mx-10 mx-2 bg-transparent text-white ">
      <h1 className="md:text-[70px] sm:text-[60px] text-[50px] font-bold">
        Projects
      </h1>
      <div className="bg-gradient-to-tr from-[#024296] to-[#021e42] sm:p-4  p-2 rounded-md">
        {/* <div className=' items-center justify-center grid sm:gap-4 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 grid-cols-5'>
          {technologies.map((tech, index) => (
            <SkillCard key={index} name={tech.name} image={tech.icon} />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Projects