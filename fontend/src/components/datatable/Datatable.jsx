import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./datatable.css";
import apiClient from "../../api/apiClient";
import userApi from "../../api/userApi";

const Datatable = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [userApi, setUserApi] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const token = apiClient.getToken(); // Lấy token từ sessionStorage
        const response = await userApi.getAll(params, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);
        setUserApi(response.data);
      } catch (error) {
        handleError(error);
      }
    };
   fetchUser();
  }, []);

  const handleError = (error) => {
    if (error.response) {
      setError(`Error: ${error.response.status} - ${error.response.data.message}`);
    } else if (error.request) {
      setError("Error: No response received from the server");
    } else {
      alert("Error: Request failed to reach the server");
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = apiClient.getToken(); // Lấy token từ sessionStorage
      await axios.delete(`https://comp1640-tch2402-be.onrender.com/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserData(prevUserData => prevUserData.filter((user) => user.id !== id));
    } catch (error) {
      setError("Error deleting user");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Full Name",
      width: 230,
      renderCell: (params) => (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.full_name}
        </div>
      ),
    },
    { field: "email", headerName: "Email", width: 230 },
    { field: "department", headerName: "Department", width: 100 },
    { field: "role", headerName: "Role", width: 100 },
    { field: "DOB", headerName: "DOB", width: 100 },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div className="cellAction">
          <Link to={`/users/view/${params.row.id}`} style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
          <Link to={`/users/edit/${params.row.id}`} style={{ textDecoration: "none" }}>
            <div className="editButton">Edit</div>
          </Link>
          <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
            Delete
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={userData}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[5]}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Datatable;
