import React from "react";

const Hero = () => {
  return (
    <div className="lg:p-2 p-3 lg:px-16 px-5 mx-auto flex justify-center items-center h-[70vh]">
      <div className="flex justify-between xl:space-x-[200px] pt-10">
        <div className="flex justify-center flex-col items-start">
           <img className="pb-10 md:w-[130px]  w-20  " src="/poly.png" alt="" />
           <h4 className="text-black pb-10 text-xl font-semibold ">Click here</h4>
          <h6 className="text-black font-bold text-4xl">
            Create <br /> Your Online Store
          </h6>
          <p className="text-xl py-4 ">
            With shift you will move to the  next level in the online business
            space. Cool?
          </p>
          <button className="md:w-[25%] px-4  rounded-xl gap-2 flex justify-center items-center p-2 h-14 bg-[#CC1616] text-white">
            Create your store!
          </button>
        </div>
        <div>
          <img className="md:w-[400px] w-[500px] flex justify-center items-center" src="/heromain.png" alt="" />
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Hero;
