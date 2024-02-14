import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import banner from "../../assets/images/bg3.png";
import lowerDesign from "../../assets/images/bg1.png";
import upperDesign from "../../assets/images/bg2.png";
import moneyIcon from "../../assets/icons/money.png";
import calenderIcon from "../../assets/icons/calendar.png";
import phoneIcon from "../../assets/icons/phone.png";
import emailIcon from "../../assets/icons/email.png";
import addressIcon from "../../assets/icons/location2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStoredApplication,
  setJobApplication,
} from "../../utility/localStorage";

const JobDetails = () => {
  const allJobs = useLoaderData();
  const { id } = useParams();

  console.log(allJobs, id);
  const idInt = parseInt(id);

  const job = allJobs.find((job) => job.id === idInt);
  console.log(job, id);

  const handleApplyJob = () => {
    const alreadyApplied = getStoredApplication();
    const alreadyExists = alreadyApplied.find((jobId) => jobId === idInt);
    // console.log("it", alreadyExists);
    if (alreadyExists) {
      toast.warn("You already applied to this job!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      setJobApplication(idInt);

      toast.success("You Applied Successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div>
      <div className="relative ">
        <img className="w-full  " src={banner} alt="" />

        <div className=" w-40 absolute bottom-0 left-0 ">
          <img className="" src={lowerDesign} alt="" />
        </div>
        <div className="w-40 absolute top-0 right-0">
          <img className="" src={upperDesign} alt="" />
        </div>
        <div className="absolute w-full text-center top-28 md:top-1/2 font-bold text-lg md:text-2xl  ">
          <p className="">Job Details</p>
        </div>
      </div>
      <div className="mt-8 grid  gap-12 lg:grid-cols-5 lg:ps-[150px] lg:pe-[150px] px-[30px] ">
        <div className="mt-4 col-span-3  ">
          <p className="text-gray-500 text-justify">
            <span className="font-semibold text-black ">Job Description:</span>
            {job.job_description}
          </p>
          <p className="text-gray-500 text-justify mt-8">
            <span className="font-semibold text-black ">
              Job Responsibility:
            </span>
            {job.job_responsibility}
          </p>
          <p className="font-semibold text-black mt-8">
            Educational Requirements:
          </p>
          <p className="text-gray-500 text-justify mt-4">
            {job.educational_requirements}
          </p>
          <p className="font-semibold text-black mt-8 ">Experiences</p>
          <p className="text-gray-500 text-justify my-4">{job.experiences} </p>
        </div>

        <div className=" mb-24 col-span-3  lg:col-span-2 mt-5  ">
          <div className="bg-[#dcd2eb] h-full rounded-lg p-5 w-full flex flex-col justify-evenly">
            <p className=" font-semibold">Job Details</p>
            <div className="border border-1 border-[#b7bff3]"></div>
            <div className="flex items-center gap-2">
              <img className="w-5 " src={moneyIcon} alt="" />
              <p>Salary : {job.salary}</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-5 " src={calenderIcon} alt="" />
              <p>Job Title : {job.job_title}</p>
            </div>
            <p className="font-semibold">Contact Information</p>
            <div className="border border-1 border-[#b7bff3]"></div>
            <div className="flex items-center gap-2">
              <img className="w-5 " src={phoneIcon} alt="" />
              <p>Phone : {job.contact_information.phone}</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-5 " src={emailIcon} alt="" />
              <p>Email : {job.contact_information.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-5 " src={addressIcon} alt="" />
              <p>Address : {job.contact_information.address}</p>
            </div>
          </div>
          <button
            onClick={handleApplyJob}
            className="w-full my-6 rounded-lg py-2 px-8  bg-[#7E90FE] text-white"
          >
            Apply Now
          </button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default JobDetails;
