import React from "react";
import Button from "../../shared/button/button";
import Title from "../../shared/Title/title";

const OurVision = () => {
  return (
    <div className="lg:p-2 p-3 lg:px-16 px-5 mx-auto md:flex-row flex flex-col py-10 justify-center items-center h-[70vh] ">
      <div className="flex lg:space-x-[600px]">
        <div className="space-y-1 pt-10 flex flex-col items-center justify-center">
          <Title title1={'Our vision..'} description={'is to see you sing up.'}/>

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
