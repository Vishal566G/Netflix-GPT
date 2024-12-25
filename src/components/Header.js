import React from "react";
import Netflix_logo  from "../utils/Netlifx_logo.svg";

const Header = () => {
  return (
    <div className="absolute z-10 py-4 px-10 bg-gradient-to-b from-black">
      <img className="w-36" src={Netflix_logo} alt="Netflix_logo"/>
    </div>
  );
};

export default Header;
