import React, { useState } from "react";
import Header from "./Header";
import { LOGIN_BACKGROUND } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={LOGIN_BACKGROUND} alt="background_image" />
      </div>
      <div className="absolute bg-black w-3/12 mt-36 left-0 right-0 mx-auto text-white bg-opacity-80">
        <form className="flex flex-col">
          <h1 className="text-3xl font-bold my-8 mx-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="my-2 mx-5 py-3 px-2 rounded bg-[#11100f] text-[#8daeb8]"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="my-2 mx-5 py-3 px-2 rounded bg-[#11100f] text-[#8daeb8]"
          />
          <input
            type="password"
            placeholder="Password"
            className="my-2 mx-5 py-3 px-2 rounded bg-[#11100f] text-[#8daeb8]"
          />
          <button className="bg-[#e50914] my-10 mx-5 py-3 px-2 rounded">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="my-2 mx-5 py-3 px-2 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already a user? Sign in here"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
