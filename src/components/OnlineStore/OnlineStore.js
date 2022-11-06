import React from "react";
import Button from "../../shared/button/button";
import Title from "../../shared/Title/title";
import PlanCrad from "./PlanCrad";
const OnlineStore = () => {
  return (
    <div className="lg:p-2 p-3 lg:px-16 px-5 mx-auto space-y-6 flex justify-center flex-col items-center">
      <div className="space-y-5 flex justify-center flex-col items-center ">
        <div className="flex flex-col items-center justify-center space-y-2">
        <Title title1={'Online Store'} description={'We not like other! All main features is unlimited counts !'}/>
        </div>
        <PlanCrad/>
      </div>
      <div className="space-y-4 justify-center items-center flex flex-col">
        <input className="border outline-none py-4 px-2 md:w-[400px] rounded-xl w-[290px]" type="text" placeholder="Pick a domain name: www.yourname.com" />
        <Button name={"Pay now!"} link={"/"} />
      </div>
    </div>
  );
};

export default OnlineStore;
