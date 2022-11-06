import React from "react";
import Button from "../../shared/button/button";
import Title from "../../shared/Title/title";

const MobileHero = () => {
  return (   <div>
    <div className="lg:p-2 p-3 lg:px-16 sm:hidden px-5 mx-auto flex justify-center h-[60vh]  items-center ">
      <div className="flex justify-between xl:space-x-[200px] pt-10">
        <div className="flex justify-center flex-col items-start">
           <img className="pb-10 md:w-[130px]  w-20  " src="/poly.png" alt="" />
           <h4 className="text-black pb-10 text-xl font-semibold ">Click here</h4>
           <Title title1={' Create '} title2={'Your Online Store'} description={'With shift you will move to the  next level in the online business space. Cool?'}/>
          <Button name={'Create your store!'} link={'/Signup'}/>
        </div>
        <div>
          <img className="md:w-[400px] w-[500px] flex justify-center items-center" src="/heromain.png" alt="" />
        </div>
      </div>

      <div>
        
      </div>
    </div>
 
      <div className="sm:flex hidden justify-center items-center h-[100vh] ">
    Desktop Make Soon..

    Go Mobile Screen Now Just Mobile Screen Done
    </div>
    </div>
  );
};

export default MobileHero;
