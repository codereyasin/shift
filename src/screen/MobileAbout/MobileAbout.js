import React from "react";
import Button from "../../shared/button/button";
import Title from "../../shared/Title/title";

const MobileAbout = () => {
  return (
    <div className="px-5 mx-auto sm:hidden flex flex-col h-[90%]  justify-center items-center">
        <div className="flex justify-start items-center">
          <img className="w-[300px]" src="/aboutimage.png" alt="" />
            </div>
        <div className="flex justify-end flex-col">
         <Title title1={'All you need to know '} title2={'about us..'} description={'We provide you with your own customizable e-store that will suit all your needs'}/>
          <div className="w-full">
           <Button name={"Hit it!"} link={'/'}/>
        </div>
        </div>
    </div>
  );
};

export default MobileAbout;
