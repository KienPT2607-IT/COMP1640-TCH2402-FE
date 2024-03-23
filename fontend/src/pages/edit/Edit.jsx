import React, { useState } from "react";
import "./edit.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Edit = ({ userRows }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [file, setFile] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleUserClick = (userId) => {
    const user = userRows.find((user) => user.id === userId);
    setSelectedUser(user);
  };

  const handleChange = (e) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Updated user data:", selectedUser);
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
                  value={selectedUser?.role || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="department">Department:</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={selectedUser?.department || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={selectedUser?.name || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={selectedUser?.email || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={selectedUser?.password || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="dob">DOB:</label>
                <DatePicker
                  id="dob"
                  name="dob"
                  selected={selectedDate}
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
