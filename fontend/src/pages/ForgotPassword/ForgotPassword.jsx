import React from "react";
import './ForgotPassword.css';

const ForgotPassword = () => {
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