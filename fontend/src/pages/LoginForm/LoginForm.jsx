import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleApi = (e) => {
        e.preventDefault(); // Ngăn chặn sự kiện mặc định của form
        if (!email || !password) {
            alert('Please enter email and password');
            return;
        }
        axios.post('https://comp1640-tch2402-be.onrender.com/users/login', {
            email: email,
            password: password
        })
            .then(result => {
                // const { role } = result.data; // Giả sử API trả về vai trò của người dùng
                const role = result['data']["data"]["role"].name;

                // console.log(result['data']["data"]["role"].name) // Sử dụng giả định, bạn cần thay đổi thành lấy từ dữ liệu API
                if (role === 'Admin') {
                    alert('Admin Login Success');
                    navigate('/'); // Chuyển hướng đến trang dashboard nếu là admin
                } else if (role === 'Student') {
                    alert('Student Login Success');
                    navigate('/event'); // Chuyển hướng đến trang event nếu là user
                } else if (role === 'Guest') {
                    alert('Guest Login Success');
                    navigate('/event'); // Chuyển hướng đến trang event nếu là user
                } else if (role === 'Marketing Coordinator') {
                    alert('Maketing Coordinator Login Success');
                    navigate('/event'); // Chuyển hướng đến trang event nếu là user
                } else if (role === 'Marketing Manager') {
                    alert('Maketing Manager Login Success');
                    navigate('/event'); // Chuyển hướng đến trang event nếu là user
                } else {
                    alert('Unknown role');
                }
            })
            .catch(err => {
                alert('Account error');
                console.log(err);
            });
    }

    return (
        <div className="wrapper">
            <form>
                <h1>COMP1640</h1>
                <h6>Welcome Back, Please login to your account</h6>
                <div className="input-box">
                    <input type="email" placeholder="Email" value={email} onChange={handleEmail} required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" value={password} onChange={handlePassword} required />
                    <FaLock className="icon" />
                </div>

                {error && <p className="error">{error}</p>}

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="/forgotPassword">Forgot password?</a>
                </div>
                <button type="submit" onClick={handleApi}>Login</button>

                <div className="register-link">
                    <p>Don't have account? <a href="/Register ">Register</a> </p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
