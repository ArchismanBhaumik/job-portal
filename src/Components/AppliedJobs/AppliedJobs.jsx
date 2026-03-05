import React from "react";
import Jobs from "../../const";
import JobItem from "../JobItem/JobItem";
import { useState } from "react";
import { useContext } from "react";
import { JobContext } from "../Context/JobContext";
const AppliedJobs = ({ user, isLoggedIn }) => {
  const { jobs, setJobs } = useContext(JobContext);
  const appliedJobs = jobs.filter((job) => job.applied);

  return (
    <div className="job-board">
      {appliedJobs.map((job, index) => {
        return (
          <JobItem
            user={user}
            job={job}
            key={index}
            isLoggedIn={isLoggedIn}
            setJobs={setJobs}
          />
        );
      })}
    </div>
  );
};

export default AppliedJobs;
