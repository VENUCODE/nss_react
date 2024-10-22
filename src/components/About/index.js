import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./about.css";
import { nss_logo } from "../../assets/home";
const About = () => {
  return (
    <Container
      fluid
      className="py-5 ff-m dvh100"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <Row className="justify-content-center align-items-center h-100">
        <Col
          xs={12}
          md={6}
          className=" d-flex align-items-center text-center h-100 justify-content-center"
        >
          <Image src={nss_logo} className="img-fluid w-100 " />{" "}
        </Col>
        <Col
          xs={12}
          md={6}
          className="text-center text-md-start justify-content-"
        >
          <h2 className="ff-p text-dark">About NSS</h2>
          <p className="text-secondary text-justify px-2">
            The National Service Scheme (NSS) is a Central Sector Scheme of
            Government of India, Ministry of Youth Affairs & Sports, that
            empowers young minds to become active participants in the nation's
            development. By providing a platform for students to engage in
            community service, NSS fosters a sense of social responsibility,
            leadership, and civic engagement. Through its various programmes and
            activities, NSS inspires young individuals to become change-makers,
            promoting a culture of volunteerism, empathy, and compassion. By
            joining NSS, students can gain valuable life skills, build their
            confidence, and make a positive impact on their communities,
            ultimately shaping a brighter future for themselves and the nation.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
