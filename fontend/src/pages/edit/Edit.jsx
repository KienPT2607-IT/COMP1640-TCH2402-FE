import React, { useState, useEffect } from "react";
import "./edit.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import userApi from "../../api/userApi";

const Edit = () => {
  const [userProfile, setUserProfile] = useState({});
  const [file, setFile] = useState("");

  useEffect(() => {
    const storedUserProfile = JSON.parse(sessionStorage.getItem("user"));
    setUserProfile(storedUserProfile);
  }, []);

  const handleChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleFacultyChange = (e) => {
    setUserProfile({
      ...userProfile,
      faculty: e.target.value,
    });
  };

  const handleDateChange = (value) => {
    setUserProfile({
      ...userProfile,
      dob: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call API to update user profile
      await userApi.putUserUpdate(userProfile);
      console.log("User profile updated successfully");
    } catch (error) {
      console.error("Failed to update user profile:", error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="imageContainer">
              <img
                className="userImage"
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="role">Role:</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  disabled
                  value={userProfile.role || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="faculty">Faculty:</label>
                <input
                  type="text"
                  id="faculty"
                  name="faculty"
                  disabled
                  value={userProfile.faculty }
                  onChange={handleFacultyChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="full_name">Full Name:</label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={userProfile.full_name || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  disabled
                  value={userProfile.email || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="phoneNumber">Phone number:</label>
                <input
                  type="string"
                  id="phoneNumber"
                  name="phone_number"
                  value={userProfile.phone_number || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="dob">DOB:</label>
                <DatePicker
                  id="dob"
                  name="dob"
                  selected={userProfile.dob}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
