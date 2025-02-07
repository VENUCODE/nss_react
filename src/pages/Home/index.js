import React from "react";
import Hero from "../../components/Carousel";
import About from "../../components/About";
import Quote from "../../components/Quote";

import { motion } from "framer-motion";
import { pageVariant } from "../../animationVariants";

import Sparkle from "react-sparkle";

import Tablist from "../../components/Tablist";
import "./home.css";
import { MemberProvider } from "../../contexts/useMembers";
import HomeMembers from "./HomeMembers";
import { Col, Image, Row } from "react-bootstrap";
import { nss_logo } from "../../assets/home";
const HomePage = () => {
  return (
    <motion.div
      className="dvh100 overflow-x-hidden"
      initial="initial"
      animate="enter"
      variants={pageVariant}
    >
      <div className="container-fluid mx-0 px-0 section">
        <Hero />
      </div>
      <div className="container-fluid mx-0 px-0  top-divider fish-bg section ">
        <About />
        <div className="bottom-divider w-100 m-0 p-0 "></div>
      </div>
      <div className="container-fluid mx-0 px-0 member-bg position-relative section">
        <Row className="justify-content-center align-items-center member-bg position-relative">
          <div className="top-divider-2 w-100 h-100 position-absolute"></div>
          <Col xs={12} className="my-5 mb-5"></Col>
          <h2 className="text-blue  heading ff-p">
            <span>ABOUT NSS</span>
          </h2>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-start mb-3 mb-md-0 mt-5  "
          >
            <Image
              src={nss_logo}
              className="img-fluid w-100 ms-md-3"
              alt="logo of nss"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            className="text-center text-md-start px-3 mt-5 bg-blur ff-p"
          >
            <p
              className="text-blue-pale  px-2"
              style={{ textAlign: "justify" }}
            >
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
            <a
              href="https://nss.gov.in"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-outline-primary rounded-0"
            >
              Know more
            </a>
          </Col>
        </Row>
        <Quote />
      </div>
      <div className="container-fluid m-0 px-0 position-relative">
        <Sparkle color="random" maxSize={20} minSize={10} fadeOutSpeed={20} />
        <Tablist />
      </div>
      <div className="container-fluid m-0 position-relative member-bg  dvh100 py-5">
        <div className="text-light fs-3 ff-p fw-bold text-center text-uppercase">
          <h2 className="heading m-0">
            {" "}
            <p className="d-inline fs-2">💪</p>
            <span className="m-0">NSS PROGRAMME OFFICERS</span>
          </h2>
        </div>
        <div className="py-5 position-relative ">
          <Sparkle color="random" maxSize={20} minSize={10} fadeOutSpeed={20} />
          <MemberProvider>
            <HomeMembers />
          </MemberProvider>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
