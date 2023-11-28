/* eslint-disable react/no-unknown-property */

import SkyCanvas from "./SkyCanvas";


const Home = () => {

  return (
    <>
    <SkyCanvas/>
    <div className="relative">
      {/* Navbar component goes here */}

      <div className="container mx-auto px-4 py-12 absolute top-0 left-0 w-full h-full flex items-center">
        <div className="flex-1">
          <img
            src='logo.jpeg'
            alt="Your Image"
            className="w-full h-auto md:max-w-md lg:max-w-full mx-auto"
          />
        </div>
        <div className="flex-1 ml-8">
          <h1 className="text-4xl font-bold mb-4">Hello, I'm Prajwal A K</h1>
          <p className="text-lg text-gray-600">
            I'm a 2nd-year Computer Science Engineering student specializing in
            Artificial Intelligence and Machine Learning at MS Ramaiah
            Institute of Technology. I anticipate graduating in 2026.
          </p>
          {/* Additional sections for your portfolio content can go here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
