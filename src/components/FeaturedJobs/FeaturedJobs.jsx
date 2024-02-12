import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [jobsLength, setJobsLength] = useState([4]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  
  return (
    <div  className="lg:ps-[200px] lg:pe-[200px]  text-center mt-28">
      <h1 className=" text-4xl font-semibold mb-8"> Featured jobs</h1>
      <p className="font-thin text-[#757575] mb-16">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-12  ">
        {jobs.slice(0, jobsLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={jobsLength === jobs.length  ? 'hidden' : ''}>
      <button 
       onClick={() => setJobsLength(6)} className="my-6 rounded-lg py-2 px-8  bg-[#7E90FE] text-white">
        Show All Jobs
      </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
