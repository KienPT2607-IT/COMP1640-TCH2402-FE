import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CampaignIcon from '@mui/icons-material/Campaign';


import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">COMP1640</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/campaign" style={{ textDecoration: "none" }}>
            <li>
              <CampaignIcon className="icon" />
              <span>Campaign</span>
            </li>
          </Link>
          <Link to="/event" style={{ textDecoration: "none" }}>
            <li>
              <EventIcon className="icon" />
              <span>Event</span>
            </li>
          </Link>
          <p className="title">Management</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/campaigns" style={{ textDecoration: "none" }}>
            <li>
              <NewspaperIcon className="icon" />
              <span>Campaign</span>
            </li>
          </Link>
          <Link to="/departments" style={{ textDecoration: "none" }}>
            <li>
              <NewspaperIcon className="icon" />
              <span>Department</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
