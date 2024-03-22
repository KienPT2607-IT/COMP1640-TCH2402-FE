import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Gửi yêu cầu đăng nhập đến backend
      const response = await axios.post('http://localhost:8000/users/login', {
        email: email,
        password: password
      });

      // Kiểm tra xem token có được trả về từ backend không
      if (response.data.token) {
        // Lưu trữ token vào local storage để sử dụng trong các yêu cầu sau này
        localStorage.setItem('token', response.data.token);
        
        // Chuyển hướng người dùng đến trang chính sau khi đăng nhập thành công
        window.location.href = '/register'; // Thay đổi '/home' thành URL của trang chính của bạn
      } else {
        setErrorMessage('Token không hợp lệ.');
      }
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Đã có lỗi xảy ra:', error);
      setErrorMessage('Đã có lỗi xảy ra khi đăng nhập.');
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Mật khẩu:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Đăng nhập</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default LoginForm;
