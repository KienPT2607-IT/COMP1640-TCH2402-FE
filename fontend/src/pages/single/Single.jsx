import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import userApi from "../../api/userApi";

const Single = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Lấy thông tin tài khoản từ sessionStorage khi component được render
        const token = sessionStorage.getItem('x-auth-token');
        if (token) {
            // Gọi API để lấy thông tin tài khoản dựa trên token
            userApi.getDetail(token)
                .then(response => {
                    // Lưu thông tin tài khoản vào state để hiển thị
                    setUserData(response);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);

    return (
        <div className="single">
            <Navbar />
            <div className="singleContainer">
                <Sidebar />
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
                        {userData ? (
                            <tr>
                                <td>{userData.full_name}</td>
                                <td>{userData.email}</td>
                                <td>{userData.dob}</td>
                                <td>{userData.phone_number}</td>
                                <td>{userData.gender ? 'Male' : 'Female'}</td>
                                <td>{userData.profile_picture}</td>
                                <td>{userData.registration_date}</td>
                                <td>{userData.account_status ? 'Active' : 'Inactive'}</td>
                                <td>{userData.faculty}</td>
                                <td>{userData.role}</td>
                            </tr>
                        ) : (
                            <tr>
                                <td colSpan="10">Loading...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Single;
