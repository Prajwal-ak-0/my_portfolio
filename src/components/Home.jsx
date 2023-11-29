/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import About from "../pages/About";
import Hero from "../pages/Hero";
import Nav from "./Navbar";
import SkyCanvas from "./SkyCanvas";

const Home = () => {

  return (
    <div className="container overflow-y-auto ">
      <SkyCanvas />
      <Nav/>
      <Hero />
    </div>
  );
};

export default Home;
