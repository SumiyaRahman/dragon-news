import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#403F3F]">Login With</h2>
      <div className="*:w-full space-y-3 mt-5">
        <button className="btn text-blue-500 bg-transparent border-2 border-blue-500 rounded shadow-none text-sm font-medium">
          <FaGoogle />
          <span>Login with Google</span>
        </button>
        <button className="btn text-[#403F3F] bg-transparent border-2 border-[#403F3F] rounded shadow-none text-sm font-medium">
        <FaGithub />
        <span>Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
