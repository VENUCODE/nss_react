import React, { useState } from "react";
import Card from "./card";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
const quotes = [
  {
    quote:
      "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke",
  },
  {
    quote:
      "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it.",
    author: "Albert Einstein",
  },
  {
    quote: "Nationalism is an infantile disease. It is the measles of mankind.",
    author: "Albert Einstein",
  },
  {
    quote: "The nation which forgets its defenders will be itself forgotten.",
    author: "Calvin Coolidge",
  },
];
const Quote = () => {
  const [data, setData] = useState(quotes);
  return (
    <Container
      fluid
      className="dvh100 justify-content-center align-items-center d-flex flex-column"
    >
      <div className="col-md-6 text-center col-12 text-center text-md-start text-uppercase fw-bold fs-4 mb-4 ff-p text-blue-light">
        <h3 className="fw-bold text-center">Glane of NSS@RGUKT ONG</h3>
      </div>

      <Marquee pauseOnClick loop={0} autoFill play>
        {data.map((i, ind) => (
          <Card key={ind} quote={i.quote} author={i.author} />
        ))}
      </Marquee>
    </Container>
  );
};

export default Quote;
