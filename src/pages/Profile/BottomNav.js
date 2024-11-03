import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import "./bottomNav.css";
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
  { path: "/user-profile/add-units", label: "Units", icon: <FaLayerGroup /> },
];

const BottomNav = () => {
  const location = useLocation();
  const activeTab = location.pathname;

  return (
    <Container fluid className="p-0">
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#ffffff",
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",

          zIndex: 10,
        }}
      >
        <ButtonGroup className="w-100 d-flex justify-content-around rounded-0">
          {links.map((link) => (
            <Button
              className={
                "bottom-nav " + activeTab === link.path ? "" : "bottom-nav-btn"
              }
              key={link.path}
              as={Link}
              to={link.path}
              variant={activeTab === link.path ? "primary" : "light"}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "none",
                borderRadius: "0",
                backgroundColor:
                  activeTab === link.path ? "#ad0000" : "transparent",
                color: activeTab === link.path ? "#fff" : "#495057",
              }}
            >
              {link.icon}
              <span style={{ fontSize: "0.75rem" }} className="ff-p">
                {link.label}
              </span>
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </Container>
  );
};

export default BottomNav;
