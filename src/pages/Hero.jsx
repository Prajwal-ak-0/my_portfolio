/* eslint-disable react/no-unescaped-entities */

const Hero = () => {
    return (
        <div className="top-0 md:right-0 z-10 bg-transparent text-white p-8 md:w-[700px]">
            <div>
                <div className="flex items-center ">
                    <div className="text-white ml-8 sm:text-left text-center">
                        <div className="mb-2">
                            <h1 className="font-black max-sm:mt-[100px] md:text-[80px] sm:text-[60px] xs:text-[50px] text-[45px] sm:leading-[90px] leading-[60px] mt-2 mb-2">
                                Hey 👋, I'm <span className='text-[#024296d6]'>Prajwal</span>
                            </h1>
                        </div>
                        <div className="mb-4 max-sm:mt-8">
                            <p className="font-medium md:text-[30px] sm:text-[26px] text-[20px] leading-[40px]">
                                "Tech enthusiast and problem solving aficionado, crafting innovative solutions in the realm of web development."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero