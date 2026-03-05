import React, { useEffect } from 'react'
import { useState,useContext } from "react";
import JobItem from '../JobItem/JobItem';
import { JobContext } from "../Context/JobContext";
import './ApproveJob.css'
const ApproveJob = ({user,isLoggedIn}) => {
   const {unApprovedJobs,setUnApprovedJobs} = useContext(JobContext);
   console.log("unapproved::::::",unApprovedJobs)
  return (
    <div className='job-board'>
       {unApprovedJobs.map((job,index)=>{
        return(
             <JobItem user={user} job={job} key={index} isLoggedIn={isLoggedIn}/>
        )
       })}
    </div>
  )
}

export default ApproveJob