import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="sticky-bottom bottom-0 position-relative bg-blue text-blue-pale">
      <Container>
        <Row>
          <Col
            xs={12}
            md={12}
            sm={12}
            lg={12}
            xl={12}
            xxl={12}
            className="d-flex justify-content-center align-items-center flex-row gap-3 ff-p py-4"
          >
            <h5 className="mb-3">RGUKTNSS</h5>
            <p className="h-100 d-flex justify-content-center aligh-items-center pt-3  text-center">
              {" "}
              &copy; 2023 RGUKTNSS. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
