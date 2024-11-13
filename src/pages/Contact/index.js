import React from "react";

import ContactUs from "../../components/ContactUs";
import { motion } from "framer-motion";
import { pageVariant } from "../../animationVariants";
const ContactUsPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariant}
      className="dvh100 member-bg"
    >
      <ContactUs />
    </motion.div>
  );
};

export default ContactUsPage;
