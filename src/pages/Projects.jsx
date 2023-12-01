import { projects } from "../assets/tech"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  return (
    <div className="z-10 mb-4 md:mx-16 sm:mx-10 mx-2 bg-transparent text-white ">
      <h1 className="md:text-[70px] sm:text-[60px] text-[50px] font-bold">
        Projects
      </h1>
      <div className="bg-gradient-to-tr from-[#024296] to-[#021e42] sm:p-4  p-2 rounded-md">
        <div className=' items-center justify-center grid gap-2 md:grid-cols-3'>
          {projects.map((project, index) => (
            <ProjectCard key={index} name={project.name.name} description={project.description} tags={project.tags} image={project.name.image} link={project.github_link} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects