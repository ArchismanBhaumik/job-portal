import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./JobItem.css";
import { JobContext } from "../Context/JobContext";

const JobItem = ({ job, user, isLoggedIn }) => {
  const navigate = useNavigate();
  const { jobs, setJobs, unApprovedJobs, setUnApprovedJobs } =
    useContext(JobContext);

  const applyJob = () => {
    setJobs((prevJobs) =>
      prevJobs.map((item) =>
        item.jobId === job.jobId ? { ...item, applied: !item.applied } : item
      )
    );
  };

  const approveJob = () => {
    if (job.approved) {
      setJobs((prev) => prev.filter((item) => item.jobId !== job.jobId));
      setUnApprovedJobs((prev) => [...prev, { ...job, approved: false }]);
    } else {
      setUnApprovedJobs((prev) =>
        prev.filter((item) => item.jobId !== job.jobId)
      );

      setJobs((prev) => [...prev, { ...job, approved: true }]);
    }

    navigate("/");
  };

  return (
    <div className="job-card">
      <div className="job-header">{job.title}</div>

      <div className="job-content">
        <p className="experience">
          <strong>Experience:</strong> {job.experience.min} -  {job.experience.max} Years
        </p>

        <div className="skills-box">
          <strong>Skills:</strong>
          <div className="skills-list">
            {job.skills.map((skill, index) => (
              <span className="skill-pill" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {isLoggedIn && user === "employee" && (
          <button className="primary-btn" onClick={applyJob}>
            {job.applied ? "Applied" : "Apply"}
          </button>
        )}

        {isLoggedIn && user === "Hr" && (
          <button className="primary-btn" onClick={approveJob}>
            {job.approved ? "Approved" : "Approve"}
          </button>
        )}
      </div>
    </div>
  );
};

export default JobItem;