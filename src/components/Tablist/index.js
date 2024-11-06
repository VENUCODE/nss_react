import React from "react";
import "./index.css";
import Gallery from "./Gallery";
import Events from "./Events";

const Tablist = () => {
  return (
    <div className="dvh100 mt-4">
      <h2>Captured Moments</h2>
      <Gallery />
      <h2>Moments that Matter</h2>
      <Events />
    </div>
  );
};

export default Tablist;
