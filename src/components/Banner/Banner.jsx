import React from "react";
import img from "../../assets/images/user.png";
import { Link, NavLink, Navigate, Route } from "react-router-dom";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
const Banner = () => {
  return (
    
    <div className="bg-blue-50 lg:ps-[170px] lg:pe-[170px]  flex flex-col   lg:flex-row  justify-center items-center  pt-16 ">
      <div className="w-full p-5 lg:p-0 lg:w-1/2 ">
        <p className=" flex flex-col gap-3 text-7xl font-semibold ">
          <span>One Step</span>
          <span>Closer To Your</span>
          <span className="text-[#9873FF]">Dream Job</span>
        </p>
        <p className="flex flex-col mt-6 font-thin text-[#757575] text-xl">
          <span>Explore thousands of job opportunities with all the</span>
          <span>
            information you need. Its your future. Come find it. Manage all
          </span>
          <span>your job application from start to finish.</span>
        </p>
        <Link to="/featured">
          <button className=" mt-5 w-1/4 btn bg-[#7E90FE]">Get started</button>
        </Link>
      </div>
      <div className="w-2/3 lg:w-1/2 flex justify-center items-center">
        <img className="" src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
