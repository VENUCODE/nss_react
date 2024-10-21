import React, { useState } from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import { p1, p2, p3, nss } from "../../assets/home";
import "./carousel.css";
const imgdata = [
  {
    src: p1,
    alt: "First slide",
  },
  {
    src: p2,
    alt: "Second slide",
  },
  {
    src: p3,
    alt: "Third slide",
  },
];
const Hero = () => {
  const [images, setImages] = useState(imgdata);

  return (
    <div className="contianer-fluid position-relative hero">
      <Carousel
        fade
        indicators={false}
        interval={1500}
        controls={false}
        pause={false}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <Image
              className="d-block h-100 img-fluid"
              src={image.src}
              alt={image.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="position-absolute top-0 start-0 w-100  z-1 h-100 overlay-container">
        <Container fluid className=" h-100 ">
          <Row>
            <Col
              lg={6}
              md={6}
              sm={12}
              className=" bg-white bg-opacity-50 d-flex justify-content-center align-items-center flex-column"
            >
              <Image src={nss} alt="nss-logo" style={{ height: "130px" }} />
              <h1>Heading</h1>
              <h5>Subheading</h5>
              <p>Caption</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
