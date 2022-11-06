import React, { useState } from "react";
import { AiOutlineDown, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  function handleRedirect(e) {
    if (e.target.value === "home") navigate("/MobileHero");
    if (e.target.value === "ourvision") navigate("/ourvision");
    if (e.target.value === "contactus") navigate("/MobileContact");
    if (e.target.value === "faq") navigate("/faq");
    if (e.target.value === "about") navigate("/about");

    if (e.target.value === "ourvision") navigate("ourvision");
    if (e.target.value === "home") navigate("/");
  }

  return (
    <>
      {/* Mobile Screen */}
      <div className="sm:hidden top-[77vh] z-10 items-center pt-10 pr-5 flex justify-between">
        <div className="flex justify-end absolute right-2 items-center gap-1 border px-3 py-2 rounded-2xl outline-none text-black font-semibold">
          <select
            onChange={handleRedirect}
            name="Nav"
            className="outline-none border-none custom-select w-[200px]"
          >
            <option
              className="level-0 bg-transparent border-none outline-none "
              value="home"
            >
<<<<<<< HEAD
                Home <AiOutlineDown />
            </option>
            <option className="level-0 " value="about">
                  {" "}
                  About us <AiOutlineDown />
=======
              <Link to="/">
                {" "}
                Home <AiOutlineDown />
              </Link>
            </option>
            <option className="level-0 " value="about">
              <Link to="/about">
                <a className="hover:text-gray-400">
                  {" "}
                  About us <AiOutlineDown />
                </a>
              </Link>
>>>>>>> 2054ffa0b7685a559ac3436822f15328c84fa5c0
            </option>
            <option className="level-0" value="ourvision">
              {" "}
              Our vision <AiOutlineDown />
            </option>
            <option className="level-0 " value="faq">
              {" "}
              Faq <AiOutlineDown />
            </option>
            <option className="level-0 " value="contactus">
              {" "}
              Conact us <AiOutlineDown />
            </option>
          </select>
        </div>
        <div className="flex justify-start items-start gap-2 p-l left-2 absolute">
          <AiOutlineLeft className="border rounded-md px-1 z-10" size={30} />
          <AiOutlineRight className="border rounded-md px-1 z-10" size={30} />
        </div>
      </div>
    </>
  );
};

export default Footer;
