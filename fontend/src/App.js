import Home from "./pages/home/Home";
import LoginForm from "./pages/LoginForm/LoginForm";
import ChangePassWord from "./pages/ChangePassWord/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import RegisterAccount from "./pages/RegisterAccount/RegisterAccount";

import OtpForm from "./pages/OtpForm/OtpForm";
import List from "./pages/list/List";
import ListCampaign from "./pages/listCampaign/ListCampaign";
import ListDepartment from "./pages/listDepartment/ListDepartment";
import Campaign from "./pages/campaign/Campaign";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NewCampaign from "./pages/newCampaign/NewCampaign";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { magazinesInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./style/dark.css";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route path="register" element={<RegisterAccount />} />
            <Route path="otp" element={<OtpForm />} />
            <Route path="changepassword" element={<ChangePassWord />} />
            <Route path="campaign">
              <Route index element={<Campaign />} />
              {/* <Route path="campaign" element={<Campaign />} /> */}
              {/* <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              /> */}
            </Route>
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="campaigns">
              <Route index element={<ListCampaign />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="newCampaign"
                element={<NewCampaign  title="Add New Campaign" />}
              />
            </Route>
            <Route path="departments">
              <Route index element={<ListDepartment />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
