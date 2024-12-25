import React, { useRef, useState } from "react";
import Header from "./Header";
import { LOGIN_BACKGROUND } from "../utils/constants";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const nameValue = name.current ? name.current.value : "";
    const emailValue = email.current ? email.current.value : "";
    const passwordValue = password.current ? password.current.value : "";

    // Validate the form data
    const message = checkValidData(nameValue, emailValue, passwordValue);
    setErrorMessage(message);
  };

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
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
          <h1 className="text-3xl font-bold my-8 mx-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="my-2 mx-5 py-3 px-2 rounded bg-[#11100f] text-[#8daeb8]"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="my-2 mx-5 py-3 px-2 rounded bg-[#11100f] text-[#8daeb8]"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-2 mx-5 py-3 px-2 rounded bg-[#11100f] text-[#8daeb8]"
          />
          <div className="mx-5 pt-3 px-2 font-bold h-5">
            <p className="text-red-600 text-lg">{errorMessage}</p>
          </div>

          <button
            className="bg-[#e50914] my-10 mx-5 py-3 px-2 rounded"
            onClick={handleButtonClick}
          >
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
