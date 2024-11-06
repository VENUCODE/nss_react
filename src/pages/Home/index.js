import React from "react";
import Hero from "../../components/Carousel";
import About from "../../components/About";
import Quote from "../../components/Quote";

import { motion } from "framer-motion";
import { pageVariant } from "../../animationVariants";

import Marquee from "react-fast-marquee";
import Sparkle from "react-sparkle";

import MemberCardHome from "./membercard";
import Wave from "../../components/Wave";
import Tablist from "../../components/Tablist";

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
      <div className="container-fluid mx-0 px-0">
        <Tablist />
      </div>
      <div className="container-fluid py-5 position-relative bg-blue">
        <div className="text-light fs-3 ff-p fw-bold text-center text-uppercase">
          <Wave text="NSS members" />
        </div>
        <div className="py-5 position-relative">
          <Sparkle color="random" />
          <Marquee loop={0} autoFill play direction="right">
            {[1, 2, 3, 4, 5].map((item, ind) => {
              return <MemberCardHome key={ind} />;
            })}
          </Marquee>
        </div>
      </div>
      <div className="container-fluid">{/* <Members /> */}</div>
    </motion.div>
  );
};

export default HomePage;
