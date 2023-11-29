/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import About from "../pages/About";
import Hero from "../pages/Hero";
import Nav from "./Navbar";
import SkyCanvas from "./SkyCanvas";

const Home = () => {

  return (
    <div className=" overflow-y-auto ">
      <SkyCanvas />
      <div className="bg-transparent">
        <Nav />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default Home;
