// import React from 'react';

import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

  const {user} = use( AuthContext)
  return (
    <div className="flex items-center justify-between">
      <div className="">{user && user.email}</div>
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
        <img src={userIcon} alt="" />
        <Link to="/auth/login" className=" btn btn-primary px-10">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
