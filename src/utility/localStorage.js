import { getItem } from "localforage"

const getStoredApplication = () =>{
    const storedJobApplied = localStorage.getItem('job-application')

    if(storedJobApplied){
        return JSON.parse(storedJobApplied)
    }
    return []

}
const setJobApplication = id =>{
    const jobApplications = getStoredApplication();
    const existingJobApplication = jobApplications.find(jobId => jobId === id)
    if(!existingJobApplication){
        jobApplications.push(id)
        localStorage.setItem('job-application',JSON.stringify(jobApplications))
    }
}

export{getStoredApplication,setJobApplication}