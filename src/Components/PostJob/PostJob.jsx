import React from "react";
import { useState, useContext } from "react";
import { JobContext } from "../Context/JobContext";
import "./PostJob.css";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    experience: {
      min: 0,
      max: 0,
    },
    skills: "",
    jobType: "IT",
  });
  const { unApprovedJobs, setUnApprovedJobs } = useContext(JobContext);

  const formDataOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "minimum") {
      setFormData((prev) => ({
        ...prev,
        experience: {
          ...prev.experience,
          min: Number(value),
        },
      }));
    } else if (name === "maximum") {
      setFormData((prev) => ({
        ...prev,
        experience: {
          ...prev.experience,
          max: Number(value),
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const skillsArr = formData.skills.split(",").map((skill) => skill.trim());

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
      experience:{
        min:0,
        max:0
      },
      
      skills: "",
      jobType:"IT"
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
          type="number"
          name="minimum"
          placeholder="Minimum Experience required"
          value={formData.experience.min}
          onChange={(e) => formDataOnChange(e)}
        />
        <input
          type="number"
          name="maximum"
          placeholder="Maximum Experience required"
          value={formData.experience.max}
          onChange={(e) => formDataOnChange(e)}
        />
        <input
          type="text"
          name="skills"
          placeholder="skills"
          value={formData.skills}
          onChange={(e) => formDataOnChange(e)}
        />
        <div className="radio-btns">
          <label className="radio-label">
            <input
              type="radio"
              name="jobType"
              value="IT"
              checked={formData.jobType === "IT"}
              onChange={formDataOnChange}
            />
            IT
          </label>

          <label className="radio-label">
            <input
              type="radio"
              name="jobType"
              value="NON-IT"
              checked={formData.jobType === "NON-IT"}
              onChange={formDataOnChange}
            />
            NON-IT
          </label>
        </div>
        <button type="submit">Submit for Approval</button>
      </form>
    </div>
  );
};

export default PostJob;
