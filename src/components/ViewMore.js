import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosMore } from "react-icons/io";
const ViewMore = ({ link }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.8 }}
      exit={{ scale: 1 }}
      className="col-md-4 col-lg-3 col-sm-6 col-12 mt-2 justify-content-center align-items-center d-flex "
    >
      <Link
        to={link}
        style={{ width: "max-content", aspectRatio: 1 }}
        className=" flex-col justify-content-center align-items-center  cursor-pointer bg-transparent card rounded-circle "
      >
        <IoIosMore color="#007bff" size={30} />
        <p className="text-light  ff-p" style={{ textDecoration: "none" }}>
          View more
        </p>
      </Link>
    </motion.div>
  );
};

export default ViewMore;
