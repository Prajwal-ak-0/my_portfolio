/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import SkyCanvas from "./SkyCanvas";

const Home = () => {

  return (
    <>
      <SkyCanvas />
      <div className="fixed top-0 right-0 z-10 bg-transparent text-white p-8 mt-[100px] w-[500px]">
        <div className="flex items-center ">
          <div className="text-white ml-8 text-right">
            <div className="mb-2">
              <h1 className="font-black md:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] leading-[98px] mt-2 mb-2">
                Hey 👋, I'm <span className='text-[#915EFF]'>Prajwal</span>
              </h1>
            </div>
            <div className="mb-4">
              <p className="font-medium md:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] leading-[40px]">
              "Tech enthusiast and problem solving aficionado, crafting innovative solutions in the realm of web development."
              </p>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
