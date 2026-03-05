import React, { useState } from 'react'
import './JobBoard.css'
import JobItem from '../JobItem/JobItem'
import { useContext } from "react";
import { JobContext } from "../Context/JobContext";

const JobBoard = ({user,isLoggedIn,search}) => {

  const { jobs, setJobs } = useContext(JobContext);

  return (
    <div className='job-board'>
       {jobs.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase())).map((job,index)=>{
        return(
             <JobItem user={user} job={job} key={index} isLoggedIn={isLoggedIn}/>
        )
       })}
    </div>
  )
}

export default JobBoard