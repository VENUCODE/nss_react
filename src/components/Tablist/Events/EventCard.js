import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ pic, heading, date }) => {
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 col-12 mt-2">
      <div className="card ">
        <motion.img
          src={pic}
          initial={{ filter: "sepia(0) contrast(1.2) brightness(0.6)" }}
          whileHover={{
            filter: "sepia(0) contrast(1.2) brightness(1)",
          }}
          className="card-img-top "
          alt={heading}
        />
        <div className="card-body ">
          <h5 className="card-title">{heading}</h5>
          <p className="card-text">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
