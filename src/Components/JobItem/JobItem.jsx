import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JobItem.css";
import { useContext } from "react";
import { JobContext } from "../Context/JobContext";

const JobItem = ({ job, user, isLoggedIn }) => {
  console.log("user is:",user);
  const navigate = useNavigate();
  const { jobs, setJobs } = useContext(JobContext);
  const {unApprovedJobs,setUnApprovedJobs} = useContext(JobContext);
 const applyJob = () => {
  setJobs((prevJobs) =>
    prevJobs.map((item) =>
      item.jobId === job.jobId
        ? { ...item, applied: !item.applied }
        : item
    )
  );
};

// const approveJob = () =>{
// setUnApprovedJobs((prev) =>
//   prev.filter((item) => item.jobId !== job.jobId)
// );
//   setJobs((prevJobs)=>[
//     ...prevJobs,
//     {...job,approved:!job.approved}
//   ])
//   navigate('/');
// console.log("unapproved jobs after approving:",unApprovedJobs);
// }

const approveJob = () => {

  if(job.approved){
    setJobs(prev => prev.filter(item => item.jobId !== job.jobId));

    setUnApprovedJobs(prev => [
      ...prev,
      {...job, approved:false}
    ]);

  } else {
    setUnApprovedJobs(prev =>
      prev.filter(item => item.jobId !== job.jobId)
    );

    setJobs(prev => [
      ...prev,
      {...job, approved:true}
    ]);
  }

  navigate('/');
};
  return (
    <div className="job-wrapper">
      <div className="job-title">{job.title}</div>
      <div className="job-body">
        <div className="job-details">
          <p className="experience">Experience Range:{job.experience}</p>
          <div className="skills">
            <span> Skills:</span>
            {job.skills.map((skill, index) => {
              return (
                <p className="skill" key={index}>
                  {skill}
                </p>
              );
            })}
          </div>
        </div>
        <button
          className={isLoggedIn && user === "employee" ? "apply-btn" : "d-none"}
          onClick={()=>applyJob()}
        >
          {job.applied ? "Applied" : "Apply"}
        </button>
         <button
          className={isLoggedIn && user === "Hr" ? "apply-btn" : "d-none"}
          onClick={()=>approveJob()}
        >
          {job.approved ? "Approved" : "Approve"}
        </button>
      </div>
    </div>
  );
};

export default JobItem;
