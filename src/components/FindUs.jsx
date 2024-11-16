import React from "react";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/instagram.png";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#403F3F]">Find Us On</h2>

      <div className="join flex rounded join-vertical *:bg-transparent *:border *:border-[#706F6F] *:text-sm *:font-medium *:text-[#706F6F] mt-5">
        <button className="btn join-item justify-start flex gap-3 h-14">
          <span className="w-8 h-8 bg-[#F3F3F3] rounded-full flex justify-center items-center">
            <img className="w-3 h-3 " src={fb} />
          </span>
          <span>Facebook</span>
        </button>

        <button className="btn join-item justify-start flex gap-3 h-14">
          <span className="w-8 h-8 bg-[#F3F3F3] rounded-full flex justify-center items-center">
            <img className="w-3 h-3 " src={twitter} />
          </span>
          <span>Twitter</span>
        </button>

        <button className="btn join-item justify-start flex gap-3 h-14">
          <span className="w-8 h-8 bg-[#F3F3F3] rounded-full flex justify-center items-center">
            <img className="w-3 h-3 " src={insta} />
          </span>
          <span>Instagram</span>
        </button>
      </div>
    </div>
  );
};

export default FindUs;
