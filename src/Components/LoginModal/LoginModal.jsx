import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./LoginModal.css";

const LoginModal = ({ openModal, setOpenModal, setLoginInfo, isUserValid }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);
  const loginSubmit = (e) => {
    e.preventDefault();
    setLoginInfo(formData);
    if (isUserValid === "invalid") {
      setShowError(true);
    } else if (isUserValid === "valid") {
      setShowError(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
  if (!openModal) {
    setFormData({ email: "", password: "" });
    setShowError(false);
  }
}, [openModal]);
  return (
    <div className={openModal ? `login-wrapper` : "d-none"}>
      <div className="login-modal">
        <div className="close-modal">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setOpenModal((prev) => !prev)}
          />
        </div>
        <form action="" onSubmit={loginSubmit}>
          <div className="input-div">
            <input
              type="email"
              placeholder="Type Your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-div">
            <input
              type="password"
              placeholder="Type your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="btn-div">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className={showError ? "" : "d-none"}>
          <span className="invalid-user">User is invalid!</span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
