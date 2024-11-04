import React from "react";
import { motion } from "framer-motion";
import { pageVariant } from "../../animationVariants";
const MembersPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariant}
      className="dvh100"
    >
      members display page
    </motion.div>
  );
};

export default MembersPage;
