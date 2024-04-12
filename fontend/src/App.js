import Home from "./pages/home/Home";
import LoginForm from "./pages/LoginForm/LoginForm";
import ChangePassWord from "./pages/ChangePassWord/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import List from "./pages/list/List";
import Contribution from "./pages/contribution/Contribution";
import ListCampaign from "./pages/listCampaign/ListCampaign";
import Single from "./pages/single/Single";
import Edit from "./pages/edit/Edit";
import NewEvent from "./pages/newEvent/NewEvent";
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
            <Route path="changepassword" element={<ChangePassWord />} />
            <Route path="contribution">
            <Route index element={<Contribution />} />
              
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

            <Route path="contribution">
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
