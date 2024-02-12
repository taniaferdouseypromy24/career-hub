import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/images/bg3.png";
import lowerDesign from "../../assets/images/bg2.png";
import upperDesign from "../../assets/images/bg1.png";
import error from "../../assets/gif/comp_3.gif";

const ErrorElements = () => {
  return (
    <div className="lg:ps-[170px] lg:pe-[170px] text-center ">
      <div className=" flex flex-col flex-wrap items-center">
        <img className="" src={error} alt="" />
        <p className="text-2xl text-blue-950 font-bold">
          404 error.
          <br /> This Page Doesn't Exist
        </p>
        <Link className="text-yellow-500 font-semibold underline  mb-8" to="/">
          Would You Like to Go back Home ?
        </Link>
      </div>
    </div>
  );
};

export default ErrorElements;
