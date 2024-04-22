import Home from "./pages/home/Home";
import LoginForm from "./pages/LoginForm/LoginForm";
import ChangePassWord from "./pages/ChangePassWord/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import RegisterAccount from "./pages/RegisterAccount/RegisterAccount";
import OtpForm from "./pages/OtpForm/OtpForm";
import List from "./pages/list/List";
import ListCampaign from "./pages/listCampaign/ListCampaign";
import Campaign from "./pages/campaign/Campaign";
import Single from "./pages/single/Single";
import Edit from "./pages/edit/Edit";
import NewEvent from "./pages/newEvent/NewEvent";
import Detail from "./pages/viewDetail/Detail";
import Event from "./pages/event/Event";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./style/dark.css";
import EditCampaign from "./pages/editCampaign/EditCampaign";
import ViewDetailCampaign from "./pages/viewDetailCampaign/ViewDetailCampaign";
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
            </Route>
            <Route path="event">
              <Route index element={<Event />} />
              <Route
                path="newevent"
                element={<NewEvent />}
              />
            </Route>
            <Route path="users">
              <Route index element={<List />} />
              <Route path="edit" element={<Edit />} />
              <Route
                path="new"
                element={<New />}
              />
            </Route>
            <Route path="profile">
            <Route index element={<Single />} />
              </Route> 
            <Route path="campaigns">
              <Route index element={<ListCampaign />} />
              <Route path="edit/:id" element={<EditCampaign />} />
              <Route path="view/:campaignId" element={<ViewDetailCampaign />} />
              </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
