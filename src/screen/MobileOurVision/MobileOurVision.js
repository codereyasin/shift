import React from "react";
import Button from "../../shared/button/button";
import Title from "../../shared/Title/title";

const MobileOurVision = () => {
  return (
    <div className=" px-5 mx-auto sm:hidden flex flex-col  justify-center h-[90%]  items-center">
      <div className="flex lg:space-x-[600px]">
        <div className="space-y-1 pt-10 flex flex-col items-center justify-center">
          <Title title1={'Our vision..'} description={'is to see you sing up.'}/>
          <div>
            <Button name={"Hit It"} link={"/"} />
          </div>
          <div></div>
        </div>
        <div>
          <img className="w-[240px]" src="/ourvision.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileOurVision;
