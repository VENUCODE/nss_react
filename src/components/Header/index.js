import React, { useEffect, useState } from "react";
import { Navbar, Container, Offcanvas, Tab, Tabs } from "react-bootstrap";
import { FaBars, FaSignInAlt } from "react-icons/fa";
import { rgukt } from "../../assets/home";
import { useLocation, useNavigate } from "react-router-dom";
import useUser from "../../contexts/userContext";
import UserAvatar from "../Avatar";
import Login from "../Login";
import Modal from "../Modal";
import "./header.css";
import { message } from "antd";
import { hosturl } from "../../api";

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const { isAuthenticated, logout, userData } = useUser();

  const onClose = () => {
    setOpen(false);
  };

  const handleTabSelect = (key) => {
    setShow(false);
    if (key === "login") {
      setOpen(!isAuthenticated);
    } else if (key === "logout") {
      logout();
      setOpen(false);
      message.warning("Logged out ", 1);
    } else {
      setActiveTab(key);
      navigate(`/${key === "home" ? "" : key}`);
    }
  };
  useEffect(() => {
    const path = location.pathname.slice(1);
    setActiveTab(path || "home");
  }, [location.pathname]);

  return (
    <>
      <Navbar bg="light" expand="md">
        <Container
          fluid
          className="d-flex justify-content-between align-items-center flex-row"
        >
          <Navbar.Brand href="#" className="me-auto d-flex align-items-center">
            <img
              src={rgukt}
              className="nav-brand ms-3"
              alt="rgukt-logo"
              style={{ aspectRatio: "8/10", height: "45px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              padding: "0.5rem 0.5rem",
            }}
            aria-controls="offcanvasNavbar"
            onClick={() => setShow(!show)}
          >
            <FaBars style={{ color: "var(--blue)", fontSize: "1.5rem" }} />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={() => setShow(false)}
          >
            <Offcanvas.Header className="bg-blue text-light">
              <Offcanvas.Title id="offcanvasNavbarLabel">
                {isAuthenticated && (
                  <UserAvatar
                    picture={hosturl + userData?.profile_photo}
                    showname={true}
                    name={userData?.user_name}
                  />
                )}
                {!isAuthenticated && "Explore"}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Tabs
                activeKey={activeTab}
                onSelect={handleTabSelect}
                id="nav-tab"
                className="ms-auto ff-p gap-2"
              >
                <Tab eventKey="home" title="Home" />
                <Tab eventKey="gallery" title="Gallery" />
                <Tab eventKey="events" title="Events" />
                <Tab eventKey="members" title="Members" />
                <Tab eventKey="contact" title="Contact" />
                {!isAuthenticated && (
                  <Tab
                    eventKey="login"
                    title={
                      <>
                        <FaSignInAlt />
                        <span className="ms-2">Login</span>
                      </>
                    }
                  />
                )}
                {isAuthenticated && (
                  <Tab eventKey="logout" className="text-blue" title="Logout" />
                )}
              </Tabs>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="pe-2">
            {isAuthenticated && (
              <UserAvatar
                picture={hosturl + userData?.profile_photo}
                name={userData?.user_name}
              />
            )}
          </div>
        </Container>
      </Navbar>
      <Modal open={!isAuthenticated && open} onClose={onClose}>
        <div>
          <Login />
        </div>
      </Modal>
    </>
  );
};

export default Header;
