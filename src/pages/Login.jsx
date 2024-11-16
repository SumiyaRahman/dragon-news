import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded p-5">
        <h2 className="text-center pt-12 text-[#403F3F] text-3xl font-semibold">Login Your Account</h2>
        <hr className="mt-10 w-4/5 mx-auto" />
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#403F3F] font-semibold text-base">Email Address</span>
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
              <span className="label-text text-[#403F3F] font-semibold text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input input-bordered bg-[#F3F3F3] outline-none border-none rounded placeholder:text-xs placeholder:font-normal placeholder:text-[#9F9F9F]"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white font-semibold text-lg rounded">Login</button>
          </div>
          <p className="text-sm font-medium text-center text-[#403F3F] mt-7">
            Don’t Have An Account ? <Link to='/auth/register' className="text-red-500 font-semibold">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
