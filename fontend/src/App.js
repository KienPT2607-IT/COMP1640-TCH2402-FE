import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm/LoginForm';
import RegisterAccount from './RegisterAccount/RegisterAccount';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ChangePassword from './ChangePassWord/ChangePassword';
import OtpForm from './OtpForm/OtpForm';

import {
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><LoginForm/></div>
  },
  {
    path: '/register',
    element: <div><RegisterAccount/></div>
  },
  {
    path: '/forgotPassword',
    element: <div><ForgotPassword/></div>
  },
  {
    path: '/changePassword',
    element: <div><ChangePassword/></div>
  },
  {
    path: '/otpForm',
    element: <div><OtpForm/></div>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
