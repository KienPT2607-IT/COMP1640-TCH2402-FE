import React from "react";
import "./detail.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { userRows } from "../../datatablesource";

const Detail = () => {
  const { userId } = useParams();
  const user = userRows.find((user) => user.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (

    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={user.img}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Date of birth:</span>
                  <span className="itemValue">{user.DOB}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{user.role}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">sSatus:</span>
                  <span className="itemValue">{user.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
//     <div className="list">
//       <Sidebar/>
//       <div className="listContainer">
//         <Navbar/>
// <div>
//       <h2>User Details</h2>
//       <div>
//         <p><strong>ID:</strong> {user.id}</p>
//         <p><strong>Username:</strong> {user.username}</p>
//         <p><strong>Status:</strong> {user.status}</p>
//         <p><strong>Department:</strong> {user.department}</p>
//         <p><strong>Role:</strong> {user.role}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>DOB:</strong> {user.DOB}</p>
//         {/* Add other fields as needed */}
//       </div>
//     </div>      </div>
//     </div>
  );
};

export default Detail;