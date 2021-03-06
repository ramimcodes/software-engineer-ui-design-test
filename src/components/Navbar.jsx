import React from "react";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import avatar from '../assets/avatar.jpg';
const Navbar = ({ brand }) => {
  return (
    <div className="navbar">
      <nav className="navbar-container">
        <div className="w-1/6 flex items-center">
          {/* brand section */}
        <p className=" font-medium">{brand}</p>
        <span className="ml-2"><FaCaretDown /></span>
        </div>
        {/* search box */}
        <div className="sm:flex items-center w-4/6 ml-9 hidden ">
        <div className=" bg-neutral_2 text-neutral_8 p-3 rounded-l-md "> <FaSearch/></div>
          <input
            className="px-2 w-3/5 p-2 rounded-r-md bg-neutral_2 focus:outline-0"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* profile section */}
        <div className="flex items-center justify-end sm:w-2/5 w-3/5 space-x-4">
          <span>
            <IoIosNotificationsOutline className=" text-neutral_8" size={30} />
          </span>
          <img className=' w-10 h-10 rounded-3xl ml-1' src={avatar} alt="" />
          <p>Jone Doe</p>
          <span><FaCaretDown /></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
