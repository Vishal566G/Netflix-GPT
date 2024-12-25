import React from "react";
import Netflix_logo from "../utils/Netlifx_logo.svg";
import { USER_ICON } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute z-10 w-screen py-4 px-10 bg-gradient-to-b from-black flex justify-between">
      <img className="w-36" src={Netflix_logo} alt="Netflix_logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={USER_ICON} alt="user_icon" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
