import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./about.css";
import { nss_logo } from "../../assets/home";
import { motion } from "framer-motion";
import { scrollVariant } from "../../animationVariants";
import { Avatar } from "@mui/material";
import AuthMember from "../AuthMember";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      className="py-5 container-fluid ff-p position-relative"
      whileInView="visible"
      variants={scrollVariant}
    >
      <Container fluid className=" border-0 mt-5">
        <Row className="justify-content-center align-items-center card-body mb-5">
          <Col xs={12} className="row mt-5">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <AuthMember
                src="http://nexus.rguktong.ac.in/Nexus/svgs/Dr.%20BHASKAR%20PATEL.jpg"
                alt="director rgukt ongole "
                name=" Dr. Bhaskar Patel"
                desig="Director Rgukt ongole (i/c)"
              />
            </div>
            <div className="col-md-6 text-blue text-justify mt-sm-5">
              <strong>Dr. Bhaskar Patel</strong>, an accomplished academic with
              over 35 years of experience, holds a B.Tech in Mechanical
              Engineering, an M.Tech from IISc Bangalore, and a Ph.D. from the
              UK. He has served as Principal and Director for over 15 years,
              including a tenure as a Visiting Research Fellow at the University
              of the West of England, Bristol. Dr. Patel's expertise includes
              Industrial and Production Engineering, Operations Research, and
              Supply Chain Management. Renowned for his leadership in academic
              administration, he is well-versed in AICTE, NBA, and UGC
              regulations, with consulting experience in textiles, the auto
              industry, and academia. His achievements include founding a
              private Architecture College, conducting impactful workshops,
              securing NAAC and NIRF rankings, and obtaining research grants,
              underscoring his commitment to educational excellence.
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default About;
