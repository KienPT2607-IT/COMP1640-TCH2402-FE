import React from "react";
import './RegisterAccount.css';
import { FaUser, FaLock } from "react-icons/fa";

const RegisterAccount = () => {
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