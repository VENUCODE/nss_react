import React, { useEffect } from "react";

import { Carousel, Container, Row, Col, Image } from "react-bootstrap";

import { nss } from "../../assets/home";
import "./carousel.css";
import useUser from "../../contexts/userContext";

import { hosturl } from "../../api";

const Hero = () => {
  const { BannerImages } = useUser();

  return (
    <div className="section position-relative contianer-fluid position-relative hero">
      {" "}
      <Carousel
        fade
        indicators={false}
        interval={2000}
        controls={false}
        pause={false}
        className="position-relative hero"
        style={{
          height: "100% !important",
        }}
      >
        {" "}
        {BannerImages?.map((image, index) => (
          <Carousel.Item key={index} className="h-100">
            {" "}
            <Image
              className="img-fluid hero w-100 object-fit-cover"
              src={hosturl + image.photo_url}
              alt={`Banner image ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>{" "}
      <div className="position-absolute top-0 start-0 w-100  z-1 h-100 overlay-container">
        {" "}
        <Container fluid className=" h-100 btm-shadow ">
          {" "}
          <Row className="h-100">
            {" "}
            <Col
              xl={6}
              lg={12}
              md={12}
              sm={12}
              className=" rgrad  d-flex justify-content-center align-items-center flex-column"
            >
              {" "}
              <Image
                src={nss}
                alt="nss-logo"
                style={{
                  height: "130px",
                  background: "radial-gradient(white 35%,transparent 59%)",
                }}
                className="img-fluid "
              />{" "}
              <h1
                className="text-light ff-m  bg-black bg-opacity-25 px-1  mt-1"
                style={{
                  fontSize: `$ {
          window.innerWidth > 768 ? "2rem" : "1.5rem"
        }

        `,
                }}
              >
                {" "}
                NATIONAL SERVICE SCHEME{" "}
              </h1>{" "}
              <h5
                className="bg-blue-light ff-m  px-2 text-light "
                style={{
                  fontSize: `$ {
          window.innerWidth > 768 ? "1.2rem" : "0.9rem"
        }

        `,
                }}
              >
                {" "}
                Not Me But You{" "}
              </h5>{" "}
              <p
                className="text-light ff-m bg-red bg-opacity-25 px-1"
                style={{
                  fontSize: `$ {
          window.innerWidth > 768 ? "1rem" : "0.8rem"
        }

        `,
                }}
              >
                {" "}
                Empowering Youth, Transforming Nation{" "}
              </p>{" "}
            </Col>{" "}
          </Row>{" "}
        </Container>{" "}
      </div>{" "}
    </div>
  );
};

export default Hero;
