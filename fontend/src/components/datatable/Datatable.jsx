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

  // useEffect(() => {
  //   const token = sessionStorage.getItem('x-auth-token');
  //   console.log("Token:", token);
  //   if (token) {
  //     const config = {
  //       headers: {
  //         'x-auth-token': token
  //       }
  //     };
  //     console.log("Config:", config);
  //     axios.get('https://comp1640-tch2402-be.onrender.com/users', config) // Sửa URL endpoint để phù hợp với endpoint của bạn
  //       .then(response => {
  //         console.log("Response:", response.data.data); // Dữ liệu trả về từ server được lưu trong response.data.data
  //         setUsers(response.data.data); // Lưu dữ liệu người dùng vào state
  //       })
  //       .catch(error => console.error("Error:", error));
  //   }
  // }, []);



  return (
    <div className="datatable-container">
      <h1>User Data</h1>
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
            <th>Edit</th>
            <th>Delete</th>
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
              <td>{user.profile_picture}</td>
              <td>{user.registration_date}</td>
              <td>{user.account_status ? 'Active' : 'Inactive'}</td>
              <td>{user.faculty}</td>
              <td>{user.role}</td>
              <td><Link to={`/edit/${user._id}`} className="edit-button">Edit</Link></td>
              <td><Link to={`/delete/${user._id}`} className="delete-button">Delete</Link></td>
              <td><Link to={`/users/${user._id}`} className="view-button">View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Datatable;
