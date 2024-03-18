import React from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';
import { userHistory } from "react-router-dom"
import { useEffect } from 'react'

const LoginForm = () => {
    useEffect(() => {
        axios.get("https://reqres.in/api/login").then(data => {
            console.log(">>> check data axios: ", data)
        })
    }, []);


    return (
        <div className="wrapper">
            <form action="">
                <h1>COMP1640</h1>
                <h6>Welcome Back, Please login to your account</h6>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="/forgotPassword">Forgot password?</a>
                </div>
                <link rel="stylesheet" href="/home" />
                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have account? <a href="/Register ">Register</a> </p>
                </div>
            </form>
        </div>
    )
};

export default LoginForm;