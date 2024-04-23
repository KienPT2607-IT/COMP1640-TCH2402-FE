import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './datatable.css';
import { Link } from 'react-router-dom'; // Thêm thư viện Link từ react-router-dom
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

          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.full_name}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.phone_number}</td>
              <td>{user.gender ? 'Male' : 'Female'}</td>
              <td><img style={{width: '50px'}} alt='' src={user.profile_picture }></img></td>
              <td>{user.registration_date}</td>
              <td>{user.account_status ? 'Active' : 'Inactive'}</td>
              <td>{user.faculty}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Datatable;
