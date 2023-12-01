/* eslint-disable react/no-unescaped-entities */
import About from "../pages/About";
import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import Projects from "../pages/Projects";
import Nav from "./Navbar";
import SkyCanvas from "./SkyCanvas";


const Home = () => {
  return (
    <div className="overflow-y-auto">
      <SkyCanvas />
      <div className="bg-transparent">
        <Nav />
        <Hero />
        <About />
        <Projects/> 
        <Contact/>
      </div>
    </div>
  );
};

export default Home;
