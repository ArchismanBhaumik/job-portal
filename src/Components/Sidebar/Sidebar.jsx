import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css'
const Sidebar = ({setIsSidebarOpen,user,isLoggedIn}) => {
const navigate = useNavigate();
const navigateTo=(path)=>{
    navigate(path);
    setIsSidebarOpen(false);
}
  return (
    <div className='sidebar'>
        <div className="close-sidebar">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        <ul>
            <li onClick={()=>navigateTo('/')}>Current Openings</li>
            <li className={(isLoggedIn && user === 'employee')?'':'d-none'} onClick={()=>navigateTo('/applied-job')}>Applied Jobs</li>
            <li className={(isLoggedIn && user === 'manager')?'':'d-none'} onClick={()=>navigateTo('/post-job')}>Post New Job</li>
            <li className={(isLoggedIn && user === 'Hr') ?'':'d-none'} onClick={()=>navigateTo('/approve-job')}>Approve Jobs</li>
        </ul>
    </div>
  )
}

export default Sidebar