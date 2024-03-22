import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RegisterAccount() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [faculty, setFaculty] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Nếu không có token, chuyển hướng người dùng đến trang đăng nhập
      window.location.href = '/login';
    }
  }, []); // Sử d

  const handleRegister = async () => {
    try {
        const token = localStorage.getItem('token');
      if (password !== confirmPassword) {
        setErrorMessage("Mật khẩu xác nhận không khớp");
        return;
      }

      const response = await axios.post("http://localhost:8000/users/create-user", {
        full_name: fullName,
        email: email,
        password: password,
        dob: dob,
        gender: gender,
        phone_number: phoneNumber,
        profile_picture: profilePicture,
        faculty: faculty,
        role: role,
      },
        {
            headers: {
              Authorization: `Bearer ${token}`
            }
    }
      );

      console.log('Đăng ký thành công!', response.data);
      // Xử lý chuyển hướng hoặc hiển thị thông báo đăng ký thành công tại đây
    } catch (error) {
      console.error('Đăng ký thất bại:', error.response.data.message);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="register-page">
      <h2>Đăng ký</h2>
      <div className="register-form">
        <div className="form-group">
          <label htmlFor="fullName">Họ và tên:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Ngày sinh:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Giới tính:</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Số điện thoại:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profilePicture">Ảnh đại diện:</label>
          <input
            type="text"
            id="profilePicture"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="faculty">Khoa:</label>
          <input
            type="text"
            id="faculty"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Vai trò:</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <button onClick={handleRegister}>Đăng ký</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default RegisterAccount;
