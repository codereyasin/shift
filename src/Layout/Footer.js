import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    // Mobile Screen
    <div className="sm:hidden items-center pr-5 flex justify-end">
      <h1 className="flex justify-center items-center gap-1 border px-3 py-2 rounded-2xl outline-none text-black font-semibold">
        <select name="Nav">
          <option
            className="level-0 border-none outline-none"
            value="breads-sweets"
          >
          <Link href="/"> Home <AiOutlineDown /></Link>
          </option>
          <option
            className="level-0 border-none outline-none"
            value="breads-sweets"
          >
           <a href='/About'> About us <AiOutlineDown /></a>
          </option>
          <option
            className="level-0 border-none outline-none"
            value="breads-sweets"
          >
            {" "}
            Our vision <AiOutlineDown />
          </option>
          <option
            className="level-0 border-none outline-none"
            value="breads-sweets"
          >
            {" "}
            Faq <AiOutlineDown />
          </option>
          <option
            className="level-0 border-none outline-none"
            value="breads-sweets"
          >
            {" "}
            Conact us <AiOutlineDown />
          </option>
        </select>
      </h1>
    </div>
  );
};

export default Footer;
