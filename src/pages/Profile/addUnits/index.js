import React from "react";
import { motion } from "framer-motion";
import { pageVariant } from "../../../animationVariants";
const AddUnits = () => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariant}
      className="dvh100"
    >
      AddUnits
    </motion.div>
  );
};

export default AddUnits;
