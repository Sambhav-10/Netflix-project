import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignUp = () => {
      console.log("wotking");
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="absolute  py-2 bg-gradient-to-b from-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form className=" w-3/12 h-1/2  absolute  p-12  bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70 ">
        <h1 className="text-2xl m-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
       { !isSignInForm ? <input
          type="text"
          placeholder="Name"
          className="p-2 m-2 w-full bg-gray-800"
        /> : null
        }
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-800"
        />
        <button className="p-4 m-2 text-white text-xl w-full bg-red-700 rounded-lg">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="m-4 cursor-pointer" onClick={handleSignUp}>
          {isSignInForm ? " New to Netflix ? Sign Up Now" : "Already registered ? Sign in Now"}
        </p>
      </form>
    </>
  );
};

export default Login;
