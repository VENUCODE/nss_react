import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  FaHome,
  FaUserPlus,
  FaImage,
  FaLock,
  FaUserEdit,
  FaCalendar,
  FaUsers,
  FaBuilding,
  FaUser,
} from "react-icons/fa";
import { styled } from "@mui/system";

const ProfilePage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const links = [
    {
      path: "/user-profile/add-event",
      label: "Events",
      icon: <FaCalendar />,
    },
    {
      path: "/user-profile/add-banner-images",
      label: "Banner",
      icon: <FaImage />,
    },
    { path: "/user-profile", label: "Profile", icon: <FaUser /> },
    {
      path: "/user-profile/add-members",
      label: "Members",
      icon: <FaUsers />,
    },
    {
      path: "/user-profile/add-units",
      label: "Units",
      icon: <FaBuilding />,
    },
  ];

  const StyledListItemButton = styled(ListItemButton)(({ active }) => ({
    color: active ? "#d62828" : "#0077b6",
    fontWeight: active ? "bold" : "normal",
    transition: "color 0.3s ease",
    padding: "10px 20px",
    borderRadius: "8px",
    "&:hover": {
      color: active ? "#d62828" : "#023e8a",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  }));

  return (
    <div className="container-fluid vh-100 d-flex flex-column flex-md-row p-0">
      {/* Sidebar for larger screens */}
      <div
        className="col-md-3 d-none d-md-block p-3"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRight: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          height: "100vh",
        }}
      >
        <h4
          className="text-center text-uppercase mb-4"
          style={{ color: "#0077b6" }}
        >
          Profile Navigation
        </h4>
        <List component="nav">
          {links.map((link) => (
            <ListItem key={link.path} disablePadding>
              <StyledListItemButton
                component={Link}
                to={link.path}
                active={location.pathname === link.path ? 1 : 0}
              >
                <ListItemText primary={link.label} />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
      </div>

      {/* Main content area */}
      <div className="col-md-9 p-4">
        <div
          style={{
            background: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(5px)",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            height: "100%",
            color: "#023047",
          }}
        >
          <Outlet />
        </div>
      </div>

      {/* Sticky Bottom Navigation for smaller screens */}
      <BottomNavigation
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          bottom: -10,
          zIndex: "10000",
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
              zIndex: "10000",
            }}
          />
        ))}
      </BottomNavigation>
    </div>
  );
};

export default ProfilePage;
