// import React from 'react';

import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className=""></div>
      <div className="nav  flex text-accent">
        <NavLink to="/" className=" hover:bg-gray-200 px-4 py-1">
          Home
        </NavLink>
        <NavLink to="/About" className=" hover:bg-gray-200 px-4 py-1">
          About
        </NavLink>
        <NavLink to="/Career" className=" hover:bg-gray-200 px-4 py-1">
          Career
        </NavLink>
      </div>

      <div className="login-btn flex gap-5">
        <img src={user} alt="" />
        <button className=" btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
