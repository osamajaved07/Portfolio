import React from "react";
import { Link } from "react-scroll";
const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About ME</h2>
      <p className="text-white">I’m Osama, a web and mobile app developer with a passion for coding. I specialize in React and front-end development, helping clients build real-world projects and get modern web and mobile app technologies. Outside of coding, I enjoy continuous learning and sharing knowledge to inspire others to achieve their goals.</p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan ">My Projects</button>
    </div>
  );
};

export default AboutMeText;
