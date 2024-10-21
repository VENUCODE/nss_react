import React from "react";
import "./quote.css";
const Card = ({ quote, author }) => {
  return (
    <div class=" col-6">
      <blockquote class="responsive-quote">
        <p className="ff-p">{quote}</p> <cite>&mdash; {author}</cite>
      </blockquote>
    </div>
  );
};

export default Card;
