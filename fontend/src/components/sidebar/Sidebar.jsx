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

const checkRole = (role) => {
  switch (role) {
    case 'Admin':
      return ['Users', 'EventAdmin', 'Profile', 'Logout'];
    case 'Student':
      return ['Event', 'Profile', 'Logout'];
    case 'Guest':
      return ['Dashboard'];
    case 'Marketing Coordinator':
      return ['Event', 'Profile', 'Logout'];
    case 'Marketing Manager':
      return ['Event', 'Dashboard', 'Profile', 'Logout'];
    default:
      return [];
  }
}

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const userData = JSON.parse(sessionStorage.getItem('user'));
  const userRole = userData ? userData.role : '';

  const allowedRoutes = checkRole(userRole);

  const handleLogout = () => {
    // Remove token from local storage
    sessionStorage.removeItem("x-auth-token");
  };

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
          {allowedRoutes.includes('Dashboard') && (
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>
          )}
          {allowedRoutes.includes('Event') && (
            <Link to="/event" style={{ textDecoration: "none" }}>
              <li>
                <EventIcon className="icon" />
                <span>Event</span>
              </li>
            </Link>
          )}
          <p className="title">Management</p>
          {allowedRoutes.includes('Users') && (
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Users</span>
              </li>
            </Link>
          )}
          {allowedRoutes.includes('EventAdmin') && (
            <Link to="/campaigns" style={{ textDecoration: "none" }}>
              <li>
                <NewspaperIcon className="icon" />
                <span>Event Admin</span>
              </li>
            </Link>
          )}
          <p className="title">USER</p>
          {allowedRoutes.includes('Profile') && (
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Profile</span>
              </li>
            </Link>
          )}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li onClick={handleLogout} style={{ cursor: "pointer" }}>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
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

