import React from "react";
import Button from "../shared/button/button";
const OnlineStore = () => {
  return (
    <div className="lg:p-2 p-3 lg:px-16 px-5 mx-auto space-y-6 flex justify-center flex-col items-center">
      <div className="space-y-5 flex justify-center flex-col items-center ">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h1 className="text-black text-4xl font-bold">Online Store</h1>
          <p className="text-xl">
            We not like other! All main features is unlimited counts !
          </p>
        </div>
       <div className="flex md:flex-row items-center justify-center md:space-y-0 gap-3 space-y-4 flex-col">
       <div className="rounded-xl border  flex-col py-4  w-52 h-28 px-2 justify-start flex">
            <h1 className="text-xl space-y-2">Basic plan</h1>
            <h2 className="text-xl font-bold">76 <span className="text-sm">KD</span> / <span className="text-sm">3 months</span></h2>
        </div>
        <div className="rounded-xl flex-col py-4 w-52 relative  h-28 px-2 justify-start flex border-2 border-red-500">
            <h1 className="text-xl space-y-2">Business plan</h1>
            <h2 className="text-xl font-bold">240 <span className="text-sm">KD</span> / <span className="">Year</span></h2>
            <span className="rounded-xl bg-red-200 w-20 items-center flex justify-center text-red-800">Save%20</span>
            <span className="font-semibold text-sm rounded-xl bg-red-800 relative bottom-[108px] text-white pl-3 w-32 justify-center left-7 items-center">MOST POPULAR</span>
        </div>
       </div>
      </div>
      <div className="space-y-4 justify-center items-center flex flex-col">
        <input className="border outline-none py-4 px-2 md:w-[400px] rounded-xl w-[290px]" type="text" placeholder="Pick a domain name: www.yourname.com" />
        <Button name={"Pay now!"} link={"/"} />
      </div>
    </div>
  );
};

export default OnlineStore;
