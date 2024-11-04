import React from "react";
import Hero from "../../components/Carousel";
import About from "../../components/About";
import Quote from "../../components/Quote";
import Tablist from "../../components/Tablist";
import { motion } from "framer-motion";
import { pageVariant } from "../../animationVariants";
import Members from "./Members";

const HomePage = () => {
  return (
    <motion.div
      className="dvh100 overflow-x-hidden"
      initial="initial"
      animate="enter"
      variants={pageVariant}
    >
      <div className="container-fluid mx-0 px-0">
        <Hero />
      </div>
      <div className="container-fluid mx-0 px-0">
        <About />
      </div>
      <div className="container-fluid mx-0 px-0">
        <Quote />
      </div>
      <div className="container-fluid">
        <Tablist />
      </div>
      <div className="container-fluid">
        <Members />
      </div>
    </motion.div>
  );
};

export default HomePage;
