import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./profile.css";
import {
  BottomNavigation,
  BottomNavigationAction,
  List,
  ListItem,
} from "@mui/material";
import {
  FaCalendar,
  FaImage,
  FaUser,
  FaUsers,
  FaLayerGroup,
} from "react-icons/fa";

const links = [
  { path: "/user-profile", label: "Profile", icon: <FaUser /> },
  { path: "/user-profile/add-event", label: "Events", icon: <FaCalendar /> },
  {
    path: "/user-profile/add-banner-images",
    label: "Banner",
    icon: <FaImage />,
  },
  { path: "/user-profile/add-members", label: "Members", icon: <FaUsers /> },
  {
    path: "/user-profile/add-units",
    label: "Units",
    icon: <FaLayerGroup />,
  },
];

const ProfilePage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  return (
    <div className="container-fluid dvh100  d-flex flex-column flex-md-row p-0">
      {/* Sidebar for larger screens */}
      <div className="col-md-3 d-none d-md-block h-100">
        <List component="nav" className="list-group  gap-2 m-3">
          {links.map((link) => (
            <ListItem
              key={link.path}
              className={`list-group-item rounded-3  c-pointer  ${
                location.pathname === link.path
                  ? " inner-box-shadow-danger"
                  : ""
              }`}
            >
              <Link
                to={link.path}
                className={`d-flex align-items-center text-decoration-none w-100  ff-p  py-2 ${
                  location.pathname === link.path
                    ? "fw-medium text-red-pale fw-semibold   "
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
      <div className="col-md-9 p-4">
        <div className="bg-white p-4 rounded-3 shadow-sm h-100 oveflow-scroll-1">
          <Outlet />
        </div>
      </div>

      {/* Sticky Bottom Navigation for smaller screens */}
      <BottomNavigation
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#ffffff",
          boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)",
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
              color: activeTab === link.path ? "#d62828" : "#0077b6",
              "& .Mui-selected": { color: "#d62828" },
            }}
          />
        ))}
      </BottomNavigation>
    </div>
  );
};

export default ProfilePage;
