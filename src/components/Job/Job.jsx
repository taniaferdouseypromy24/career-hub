import React from "react";
import locationIcon from "../../assets/icons/location2.png";
import moneyIcon from "../../assets/icons/money.png";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id,logo, job_title, company_name, job_type, salary, location } = job;
  return (
    <div className="my-2 mx-6 lg:mx-2 card card-compact rounded-sm  border border-gray-300 p-6">
      <div className=" ms-5">
        <img src={logo} />
      </div>
      <div className="card-body">
        <h2 className="card-title font-bold">{job_title}</h2>
        <h2 className="card-title  text-gray-500 ">{company_name}</h2>
        <div className="flex flex-wrap gap-2 ">
          <button className="rounded-sm px-5  py-2 outline outline-1  outline-[#7E90FE] text-[#7E90FE]">
            Remote
          </button>
          <button className="rounded-sm px-5 py-2 outline outline-1 outline-[#7E90FE] text-[#7E90FE]">
            Onsite
          </button>
        </div>
        <div className="flex flex-wrap justify-start gap-2 lg:gap-5 my-2">
          <div className="flex items-center gap-2">
            <img className="w-5" src={locationIcon} alt="" />
            <p>{location}</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-5 " src={moneyIcon} alt="" />
            <p>Salary : {salary}</p>
          </div>
        </div>
        <div className="card-actions flex justify-end">
          <Link to={`/job/${id}`}>
            <button className="rounded-lg p-2  bg-[#7E90FE] text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
