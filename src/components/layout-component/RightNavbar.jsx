import React from "react";
import SocialLogin from "../SocialLogin";
import FindUs from "../FindUs";

const RightNavbar = () => {
  return (
    <div>
      <div>
        <SocialLogin></SocialLogin>
      </div>
      <div className="mt-8">
        <FindUs></FindUs>
      </div>
    </div>
  );
};

export default RightNavbar;
