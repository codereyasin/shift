import React from "react";
import { AiOutlineDown, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    // Mobile Screen
    <div className="sm:hidden top-[77vh] z-10 items-center pr-5 flex justify-between">
      <div className="flex justify-end absolute right-2 items-center gap-1 border px-3 py-2 rounded-2xl outline-none text-black font-semibold">
        <select name="Nav" className="outline-none border-none" >
          <option
            className="level-0 "
            value="breads-sweets"
          >
          <Link to="/"> Home <AiOutlineDown /></Link>
          </option>
          <option
            className="level-0 "
            value="breads-sweets"
          >
          <Link to="/about">
          <a className="hover:text-gray-400"> About us <AiOutlineDown /></a>
          </Link>
          </option>
          <option
            className="level-0 "
            value="breads-sweets"
          >
            {" "}
            Our vision <AiOutlineDown />
          </option>
          <option
            className="level-0 "
            value="breads-sweets"
          >
            {" "}
            Faq <AiOutlineDown />
          </option>
          <option
            className="level-0 "
            value="breads-sweets"
          >
            {" "}
            Conact us <AiOutlineDown />
          </option>
        </select>
      </div>
      <div className="flex justify-start items-start gap-2 p-l left-2 absolute">
      <AiOutlineLeft className="border rounded-md px-1 " size={30}/>
      <AiOutlineRight className="border rounded-md px-1" size={30}/>
      </div>
    </div>

  );
};

export default Footer;
