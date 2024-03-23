import React from "react";
import "./viewDetailDepartment.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { departmentRows } from "../../dataDepartment";

const ViewDetailDepartment = () => {
  const { departmentId } = useParams();
  const department = departmentRows.find((department) => department.id === parseInt(departmentId));

  if (!department) {
    return <div>department not found</div>;
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
              <div className="details">
                <h1 className="itemTitle">{department.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">{department.description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailDepartment;