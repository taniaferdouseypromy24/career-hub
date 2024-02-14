import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import banner from "../../assets/images/bg3.png";
import lowerDesign from "../../assets/images/bg1.png";
import upperDesign from "../../assets/images/bg2.png";
import arrowIcon from "../../assets/icons/arrowIcon.png";
import moneyIcon from "../../assets/icons/money.png";
import addressIcon from "../../assets/icons/location2.png";
import { getStoredApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
    useEffect(() => {
        const appliedJObIds = getStoredApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job=> appliedJObIds.includes(job.id))
            // console.log(jobs,appliedJObIds)
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    }, [jobs]);
    const handleAppliedJobsFilter = filterValue=>{
        if(filterValue === "all"){
            setDisplayJobs(appliedJobs)
        }
        else if (filterValue === "remote"){
            if(filterValue === "remote"){
                const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
                setDisplayJobs(remoteJobs)
            }
        }
        else if (filterValue === "onsite"){
            if(filterValue === "onsite"){
                const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
                setDisplayJobs(onsiteJobs)
            }
        }
    }
  return (
    <div>
      {/* banner */}
      <div className="relative ">
        <img className="w-full  " src={banner} alt="" />

        <div className=" w-40 absolute bottom-0 left-0 ">
          <img className="" src={lowerDesign} alt="" />
        </div>
        <div className="w-40 absolute top-0 right-0">
          <img className="" src={upperDesign} alt="" />
        </div>
        <div className="absolute w-full text-center top-28 md:top-1/2 font-bold text-lg md:text-2xl  ">
          <p className="">Applied Jobs</p>
        </div>
      </div>
      {/* main section */}
      <div className="lg:ps-[150px] lg:pe-[150px]">
        {/* filter button */}
        <div className="flex justify-end">
          <div className="dropdown lg:dropdown-top  ">
            <div tabIndex={0} role="button" className=" btn m-1">
              <div>Filter By</div>
              <img className="w-4 ms-1" src={arrowIcon} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => handleAppliedJobsFilter("all")}>
                <a>All</a>
              </li>
              <li onClick={() => handleAppliedJobsFilter("remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleAppliedJobsFilter("onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          </div>
        </div>
        {displayJobs.map((job) => (
          <div
            key={job.id}
            className=" my-2 mx-6 lg:mx-2 card card-compact rounded-sm  border border-gray-300 p-6"
          >
            <div className="md:flex  gap-3  ">
              <div className="w-40 h-40 rounded-lg flex items-center justify-center bg-[#F4F4F4]">
                <img className="w-24  " src={job.logo} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">{job.job_title}</p>
                <p className="text-gray-500 font-semibold">{job.company_name}</p>

                <div className="flex flex-wrap gap-2 ">
                  <button className="rounded-sm px-3  py-1 outline outline-1  outline-[#7E90FE] text-[#7E90FE]">
                    Remote
                  </button>
                  <button className="rounded-sm px-3 py-1 outline outline-1 outline-[#7E90FE] text-[#7E90FE]">
                    Onsite
                  </button>
                </div>
                <div className="flex flex-wrap justify-start gap-2 lg:gap-5 my-2">
                  <div className="flex items-center gap-2">
                    <img className="w-5" src={addressIcon} alt="" />
                    <p>{job.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="w-5 " src={moneyIcon} alt="" />
                    <p>Salary : {job.salary}</p>
                  </div>
                </div>
              </div>
              <div className=" md:flex justify-end items-center ms-auto">
                <Link to={`/job/${job.id}`}>
                  <button className="w-full rounded-lg p-2  bg-[#7E90FE] text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}

        
      </div>
    </div>
  );
};

export default AppliedJobs;
