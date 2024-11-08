import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ pic, heading, date }) => {
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 col-12 mt-2">
      <div className="card  border-0">
        <div className="position-relative p-0 m-0">
          <motion.img
            src={pic}
            initial={{ filter: "sepia(0) contrast(1.2) brightness(0.6)" }}
            whileHover={{
              filter: "sepia(0) contrast(1.2) brightness(1)",
            }}
            className="card-img-top  card-divider"
            alt={heading}
          />
        </div>
        <div className="card-body ">
          <h5 className="card-title">{heading}</h5>
          <p className="card-text">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
