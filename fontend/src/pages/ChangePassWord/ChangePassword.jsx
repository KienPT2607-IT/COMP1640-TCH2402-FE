import React from "react";
import './ChangPassword.css';

const ChangePassword = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>COMP1640</h1>
                <h6>Please enter a new password for...</h6>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password Confirm" required />
                </div>
                <button type="submit">Change</button>
            </form>
        </div>
    )
}

export default ChangePassword;