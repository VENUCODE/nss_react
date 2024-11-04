import React from "react";
import AddUser from "./AddUser";
import { pageVariant } from "../../../animationVariants";
import { motion } from "framer-motion";
import { Divider } from "antd";
const MemberManage = () => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariant}
      className="dvh100 container-fluid"
    >
      <Divider>Add a new Member</Divider>
      <AddUser />
    </motion.div>
  );
};

export default MemberManage;
