import React, { useState } from "react";
import { Navbar, Container, Offcanvas, Tab, Tabs } from "react-bootstrap";
import "./header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");

  const [show, setShow] = useState();
  return (
    <Navbar bg="light" expand="md">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center flex-row"
      >
        <Navbar.Brand href="#" className="me-auto">
          Brand Icon
        </Navbar.Brand>
        <Navbar.Toggle
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            padding: "0.5rem 0.5rem",
          }}
          aria-controls="offcanvasNavbar"
        />
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
                setActiveTab(k);
                setShow(false);
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
