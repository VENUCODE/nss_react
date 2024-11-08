import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./about.css";
import { nss_logo } from "../../assets/home";
import { motion } from "framer-motion";
import { scrollVariant } from "../../animationVariants";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      className="py-5 container-fluid ff-p position-relative "
      whileInView="visible"
      variants={scrollVariant}
    >
      <Container fluid className=" border-0 mt-5">
        <Row className="justify-content-center align-items-center card-body">
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center mb-3 mb-md-0"
          >
            <Image
              src={nss_logo}
              className="img-fluid w-100"
              alt="logo of nss"
            />
          </Col>
          <Col xs={12} md={6} className="text-center text-md-start px-3">
            <h2 className="text-blue  text-start">About NSS</h2>
            <p className="text-blue-light " style={{ textAlign: "justify" }}>
              The National Service Scheme (NSS) is a Central Sector Scheme of
              Government of India, Ministry of Youth Affairs & Sports, that
              empowers young minds to become active participants in the nation's
              development. By providing a platform for students to engage in
              community service, NSS fosters a sense of social responsibility,
              leadership, and civic engagement. Through its various programmes
              and activities, NSS inspires young individuals to become
              change-makers, promoting a culture of volunteerism, empathy, and
              compassion. By joining NSS, students can gain valuable life
              skills, build their confidence, and make a positive impact on
              their communities, ultimately shaping a brighter future for
              themselves and the nation.
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default About;
