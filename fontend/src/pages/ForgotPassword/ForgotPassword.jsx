/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import './ForgotPassword.css';
import userApi from "../../api/userApi";


const ForgotPassword = () => {
    const [email, setEmail] = useState()

    const handleSendEmail = async () => {
        try {
            const response = await userApi.forgotPassword(email)
            console.log('reponse', response)
            if (response) {
                if (confirm("Đã gửi mật khẩu mới tới email của bạn. Kiểm tra email nhé!!!")) {
                    location.replace("/login");

                }
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <div className="wrapper">
            <h1>COMP1640</h1>
            <h6>Please enter your email account</h6>
            <div className="input-box">
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" required />
            </div>
            <button onClick={handleSendEmail} >Send new password</button>
        </div>
    )
}

export default ForgotPassword;