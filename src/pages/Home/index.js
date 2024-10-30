import React from "react";
import Hero from "../../components/Carousel";
import About from "../../components/About";
import Quote from "../../components/Quote";
import Tablist from "../../components/Tablist";
import ContactUs from "../../components/ContactUs";

const HomePage = () => {
  return (
    <div className="dvh100">
      <Hero />
      <About />
      <Quote />
      <Tablist />
    </div>
  );
};

export default HomePage;
