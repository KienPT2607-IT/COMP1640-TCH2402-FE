import React, { useState, useEffect } from "react";
import "./edit.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from 'axios';
import { Link } from "react-router-dom";

const Edit = () => {
  const [userProfile, setUserProfile] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const token = sessionStorage.getItem('x-auth-token');
    if (token) {
      axios.get('http://localhost:3000/users/update', {
        headers: {
          'x-auth-token': token
        }
      })
      .then(response => {
        setUserProfile(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
    } else {
      console.error('Token not found');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phoneNumber") {
      setPhoneNumber(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreviewImage(URL.createObjectURL(selectedFile)); // Hiển thị hình ảnh đã chọn
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("phone_number", phoneNumber);
      formData.append("password", password);
      if (file) {
        formData.append("profile_picture", file);
      }
  
      const token = sessionStorage.getItem('x-auth-token');
      if (!token) {
        console.error('Token not found');
        return; // Exit early if token is not found
      }
  
      const response = await axios.put(`http://localhost:3000/users/update`, formData, {
        headers: {
          'x-auth-token': token,
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });
      console.log("Update response:", response);
  
      // Update userProfile with new profile picture URL
      setUserProfile(prevState => ({
        ...prevState,
        profile_picture: response.data.data.profile_picture // Assuming the response contains new profile picture URL
      }));
    } catch (error) {
      console.error("Error updating user:", error);
      // Xử lý lỗi nếu cần
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
                src={previewImage || (userProfile.profile_picture ? userProfile.profile_picture : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg")}
                alt=""
              />
            </div>
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="phoneNumber">Phone number:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
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
