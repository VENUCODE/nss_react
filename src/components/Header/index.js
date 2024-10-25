import React, { useState } from "react";
import { Navbar, Container, Offcanvas, Tab, Tabs } from "react-bootstrap";

import "./header.css";
import { FaBars } from "react-icons/fa";
import { rgukt } from "../../assets/home";
import { LuLogIn } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleTabSelect = (key) => {
    setActiveTab(key);
    setShow(false);
    navigate(`/${key === "home" ? "" : key}`);
  };
  return (
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
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Explore</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Tabs
              activeKey={activeTab}
              onSelect={handleTabSelect}
              id="nav-tab"
              className="ms-auto ff-p"
            >
              <Tab eventKey="home" title="Home" />
              <Tab eventKey="gallery" title="Gallery" />
              <Tab eventKey="events" title="Events" />
              <Tab eventKey="members" title="Members" />
              <Tab eventKey="contact" title="Contact" />
            </Tabs>
            <div className=" d-flex align-items-center  justify-content-md-center justify-content-start px-1 d-flex flex-row">
              <span className="d-block d-md-none ff-p  px-2 py-2 text-start flex-1  ps-2 nav-link">
                Login
              </span>
              <LuLogIn
                size={25}
                color="var(--blue)"
                className="c-pointer flex-1 "
                onClick={() => navigate("/login")}
              />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
