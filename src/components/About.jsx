import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-[#F9F9F9] lg:py-[15rem] md:py-[8rem] sm:py-[8rem] py-[8rem] px-0 h-auto">
      <div id="container" className="mx-auto my-0 max-w-[120rem] px-16 py-0">
        <div id="abtcon" className="items-center grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-center text-center lg:text-start">
            <div id="img" className="relative flex justify-center text-center mb-12">
            <div className="about-img h-[30rem] w-[30rem] lg:h-[40rem] lg:w-[40rem] text-center"></div>
            </div>
            <div className="px-10">
                <h3 className="text-[#147efb] text-[1.75rem] font-bold mb-4 uppercase">About Me</h3>
                <h4 className="text-[#2d2e32] lg:text-[2.5rem] text-4xl font-semibold mb-8">Flutter App Developer <br /> based in Ahmedabad, Gujarat 📍</h4>
                <p className="text-[#767676] text-[1.75rem] font-medium">
                Hey, my name is Jay Shapariya, a dedicated Flutter app developer with a passion for crafting user-centric mobile experiences.<br/><br/> I thrive on continuous learning and innovation, always seeking ways to push the boundaries of what's possible in the mobile app world. Let's connect and explore how we can create remarkable mobile solutions together.
                </p>
                <div className="flex gap-4 items-center justify-center lg:justify-start mt-8">
                <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => window.open("/CV/Jay shapariya CV.pdf")}
              >
                Download CV
              </button>
                <img src="/image/manT.png" alt="work emoji" className="w-[40px]"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
