import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import Sparkle from "react-sparkle";
const EventCard = ({
  pic = "some pic",
  heading = "Event heading",
  date = "12/12/32",
  link = "/events",
  event_id = null,
}) => {
  useEffect(() => {
    console.log(pic);
  }, []);
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 col-12 mt-2 overflow-hidden ">
      <div className="card  border-0 oveflow-hidden">
        <div className="position-relative p-0 m-0 overflow-hidden">
          <div
            className="card-divider position-absolute top-0 w-100 "
            style={{
              backgroundPosition: "top",
              zIndex: 1,
              height: "20%",
            }}
          >
            {" "}
            <Sparkle color="random" />
          </div>
          <motion.img
            src={pic}
            initial={{ filter: "sepia(0) contrast(1.2) brightness(0.6)" }}
            whileHover={{
              filter: "sepia(0) contrast(1.2) brightness(1)",
            }}
            onError={(e) => {
              e.target.src = "https://picsum.photos/seed/picsum/200/300";
            }}
            height={"150px"}
            className="card-img-top object-fit-cover "
            alt={heading}
          />
        </div>
        <div className="card-body position-relative ">
          <p className="card-title ff-p grad-link m-0 p-0 fw-semibold text-start text-capitalize ">
            <Link className="text-ellipis" to={link}>
              <FaExternalLinkAlt className="text-danger me-2" size={15} />
              {heading}{" "}
            </Link>
          </p>
          <p className=" card-text ff-p text-blue-light fw-semibold">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
