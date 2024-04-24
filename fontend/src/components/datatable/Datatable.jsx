import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './datatable.css';
import { Link } from 'react-router-dom'; 
import userApi from '../../api/userApi';

function Datatable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userApi.getAll();
        console.log(response);
        setUsers(response.data)
      } catch (error) {
        console.log('Fail to fetch', error)
      }
    }
    fetchUsers();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return formattedDate;
  };

  return (
    <div className="datatable-container">
      <h1>User Data</h1>
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <table className="datatable">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Profile Picture</th>
            <th>Registration Date</th>
            <th>Account Status</th>
            <th>Faculty</th>
            <th>Role</th>
            <th>Status</th>
              <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.full_name}</td>
              <td>{user.email}</td>
              <td>{formatDate(user.dob)}</td>
              <td>{user.phone_number}</td>
              <td>{user.gender ? 'Male' : 'Female'}</td>
              <td><img style={{width: '50px'}} alt='' src={user.profile_picture }></img></td>
              <td>{formatDate(user.registration_date)}</td>
              <td>{user.account_status ? 'Active' : 'Inactive'}</td>
              <td>{user.faculty}</td>
              <td>{user.role}</td>
              <td>
                <select 
                    value={user.account_status ? 'Active' : 'Inactive'} 
                    onChange={(e) => {
                      console.log('Selected value:', e.target.value);
                      handleStatusChange(user._id, e.target.value === 'Active');
                    }}
                    style={{ color: user.account_status ? 'green' : 'red' }}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </td>
                <td>
                  <button className="edit-button" onClick={() => handleEdit(user._id)}>
                    Edit
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Datatable;
