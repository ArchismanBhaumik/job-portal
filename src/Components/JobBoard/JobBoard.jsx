import React, { useState } from "react";
import "./JobBoard.css";
import JobItem from "../JobItem/JobItem";
import { useContext } from "react";
import { JobContext } from "../Context/JobContext";
import search_icon from "../../assets/search.png";
import Filters from "../Filters/Filters";

const JobBoard = ({ user, isLoggedIn, search, setSearch }) => {
  const { jobs, setJobs } = useContext(JobContext);
  const [jobFilter, setJobFilter] = useState(null);
  console.log(jobFilter);
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="job-board">
      <div className="search-box">
        <input
          type="text"
          placeholder="search jobs"
          value={search}
          onChange={handleChange}
        />
        <img src={search_icon} alt="" />
      </div>
      <div className="jobs-filter">
        <Filters setJobFilter={setJobFilter} />
        <div className="jobs">
          {jobs
            .filter((item) => {
              // TEXT SEARCH
              const matchesSearch = item.title
                .toLowerCase()
                .includes(search.toLowerCase());

              // YOE FILTER
              const matchesYOE =
                !jobFilter ||
                (item.experience.min >= jobFilter.min &&
                  item.experience.max <= jobFilter.max);

              // JOB TYPE FILTER
              const matchesJobType =
                !jobFilter ||
                !jobFilter.job || // if user didn't pick IT/NON-IT yet
                item.jobType === jobFilter.job;

              return matchesSearch && matchesYOE && matchesJobType;
            })
            .map((job, index) => (
              <JobItem
                user={user}
                job={job}
                key={index}
                isLoggedIn={isLoggedIn}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
