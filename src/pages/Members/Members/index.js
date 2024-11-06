import React from "react";
import MemberCard from "./memberCard";
import { motion } from "framer-motion";
import "./members.css";
import { containerVariant } from "../../../animationVariants";
const Members = () => {
  return (
    <div className="container-fluid dvh100 overflow-x-hidden">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%", transition: { delay: 0.2, duration: 0.4 } }}
        className="position-relative p-2 overflow-hidden"
      >
        <span className="bg-blue-pale text-blue ff-p fs-4 fw-bold px-3 py-2 rounded-3">
          Members of NSS
        </span>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariant}
        className=" gap-3 d-flex flex-row flex-wrap"
      >
        {[1, 2, 3, 4].map((i) => {
          return <MemberCard key={i} />;
        })}
      </motion.div>
    </div>
  );
};

export default Members;
