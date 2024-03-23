import "./detail.css";
import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { userRows } from "../../datatablesource";

const Detail = () => {
  const { id } = useParams();
  const user = userRows.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div>
      <h2>User Details</h2>
      <div>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Status:</strong> {user.status}</p>
        <p><strong>Department:</strong> {user.department}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>DOB:</strong> {user.DOB}</p>
        {/* Add other fields as needed */}
      </div>
    </div>
      </div>
    </div>
  );
};

export default Detail;