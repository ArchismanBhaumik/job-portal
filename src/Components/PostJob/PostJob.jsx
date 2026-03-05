import React from "react";
import { useState,useContext } from "react";
import { JobContext } from "../Context/JobContext";
import "./PostJob.css";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    experience: "",
    skills: "",
  });
  const {unApprovedJobs,setUnApprovedJobs} = useContext(JobContext);

  const formDataOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
  e.preventDefault();

  const skillsArr = formData.skills
    .split(",")
    .map((skill) => skill.trim());

  const newJob = {
    jobId: Date.now(),
    ...formData,
    skills: skillsArr,
    applied: false,
    approved: false,
  };
  setUnApprovedJobs((prev) => [...prev, newJob]);

  window.alert("Job sent for HR approval");

  setFormData({
    title: "",
    experience: "",
    skills: "",
  });
};
  return (
    <div className="post-job-wrapper">
      <form action="" className="form-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={(e) => formDataOnChange(e)}
        />
        <input
          type="text"
          name="experience"
          placeholder="Experience required"
          value={formData.experience}
          onChange={(e) => formDataOnChange(e)}
        />
        <input
          type="text"
          name="skills"
          placeholder="skills"
          value={formData.skills}
          onChange={(e) => formDataOnChange(e)}
        />
        <button type="submit">Submit for Approval</button>
      </form>
    </div>
  );
};

export default PostJob;
