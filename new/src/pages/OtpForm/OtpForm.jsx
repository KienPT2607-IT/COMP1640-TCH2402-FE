import React, { useState, useRef } from 'react';
import './OtpForm.css'; // File CSS để tùy chỉnh giao diện

const OtpForm = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Sử dụng một mảng để lưu trữ mỗi chữ số của OTP
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const inputOtp = e.target.value.replace(/\D/g, ''); // Loại bỏ các ký tự không phải số
    const newOtp = [...otp];
    newOtp[index] = inputOtp;
    setOtp(newOtp);

    // Tự động chuyển sang ô nhập tiếp theo sau khi nhập 1 ký tự
    if (inputOtp !== '' && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Di chuyển đến ô nhập trước đó nếu nhấn phím Backspace trong ô trống
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className="otp-container">
      <h2>COMP1640</h2>
      <h6>Please the OTP code sent to ...</h6>
      <div className="otp-input">
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            type="text"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength="1"
            pattern="[0-9]*"
            inputMode="numeric"
            required
          />
        ))}
      </div>
      <h6>You didn't get the code? <a href='#'>Resend the code</a></h6>
      <button type="submit">Send OTP code</button>
    </div>
  );
};

export default OtpForm;
