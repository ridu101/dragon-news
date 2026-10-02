// import React from 'react';
import { format } from "date-fns";
import headerLogo from "../assets/logo.png";
import "../index.css";

const Header = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 text-center space-y-1">
      <img src={headerLogo} alt="Header Logo" className="mx-auto" />
      <p className="poppins-regular text-accent">
        Journalism Without Fear or Favour
      </p>
      <p className="poppins-semibold ">
        {format(new Date(), "EEEE, MMMM Q, Y")}
      </p>
    </div>
  );
};

export default Header;
