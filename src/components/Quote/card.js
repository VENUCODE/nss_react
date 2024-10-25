import React from "react";
import "./quote.css";
const Card = ({ quote, author }) => {
  return (
    <div className=" col-6">
      <blockquote className="responsive-quote">
        <p className="ff-p">{quote}</p> <cite>&mdash; {author}</cite>
      </blockquote>
    </div>
  );
};

export default Card;
