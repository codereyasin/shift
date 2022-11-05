import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, link }) => {
  return (
    <button className="px-3 rounded-xl gap-2 flex justify-center items-center h-14 bg-[#CC1616] text-white">
      <Link to={link}>
        <a className="flex items-center justify-center gap-2">
          {name}
          <span className=" justify-center items-center flex w-[80px] bg-white text-white h-1"></span>
        </a>
      </Link>
    </button>
  );
};

export default Button;
