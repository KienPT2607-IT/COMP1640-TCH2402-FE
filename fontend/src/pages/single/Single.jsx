import React, { useState, useEffect } from "react";
import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Single = ({ location }) => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    // Lấy thông tin người dùng từ sessionStorage 
    const storedUserProfile = JSON.parse(sessionStorage.getItem("user"));
    const userProfileFromLocation = location?.state?.userProfile; // Kiểm tra location tồn tại trước khi truy cập state
    if (userProfileFromLocation) {
      setUserProfile(userProfileFromLocation);
    } else if (storedUserProfile) {
      setUserProfile(storedUserProfile);
    }
  }, [location]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Link
              to={{
                pathname: "/users/edit",
                state: { userProfile: userProfile },
              }}
              className="editButton"
            >
              Edit
            </Link>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={userProfile.profile_picture || "default-profile-picture-url"}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{userProfile.full_name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{userProfile.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Password:</span>
                  <span className="itemValue">{userProfile.password}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">DOB: </span>
                  <span className="itemValue">{userProfile.dob}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone Number:</span>
                  <span className="itemValue">{userProfile.phone_number}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Gender:</span>
                  <span className="itemValue">{userProfile.gender ? 'Male' : 'Female'}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Registration Date:</span>
                  <span className="itemValue">{userProfile.registration_date}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Account Status:</span>
                  <span className="itemValue">{userProfile.account_status ? 'Active' : 'Inactive'}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Faculty:</span>
                  <span className="itemValue">{userProfile.faculty}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{userProfile.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
