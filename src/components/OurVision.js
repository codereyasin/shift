import React from "react";
import Button from "../shared/button/button";

const OurVision = () => {
  return (
    <div className="lg:p-2 p-3 lg:px-16 px-5 mx-auto md:flex-row flex flex-col py-10 justify-center items-center h-[70vh] ">
      <div className="flex lg:space-x-[600px]">
        <div className="space-y-5 pt-10 flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl">Our vision..</h1>
          <p className="text-xl">is to see you sing up.</p>{" "}
          <div>
            <Button name={"Hit It"} link={"/"} />
          </div>
          <div></div>
        </div>
        <div>
        <img className="w-[300px]" src="/ourvision.png" alt="" />
      </div>
      </div>
    </div>
  );
};

export default OurVision;
