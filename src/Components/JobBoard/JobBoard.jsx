import React, { useState } from 'react'
import './JobBoard.css'
import JobItem from '../JobItem/JobItem'
import { useContext } from "react";
import { JobContext } from "../Context/JobContext";
import search_icon from '../../assets/search.png'

const JobBoard = ({user,isLoggedIn,search,setSearch}) => {

  const { jobs, setJobs } = useContext(JobContext);
  const handleChange=(e)=>{
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  return (
    <div className='job-board'>
       <div className='search-box'>
        <input type="text" placeholder="search jobs" value={search} onChange={handleChange}/>
        <img src={search_icon} alt="" />
       </div>
       {jobs.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase())).map((job,index)=>{
        return(
             <JobItem user={user} job={job} key={index} isLoggedIn={isLoggedIn}/>
        )
       })}
    </div>
  )
}

export default JobBoard