import React, { useState } from "react";
import Card from "./card";

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
    <div className="d-flex align-items-center section dvh100">
      <Marquee
        pauseOnClick
        loop={0}
        gradient
        gradientColor="white"
        autoFill
        play
        className="h-90"
      >
        {data.map((i, ind) => (
          <Card key={ind} quote={i.quote} author={i.author} />
        ))}
      </Marquee>
    </div>
  );
};

export default Quote;
