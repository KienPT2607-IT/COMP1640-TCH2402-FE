import React from "react";
import './ForgotPassword.css';
import axios from 'axios';
import { useHistory } from "react-router-dom"
import { useEffect } from 'react';
const ForgotPassword = () => {
    useEffect(() => {
        axios.post("/users/forgot-password").then(data => {
            console.log(">>> check data axios: ", data)
        })
    }, []);

    return (
        <div className="wrapper">
            <form action="">
                <h1>COMP1640</h1>
                <h6>Please enter your email account</h6>
                <div className="input-box">
                    <input type="text" placeholder="Email" required />
                </div>
                <button type="submit">Send OTP code</button>
            </form>
        </div>
    )
}

export default ForgotPassword;