import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm/LoginForm';
import RegisterAccount from './RegisterAccount/RegisterAccount';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ChangePassword from './ChangePassWord/ChangePassword';
import OtpForm from './OtpForm/OtpForm';
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import ListMagazine from "./pages/listMagazines/ListMagazine";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { magazinesInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./style/dark.css";

import {
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'

const router = createBrowserRouter([
  
  {
    path: '/register',
    element: <div><RegisterAccount/></div>
  },
  {
    path: '/login',
    element: <div><LoginForm/></div>
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
  },
  {
    path: '/',
    element: <div><Home/></div>
  },
  {
    path: '/magazines',
    element: <div><ListMagazine/></div>
  },
  {
    path: '/users',
    element: <div><List/></div>
  },
])

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}> 

    <div>
      <RouterProvider router={router}/>
    </div>
    </div>

  );
}

export default App;
