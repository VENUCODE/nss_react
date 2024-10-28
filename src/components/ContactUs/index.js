import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@mui/material";
import { Layout, Card } from "antd";

const ContactUs = () => {
  return (
    <div className="dvh100 bg-secondary-subtle d-flex justify-content-center align-items-center ">
      <Card title="Contact Us" className="">
        <Typography variant="body1">
          To get in touch with us, please write to{" "}
          <a href="mailto:contact@example.com">contact@example.com</a>
        </Typography>
      </Card>
    </div>
  );
};

export default ContactUs;
