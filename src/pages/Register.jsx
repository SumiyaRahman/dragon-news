import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded p-5 mt-24">
        <h2 className="text-center pt-12 text-[#403F3F] text-3xl font-semibold">
          Register Your Account
        </h2>
        <hr className="mt-10 w-4/5 mx-auto" />
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#403F3F] font-semibold text-base">
                Your Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered bg-[#F3F3F3] outline-none border-none rounded placeholder:text-xs placeholder:font-normal placeholder:text-[#9F9F9F]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#403F3F] font-semibold text-base">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Photo URL"
              className="input input-bordered bg-[#F3F3F3] outline-none border-none rounded placeholder:text-xs placeholder:font-normal placeholder:text-[#9F9F9F]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#403F3F] font-semibold text-base">
                Email Address
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered bg-[#F3F3F3] outline-none border-none rounded placeholder:text-xs placeholder:font-normal placeholder:text-[#9F9F9F]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#403F3F] font-semibold text-base">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input input-bordered bg-[#F3F3F3] outline-none border-none rounded placeholder:text-xs placeholder:font-normal placeholder:text-[#9F9F9F]"
              required
            />
            <div className="flex items-center mt-5">
              <input
                type="checkbox"
                id="terms"
                className="checkbox-xs mr-2"
              />
              <label for="terms" className="font-medium text-sm text-[#706F6F]">
                Accept <span className=" text-blue-500">Terms & Conditions</span>
              </label>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white font-semibold text-lg rounded">
              Register
            </button>
          </div>
          <p className="text-sm font-medium text-center text-[#403F3F] mt-7">
            Already Have An Account ?{" "}
            <Link to="/auth/login" className="text-red-500 font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
