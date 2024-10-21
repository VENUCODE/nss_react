import React, { useState } from "react";
import { Navbar, Container, Offcanvas, Tab, Tabs } from "react-bootstrap";
import "./header.css";
import { FaBars } from "react-icons/fa";
import { rgukt, nss } from "../../assets/home";
const Header = () => {
  const [activeTab, setActiveTab] = useState("home");

  const [show, setShow] = useState(false);
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
          <img
            src={nss}
            className="nav-brand ms-3"
            alt="rgukt-logo"
            style={{ height: "45px" }}
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
              onSelect={(k) => {
                setShow(false);
                setActiveTab(k);
              }}
              id="nav-tab"
              className="ms-auto ff-p "
            >
              <Tab eventKey="home" title="Home" href="#home" />
              <Tab eventKey="gallery" title="Gallery" href="#gallery" />
              <Tab eventKey="events" title="Events" href="#events" />
              <Tab eventKey="members" title="Members" href="#members" />
              <Tab eventKey="contact" title="Contact" href="#contact" />
              <Tab eventKey="login" title="Login" href="#login" />
            </Tabs>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
