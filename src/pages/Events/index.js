import React from "react";
import { pageVariant } from "../../animationVariants";
import { motion } from "framer-motion";
const EventsPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariant}
      className="dvh100"
    >
      EventsPage
    </motion.div>
  );
};

export default EventsPage;
