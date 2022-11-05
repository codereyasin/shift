import React from "react";
import Button from "../shared/button/button";

const About = () => {
  return (
    <div className="lg:p-2 p-3 lg:px-16 px-5 mx-auto md:flex-row flex flex-col py-10 justify-center lg:space-x-[150px] items-center">
        <div className="flex justify-start items-center">
          <img className="w-[400px]" src="/aboutimage.png" alt="" />
            </div>
        <div className="flex justify-end flex-col">
          <h1 className="font-bold  text-4xl">All you need to know<br/> about us..</h1>
          <p className="text-xl py-4">We provide you with your own customizable e-store that will suit all your needs.</p>
          <div className="w-full">
           <Button name={"Hit it!"} link={'/'}/>
        </div>
        </div>
    </div>
  );
};

export default About;
