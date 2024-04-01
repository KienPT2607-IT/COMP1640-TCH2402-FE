import React, { useState } from "react";
import './RegisterAccount.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterAccount = () => {
    const[full_name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleFullName = (e) => {
        setFullName(e.target.value);
    }
    const handlePasswodConfirm= (e) => {
        setPasswordConfirm(e.target.value);
    }

    const handleApi = (e) => {
        e.preventDefault(); // Ngăn chặn sự kiện mặc định của form
        if (!email || !password || !full_name) {
            alert('Please enter Information');
            return;
        }
        axios.post('https://comp1640-tch2402-be.onrender.com/users/register', {
            email: email,
            password: password
        })

    }

    return (
        <div className="register">
            <form action="">
                <h1>Create new Account</h1>
                <h6>Please enter complete information to register for a new account</h6>
                <div className="regis-box">
                    <input type="text" placeholder="Full Name" required />
                </div>
                <div className="regis-box">
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="regis-box">
                    <input type="password" placeholder="Pass word" required />
                </div>
                <div className="regis-box">
                    <input type="password" placeholder="Password Confirm" required />
                </div>
                <div className="regis-button">
                    <button className="button">Register Account</button>
                    <button className="button"> Cancel</button>
                </div>

            </form>
        </div>
    )
}

export default RegisterAccount;