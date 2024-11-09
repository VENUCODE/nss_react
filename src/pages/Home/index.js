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
import "./home.css";
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
      <div className="container-fluid mx-0 px-0  top-divider fish-bg ">
        {/* <div className="top-divider"></div> */}
        <About />
        <div className="bottom-divider w-100 m-0 p-0 "></div>
      </div>
      <div className="container-fluid mx-0 px-0 member-bg position-relative">
        <div className="top-divider-2 w-100 h-100 position-absolute"></div>
        <Quote />
      </div>
      <div className="container-fluid m-0 px-0 position-relative">
        <Sparkle color="random" maxSize={20} minSize={10} fadeOutSpeed={20} />
        <Tablist />
      </div>
      <div className="container-fluid m-0 position-relative member-bg  dvh100 py-5">
        <div className="text-light fs-3 ff-p fw-bold text-center text-uppercase">
          <h2 className="heading m-0">
            {" "}
            <p className="d-inline fs-2">💪</p>
            <span className="m-0">NSS members</span>
          </h2>
        </div>
        <div className="py-5 position-relative ">
          <Sparkle color="random" maxSize={20} minSize={10} fadeOutSpeed={20} />
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
