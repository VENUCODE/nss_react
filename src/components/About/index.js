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
                src="http://www.rguktong.ac.in/images/vc%20vijay%20kumar.jpg"
                alt="vice-chancellor rgukt ongole"
                name="Prof. M. Vijaya Kumar"
                desig="vice-chancellor(i/c)"
                style={{ objectPosition: "10% -10%" }}
              />
            </div>
            <div className="col-md-6 text-blue text-justify mt-sm-5">
              <strong>Prof. M. Vijaya Kumar</strong>, currently the Rector of
              Jawaharlal Nehru Technological University Anantapur (JNTUA),
              assumed the role of Vice-Chancellor In-Charge of Rajiv Gandhi
              University of Knowledge Technologies, A.P., in January 2023. With
              over three decades of distinguished experience in academia, Prof.
              Kumar has been instrumental in JNTUA's development, serving as its
              inaugural Registrar and holding multiple leadership roles,
              including Director of Academic and Planning. He holds a B.Tech. in
              Electrical & Electronics Engineering, an M.Tech. from NIT
              Warangal, and a Ph.D. from JNTU Hyderabad. An authority in
              Industrial Drives, Power Electronics, and Renewable Energy, Prof.
              Kumar has supervised 39 Ph.D. scholars, authored over 130 research
              publications, and led significant projects funded by AICTE and
              UGC. His contributions have earned him several honors, including
              the Best Teacher Award from the Government of Andhra Pradesh in
              2015. He has also represented JNTUA in international engagements,
              advanced academic collaborations, and served as Convener of
              APEAPCET 2022, showcasing his dedication to academic excellence
              and institutional development.
            </div>
          </Col>
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
