import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./profile.css";
import { List, ListItem } from "@mui/material";
import {
  FaCalendar,
  FaImage,
  FaUser,
  FaUsers,
  FaLayerGroup,
} from "react-icons/fa";
import BottomNav from "./BottomNav";

const links = [
  { path: "/user-profile", label: "Profile", icon: <FaUser /> },
  { path: "/user-profile/add-event", label: "Events", icon: <FaCalendar /> },
  {
    path: "/user-profile/add-banner-images",
    label: "Banner",
    icon: <FaImage />,
  },
  { path: "/user-profile/add-members", label: "Members", icon: <FaUsers /> },
  { path: "/user-profile/add-units", label: "Units", icon: <FaLayerGroup /> },
];

const ProfilePage = () => {
  const location = useLocation();

  return (
    <div className="container-fluid d-flex flex-column flex-md-row min-vh-100 p-0 bg-profile">
      {/* Sidebar for larger screens */}
      <div className="col-md-3 ff-p d-none d-md-flex flex-column h-100">
        <List component="nav" className="list-group m-3 gap-2">
          {links.map((link) => (
            <ListItem
              key={link.path}
              className={`list-group-item rounded-3 c-pointer ${
                location.pathname === link.path ? "inner-box-shadow-danger" : ""
              }`}
            >
              <Link
                to={link.path}
                className={`d-flex align-items-center text-decoration-none w-100 py-2 ${
                  location.pathname === link.path
                    ? "fw-semibold text-red-pale"
                    : "text-blue-light"
                }`}
              >
                {link.icon}
                <span className="ms-2">{link.label}</span>
              </Link>
            </ListItem>
          ))}
        </List>
      </div>

      {/* Main content area */}
      <div className="col-md-9 p-md-2  px-sm-1 mt-sm-3 p-0">
        <div className="bg-white p-md-4 rounded-3 shadow-sm dvh100 overflow-auto position-relative ">
          <Outlet />
        </div>
      </div>

      {/* Bottom Navigation for smaller screens */}
      <div className="position-relative d-md-none w-100">
        {/* <BottomNavigation
          className="d-flex flex-row justify-content-around px-2 gap-2 align-items-center  w-100"
          sx={{
            position: "fixed",
            bottom: 0,
            background: "rgba(255,255,255,0.4)",
            backdropFilter:
              "blur(20px) saturate(180%) contrast(100%) brightness(100%)",
            zIndex: 4,
          }}
          value={activeTab}
          onChange={(event, newValue) => setActiveTab(newValue)}
        >
          {links.map((link) => (
            <BottomNavigationAction
              key={link.path}
              label={link.label}
              icon={link.icon}
              component={Link}
              to={link.path}
              value={link.path}
              sx={{
                color: activeTab === link.path ? "white" : "#324487",
                margin: activeTab === link.path ? "0rem" : "0.3rem",
                padding: "0.2rem 0rem 0rem  0rem",
                width: "max-content",
                fontFamily: "Poppins",
                fontSize: "clamp(0.9rem, 1rem, 1.1rem)",
                transition:
                  "background-color 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
                borderRadius: "0.3rem ",
                background:
                  activeTab === link.path
                    ? "linear-gradient(75deg, #b4c4ff, #f8645f)"
                    : "white",
                boxShadow: "2px 2px 20px #dedede, -2px -2px 20px #dedede",
                "&:hover": {},
                "& .MuiBottomNavigationAction-label": {
                  fontWeight: activeTab === link.path ? "bold" : "normal",
                  fontFamily: "Poppins",
                  color: "white",
                },
              }}
            />
          ))}
        </BottomNavigation> */}
        <BottomNav />
      </div>
    </div>
  );
};

export default ProfilePage;
