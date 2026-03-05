import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import PostJob from "../PostJob/PostJob";
import LoginModal from "../LoginModal/LoginModal";
import JobBoard from "../JobBoard/JobBoard";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
import ApproveJob from "../ApproveJob/ApproveJob";
import AppliedJobs from "../AppliedJobs/AppliedJobs";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [user, setuser] = useState("");
  const [isUserValid, setIsUserValid] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const returnUserProfile = () => {
    if (
      loginInfo.email === "employee@gmail.com" &&
      loginInfo.password === "employee"
    ) {
      setuser("employee");
      setOpenModal(false);
      setisLoggedIn(true);
      return "valid";
    } else if (
      loginInfo.email === "manager@gmail.com" &&
      loginInfo.password === "manager"
    ) {
      setuser("manager");
      setOpenModal(false);
      setisLoggedIn(true);
      return "valid";
    } else if (
      loginInfo.email === "hr@gmail.com" &&
      loginInfo.password === "hr"
    ) {
      setuser("Hr");
      setOpenModal(false);
      setisLoggedIn(true);
      return "valid";
    } else {
      return "invalid";
    }
  };

  useEffect(() => {
    setIsUserValid(returnUserProfile());
  }, [loginInfo]);

  useEffect(() => {
    if (!isLoggedIn) {
      setLoginInfo({
        email: "",
        password: "",
      });
      setIsUserValid("invalid");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <Navbar
        setOpenModal={setOpenModal}
        isLoggedIn={isLoggedIn}
        setisLoggedIn={setisLoggedIn}
        setIsSidebarOpen={setIsSidebarOpen}
        user={user}
        setuser={setuser}
      />
      <LoginModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        setLoginInfo={setLoginInfo}
        isUserValid={isUserValid}
      />
      <Routes>
        <Route path="/" element={<JobBoard user={user} isLoggedIn={isLoggedIn}/>} />
        <Route path="/applied-job" element={<AppliedJobs user={user} isLoggedIn={isLoggedIn} />} />
        <Route path="/post-job" element={<PostJob user={user} isLoggedIn={isLoggedIn} />} />
        <Route path="/approve-job" element={<ApproveJob user={user} isLoggedIn={isLoggedIn}/>} />
      </Routes>
      <div className={isSidebarOpen ? `sidebar-container` : "d-none"}>
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} user={user} isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
};

export default Home;
