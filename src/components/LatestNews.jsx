import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-[#F3F3F3] p-4">
      <p className="bg-[#D72050] text-white py-2 px-6 text-xl font-medium inline-block">
        Latest
      </p>
      <Marquee pauseOnHover={true}>
        <div className="space-x-10">
          <Link to="/news">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
            praesentium?
          </Link>
          <Link to="/news">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
            praesentium?
          </Link>
          <Link to="/news">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
            praesentium?
          </Link>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;