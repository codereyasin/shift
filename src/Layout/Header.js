import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="bg-white  py-2">
      <div className="lg:p-2 p-3 lg:px-16 px-5 mx-auto">
        {/* pc  */}
        <div className="lg:flex justify-between items-center  hidden">
          <div className="flex justify-center items-center">
            {/* Logo */}
            <Link href="/">
              <div className="flex gap-3">
                <img className="w-36" src="/logo.png" alt="logo" />
              </div>
            </Link>
            {/* Nav Button */}
            <div className="flex pl-7 gap-5 font-semibold text-gray-700">
              <Link href="/">
                <a className=" text-black font-semibold text-xl hover:text-blue-700 transition-all duration-150 ">
                  Home
                </a>
              </Link>
              <Link href="/">
                <a className=" text-black font-semibold text-xl hover:text-blue-700 transition-all duration-150 ">
                  About us
                </a>
              </Link>
              <Link href="/">
                <a className=" text-black font-semibold text-xl hover:text-blue-700 transition-all duration-150 ">
                  Our Vision
                </a>
              </Link>
              <Link href="/">
                <a className=" text-black font-semibold text-xl hover:text-blue-700 transition-all duration-150 ">
                  Faq
                </a>
              </Link>
              <Link href="/">
                <a className=" text-black font-semibold text-xl hover:text-blue-700 transition-all duration-150 ">
                  Conact us
                </a>
              </Link>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="hover:bg-[#e71919fb] bg-transparent transition-all duration-200 rounded-lg p-2 border text-black font-semibold hover:text-white ">
              Create your store!
            </button>
            <button className="hover:bg-transparent bg-green-400 transition-all duration-200 rounded-2xl p-2 px-6 border text-black font-semibold hover:text-black">
              Log in
            </button>
          </div>
        </div>

        {/* andorid */}
        <div>
          <div className="lg:hidden flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <div className=" flex gap-3">
                <img className="w-24" src="/logo.png" alt="logo" />
              </div>
            </Link>
            {/* Nav Button */}
            <div onClick={handleNav}>
              {nav ? (
                <MdClose
                  className="rounded-full bg-gray-200 px-1 border-black z-10"
                  color="gray"
                  size={40}
                />
              ) : (
                <BiMenuAltRight size={35} />
              )}
            </div>
            <div
              className={
                nav
                  ? "flex z-50 gap-2 absolute top-[73px] right-0 flex-col font-semibold text-[20px] rounded-bl-3xl gap-y-9 bg-white w-full px-[20px] py-[15px] ease-in duration-500 h-screen text-white"
                  : "hidden"
              }
            >
              <Link href="/">
                <a className="hover:bg-gray-100 hover:text-start hover:justify-start flex hover:py-3 px-2 text-black font-semibold text-xl transition-all duration-150 ">
                  Home
                </a>
              </Link>
              <Link href="/">
                <a className="hover:bg-gray-100 hover:text-start hover:justify-start flex hover:py-3 px-2 text-black font-semibold text-xl transition-all duration-150 ">
                  About us
                </a>
              </Link>
              <Link href="/">
                <a className="hover:bg-gray-100 hover:text-start hover:justify-start flex hover:py-3 px-2 text-black font-semibold text-xl transition-all duration-150 ">
                  Our Vision
                </a>
              </Link>
              <Link href="/">
                <a className="hover:bg-gray-100 hover:text-start hover:justify-start flex hover:py-3 px-2 text-black font-semibold text-xl transition-all duration-150 ">
                  Faq
                </a>
              </Link>
              <Link href="/">
                <a className="hover:bg-gray-100 hover:text-start hover:justify-start flex hover:py-3 px-2 text-black font-semibold text-xl transition-all duration-150 ">
                  Conact us
                </a>
              </Link>
              <div className="flex flex-col space-y-4">
                <button className="w-full rounded-xl gap-2 flex justify-center items-center h-14 bg-[#CC1616] text-white">
                  Create your store! <span className=" justify-center items-center flex w-[80px] bg-white text-white h-1"></span>
                </button>
                <button className="text-gray-500 text-xl">
                 Store owner? <span className="text-red-500">Log in</span>
                </button>
              </div>
              <div className="w-full flex justify-center">
                <div className="text-black w-28 rounded-full flex justify-center bg-red-300 py-2 items-center "> Arabic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
