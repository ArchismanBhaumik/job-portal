import React, { useEffect } from "react";
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import user_icon from '../../assets/user.svg'

const Navbar = ({setOpenModal,isLoggedIn,setisLoggedIn,setIsSidebarOpen,user,setuser}) => {
  const openModalFn=()=>{
    setOpenModal((prev)=>!prev)
  }
  const logOut = () =>{
    setisLoggedIn((prev)=>!prev);
    setIsSidebarOpen(false);
    setuser('');
  } 

  return (
    <nav>
     <div> <FontAwesomeIcon icon={faBars} onClick={()=>{setIsSidebarOpen(true)}}/></div>
      <input type="text" placeholder="search jobs"/>
      <div className="user-div">
        <button className={isLoggedIn?'d-none':''} onClick={()=>openModalFn()}>Login</button>
        <button className={isLoggedIn?'':'d-none'} onClick={()=>logOut()}>Logout</button>
       <div className="user-info"> 
        <img className={isLoggedIn?'':'d-none'} src={user_icon} alt="" height={30} width={30}/>
        <p className={isLoggedIn?'':'d-none'}>{user}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;